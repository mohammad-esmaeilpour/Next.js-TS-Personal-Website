"use client";
import { projectsData } from "@/public/data/projects";
import React, { createRef, useRef, useState } from "react";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsCards from "./ProjectsCards";
import Modal from "../../components/global/Modal";

const ProjectView = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const modalsRef: any = useRef(
    projectsData.projectsInfo.map(() => createRef())
  );
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };
  
  return (
    <div className="max-w-7xl mt-24 mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-5 px-5 mt-16">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <ProjectsFilter
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-9">
          <ProjectsCards
            handleModal={handleModal}
            selectedFilters={selectedFilters}
          />
        </div>
      </div>

      {projectsData.projectsInfo.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </div>
  );
};

export default ProjectView;
