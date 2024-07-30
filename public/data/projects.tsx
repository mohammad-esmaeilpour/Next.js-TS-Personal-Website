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
      overview:
        "I developed a modern, responsive website using Next.js, Tailwind CSS, and TypeScript, focusing on performance, scalability, and maintainability. This project showcases my ability to create dynamic, high-quality web applications with a keen eye for design and user experience.",
      features: [
        "Responsive Design: The website is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.",
        "Fast Performance: Leveraged the power of Next.js for server-side rendering and static site generation, resulting in fast load times and a smooth user experience.",
        "Type Safety: Incorporated TypeScript to ensure robust type-checking and improve code maintainability and scalability.",
        "Custom Styling: Utilized Tailwind CSS to create a unique, modern design that is both visually appealing and easy to maintain.",
        "Modular Architecture: Designed the application with a modular architecture, making it easy to extend and maintain in the future",
        "API Integration: Integrated with external APIs to fetch dynamic content, showcasing the ability to work with third-party services and data.",
      ],
      technologies: ["Next.js", "Typescript", "Tailwind CSS"],
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
      overview:
        "I developed a high-performance dashboard for a company, allowing them to efficiently manage users, companies, roles, and permissions. This project spanned over 8 months and involved the use of cutting-edge technologies like React, TypeScript, Tailwind CSS, and Redux. The dashboard significantly improved the company’s operational efficiency and user management capabilities.",
      features: [
        "Role-Based Access Control: Advanced role and permission management for secure access.",
        "Efficient State Management: Utilized Redux for state management, ensuring a predictable and maintainable codebase.",
        "Customizable UI: Used Tailwind CSS to create a highly customizable and visually appealing interface.",
        "TypeScript Integration: Leveraged TypeScript to enhance code quality and maintainability.",
      ],
      technologies: ["React", "Typescript", "Tailwind CSS"],
      introductionList: [
        {
          key: "Language",
          value: "Typescript",
        },
        {
          key: "Library",
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
  ],
};
