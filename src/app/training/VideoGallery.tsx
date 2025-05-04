import React from 'react';
import { useRouter } from 'next/navigation';
import { mockVideos } from './utils/mockVideos';
import styles from '@/styles/videoGallery.module.css';

function extractYouTubeID(url?: string | null): string {
  if (!url) return ''
  const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
  return m ? m[1] : ''
}

export default function VideoGallery() {
  const router = useRouter()

  const onSeclect = (video: typeof mockVideos[number], mode: 'zoom' | 'youtube' | 'inline') => {
    if (mode === 'zoom' && video.zoom_join_url) {
      window.open(video.zoom_join_url, '_blank')
    }
    else if (mode === 'youtube' && video.youtube_url) {
      window.location.href =  video.youtube_url
    }
    else {
      router.push(`/training/watch/${video.id}`)
    }
  }

  return (
    <section className={styles.grid}>
      {mockVideos.map((video) => (
        <article key={video.id} className={styles.card}>
          <div className={styles.thumbnail}>
            <img
              src={`https://img.youtube.com/v1/${extractYouTubeID(
                video.youtube_url
              )}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{video.title}</h2>
            <p className={styles.description}>{video.description}</p>
            <div className={styles.actions}>
              {video.is_live && video.zoom_join_url && (
                <button
                  onClick={() => onSelect(video, 'zoom')}
                  className="btn"
                >
                  Zoom
                </button>
              )}
              {video.is_live && video.youtube_url && (
                <button
                  onClick={() => onSelect(video, 'youtube')}
                  className="btn"
                >
                  YouTube
                </button>
              )}
              {!video.is_live && (
                <button
                  onClick={() => onSelect(video, 'inline')}
                  className="btn"
                >
                  Watch
                </button>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

