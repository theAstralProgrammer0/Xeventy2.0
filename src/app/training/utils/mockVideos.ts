export interface Video {
  id: number;
  title: string;
  description: string;
  is_live: boolean;
  category: 'saved' | 'training' | 'event';
  youtube_url: string | null;
  zoom_meeting_id: string | null;
  zoom_join_url: string | null;
  scheduled_time: string | null;
}


export const mockVideos: Video[] = [
  {
    id: 1,
    title: "Intro to React Hooks",
    description: "Learn the basics of useState, useEffect, and custom hooks.",
    is_live: false,
    category: "saved",
    youtube_url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: null
  },
  {
    id: 2,
    title: "Advanced Django Patterns",
    description: "Deep dive into class‐based views, mixins, and DRF extensions.",
    is_live: true,
    category: "training",
    youtube_url: "https://www.youtube.com/live/ABCDEFGHIJK",
    zoom_meeting_id: "123-456-789",
    zoom_join_url: "https://zoom.us/j/123456789",
    scheduled_time: "2025-05-05T14:00:00Z"
  },
  {
    id: 3,
    title: "Building Scalable APIs",
    description: "Join our free webinar on API best practices and rate limiting.",
    is_live: true,
    category: "event",
    youtube_url: "https://www.youtube.com/live/ZYXWVUTSRQ",
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: "2025-05-10T18:30:00Z"
  },
  {
    id: 4,
    title: "Kubernetes Crash Course",
    description: "A recorded session on deploying services to a K8s cluster.",
    is_live: false,
    category: "saved",
    youtube_url: "https://www.youtube.com/watch?v=PH-2FfFD2PU",
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: null
  },
  {
    id: 5,
    title: "GraphQL with Next.js",
    description: "Hands‐on workshop connecting Next.js frontend to a GraphQL API.",
    is_live: true,
    category: "training",
    youtube_url: null,
    zoom_meeting_id: "987-654-321",
    zoom_join_url: "https://zoom.us/j/987654321",
    scheduled_time: "2025-05-12T16:00:00Z"
  },
  {
    id: 6,
    title: "Tech Community Meetup",
    description: "Monthly meetup for sharing side‐projects and networking.",
    is_live: true,
    category: "event",
    youtube_url: null,
    zoom_meeting_id: "555-666-777",
    zoom_join_url: "https://zoom.us/j/555666777",
    scheduled_time: "2025-05-15T19:00:00Z"
  },
  {
    id: 7,
    title: "CSS Grid Layout Deep Dive",
    description: "Recorded Q&A and demos around CSS Grid for responsive design.",
    is_live: false,
    category: "saved",
    youtube_url: "https://www.youtube.com/watch?v=EFafSYg-PkI",
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: null
  },
  {
    id: 8,
    title: "Getting Started with Next.js",
    description: "A beginner-friendly introduction to the Next.js framework for React applications.",
    is_live: false,
    category: "training",
    youtube_url: "https://placehold.co/600x400/EEE/31343C?text=Next.js+Intro", // Placeholder URL
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: null
  },
    {
    id: 9,
    title: "State Management in React",
    description: "Comparing different state management solutions: Context API, Zustand, Redux.",
    is_live: false,
    category: "saved",
    youtube_url: "https://placehold.co/600x400/EEE/31343C?text=React+State+Mgt", // Placeholder URL
    zoom_meeting_id: null,
    zoom_join_url: null,
    scheduled_time: null
  }
];

