"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import VideoGallery from './VideoGallery';
import { mockVideos, Video } from './utils/mockVideos';
import Header from '@/components/Header';

interface TrainingClientPageProps {
  initialVideos: Video[];
}

export default function TrainingClientPage({ initialVideos }: TrainingClientPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchChange = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setHasSearched(newSearchTerm.length > 0);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredVideos([]);
      return;
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    const results = mockVideos.filter(video => 
      video.title.toLowerCase().includes(lowerCaseSearch) ||
      video.description.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredVideos(results);
  }, [searchTerm]);


  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">Training & Resources</h1>
      <p className="text-center text-gray-700 mb-6">
        Find training videos, saved sessions, and upcoming live events. Use the search below or view all listings.
      </p>

      <SearchBar
        onSearchChange={handleSearchChange}
        placeholder="Search training content..."
      />

      <div className="text-center my-6">
        <Link
          href="/training/listings"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-whitefont-semibold py-2 px-6 rounded-lg shadow transition duration-150 ease-in-out"
        >
          View Full Listing
        </Link>
      </div>

      {hasSearched && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Search Results</h2>
            <VideoGallery
              videos={filteredVideos}
              noResultsMessage={`No videos found matching "${searchTerm}". `}
            />
          </div>
      )}

      {/* Other <VideoSections /> */}
    </div>
  );
}
