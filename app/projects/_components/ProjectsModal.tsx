import React from "react";
import Modal from "@/app/components/global/Modal";
import { projectsData } from "@/public/data/projects";

const ProjectsModal = () => {
  return projectsData.modalData.map((item, index) => (
    <Modal key={index} title={item.title} description={item.description}  />
  ));
};

export default ProjectsModal;
