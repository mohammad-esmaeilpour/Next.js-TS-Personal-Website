import CloseIcon from "@/app/components/icons/CloseIcon";
import FilterIcon from "@/app/components/icons/FilterIcon";
import { projectsData, projectsHeadings } from "@/public/data/projects";
import React from "react";

interface ProjectsFilterProps {
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  selectedFilters,
  setSelectedFilters,
}) => {
  const handleCheckboxChange = (tag: string) => {
    if (selectedFilters.includes(tag)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== tag));
    } else {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };

  return (
    <div className="sm:sticky sm:top-16 sm:pe-5">
      <div className="dropdown w-full sm:dropdown-open">
        <div
          tabIndex={0}
          className="m-1 flex justify-between items-center md:mb-5"
        >
          Filter projects
          <FilterIcon size={18} />
        </div>
        {selectedFilters.length !== 0 && (
          <div
            className="btn btn-secondary w-full justify-between"
            onClick={() => setSelectedFilters([])}
          >
            clear 
            <CloseIcon size={18} />
          </div>
        )}
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 w-full shadow-lg border sm:shadow-none sm:border-none"
        >
          {projectsData.projectsFilter.map((item) => (
            <label
              key={item.tag}
              className="label cursor-pointer items-center justify-between gap-x-3 mb-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-sm order-2"
                checked={selectedFilters.includes(item.tag)}
                onChange={() => handleCheckboxChange(item.tag)}
              />
              <div className="label-text flex gap-x-2 items-center">
                {item.icon}
                {item.title}
              </div>
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsFilter;
