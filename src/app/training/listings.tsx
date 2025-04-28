import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../../components/SearchBar';
import VideoSections from '../../components/VideoSections';

export default function Listings() {
  const router = useRouter();
  const { search = '' } = router.query;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(`/api/training/videos/?search=${search}`);
      const data = await res.json();
      setVideos(data);
    }
    fetchVideos();
  }, [search]);

  return (
    <div className="p-8">
      <SearchBar onSearch={(q) => router.push(`/training/listings?search=${q}`)} placeholder="Search keywords..." />
      <VideoSections videos={videos} />
    </div>
  );
}

