import { Button, Img, Text } from "../../components";
import ProjectTile from "../../components/ProjectTile";
import React, { Suspense } from "react";

const emrSystemGrid = [
  {
    projectImage: "img_tile_1_image.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_tile_2_image.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_tile_2_image.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_tile_1_image.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription: "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
];

export default function ProjectsAndSocialsSection() {
  return (
    <>
      {/* projects and socials section */}
      <div className="mt-[104px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[70px] md:gap-[52px] md:px-5 sm:gap-[35px]">
          <div className="ml-[156px] mr-40 flex flex-col items-center gap-6 md:mx-0">
            <div className="flex">
              <Button
                color="black_900_01"
                size="xs"
                shape="round"
                className="min-w-[108px] rounded-[10px] px-1.5 font-merriweather tracking-[1.09px]"
              >
                Our Projects
              </Button>
            </div>
            <Text
              size="text13xl"
              as="p"
              className="!font-merriweather text-[56.47px] font-normal !text-black-900_01 md:text-[48px] sm:text-[42px]"
            >
              Discover our most impactful projects
            </Text>
          </div>
          <div className="flex items-start gap-12 md:flex-col">
            <div className="my-[26px] flex w-[36%] flex-col gap-[58px] self-center rounded-[10px] bg-green-a700_3f px-2.5 py-[46px] md:w-full md:py-5 sm:gap-[29px]">
              <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 sm:py-5">
                <Text
                  size="text8xl"
                  as="p"
                  className="text-[30.49px] font-normal !text-black-900_01 md:text-[28px] sm:text-[26px]"
                >
                  Join our millions of followers
                </Text>
                <div className="mx-4 flex justify-between gap-5 self-stretch md:mx-0">
                  <Img
                    src="img_facebook_app_sysmbol.png"
                    width={36}
                    height={36}
                    alt="Facebookapp"
                    className="h-[36px] object-cover"
                  />
                  <Img
                    src="img_instagram_logo.png"
                    width={36}
                    height={36}
                    alt="Instagramlogo"
                    className="h-[36px] object-cover"
                  />
                  <Img
                    src="img_linkedin_big_logo.png"
                    width={36}
                    height={36}
                    alt="LinkedInbig"
                    className="h-[36px] object-cover"
                  />
                  <Img
                    src="img_youtube.png"
                    width={36}
                    height={36}
                    alt="YouTubeLogo"
                    className="h-[36px] object-cover"
                  />
                </div>
              </div>
              <Img
                src="img_side_video.png"
                width={440}
                height={582}
                alt="SideVideo"
                className="h-[582px] object-cover"
              />
              <div className="flex flex-col gap-[30px] py-2.5">
                <Text
                  size="text8xl"
                  as="p"
                  className="text-center text-[30.49px] font-normal leading-9 !text-black-900_01 md:text-[28px] sm:text-[26px]"
                >
                  Follow us for more daily health and wellness tips
                </Text>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_link_icon.png"
                      width={28}
                      height={28}
                      alt="Link Icon"
                      className="h-[28px] w-[28px] object-contain"
                    />
                  }
                  className="mx-[98px] gap-2.5 self-stretch rounded-[10px] px-[34px] font-merriweathersans md:mx-0 sm:px-5"
                >
                  Follow Us
                </Button>
              </div>
            </div>
            <div className="ml-12 grid flex-1 grid-cols-2 gap-[90px] md:ml-0 md:grid-cols-1 md:self-stretch">
              <Suspense fallback={<div>Loading feed...</div>}>
                {emrSystemGrid.map((d, index) => (
                  <ProjectTile {...d} key={"landing" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

