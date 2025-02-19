import { Img } from "../../components";
import React, { Suspense } from "react";

const logoList = [{ logo: "img_logo_2.png" }, { logo: "img_logo_3.png" }, { logo: "img_logo_4.png" }];

export default function LogoRowSection() {
  return (
    <>
      {/* logo row section */}
      <div className="mb-4 flex justify-between gap-5 md:flex-col">
        <Img
          src="img_logo_1.png"
          width={136}
          height={136}
          alt="Logoone"
          className="h-[136px] w-[12%] object-contain md:w-full"
        />
        <div className="ml-[296px] flex w-[88%] gap-[296px] md:ml-0 md:w-full md:flex-col md:px-5">
          <Suspense fallback={<div>Loading feed...</div>}>
            {logoList.map((d, index) => (
              <Img
                key={"listlogo" + index}
                src={d.logo}
                width={136}
                height={136}
                alt="Logo"
                className="h-[136px] w-[32%] object-contain md:w-full"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}

