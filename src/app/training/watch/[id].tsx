import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Watch() {
  const { query } = useRouter();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!query.id) return;
    fetch(`/api/training/videos/${query.id}/`)
    .then(r => r.json())
    .then(setVideo);
  }, [query.id]);

  if (!video) return <p>Loading...</p>;
  return (
    <div className="p-4">
      <h1>{video.title}</h1>
      <video controls src={video.video_file} className="w-full mt-4" />
    </div>
  );
}

