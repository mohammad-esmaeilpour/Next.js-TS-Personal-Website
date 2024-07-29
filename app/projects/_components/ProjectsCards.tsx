import Image from "next/image";
import React, { useId, useRef } from "react";
import Link from "next/link";
import { projectsData } from "@/public/data/projects";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";

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
      ? projectsData.projectsInfo
      : projectsData.projectsInfo.filter((project) =>
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
            <div className="card cursor-pointer rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="h-44 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="card-body p-4 pb-3 text-start">
                <h3 className="font-sans text-base flex items-center">
                  {item.title}
                </h3>
                <p className="text-sm line-clamp-2">{item.description}</p>
                <div className="flex items-baseline justify-between pb-1">
                  <div className="flex mt-4 items-center gap-2">
                    {item.techIcons.map((icon) => (
                      <span key={icon.key} className="flex items-center gap-1">
                        {icon}
                      </span>
                    ))}
                  </div>

                  {item.repository && (
                    <Link
                      href={item.repository}
                      className="tooltip tooltip-left"
                      data-tip="Github"
                      target="_blank"
                    >
                      <GithubIcon size={20} />
                    </Link>
                  )}
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
