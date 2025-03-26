import React from "react";
import { Img } from "../";

interface AvatarStackProps {
  avatars?: string[];
  size?: number;
  overlap?: number; 
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  avatars,
  size = 48, 
  overlap = -8, 
}) => {
  const defaultAvatars = [
    "dr_raphael_pfp.jpg",
    "ty_pfp.jpg",
    "dam_pfp.jpg",
    "anonym_pfp.png",
  ];

  const avatarImages = avatars && avatars.length === 4 ? avatars : defaultAvatars;

  return (
    <div className="flex items-center justify-end">
      {avatarImages.map((src, index) => (
        <div
          key={index}
          style={{ marginLeft: index !== 0 ? overlap : 0 }}
          className="relative"
        >
          <Img
            src={src}
            alt={`Avatar ${index + 1}`}
            width={size}
            height={size}
            className="h-[48px] rounded-full object-cover border-2 border-transparent"
          />
        </div>
      ))}
    </div>
  );
};

export { AvatarStack };

