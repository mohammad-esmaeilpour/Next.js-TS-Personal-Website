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
          className="m-1 flex justify-between items-center mb-5"
        >
          {projectsHeadings.h2}
          <FilterIcon size={18} />
        </div>
        {selectedFilters.length !== 0 && (
          <div
            className="btn w-full bg-white justify-between transition-all px-5 py-1 my-1"
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
              key={item.title}
              className="label cursor-pointer items-center justify-start gap-x-3 mb-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                checked={selectedFilters.includes(item.tag)}
                onChange={() => handleCheckboxChange(item.tag)}
              />
              <span className="label-text flex ms-2 gap-x-2 items-center">
                {item.icon}
                {item.title}
              </span>
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsFilter;
