"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '../../../components/SearchBar';
// import VideoSections from '../VideoSections';
import { Heading } from '../../../components';
import VideoGallery from '../VideoGallery';

export default function Listings() {
  const searchParams = useSearchParams();
  console.log(`This is the search params::: ${searchParams}`);
  const [videos, setVideos] = useState([]);

  const onSearch = (q: string) => {
    router.push(`/training/listings/?search=${encodeURIComponent(q)}`);
  }

/*
 * useEffect(() => {
 *   async function fetchVideos() {
 *     const res = await fetch(`/api/training/videos/?search=${searchParams}`);
 *     const data = await res.json();
 *     setVideos(data);
 *   }
 *   fetchVideos();
 * }, [searchParams]);
*/
  return (
    <div className="p-8">
      <Heading
        className="mb-4"
      >
        Select a Training
      </Heading>
      {/* <SearchBar onSearch={onSearch} placeholder="Search keywords..." />
      <VideoSections videos={videos} />
      */}
      <VideoGallery videos={videos} />
    </div>
  );
}

