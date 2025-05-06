import React from 'react';
import Link from 'next/link';
import { Video } from '@/app/training/utils/mockVideos';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: React.FC<VideoCardProps>) {
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

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white flex flex-col h-full">
      {video.youtube_url && (
        <img
          src={video.youtube_url}
          alt={`Thumbnail for ${video.title}`}
          className="w-full h-48 object-cover"
          onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/EEE/31343C?text=${encodeURIComponent(video.title)}`)}
        />
      )}
      {!video.youtube_url && (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Thumbnail
        </div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{video.title}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-grow">{video.description}</p>

        <div className="mt-auto text-xs text-gray-500 space-y-1">
          {video.is_live && (
            <span className="inline-block bg-red-500 text-white px-2 py-0.5 rounded-full font-medium mr-2">
              LIVE
            </span>
          )}
          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full capitalize">
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
                className="text-blue-600 hover:underline"
              >
                Join Zoom
              </a>
              {video.zoom_meeting_id && ` (ID: ${video.zoom_meeting_id})`}
            </p>
          )}
          {/* <Link
                href={`training/watch/${video.id}`}
                className=text-blue-600 hover:underline block mt-2"
              >
                Watch Now / Details
              </Link>
            */}
        </div>
      </div>
    </div>
  );
}

