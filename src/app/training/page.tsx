import type { Metadata } from 'next';
import TrainingClientPage from './index'; 
import { Suspense } from "react";
// import { mockVideos, Video } from './utils/mockVideos';

export const metadata: Metadata = {
  title: 'Training & Resources | Xeventy2.0',
  description: 'Explore training videos, saved sessions, and upcoming live events. Search our extensive library.',
};

export default async function TrainingPage() {
  // const videos: Video[] = await fetchVideosFromServer();
  // const videos: Video[] = mockVideos;

  return (
    // Pass the server-loaded/imported videos to the client component
    // <TrainingClientPage initialVideos={videos} />
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <TrainingClientPage />
    </Suspense>
  );
}

