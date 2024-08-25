import room from "@/public/img/projects/3d-room.jpg";
import roboxonWebsite from "@/public/img/projects/roboxon-website.jpg";
import roboxonDashboard from "@/public/img/projects/roboxon-dashboard.jpg";
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
  title: "Project's - Mohammad Esmaeilpour | Front-end developer",
  metadescription:
    "Develop high-performance applications with Next.js and React, using TypeScript to improve type safety.",
};

export const projectsHeadings = {
  h1: {
    title: "Mohammad Esmaeilpour Project's",
    subTitle: (
      <>
        Develop high-performance applications with Next.js and React, using
        TypeScript to improve type safety.
      </>
    ),
  },
};

export const projectsData: TProjectData = {
  projectsInfo: [
    {
      id: 0,
      title: "3D Room using CSS and JavaScript",
      overview: (
        <>
          I've created a 3D room using CSS, HTML, and JavaScript, aiming to
          provide an immersive virtual space that showcases both design
          aesthetics and interactive functionality.
        </>
      ),
      features: [
        {
          title: "3D Rendering",
          description:
            "Utilizes CSS transforms and animations to create a lifelike room environment.",
        },
        {
          title: "Interactive Elements",
          description:
            "Users can interact with objects within the room, such as clicking on furniture to change its color or position.",
        },
        {
          title: "Responsive Design",
          description:
            "Ensures the room adapts seamlessly to different screen sizes, maintaining visual integrity and usability.",
        },
        {
          title: "Realistic Lighting",
          description:
            "Implemented through CSS effects to simulate natural lighting conditions, enhancing the room's realism.",
        },
        {
          title: "Dynamic Content",
          description:
            "Updates dynamically based on user inputs or events, allowing for a personalized user experience.",
        },
      ],
      techStack: [
        {
          title: "HTML",
          icon: <HtmlIcon key={2} size={18} />,
        },
        {
          title: "CSS",
          icon: <CssIcon key={3} size={18} />,
        },
        {
          title: "Javascript",
          icon: <JSIcon key={1} size={18} />,
        },
      ],
      img: room,
      tags: ["html", "css", "js"],
      previewLink: "https://projects.esmaeilpour.site/3d-room",
      repository: "https://github.com/mohamadesmaeilpour/3D-Room.git",
    },
    {
      id: 1,
      title: "Modern Next.js Responsive Website - Roboxon",
      overview: (
        <>
          I developed a modern, responsive website using Next.js, Tailwind CSS,
          and TypeScript, focusing on performance, scalability, and
          maintainability. This project showcases my ability to create dynamic,
          high-quality web applications with a keen eye for design and user
          experience.
        </>
      ),
      features: [
        {
          title: "Responsive Design",
          description:
            "The website is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.",
        },
        {
          title: "Fast Performance",
          description:
            "Leveraged the power of Next.js for server-side rendering and static site generation, resulting in fast load times and a smooth user experience.",
        },
        {
          title: "Type Safety",
          description:
            "Incorporated TypeScript to ensure robust type-checking and improve code maintainability and scalability.",
        },
        {
          title: "Custom Styling",
          description:
            "Utilized Tailwind CSS to create a unique, modern design that is both visually appealing and easy to maintain.",
        },
        {
          title: "Modular Architecture",
          description:
            "Designed the application with a modular architecture, making it easy to extend and maintain in the future.",
        },
        {
          title: "API Integration",
          description:
            "Integrated with external APIs to fetch dynamic content, showcasing the ability to work with third-party services and data.",
        },
      ],
      techStack: [
        {
          title: "Typescript",
          icon: <TSIcon key={1} size={18} />,
        },
        {
          title: "Next.js",
          icon: <NextjsIcon key={3} size={18} />,
        },
        {
          title: "Tailwind CSS",
          icon: <TailwindIcon key={1} size={18} />,
        },
      ],
      img: roboxonWebsite,
      tags: ["next", "typescript", "tailwind"],
    },
    {
      id: 2,
      title: "High-Performance Dashboard with React and Tailwind CSS",
      overview: (
        <>
          I developed a high-performance dashboard for a company, allowing them
          to efficiently manage users, companies, roles, and permissions. This
          project spanned over 8 months and involved the use of cutting-edge
          technologies like React, TypeScript, Tailwind CSS, and Redux. The
          dashboard significantly improved the company’s operational efficiency
          and user management capabilities.
        </>
      ),
      features: [
        {
          title: "Role-Based Access Control",
          description:
            "Advanced role and permission management for secure access.",
        },
        {
          title: "Efficient State Management",
          description:
            "Utilized Redux for state management, ensuring a predictable and maintainable codebase.",
        },
        {
          title: "Customizable UI",
          description:
            "Used Tailwind CSS to create a highly customizable and visually appealing interface.",
        },
        {
          title: "TypeScript Integration",
          description:
            "Leveraged TypeScript to enhance code quality and maintainability.",
        },
      ],
      techStack: [
        {
          title: "Typescript",
          icon: <TSIcon key={1} size={18} />,
        },
        {
          title: "React",
          icon: <ReactIcon key={3} size={18} />,
        },
        {
          title: "Tailwind CSS",
          icon: <TailwindIcon key={1} size={18} />,
        },
      ],
      img: roboxonDashboard,
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
