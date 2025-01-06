"use client";

import { projectsData } from "@/public/data/projects";
import { useRef, createRef, useState } from "react";
import ProjectsCards from "../projects/_components/ProjectsCards";

const useModal = () => {
  const modalsRef: any = useRef(
    projectsData.projectsInfo.map(() => createRef())
  );

  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return { handleModal };
};

const Skills = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { handleModal } = useModal();

  return (
    <div className="px-3 mt-10 ">
      <div className="col-span-12 sm:col-span-6 lg:col-span-9">
        <ProjectsCards
          handleModal={handleModal}
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  );
};

export default Skills;
