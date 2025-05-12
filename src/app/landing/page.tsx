import React, { Suspense } from "react";
import LandingPage from "./index";
import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "Xeventy2.0 Health Limited - Empowering Providers Globally",
  description: "Discover Xeventy2.0's transformative healthcare solutions integrating technology and data-driven insights for revolutionary patient care. Explore our services, training, and expert insights.",
};

{/* This page component is async so you can fetch data on the server (SSR) */}
export default async function LandingPageWrapper() {
  {/* Read the backend API URL from env vars */}
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  {/* Fetch data from Django API endpoints concurrently */}
  const [newsResponse, videoResponse] = await Promise.all([
    axios.get(`${API_BASE}/news/news-articles/`),
    axios.get(`${API_BASE}/news/video-news/`)
  ]);

  {/* Extract data from responses */}
  const initialNewsArticles = newsResponse.data;
  const initialVideoNews = videoResponse.data;

  {/* Render d landing page UI,passin initial data as props */}
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <LandingPage
        initialNewsArticles={initialNewsArticles}
        initialVideoNews={initialVideoNews}
      />
    </Suspense>
  );
}

