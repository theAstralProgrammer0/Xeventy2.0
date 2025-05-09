import type { Video } from '@/app/training/utils/mockVideos';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';

/**
 * Fetches all videos from the server.
 * This function attempts a real backend API call.
 *
 * @returns {Promise<Video[]>} A promise that resolves to an array of videos.
 * @throws {Error} If the API call fails or the backend is unavailable.
 */
export async function fetchAllVideosFromServer(): Promise<Video[]> {
  console.log(`Attempting to fetch all videos from backend: ${API_BASE_URL}/videos`);

  await new Promise(resolve => setTimeout(resolve, 100));

  try {
    const response = await fetch(`${API_BASE_URL}/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`API Error Response: ${response.status}`, errorData);
      throw new Error(`Failed to fetch videos: ${response.status} ${response.statusText}`);
    }

    const data: Video[] = await response.json();
    console.log('Successfully fetched videos from backend.');
    return data;
  
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in fetchAllVideosFromServer:', error.message);
      throw new Error(`Failed to fetch videos from the backend. Reason: ${error.message}`);
    } else {
      console.error('An unknown error occurred in fetchAllVideosFromServer:', error);
      throw new Error('An unknown error occurred while trying to fetch videos from the backend.');
    }
  }
}

export async function fetchVideoByIdFromServer(id: number): Promise<Video | null> {
  console.log(`Attempting to fetch video with ID: ${id} from backend: ${API_BASE_URL}/videos/${id}`);
  await new Promise(resolve => setTimeout(resolve, 50));

  try {
    const response = await fetch(`${API_BASE_URL}/videos/${id}`);
    if (!response.ok) {
      if (response.status === 404) return null; // Gracefully handle Not Found
      throw new Error(`Failed to fetch video (ID: ${id}): ${response.status} ${response.statusText}`);
    }
    const data: Video = await response.json();
    return data;

  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching video by ID (ID: ${id}):`, error.message);
      throw new Error(`Failed to fetch video (ID: ${id}) from backend. Reason: ${error.message}`);
    } else {
      console.error(`An unknown error occurred while fetching video by ID (ID: ${id}):`, error);
      throw new Error(`An unknown error occurred while trying to fetch video (ID: ${id}) from the backend.`);
    }
  }
}

