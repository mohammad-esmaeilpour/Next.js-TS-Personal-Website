"use client";

import { projectsData } from "@/public/data/projects";
import { useRef, createRef, useState } from "react";
import ProjectsCards from "../projects/_components/ProjectsCards";
import { homeData } from "@/public/data/home";

const useModal = () => {
  const modalsRef: any = useRef(projectsData.projectsInfo.map(() => createRef()));

  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return { handleModal };
};

const Skills = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { handleModal } = useModal();

  return (
    <div className="px-3 mt-12">
      <div className="flex flex-wrap justify-center gap-5">
        {homeData.skills.map((item) => (
          <div className="col-span-1" key={item.id}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
