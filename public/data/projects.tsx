import { IProjectsCard, IProjectsFilter } from "@/app/interface/projects";
import room from "@/public/img/projects/3d-room.png";
import roboxonWebsite from "@/public/img/projects/roboxon-website.png";
import roboxonDashboard from "@/public/img/projects/roboxon-dashboard.png";
import JSIcon from "@/app/components/icons/JSIcon";
import HtmlIcon from "@/app/components/icons/HtmlIcon";
import CssIcon from "@/app/components/icons/CssIcon";
import TSIcon from "@/app/components/icons/TSIcon";
import NextjsIcon from "@/app/components/icons/NextjsIcon";
import TailwindIcon from "@/app/components/icons/TailwindIcon";
import ReactIcon from "@/app/components/icons/ReactIcon";
import MUIIcon from "@/app/components/icons/MUIIcon";
import { TProjectData } from "@/app/types/projects";

export const projectsSeo = {
  title: "Projects by Mohammad Esmaeilpour | React, Next.js, TypeScript",
  metadescription:
    "Explore the projects developed by Mohammad Esmaeilpour, showcasing expertise in React, Next.js, TypeScript, and Tailwind CSS.",
};

export const projectsHeadings = {
  h1: "My Projects",
  h2: "",
};

export const projectsData: TProjectData = {
  projectsInfo: [
    {
      title: "3D Room",
      description:
        "I've created a 3D room using CSS, HTML, and JavaScript, aiming to provide an immersive virtual space that showcases both design aesthetics and interactive functionality.",
      overview:
        "I've created a 3D room using CSS, HTML, and JavaScript, aiming to provide an immersive virtual space that showcases both design aesthetics and interactive functionality.",
      features: [
        "3D Rendering: Utilizes CSS transforms and animations to create a lifelike room environment.",
        "Interactive Elements: Users can interact with objects within the room, such as clicking on furniture to change its color or position.",
        "Responsive Design: Ensures the room adapts seamlessly to different screen sizes, maintaining visual integrity and usability.",
        "Realistic Lighting: Implemented through CSS effects to simulate natural lighting conditions, enhancing the room's realism.",
        "Dynamic Content: Updates dynamically based on user inputs or events, allowing for a personalized user experience.",
      ],
      technologies: [
        "CSS: Leveraging transforms, animations, and custom styling to create the 3D environment and simulate lighting effects.",
        "HTML: Structuring the room layout and integrating interactive elements.",
        "JavaScript: Adding interactivity, handling user inputs, and managing dynamic content updates.",
      ],
      introductionList: [
        {
          key: "Language",
          value: "Javascript",
        },
        {
          key: "Style",
          value: "CSS",
        },
      ],
      img: room,
      tags: ["html", "css", "js"],
      link: "https://projects.esmaeilpour.site/3d-room",
      repository: "https://github.com/mohamadesmaeilpour/3D-Room.git",
      techIcons: [
        <JSIcon key={1} size={18} />,
        <HtmlIcon key={2} size={18} />,
        <CssIcon key={3} size={18} />,
      ],
    },
    {
      title: "Roboxon website",
      description:
        "Developed by Next.js and Typescript with Tailwind CSS as css library.",
      overview:
        "This project features a sample implementation of Hume's Empathic Voice Interface using Hume's React SDK. Here, we have a simple EVI that uses the Next.js App Router",
      features: [
        "Next.js App Router",
        "Styling with Tailwind CSS",
        "Icons from Phosphor Icons",
      ],
      technologies: [
        "Next.js App Router",
        "Styling with Tailwind CSS",
        "Icons from Phosphor Icons",
      ],
      introductionList: [
        {
          key: "Language",
          value: "Typescript",
        },
        {
          key: "Freamwork",
          value: "Next.js",
        },
        {
          key: "Styling",
          value: "Tailwind CSS",
        },
      ],
      img: roboxonWebsite,
      link: "/",
      techIcons: [
        <TSIcon key={1} size={18} />,
        <NextjsIcon key={2} size={18} />,
        <TailwindIcon key={3} size={18} />,
      ],
      tags: ["next", "typescript", "tailwind"],
    },
    {
      title: "Roboxon Dashboard",
      description:
        "Developed by React and Typescript with Tailwind CSS as css library.",
      overview:
        "This project features a sample implementation of Hume's Empathic Voice Interface using Hume's React SDK. Here, we have a simple EVI that uses the Next.js App Router",
      features: [
        "Next.js App Router",
        "Styling with Tailwind CSS",
        "Icons from Phosphor Icons",
      ],
      technologies: [
        "Next.js App Router",
        "Styling with Tailwind CSS",
        "Icons from Phosphor Icons",
      ],
      introductionList: [
        {
          key: "Language",
          value: "Typescript",
        },
        {
          key: "Freamwork",
          value: "React",
        },
        {
          key: "Styling",
          value: "Tailwind CSS",
        },
      ],
      img: roboxonDashboard,
      link: "/",
      techIcons: [
        <TSIcon key={1} size={18} />,
        <ReactIcon key={2} size={18} />,
        <TailwindIcon key={3} size={18} />,
      ],
      tags: ["react", "typescript", "tailwind"],
    },
  ],
  projectsFilter: [
    {
      title: "React",
      tag: "react",
      icon: <ReactIcon size={18} />,
    },
    {
      title: "Next.js",
      tag: "next",
      icon: <NextjsIcon size={18} />,
    },
    {
      title: "Typescript",
      tag: "typescript",
      icon: <TSIcon size={18} />,
    },
    {
      title: "Javascript",
      tag: "js",
      icon: <JSIcon size={18} />,
    },
    {
      title: "Tailwind CSS",
      tag: "tailwind",
      icon: <TailwindIcon size={18} />,
    },
    {
      title: "Material UI",
      tag: "material",
      icon: <MUIIcon size={18} />,
    },
    {
      title: "HTML",
      tag: "html",
      icon: <HtmlIcon size={18} />,
    },
    {
      title: "CSS",
      tag: "css",
      icon: <CssIcon size={18} />,
    },
  ],
};
