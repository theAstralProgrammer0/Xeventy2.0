"use client";
import { Text, Button, Heading } from "../../components";
import InformationSection from "../../components/InformationSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  article_url: string;
  image_src: string;
  created_at: string;
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles('/api/blog/articles/');
  }, []);

  const fetchArticles = async (article_url: string) => {
    const response = await fetch(article_url);
    const data = await response.json();
    setArticles((prev) => [...prev, ...data.results]);
    setNextLink(data.links.next);
  };

  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <Header />
      <div className="container-xs mt-[2rem] md:px-5">
        <div>
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
            {articles.map((article) => (
              <Link key={article.id} href={article.article_url}>
                <a>
                  <InformationSection
                    titleText={article.title}
                    descriptionText={article.description}
                    imageSrc={article.image_src}
                  />
                </a>
              </Link>
            ))}
            {nextLink && (
              <Button
                color="white_a700"
                onClick={() => fetchArticles(nextLink)}
              >
                Load more articles
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[76px] self-stretch">
        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
}
                  
