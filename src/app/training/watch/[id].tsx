import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Watch() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/training/videos/${id}/`)
    .then(r => r.json())
    .then(setVideo);
  }, [id]);

  useEffect(() => {
    if (video) document.title = video.title;
  }, [video]);

  if (!video) return <p>Loading...</p>;
  return (
    <div className="p-4">
      <h1>{video.title}</h1>
      <iframe
        width="100%"
        height="400"
        src={video.youtube_url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

