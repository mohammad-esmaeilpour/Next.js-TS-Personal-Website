"use client";
import React, { useState } from "react";
import ProjectsFilter from "./_components/ProjectsFilter";
import ProjectsCards from "./_components/ProjectsCards";

const Projects: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="max-w-7xl mt-16 mx-auto">
      <h1 className="text-center">Esmaeilpour Projects</h1>
      <p className="text-center mt-4">
        Jumpstart your app development process with pre-built solutions from
        Vercel and our community.
      </p>
      <div className="grid grid-cols-12 gap-5 mt-16">
        <div className="col-span-3">
          <ProjectsFilter
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="col-span-9">
          <ProjectsCards selectedFilters={selectedFilters} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
