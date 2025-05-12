"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button, Img, Text } from "../../components";

interface Project {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
}

const emrSystemGrid: Project[] = [
  { projectImage: "img_proj_1.jpg", projectTitle: "Digital Health Mentorship Program", projectDescription: "Mentoring young professionals through the Society for Telemedicine and eHealth Nigeria in collaboration with Care One." },
  { projectImage: "img_pic2.png", projectTitle: "Telemedicine Initiative for Portmore North, Jamaica", projectDescription: "Designing a sustainable telemedicine model to strengthen community healthcare services." },
  { projectImage: "img_proj_2.jpg", projectTitle: "The UgaVax Project", projectDescription: "Leveraging digital technologies to enhance tracking of child immunization healthcare outcomes in Uganda, in collaboration with MedRef." },
  { projectImage: "img_pic3.png", projectTitle: "EMR Optimization Consulting", projectDescription: "Helping healthcare facilities improve existing EMR systems for better clinical efficiency and patient care outcomes." },
  { projectImage: "img_pic2.png", projectTitle: "Telemedicine Platform Deployment", projectDescription: "Launch of telehealth solutions to extend quality healthcare access to underserved and rural communities." },
  { projectImage: "img_proj_1.jpg", projectTitle: "Healthcare Data Protection Programs", projectDescription: "Implementation of best practices and compliance models for health data privacy and cybersecurity." },
  { projectImage: "img_pic3.png", projectTitle: "Digitization of Traditional Medicine Records", projectDescription: "Pioneering the integration of traditional medicine into digital health platforms to support inclusive healthcare." },
  { projectImage: "img_proj_2.jpg", projectTitle: "Development of Integrated EMR/EHR Solutions", projectDescription: "Custom-built electronic medical record and electronic health record systems for hospitals, clinics, and pharmacies, focusing on usability and interoperability." },
];

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
  const [groupSize, setGroupSize] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setGroupSize(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groups = groupProjects(emrSystemGrid, groupSize);
  const maxIdx = groups.length - 1;
  const [currentIdx, setCurrentIdx] = useState(0);

  // Update current index on scroll
  const onScroll = () => {
    if (!containerRef.current) return;
    const idx = Math.round(
      containerRef.current.scrollLeft / containerRef.current.clientWidth
    );
    setCurrentIdx(idx);
  };

  // Scroll by group
  const scrollToGroup = (idx: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({ left: width * idx, behavior: "smooth" });
    setCurrentIdx(idx);
  };

  // Handle wheel for smooth horizontal
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: e.deltaY, behavior: "smooth" });
  };

  return (
    <div className="mt-[88px] flex flex-col items-center">
      <div className="container-xs flex flex-col gap-5 md:px-5">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center gap-6 md:mx-0">
          <Button
            color="black_900_01"
            size="xs"
            className="min-w-[108px] rounded-[10px] px-1.5 font-merriweather tracking-[1.09px]"
          >
            Our Projects
          </Button>
          <Text
            size="text13xl"
            className="!font-merriweather text-[56.47px] font-normal !text-black-900_01 md:text-[48px] sm:text-[42px]"
          >
            Discover our most impactful projects
          </Text>
        </div>

        {/* Carousel */}
        <div className="relative mt-8">
          <div
            ref={containerRef}
            onScroll={onScroll}
            onWheel={onWheel}
            className="flex overflow-x-auto scroll-hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {groups.map((group, gi) => (
              <div key={gi} className="flex-shrink-0 w-full flex justify-around">
                {group.map((p, i) => (
                  <div key={i} className="mx-2 flex-1">
                    {/* Explicit image rendering */}
                    <div className="w-full aspect-square overflow-hidden rounded-lg">
                      <Img
                        src={p.projectImage}
                        width={1000}
                        height={1000}
                        alt={p.projectTitle}
                        className="!w-full !h-full object-cover"
                      />
                    </div>
                    <Text className="mt-3 text-lg !font-merriweather !text-blue-700">{p.projectTitle}</Text>
                    <Text className="mt-1 text-xs !font-normal !text-gray-900">{p.projectDescription}</Text>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={() => currentIdx > 0 && scrollToGroup(currentIdx - 1)}
            disabled={currentIdx === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg transition-opacity ${
              currentIdx === 0 ? "opacity-50" : "hover:opacity-100"
            }`}
            aria-label="Previous projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => currentIdx < maxIdx && scrollToGroup(currentIdx + 1)}
            disabled={currentIdx === maxIdx}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg transition-opacity ${
              currentIdx === maxIdx ? "opacity-50" : "hover:opacity-100"
            }`}
            aria-label="Next projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scroll-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scroll-hidden::-webkit-scrollbar {
          display: none;             /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}

