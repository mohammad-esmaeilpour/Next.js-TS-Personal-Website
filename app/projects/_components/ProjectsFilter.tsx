import { projectCardData, projectFilterData } from "@/public/data/projects";
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
    <div className="sticky top-16">
      <div className="flex gap-5 items-center">
        <h4>Filter projects</h4>
        {selectedFilters.length !== 0 && (
          <div
            className="btn btn-outline btn-sm transition-all m-0 px-2"
            onClick={() => setSelectedFilters([])}
          >
            <svg
              data-testid="geist-icon"
              fill="none"
              height="18"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="18"
            >
              <circle cx="12" cy="12" r="10" fill="var(--geist-fill)"></circle>
              <path d="M15 9l-6 6" stroke="var(--geist-stroke)"></path>
              <path d="M9 9l6 6" stroke="var(--geist-stroke)"></path>
            </svg>
            clear
          </div>
        )}
      </div>
      <div className="form-control mt-10">
        {projectFilterData.map((item) => (
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
            <span className="label-text flex gap-x-2 items-center">
              {item.icon}
              <div>{item.title}</div>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
