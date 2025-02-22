import LandingPage from "../src/app/landing/index";
import axios from "axios";

{/* getServerSideProps runs on d server for SEO and SSR */}
export async function getServerSideProps(context: any) {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  {/* Fetch data from Django API endpoints */}
  const [newsResponse, videoResponse] = await Promise.all([
    axios.get(`${API_BASE}/news-articles/`),
    axios.get(`${API_BASE}/video-news/`)
  ]);

  return {
    props: {
      initialNewsArticles: newsResponse.data,
      initialVideoNews: videoResponse.data,
    },
  };
}

export default LandingPage;
