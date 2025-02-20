import React from "react";
import { Img } from "../";

interface AvatarStackProps {
  avatars?: string[];
  size?: number;
  overlap?: number; 
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  avatars,
  size = 40, 
  overlap = -8, 
}) => {
  const defaultAvatars = [
    "img_dr_raphael.jpg",
    "img_temitayo.jpg",
    "img_sanwo_olu.jpeg",
    "img_essien.jpg",
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
            className="rounded-full object-cover border-2 border-transparent"
          />
        </div>
      ))}
    </div>
  );
};

export { AvatarStack };

