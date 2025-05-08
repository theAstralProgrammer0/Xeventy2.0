import type { Metadata } from 'next';
import TrainingClientPage from './index'; 
import { mockVideos, Video } from './utils/mockVideos';

export const metadata: Metadata = {
  title: 'Training & Resources | Xeventy2.0',
  description: 'Explore training videos, saved sessions, and upcoming live events. Search our extensive library.',
};

export default async function TrainingPage() {
  // In a real SSR scenario, you might fetch data here:
  const videos: Video[] = await fetchVideosFromServer();
  // For this example, we use the imported mockVideos directly.
  // const videos: Video[] = mockVideos;

  return (
    // Pass the server-loaded/imported videos to the client component
    <TrainingClientPage initialVideos={videos} />
  );
}

