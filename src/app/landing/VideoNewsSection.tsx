"use client";

import { Text } from "../../components";
import NewsArticle from "../../components/NewsArticle";
import Link from "next/link";
import React, { Suspense } from "react";
import useSWR from "swr";
import axios from "axios";

// Define a fetcher function using axios that returns the promise result.
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Function to extract the YouTube video ID from a given URL.
const extractYouTubeID = (url: string): string => {
  const regExp = /(?:youtube\.com\/.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp); // Use the correct variable name.
  return match ? match[1] : "";
}; // Added missing closing curly brace.

// Type definitions for props passed to the VideoNewsSection component.
interface NewsArticleType {
  id: number;
  title: string;
  author: string;
  timeline: string;
  article_url: string;
}

interface VideoNewsType {
  id: number;
  title: string;
  content_provider: string;
  youtube_url: string;
}

interface VideoNewsSectionProps {
  initialNewsArticles: NewsArticleType[];
  initialVideoNews: VideoNewsType;
}

// The VideoNewsSection component: It uses useSWR to fetch data client-side,
// using the SSR data passed via props as fallback data.
const VideoNewsSection = ({ initialNewsArticles, initialVideoNews }: VideoNewsSectionProps) => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Fetch the latest news articles and video news using SWR for client-side caching.
  // We assign the result to articlesData and videoData, respectively.
  const { data: articlesData } = useSWR(`${API_BASE}/news-articles/`, fetcher, {
    fallbackData: initialNewsArticles,
  });
  const { data: videoData } = useSWR(`${API_BASE}/video-news/`, fetcher, {
    fallbackData: initialVideoNews,
  });

  // If data isn't loaded yet, show a loading message.
  if (!articlesData || !videoData) return <div>Loading...</div>;

  return (
    <>
      {/* Video News Section */}
      <div className="mt-4 flex justify-center">
        <div className="container-xs flex items-start justify-center gap-10 md:flex-col md:px-5">
          {/* Left side: Video embed and details */}
          <div className="flex flex-1 flex-col gap-8 self-center md:self-stretch">
            {/* Embed YouTube video using the dynamic URL */}
            <div className="relative pb-[56.25%]"> {/* Maintains a 16:9 aspect ratio */}
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeID(videoData.youtube_url)}`}
                title={videoData.title}
                className="absolute inset-0 w-full h-full rounded-lg object-cover"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Video news text details */}
            <div className="flex flex-col items-start gap-2.5">
              <Text
                size="text6xl"
                className="flex items-center justify-center rounded bg-black-900_01 px-1 text-[25px] font-normal tracking-[2.75px] md:text-[23px] sm:text-[18px] xs:text-[12px] mobile:text-[12px]"
              >
                news
              </Text>
              <Link
                href={videoData.youtube_url}
                target="_blank"
                rel="noreferrer"
                className="w-full leading-[45px]"
              >
                <Text
                  size="text9xl"
                  className="!font-merriweather text-[33.88px] md:text-[28px] sm:text-[22px] font-normal tracking-[1.02px] !text-gray-900 hover:underline"
                >
                  {videoData.title}
                </Text>
              </Link>
              <Text
                size="textlg"
                className="text-[13.55px] md:text-[12px] sm:text-[11px] xs:text-[10px] font-normal !text-black-900_01"
              >
                By {videoData.content_provider}
              </Text>
            </div>
          </div>
          {/* Right side: News Articles */}
          <div className="flex w-[32%] flex-col items-end gap-2 md:w-full">
            <div className="flex flex-col items-center self-stretch">
              <Text
                size="textlg"
                className="relative w-[90%] py-1 z-[1] flex items-center justify-center rounded-tl-md rounded-tr-md bg-green-a700 text-[16px] font-extrabold !text-black-900_01"
              >
                LATEST NEWS
              </Text>
              <div className="relative mt-[-14px] self-stretch rounded-md border-[0.94px] border-solid border-black-900_3f p-5 shadow-xl">
                <div className="flex flex-col gap-6">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {articlesData.map((article: NewsArticleType, index: number) => (
                      <NewsArticle
                        key={"article" + index}
                        articleTitle={article.title}
                        articleTimeline={article.timeline}
                        articleAuthor={article.author}
                        articleUrl={article.article_url}
                        className="pb-1 border-b border-black"
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <Link href="https://dribbble.com" target="_blank" rel="noreferrer">
              <Text
                size="textlg"
                className="text-[13.55px] font-normal !text-black-900_01 hover:underline"
              >
                Get More News
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoNewsSection;

