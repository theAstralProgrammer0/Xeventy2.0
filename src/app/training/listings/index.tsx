"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import VideoGallery from '../VideoGallery';
import { mockVideos, Video } from '../utils/mockVideos';
import Header from '@/components/Header';


export default function TrainingListingsClientPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // --- Filtering Logic ---
  const filteredVideos = useMemo(() => {
    if (!searchTerm) {
      return mockVideos;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return mockVideos.filter(video => 
      lowerCaseSearch === 'live' ? video.is_live :
      video.title.toLowerCase().includes(lowerCaseSearch) ||
      video.description.toLowerCase().includes(lowerCaseSearch) ||
      video.category.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]);

  // --- URL Update Logic ---
  const handleSearchChange = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);

    const params = new URLSearchParams(searchParams.toString());
    if (newSearchTerm) {
      params.set('search', newSearchTerm);
    } else {
      params.delete('search');
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [router, pathname, searchParams]);

  // --- Sync URL changes back to state ---
  useEffect(() => {
    const currentSearchQuery = searchParams.get('search') || '';
    if (currentSearchQuery !== searchTerm) {
      setSearchTerm(currentSearchQuery);
    }
  }, [searchParams, searchTerm]);


  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 py-4">
        <h1 className="text-3xl font-bold mb-6 text-center">All Training Videos & Events</h1>
        <SearchBar
          initialValues={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder="Filter listings..."
        />

        <div className="mt-8">
          <VideoGallery videos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}

