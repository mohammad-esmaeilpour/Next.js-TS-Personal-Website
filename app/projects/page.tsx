import { projectsSeo } from "@/public/data/projects";
import { Metadata } from "next";
import ProjectView from "./_components/ProjectView";

export const metadata: Metadata = {
  title: projectsSeo.title,
  description: projectsSeo.metadescription,
};

const Projects = () => {
  return <ProjectView />;
};

export default Projects;
