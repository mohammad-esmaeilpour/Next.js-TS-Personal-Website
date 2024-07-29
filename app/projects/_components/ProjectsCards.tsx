import Image from "next/image";
import React, { useId, useRef } from "react";
import Link from "next/link";
import { projectsData } from "@/public/data/projects";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

interface ProjectsCardsProps {
  selectedFilters: string[];
  handleModal: any;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({
  selectedFilters,
  handleModal,
}) => {
  const filteredProjects =
    selectedFilters.length === 0
      ? projectsData.cardData
      : projectsData.cardData.filter((project) =>
          selectedFilters.some((f) => project.tags.includes(f))
        );

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {filteredProjects.map((item, index) => (
          <div
            onClick={() => handleModal(index)}
            key={item.title}
            className="col-span-12 lg:col-span-4"
          >
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
                <p className="text-sm font-light">{item.shortDescription}</p>
                <div className="flex items-baseline justify-between pb-1">
                  <div className="flex mt-4 items-center gap-2">
                    {item.techIcons.map((icon, index) => (
                      <span key={index} className="flex items-center gap-1">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2">
                    {item.repo && (
                      <Link
                        href={item.repo}
                        className="tooltip"
                        data-tip="Github"
                        target="_blank"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="gray"
                          height={19}
                          width={19}
                          className="hover:fill-gray-800 transition-all"
                        >
                          <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                        </svg>
                      </Link>
                    )}

                    <Link
                      href={item.link}
                      className="tooltip"
                      data-tip="Live"
                      target="_blank"
                    >
                      <ExternalLinkIcon size={20} />
                    </Link>
                  </div>
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
