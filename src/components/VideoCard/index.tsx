import React from 'react';
import Link from 'next/link';
import { Video } from '@/app/training/utils/mockVideos';

interface VideoCardProps {
  video: Video;
}

const getYouTubeThumbnailUrl = (youtubeUrl: string | null): string | null => {
  if (!youtubeUrl) return null;
  let videoId: string | null = null;
  try {
    const url = new URL(youtubeUrl);
    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.slice(1);
    } else if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
      videoId = url.searchParams.get('v');
    }
  } catch (error) {
    console.error('Invalid YouTube URL:', error);
    return null;
  }

  return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
};

const ZoomIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.70833 6.11667C4.70833 5.32083 5.35417 4.66667 6.16667 4.66667H14.8333C15.6458 4.66667 16.2917 5.32083 16.2917 6.11667V8.16667H19.3333C20.1458 8.16667 20.7917 8.82083 20.7917 9.61667V14.3833C20.7917 15.1792 20.1458 15.8333 19.3333 15.8333H16.2917V17.8833C16.2917 18.6792 15.6458 19.3333 14.8333 19.3333H6.16667C5.35417 19.3333 4.70833 18.6792 4.70833 17.8833V6.11667ZM6.16667 6.11667V17.8833H14.8333V14.3833C14.8333 13.5875 15.4792 12.9333 16.2917 12.9333V11.0667C15.4792 11.0667 14.8333 10.4125 14.8333 9.61667V6.11667H6.16667Z"
    />
  </svg>
);



export default function VideoCard({ video }: VideoCardProps) {
  const formatDateTime = (isoString: string | null) => {
    if (!isoString) return null;
    try {
      return new Date(isoString).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid Date";
    }
  };

  const scheduledTime = formatDateTime(video.scheduled_time);
  const actualThumbnailUrl = getYouTubeThumbnailUrl(video.youtube_url);

  const renderThumbnail = () => {
    if (actualThumbnailUrl) {
      return (
        <Link
          href={video.youtube_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${video.title} on YouTube`}
        >
          <img
            src={actualThumbnailUrl}
            alt={`Thumbnail for ${video.title}`}
            className="!w-full !h-48 object-cover cursor-pointer"
            onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/EEE/31343C?text=${encodeURIComponent(video.title)}&font=Inter`)}
          />
        </Link>
      );
    }

    return (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
        No Thumbnail Available
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:border-green-a700 transition-shadow duration-200 ease-in-out bg-white flex flex-col h-full">
      {renderThumbnail()}

      <div className="p-4 flex flex-col flex-grow">
        {video.youtube_url ? (
          <Link
            href={video.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
              {video.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{video.title}</h3>
        )}
        <p className="text-sm text-gray-600 mb-3 flex-grow">{video.description}</p>
        
        <div className="mt-auto text-xs text-gray-500 space-y-1">
          {video.is_live && (
            <span className="inline-block bg-red-500 text-white-a700 px-2 py-1 rounded-full font-medium mr-2">
              LIVE
            </span>
          )}
          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
            {video.category}
          </span>
          {scheduledTime && (
            <p>Scheduled: {scheduledTime}</p>
          )}
          {video.zoom_join_url && (
            <p>
              <a
                href={video.zoom_join_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium inline-flex items-center"
              >
                <ZoomIcon className="w-4 h-4 mr-1" />
                Join Zoom
              </a>
              {video.zoom_meeting_id && ` (ID: ${video.zoom_meeting_id})`}
            </p>
          )}
          {/* Optional: Link to an internal watch page if you build one */}
          {/* <Link
            href={`/training/watch/${video.id}`} // Ensure this route exists
            className="text-blue-600 hover:underline block mt-2"
          >
            Watch Now / Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}

