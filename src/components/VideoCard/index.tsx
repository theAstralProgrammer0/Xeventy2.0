import { useState } from "react";
import { HoverMenu } from "./..";

export default function VideoCard({ video }) {
  const [hover, setHover] = useState(false);

  const onSelect = (mode: 'zoom' | 'youtube' | 'inline') => {
    if (mode === 'zoom') window.open(`/api/training/videos/${video.id}/zoom/`, '_blank');
    else if (mode === 'youtube') window.location.href = video.youtube_url;
    else router.push(`/training/watch/${video.id}`);
  };

  return (
    <div
      className="relatieve card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={video.thumbnail_url} alt={video.title} />
      <h3>{video.title}</h3>
      {hover && (
        <HoverMenu
          isLive={video.is_live}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}

