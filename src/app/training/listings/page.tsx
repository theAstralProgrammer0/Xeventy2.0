import type { Metadata } from 'next';
import { Suspense } from "react";
import TrainingListingsClientPage from './index';
// import { mockVideos, Video } from '../utils/mockVideos';

export const metadata: Metadata = {
  title: 'Full Video Listings | Training | Xeventy2.0',
  description: 'Browse and search all available training videos, saved sessions, and live event recordings.',
};

export default async function TrainingListingsPage() {
  // const videos: Video[] = await fetchAllVideosFromServer();
  // const videos: Video[] = mockVideos;

  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <TrainingListingsClientPage />
    </Suspense>
  );
}

