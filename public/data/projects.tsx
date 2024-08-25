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
    title: (
      <strong className="text-gradient">Mohammad Esmaeilpour Project's</strong>
    ),
    subTitle: (
      <>
        Develop high-performance applications with Next.js and React, using
        TypeScript to improve <strong>type safety</strong>.
      </>
    ),
  },
};

export const projectsData: TProjectData = {
  projectsInfo: [
    {
      id: 0,
      title: <strong>3D Room using CSS and JavaScript</strong>,
      overview: (
        <>
          I've created a <strong>3D room</strong> using <strong>CSS</strong>,{" "}
          <strong>HTML</strong>, and <strong>JavaScript</strong>, aiming to
          provide an immersive virtual space that showcases both design
          aesthetics and interactive functionality.
        </>
      ),
      features: [
        <>
          3D Rendering: Utilizes CSS transforms and animations to create a
          lifelike room environment.
        </>,
        <>
          Interactive Elements: Users can interact with objects within the room,
          such as clicking on furniture to change its color or position.
        </>,
        <>
          Responsive Design: Ensures the room adapts seamlessly to different
          screen sizes, maintaining visual integrity and usability.
        </>,
        <>
          Realistic Lighting: Implemented through CSS effects to simulate
          natural lighting conditions, enhancing the room's realism.
        </>,
        <>
          Dynamic Content: Updates dynamically based on user inputs or events,
          allowing for a personalized user experience.
        </>,
      ],
      technologies: [
        <>
          <strong>CSS:</strong> Leveraging transforms, animations, and custom
          styling to create the 3D environment and simulate lighting effects."
        </>,
        <>
          <strong>HTML:</strong> Structuring the room layout and integrating
          interactive elements.
        </>,
        <>
          <strong>JavaScript:</strong> Adding interactivity, handling user
          inputs, and managing dynamic content updates.
        </>,
      ],
      introductionList: [
        {
          key: "Language",
          value: <strong>Javascript</strong>,
        },
        {
          key: "Style",
          value: <strong>CSS</strong>,
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
      id: 1,
      title: <strong>Modern Next.js Responsive Website - Roboxon</strong>,
      overview: (
        <>
          I developed a modern, <strong>responsive website</strong> using{" "}
          <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
          <strong>TypeScript</strong>, focusing on performance, scalability, and
          maintainability. This project showcases my ability to create dynamic,
          high-quality web applications with a keen eye for design and user
          experience.
        </>
      ),
      features: [
        <>
          <strong>Responsive Design:</strong> The website is fully responsive,
          ensuring an optimal viewing experience across a wide range of devices,
          from desktops to mobile phones.
        </>,
        <>
          <strong>Fast Performance:</strong> Leveraged the power of{" "}
          <strong>Next.js</strong> for server-side rendering and static site
          generation, resulting in fast load times and a smooth user experience.
        </>,
        <>
          <strong>Type Safety:</strong> Incorporated <strong>TypeScript</strong>{" "}
          to ensure robust type-checking and improve code maintainability and
          scalability.
        </>,
        <>
          <strong>Custom Styling:</strong> Utilized{" "}
          <strong>Tailwind CSS</strong> to create a unique, modern design that
          is both visually appealing and easy to maintain.
        </>,
        <>
          <strong>Modular Architecture:</strong> Designed the application with a
          modular architecture, making it easy to extend and maintain in the
          future.
        </>,
        <>
          <strong>API Integration:</strong> Integrated with external APIs to
          fetch dynamic content, showcasing the ability to work with third-party
          services and data.
        </>,
      ],
      technologies: [
        <strong>Next.js:</strong>,
        <strong>Typescript:</strong>,
        <strong>Tailwind CSS:</strong>,
      ],
      introductionList: [
        {
          key: "Language",
          value: <strong>Typescript</strong>,
        },
        {
          key: "Framework",
          value: <strong>Next.js</strong>,
        },
        {
          key: "Styling",
          value: <strong>Tailwind CSS</strong>,
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
      id: 2,
      title: (
        <strong>High-Performance Dashboard with React and Tailwind CSS</strong>
      ),
      overview: (
        <>
          I developed a high-performance <strong>dashboard</strong> for a
          company, allowing them to efficiently manage users, companies, roles,
          and permissions. This project spanned over 8 months and involved the
          use of cutting-edge technologies like <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and Redux.
          The dashboard significantly improved the company’s operational
          efficiency and user management capabilities.
        </>
      ),
      features: [
        <>
          <strong>Role-Based Access Control:</strong> Advanced role and
          permission management for secure access.
        </>,
        <>
          <strong>Efficient State Management:</strong> Utilized{" "}
          <strong>Redux</strong> for state management, ensuring a predictable
          and maintainable codebase.
        </>,
        <>
          <strong>Customizable UI:</strong> Used <strong>Tailwind CSS</strong>{" "}
          to create a highly customizable and visually appealing interface.
        </>,
        <>
          <strong>TypeScript Integration:</strong> Leveraged{" "}
          <strong>TypeScript</strong> to enhance code quality and
          maintainability.
        </>,
      ],
      technologies: [
        <strong>React:</strong>,
        <strong>Typescript:</strong>,
        <strong>Tailwind CSS:</strong>,
      ],
      introductionList: [
        {
          key: "Language",
          value: <strong>Typescript</strong>,
        },
        {
          key: "Library",
          value: <strong>React</strong>,
        },
        {
          key: "Styling",
          value: <strong>Tailwind CSS</strong>,
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
      title: <strong>React</strong>,
      tag: "react",
      icon: <ReactIcon size={18} />,
    },
    {
      title: <strong>Next.js</strong>,
      tag: "next",
      icon: <NextjsIcon size={18} />,
    },
    {
      title: <strong>Typescript</strong>,
      tag: "typescript",
      icon: <TSIcon size={18} />,
    },
    {
      title: <strong>Javascript</strong>,
      tag: "js",
      icon: <JSIcon size={18} />,
    },
    {
      title: <strong>Tailwind CSS</strong>,
      tag: "tailwind",
      icon: <TailwindIcon size={18} />,
    },
    {
      title: <strong>Material UI</strong>,
      tag: "material",
      icon: <MUIIcon size={18} />,
    },
  ],
};
