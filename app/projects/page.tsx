"use client";
import React, { createRef, useRef, useState } from "react";
import ProjectsFilter from "./_components/ProjectsFilter";
import ProjectsCards from "./_components/ProjectsCards";
import { projectsData, projectsHeadings } from "@/public/data/projects";
import Modal from "../components/global/Modal";

const Projects: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const modalsRef: any = useRef(projectsData.modalData.map(() => createRef()));
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return (
    <div className="max-w-7xl mt-16 mx-auto">
      <h1 className="text-center">{projectsHeadings.h1}</h1>
      <p className="text-center mt-4">
        Jumpstart your app development process with pre-built solutions from
        Vercel and our community.
      </p>
      <div className="grid grid-cols-12 gap-5 px-5 mt-16">
        <div className="col-span-12 lg:col-span-3">
          <ProjectsFilter
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ProjectsCards
            handleModal={handleModal}
            selectedFilters={selectedFilters}
          />
        </div>
      </div>

      {projectsData.cardData.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </div>
  );
};

export default Projects;
