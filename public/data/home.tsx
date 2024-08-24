import BootstrapIcon from "@/app/components/icons/BootstrapIcon";
import BugIcon from "@/app/components/icons/BugIcon";
import ClockIcon from "@/app/components/icons/ClockIcon";
import CollabrationIcon from "@/app/components/icons/CollabrationIcon";
import CssIcon from "@/app/components/icons/CssIcon";
import GithubIcon from "@/app/components/icons/GithubIcon";
import GitIcon from "@/app/components/icons/GitIcon";
import HandShakeIcon from "@/app/components/icons/HandShakeIcon";
import HighVoltageIcon from "@/app/components/icons/HighVoltageIcon";
import HourglassIcon from "@/app/components/icons/HourglassIcon";
import HtmlIcon from "@/app/components/icons/HtmlIcon";
import JSIcon from "@/app/components/icons/JSIcon";
import ManRunningIcon from "@/app/components/icons/ManRunningIcon";
import MinimizeIcon from "@/app/components/icons/MinimizeIcon";
import MUIIcon from "@/app/components/icons/MUIIcon";
import NextjsIcon from "@/app/components/icons/NextjsIcon";
import ReactIcon from "@/app/components/icons/ReactIcon";
import ReduxIcon from "@/app/components/icons/ReduxIcon";
import ResponsiveIcon from "@/app/components/icons/ResponsiveIcon";
import SassIcon from "@/app/components/icons/SassIcon";
import SearchLabtopScreenIcon from "@/app/components/icons/SearchLabtopScreenIcon";
import TailwindIcon from "@/app/components/icons/TailwindIcon";
import TSIcon from "@/app/components/icons/TSIcon";
import room from "@/public/img/projects/3d-room.jpg";
import roboxonWebsite from "@/public/img/projects/roboxon-website.jpg";
import roboxonDashboard from "@/public/img/projects/roboxon-dashboard.jpg";
import mamad from "@/public/img/ui/mohammad.png";
import { TSeoProps } from "@/app/types/global";
import { THomeData } from "@/app/types/home";

export const homeSeo: TSeoProps = {
  title: "Front-End Developer | Mohammad Esmaeilpour - Next.js, React Expert",
  metadescription:
    "Experienced Front-End Developer specializing in Next.js, React, and TypeScript. Explore my portfolio and discover my innovative web solutions.",
};

const homeHeadings = {
  h1: {
    title: (
      <>
        <strong>
          <strong>Mohammad Esmaeilpour</strong> {""}
        </strong>
        <strong>Front-End Developer</strong> Specializing in
      </>
    ),
    subTitle:
      "Building High-Performance Web Applications with Modern Technologies",
  },
  h2: {
    abouteMe: {
      title:
        "About Me – Front-End Developer with Expertise in Modern Web Technologies",
      subTitle: (
        <>
          Hi👋 <br/> my name is <strong>Mohammad Esmaeilpour</strong> With over +3
          years of experience in <b>front-end development</b>, I specialize in
          creating dynamic, user-friendly web applications using{" "}
          <b>Next.js, React, and TypeScript</b>. My journey in web development
          began with a passion for technology and a commitment to continuous
          learning. Today, I help businesses build efficient, scalable web
          solutions that meet their unique needs.
        </>
      ),
    },
    expertise: {
      title: "My Expertise in Front-End Development",
      subTitle:
        "My core expertise lies in Next.js and React, where I've developed a range of dynamic, high-performance web applications.",
    },
    workHighlights: {
      title: "Highlighted Projects – A Showcase of My Work",
      subTitle: "High speed Platform Built with Next.js !",
    },
  },
};

