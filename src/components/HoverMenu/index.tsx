const HoverMenu = ({ isLive, onSelect }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {isLive
        ? <>
            <button onClick={() => onSelect('zoom')} className="btn">Join via Zoom</button>
            <button onClick={() => onSelect('youtube')} className="btn ml-2">Watch on YouTube</button>
          </>
        : <button onClick={() => onSelect('inline')} className="btn">Play Video</button>
      }
    </div>
  );
}

export { HoverMenu };

