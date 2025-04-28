import VideoCard from "../../components/VideoCard";

export default function VideoSections({ videos }) {
  const liveTrainings = videos.filter(v => v.category === 'training');
  const events = videos.filter(v => v.category === 'event');
  const saveds = videos.filter(v => v.category === 'saved');

  return (
    <div className="space-y-8 mt-6">
      <div><h2>Live Trainings</h2>{liveTrainings.map(v => <VideoCard key={v.id} video={v} />)}</div>
      <div><h2>Live Events & Webinars</h2>{events.map(v => <VideoCard key={v.id} video={v} />)}</div>
      <div><h2>Saved Videos</h2>{saveds.map(v => <VideoCard key={v.id} video={v} />)}</div>
    </div>
  );
}
     
