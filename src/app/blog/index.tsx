"use client";

import { Text, Button, Heading } from "../../components";
import InformationSection from "../../components/InformationSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  description: string;
  blog_url: string;
  image_src: string;
  created_at: string;
}

interface PaginatedResponse {
  count: number;
  links: {
    next: string | null;
    previous: string | null;
  };
  results: Article[];
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use a default fallback URL for debugging, if not defined.
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchArticles = async (url: string) => {
    setIsLoading(true);
    try {
      console.log("Fetching URL:", url);
      const response = await axios.get<PaginatedResponse>(url);
      const data = response.data;
      setArticles((prevArticles) => [...prevArticles, ...data.results]);
      setNextLink(data.links.next);
      console.log("Articles fetched:", data.results);
    } catch (error: any) {
      console.error("There was an error fetching articles!", error);
      console.error("Error details:", error.message, error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("BlogPage rendered, API_BASE =", API_BASE);
    if (API_BASE) {
      // Kick off the initial fetch
      fetchArticles(`${API_BASE}/blog/articles/`);
    } else {
      console.error("NEXT_PUBLIC_API_BASE_URL is not defined.");
    }
  }, [API_BASE]);

  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <Header />
      <div className="container-xs mt-[2rem] md:px-5">
        <div className="bg-white-a700">
          <div className="flex px-4">
            <Heading
              size="text17xl"
              className="text-[58px] font-medium md:text-[50px] sm:text-[44px]"
            >
              Our Trending Articles
            </Heading>
          </div>
        </div>
        <div className="flex flex-col">
          {articles.length === 0 && !isLoading && (
            <Text>No articles found.</Text>
          )}
          {articles.map((article) => (
            <Link key={article.id} href={article.blog_url}>
              {/* The Link wrapper should contain an <a> tag in Next.js version 12 and below */}
              <InformationSection
                titleText={article.title}
                descriptionText={article.description}
                imageSrc={article.image_src}
              />
            </Link>
          ))}
          {nextLink && (
            <Button
              color="white_a700"
              onClick={() => fetchArticles(nextLink)}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load more articles"}
            </Button>
          )}

          {/* For debugging: a button that triggers the fetch explicitly */}
          <Button
            color="secondary"
            onClick={() => fetchArticles(`${API_BASE}/blog/articles/`)}
            disabled={isLoading}
          >
            Debug: Reload Articles
          </Button>
        </div>
      </div>
      <div className="mt-[76px] self-stretch">
        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
}

