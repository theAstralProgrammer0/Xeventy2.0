import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../../components/SearchBar';

export default function TrainingHome() {
  const router = useRouter();

  const onSearch = (q: string) => {
    router.push(`/training/listings?search=${encodeURIComponent(q)}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Training & Events</h1>
      <SearchBar onSearch={onSearch} placeholder="Search videos or live events..." />
      <button onClick={() => router.push('/training/listings')} className="mt-4 btn">
        View Listings
      </button>
    </div>
  );
}

