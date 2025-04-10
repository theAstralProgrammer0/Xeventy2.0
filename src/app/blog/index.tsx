"use client";

import { Text, Button, Heading } from "../../components";
import InformationSection from "../../components/InformationSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSubscription from "../../components/NewsletterSubscription";
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

// Helper function: shorten text to a max length and append ellipses if needed.
function shortenText(text: string, limit: number = 200): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "...";
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use a default fallback URL if the env variable is not defined.
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

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
      fetchArticles(`${API_BASE}/blog/articles/`);
    } else {
      console.error("NEXT_PUBLIC_API_BASE_URL is not defined.");
    }
  }, [API_BASE]);

  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <Header />
      <div className="container-xs mt-8 md:px-5">
        <div className="bg-white-a700">
          <div className="flex px-4">
            <Heading
              size="text17xl"
              className="text-4xl font-medium md:text-3xl sm:text-2xl"
            >
              Our Trending Articles
            </Heading>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {articles.length === 0 && !isLoading && (
            <Text>No articles found.</Text>
          )}
          {articles.map((article) => (
            <InformationSection
              key={article.id}
              titleText={article.title}
              descriptionText={shortenText(article.description, 200)}
              imageSrc={article.image_src}
              article_url={article.blog_url}
            />
          ))}
          {nextLink && (
            <Button
              color="white_a700"
              onClick={() => fetchArticles(nextLink)}
              disabled={isLoading}
              className="w-[13rem] ml-4 rounded-md border border-green-500 px-6 py-2 text-lg shadow-md transition-all duration-150 hover:bg-green-50"
            >
              {isLoading ? "Loading..." : "Load more articles"}
            </Button>
          )}
        </div>
      </div>
      <div className="mt-20 w-full">
        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
}

