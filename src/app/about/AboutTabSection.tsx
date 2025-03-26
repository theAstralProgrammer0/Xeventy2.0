import { Img } from "../../components";
import React from "react";

export default function AboutTabSection() {
  return (
    <>
      {/* about tab section */}
      <div className="mb-[3rem] md:h-auto">
        <Img
          src="x2h_about1.png"
          width={1540}
          height={564}
          alt="Tab"
          className="object-cover md:h-auto"
        />
      </div>
    </>
  );
}

