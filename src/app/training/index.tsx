"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '../../components/SearchBar';
import { Heading } from '../../components';
import VideoGallery from './VideoGallery';

export default function TrainingHome() {
  const router = useRouter();

  const onSearch = (q: string) => {
    router.push(`/training/listings?search=${encodeURIComponent(q)}`);
  };

  return (
    <div className="p-8">
      <Heading className="mb-4">Training & Events</Heading>
      <SearchBar onSearch={onSearch} placeholder="Search videos or live events..." />
      <button onClick={() => router.push('/training/listings')} className="mt-4 btn">
        View Listings
      </button>
      <VideoGallery />
    </div>
  );
}