export const homeData: THomeData = {
  hero: {
    title: homeHeadings.h1.title,
    subTitle: homeHeadings.h1.subTitle,
    callToAction: [
      {
        title: "View my projects",
        link: "/projects",
        btn: "primary",
      },
      {
        title: "Get to know me",
        link: "/about",
        btn: "secondary",
      },
    ],
  },
  skills: [
    {
      icon: <JSIcon size={60} />,
      id: 1,
    },
    {
      icon: <TSIcon size={60} />,
      id: 2,
    },
    {
      icon: <ReactIcon size={60} />,
      id: 3,
    },
    {
      icon: <NextjsIcon size={60} />,
      id: 4,
    },
    {
      icon: <ReduxIcon size={60} />,
      id: 5,
    },
    {
      icon: <MUIIcon size={60} />,
      id: 6,
    },
    {
      icon: <TailwindIcon size={60} />,
      id: 7,
    },
    {
      icon: <BootstrapIcon size={60} />,
      id: 8,
    },
    {
      icon: <SassIcon size={60} />,
      id: 9,
    },
    {
      icon: <CssIcon size={60} />,
      id: 10,
    },
    {
      icon: <HtmlIcon size={60} />,
      id: 11,
    },
    {
      icon: <GithubIcon size={60} />,
      id: 12,
    },
    {
      icon: <GitIcon size={60} />,
      id: 13,
    },
  ],
  aboutMe: {
    title: homeHeadings.h2.abouteMe.title,
    subTitle: homeHeadings.h2.abouteMe.subTitle,
    img: mamad,
    intoView: {
      description: "Learn more about my ",
      links: [
        {
          title: "expertise",
          target: "expertise",
        },
        {
          title: "highlighted projects",
          target: "work-highlight",
        },
      ],
    },
  },
  expertise: {
    title: homeHeadings.h2.expertise.title,
    subTitle: homeHeadings.h2.expertise.subTitle,
    tabs: [
      {
        label: "Type Safety with TypeScript",
        description: (
          <>
            <b>TypeScript</b> is at the heart of building reliable and
            maintainable web applications. By enhancing JavaScript with static
            type definitions, I ensure that the codebase is more predictable and
            less prone to runtime errors. This approach not only speeds up the
            development process but also results in a more stable and robust
            application.
          </>
        ),
        keyStrengths: [
          {
            title: "Type Inference & Annotation",
            description:
              "I effectively use TypeScript’s type inference to reduce boilerplate code while explicitly annotating types where clarity is needed.",
          },
          {
            title: "Advanced Types",
            description:
              "Leveraging generics, union types, and interfaces allows me to create flexible and reusable components.",
          },
          {
            title: "Strict Typing",
            description:
              "By enabling strict mode, I catch potential issues early, ensuring a higher level of code safety and quality.",
          },
        ],
        impact: [
          {
            title: "Fewer Bugs",
            description:
              "Early detection of errors leads to more reliable software.",
            icon: <BugIcon size={25} />,
          },
          {
            title: "Better Collaboration",
            description:
              "Self-explanatory code enhances teamwork and onboarding.",
            icon: <CollabrationIcon size={25} />,
          },
        ],
      },
      {
        label: "Performance Optimization with Next.js",
        description:
          "In modern web development, performance is critical to user satisfaction and SEO. My proficiency in Next.js enables me to optimize applications for speed and efficiency. Whether through server-side rendering (SSR), static site generation (SSG), or dynamic routing, I focus on delivering lightning-fast experiences that keep users engaged.",
        keyStrengths: [
          {
            title: "Server-Side Rendering (SSR)",
            description:
              "I use SSR to ensure faster initial page loads and improved SEO.",
          },
          {
            title: "Static Site Generation (SSG)",
            description:
              "With SSG, I pre-build pages for near-instant loading, perfect for content-heavy sites.",
          },
          {
            title: "Optimized Data Fetching",
            description:
              "I employ Next.js's data-fetching methods like getStaticProps and getServerSideProps for efficient content delivery.",
          },
        ],
        impact: [
          {
            title: "Improved Load Times",
            description:
              "Faster rendering results in a better user experience.",
            icon: <ClockIcon size={25} />,
          },
          {
            title: "Enhanced SEO",
            description:
              "Pre-rendered content boosts search engine visibility, driving more traffic.",
            icon: <SearchLabtopScreenIcon size={25} />,
          },
        ],
      },
      {
        label: "Modern Styling with Tailwind CSS & Material UI",
        description:
          "Design consistency and accessibility are pivotal to user experience. I specialize in using Tailwind CSS and Material UI to create polished, responsive, and accessible interfaces. These tools allow me to implement custom designs quickly, ensuring that your application not only looks great but also performs well across all devices.",
        keyStrengths: [
          {
            title: "Utility-First Styling (Tailwind CSS)",
            description:
              "Tailwind CSS enables me to create custom, responsive designs with minimal code, ensuring maintainability and scalability.",
          },
          {
            title: "Material Design (Material UI)",
            description:
              "By applying Material Design principles, I create user interfaces that are intuitive and consistent.",
          },
          {
            title: "Accessibility",
            description:
              "I prioritize creating designs that are accessible to all users, adhering to WCAG standards.",
          },
        ],
        impact: [
          {
            title: "Rapid Prototyping",
            description:
              "Quick iterations and design changes without sacrificing quality.",
            icon: <ManRunningIcon size={25} />,
          },
          {
            title: "User-Friendly Interfaces",
            description:
              "Consistent, accessible design enhances user engagement.",
            icon: <HandShakeIcon size={25} />,
          },
        ],
      },
      {
        label: "Responsive Design",
        description:
          "Responsive design is essential in delivering a seamless user experience across devices. I specialize in crafting designs that adapt gracefully to different screen sizes, ensuring your application looks and functions perfectly on smartphones, tablets, and desktops alike.",
        keyStrengths: [
          {
            title: "Mobile-First Approach",
            description:
              "I start by designing for smaller screens, ensuring a solid foundation for scaling up to larger displays.",
          },
          {
            title: "Modern Layout Techniques",
            description:
              "Utilizing Flexbox and CSS Grid, I build layouts that are flexible and robust.",
          },
          {
            title: "Media Queries",
            description:
              "I fine-tune designs with CSS media queries to ensure pixel-perfect adjustments across various devices.",
          },
        ],
        impact: [
          {
            title: "Consistent Experience",
            description:
              "Users enjoy a seamless experience, no matter what device they use.",
            icon: <ResponsiveIcon size={25} />,
          },
          {
            title: "Higher Engagement",
            description:
              "A well-optimized design leads to increased user satisfaction and retention.",
            icon: <HighVoltageIcon size={25} />,
          },
        ],
      },
      {
        label: "Adherence to Best Practices",
        description:
          "Delivering high-quality, scalable applications requires more than just technical skill—it demands adherence to best practices. I follow industry standards in coding, version control, and testing to ensure that the applications I build are not only functional but also future-proof and maintainable.",
        keyStrengths: [
          {
            title: "Version Control (Git)",
            description:
              "I maintain a clean and organized codebase using Git, enabling efficient collaboration and streamlined project management.",
          },
          {
            title: "Comprehensive Testing",
            description:
              "I implement thorough testing strategies, including unit, integration, and end-to-end tests, to ensure code reliability.",
          },
          {
            title: "Code Quality & Refactoring",
            description:
              "Regular code reviews and refactoring sessions help me maintain a clean, efficient, and scalable codebase.",
          },
        ],
        impact: [
          {
            title: "Long-Term Maintainability",
            description:
              "Clean, well-structured code is easier to maintain and extend.",
            icon: <HourglassIcon size={25} />,
          },
          {
            title: "Reduced Technical Debt",
            description:
              "Adhering to best practices minimizes the accumulation of technical debt, leading to a more sustainable development process.",
            icon: <MinimizeIcon size={25} />,
          },
        ],
      },
    ],
  },
  workHighlights: {
    title: homeHeadings.h2.workHighlights.title,
    subTitle: homeHeadings.h2.workHighlights.subTitle,
    description:
      "This project involved developing a fast, scalable web application using Next.js, React, and Tailwind CSS. The Apps performance improved by 30%, leading to a significant increase in user engagement and sales.",
    callToAction: {
      title: (
        <strong className="btn btn-primary mt-10">
          Mohammad Esmaeilpour Projects
        </strong>
      ),
      link: "/projects",
    },
    cards: [
      {
        id: 0,
        title: "3D Room using CSS and JavaScript",
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
        id: 1,
        title: "Modern Next.js Responsive Website - Roboxon",
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
        id: 2,
        title: "High-Performance Dashboard with React and Tailwind CSS",
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
  },
};
