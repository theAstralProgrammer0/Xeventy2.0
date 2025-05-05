// pages/training/listings/index.tsx
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import VideoGallery from '@/components/VideoGallery'
import { mockVideos } from '@/utils/mockVideos'

export default function Listings() {
  const [searchTerm, setSearchTerm] = useState('')
  const filtered = mockVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Videos</h1>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search all videos..."
      />
      <VideoGallery videos={filtered} onSelect={…} />
    </div>
  )
}

