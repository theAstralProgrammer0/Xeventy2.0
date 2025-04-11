"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button, Img, Text } from "../../components";
import { useSwipeable } from "react-swipeable";
import ProjectTile from "../../components/ProjectTile";

interface Project {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
}

const emrSystemGrid: Project[] = [
  {
    projectImage: "img_proj_1.jpg",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription:
      "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_pic2.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription:
      "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_proj_2.jpg",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription:
      "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
  {
    projectImage: "img_pic3.png",
    projectTitle: "Development of an interoperable EMR system for Nigerian hospitals.",
    projectDescription:
      "Design and optimize Electronic Medical Records (EMRs) and Electronic Health Records (EHRs) systems, enabling healthcare facilities to digitize patient information and seamlessly exchange data for improved care.",
  },
];

// Group projects into arrays of groupSize.
// If the last group is missing items, fill it with items from the beginning.
function groupProjects(projects: Project[], groupSize: number): Project[][] {
  const groups: Project[][] = [];
  for (let i = 0; i < projects.length; i += groupSize) {
    let group = projects.slice(i, i + groupSize);
    if (group.length < groupSize) {
      group = group.concat(projects.slice(0, groupSize - group.length));
    }
    groups.push(group);
  }
  return groups;
}

export default function ProjectsAndSocialsSection() {
  // Set up a state for groupSize that updates based on viewport width.
  const [groupSize, setGroupSize] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Adjust groupSize based on window width:
  // - width < 768px: 1 tile
  // - width between 768px and 1023px: 2 tiles
  // - width >= 1024px: 3 tiles
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setGroupSize(1);
      } else if (width < 1024) {
        setGroupSize(2);
      } else {
        setGroupSize(3);
      }
    }
    handleResize(); // Set on mount.
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentSlide when groupSize changes.
  useEffect(() => {
    setCurrentSlide(1);
  }, [groupSize]);

  // Group projects based on the current groupSize.
  const groups = groupProjects(emrSystemGrid, groupSize);
  // For infinite looping, clone the last and first group.
  const extendedSlides = [groups[groups.length - 1], ...groups, groups[0]];
  const totalSlides = extendedSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Enable touch/swipe interactions.
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // When transition ends, jump if at a cloned slide.
  const handleTransitionEnd = () => {
    if (currentSlide === totalSlides - 1) {
      // Jump from cloned first slide back to the first real slide.
      setTransitionEnabled(false);
      setCurrentSlide(1);
    }
    if (currentSlide === 0) {
      // Jump from cloned last slide to the last real slide.
      setTransitionEnabled(false);
      setCurrentSlide(totalSlides - 2);
    }
  };

  // Re-enable transition after a jump.
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  return (
    <div className="mt-[88px] flex flex-col items-center">
      <div className="container-xs flex flex-col gap-5 md:px-5">
        <div className="mx-auto flex flex-col items-center gap-6 md:mx-0">
          <div className="flex">
            <Button
              color="black_900_01"
              size="xs"
              className="min-w-[108px] rounded-[10px] px-1.5 font-merriweather tracking-[1.09px]"
            >
              Our Projects
            </Button>
          </div>
          <Text
            size="text13xl"
            className="!font-merriweather text-[56.47px] font-normal !text-black-900_01 md:text-[48px] sm:text-[42px]"
          >
            Discover our most impactful projects
          </Text>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-full overflow-hidden" {...swipeHandlers}>
            <div
              ref={sliderRef}
              className={`flex ${
                transitionEnabled
                  ? "transition-transform duration-700 ease-in-out"
                  : "transition-none"
              }`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((group, slideIdx) => (
                <div
                  key={slideIdx}
                  className="flex-shrink-0 w-full flex justify-around"
                >
                  {group.map((project, idx) => (
                    <div key={idx} className="mx-2 flex-1">
                      <ProjectTile
                        {...project}
                        className="aspect-square object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={prevSlide} className="p-2 bg-gray-300 rounded-2xl">
              &lt;&lt;
            </button>
            <button onClick={nextSlide} className="p-2 bg-gray-300 rounded-2xl">
              &gt;&gt;
            </button>
          </div>
        </div>

        {/* Socials Section */}
        <div className="hidden my-[26px] flex w-[36%] flex-col gap-[58px] self-center rounded-[10px] bg-green-a700_3f px-2.5 py-[46px] md:w-full md:py-5 sm:gap-[29px]">
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 sm:py-5">
            <Text
              size="text8xl"
              className="text-[30.49px] font-normal !text-black-900_01 md:text-[28px] sm:text-[26px]"
            >
              Join our millions of followers
            </Text>
            <div className="mx-4 flex justify-between gap-5 self-stretch md:mx-0">
              <Img
                src="img_facebook_app_symbol.png"
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
      </div>
    </div>
  );
}

