import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projectCardData } from "@/public/data/projects";

interface ProjectsCardsProps {
  selectedFilters: string[];
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ selectedFilters }) => {
  const filteredProjects =
    selectedFilters.length === 0
      ? projectCardData
      : projectCardData.filter((project) =>
          selectedFilters.some((f) => project.tags.includes(f))
        );

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {filteredProjects.map((item) => (
          <div key={item.title} className="col-span-4">
            <div className="card cursor-pointer rounded-md overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all">
              <div className="h-44 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="card-body p-4 text-start">
                <h3 className="font-sans text-base flex items-center">
                  {item.title}
                </h3>
                <div className="text-sm font-light">{item.des}</div>
                <div className="flex items-baseline justify-between pb-1">
                  <div className="flex mt-4 items-center gap-2">
                    {item.techIcons.map((icon, index) => (
                      <span key={index} className="flex items-center gap-1">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <Link href={item.link}>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="20"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
