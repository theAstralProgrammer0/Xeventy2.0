import type { Metadata } from 'next';
import TrainingListingsClientPage from './index'; // Importing the client component
import { mockVideos, Video } from '../utils/mockVideos'; // Adjust path to access mockVideos from parent's utils

export const metadata: Metadata = {
  title: 'Full Video Listings | Training | Xeventy2.0',
  description: 'Browse and search all available training videos, saved sessions, and live event recordings.',
};

export default async function TrainingListingsPage() {
  const videos: Video[] = await fetchAllVideosFromServer();
  // const videos: Video[] = mockVideos;

  return (
    <TrainingListingsClientPage initialVideos={videos} />
  );
}

