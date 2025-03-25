import { Img } from "../../components";
import React from "react";

export default function AboutTabSection() {
  return (
    <>
      {/* about tab section */}
      <div className="h-[564px] md:h-auto">
        <Img
          src="img_tab.png"
          width={1440}
          height={564}
          alt="Tab"
          className="h-[564px] w-full object-cover md:h-auto"
        />
      </div>
    </>
  );
}

