import React from 'react';
import VideoCard from '../../components/VideoCard';
import { Video } from './utils/mockVideos';

interface VideoGalleryProps {
  videos: Video[];
  loading?: boolean;
  noResultMessage?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos, 
  loading = false,
  noResultMessage = "No videos found matching your search.",
}) => {
  if (loading) {
    return <div className="text-center py-10">Loading videos...</div>;
  }

  if (!videos || videos.length === 0) {
    return <div className="text-center py-10 text-gray-600">{noResultMessage}</div>;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-6 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGallery;

