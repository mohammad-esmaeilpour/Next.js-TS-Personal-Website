"use client";
import Image from "next/image";
import React from "react";
import ReactImage from "@/public/img/ui/react.png";
import TimeLine from "./TimeLine";

const TopSkills = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex-1 flex flex-col">
        <h4>Specializing in Next.js, React, TypeScript, Tailwind, and MUI</h4>
        <h2>Crafting Exceptional Frontend Experiences</h2>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Typescript
        </span>
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
          Javascript
        </span>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Next js
        </span>
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          React
        </span>
        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
          Redux
        </span>
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
          Tailwind CSS
        </span>
        <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-indigo-700/10">
          Material UI
        </span>
      </div>
    </div>
  );
};

export default TopSkills;
