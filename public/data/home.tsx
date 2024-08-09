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

export const homeSeo = {
  title:
    "Mohammad Esmaeilpour | Frontend Developer Specialized in Next.js, React, TypeScript",
  metadescription:
    "Welcome to the official website of Mohammad Esmaeilpour, a frontend developer specializing in Next.js, React, Typescript, Javascript, Tailwind, Material ui and modern web development. Explore my services, skills, and portfolio to see how I can elevate your digital presence.",
};

export const homeHeadings = {
  h1: {
    title:
      "Mohammad Esmaeilpour - Frontend Developer Specialized in Next.js & React",
    subTitle:
      "Crafting Exceptional Frontend Experiences with modern technologies",
  },
  h2: {
    abouteMe: {
      title: "About Me",
      subTitle:
        "Hi 👋, I'm Mohammad Esmaeilpour, a passionate frontend developer with a deep expertise in creating modern, responsive, and user-friendly web applications. With a focus on cutting-edge technologies like Next.js, React, and TypeScript, I build efficient and scalable solutions that deliver exceptional user experiences. My journey in web development has been driven by a love for coding, a dedication to continuous learning, and a commitment to delivering high-quality work.",
    },
    expertise: {
      title: "My Expertise in Next.js, React, and TypeScript",
      subTitle:
        "My core expertise lies in Next.js and React, where I've developed a range of dynamic, high-performance web applications.",
    },
    workHighlights: {
      title: "Projects Showcasing Tailwind CSS & Material UI",
      subTitle: "Specializing in Next.js, React, TypeScript, Tailwind, and MUI",
    },
    fifth: "Contact Me for Frontend Development Services",
  },
};

export const homeData = {
  skills: [
    {
      icon: <JSIcon size={60} />,
      title: "EcmaScript 5/6/7",
    },
    {
      icon: <TSIcon size={60} />,
      title: "Typescript",
    },
    {
      icon: <ReactIcon size={60} />,
      title: "React Js",
    },
    {
      icon: <NextjsIcon size={60} />,
      title: "Next Js",
    },

    {
      icon: <ReduxIcon size={60} />,
      title: "Redux",
    },

    {
      icon: <MUIIcon size={60} />,
      title: "Material Ui",
    },
    {
      icon: <TailwindIcon size={60} />,
      title: "Tailwind",
    },
    {
      icon: <BootstrapIcon size={60} />,
      title: "Bootstrap 4/5",
    },
    {
      icon: <SassIcon size={60} />,
      title: "Scss/Sass",
    },
    {
      icon: <CssIcon size={60} />,
      title: "CSS",
    },
    {
      icon: <HtmlIcon size={60} />,
      title: "HTML",
    },
    {
      icon: <GithubIcon size={60} />,
      title: "Github",
    },
    {
      icon: <GitIcon size={60} />,
      title: "Git",
    },
  ],
  timeline: [
    {
      dataAos: "fade-up",
      timelineDir: "start",
      title: "Type Safety",
      description: `Utilizing TypeScript to enhance code reliability and maintainability.`,
    },
    {
      dataAos: "fade-left",
      timelineDir: "end",
      title: "Performance Optimization",
      description:
        "Leveraging Next.js for server-side rendering and static site generation.",
    },
    {
      dataAos: "fade-right",
      timelineDir: "start",
      title: "Modern Styling",
      description:
        "Applying Tailwind CSS and MUI for consistent and accessible designs.",
    },
    {
      dataAos: "fade-left",
      timelineDir: "end",
      title: "Responsive Design",
      description:
        "Creating layouts that adapt seamlessly to various screen sizes.",
    },
    {
      dataAos: "fade-down",
      timelineDir: "start",
      title: "Best Practices",
      description:
        "Adhering to industry standards and continuously learning cutting-edge techniques.",
    },
  ],
  expertise: [
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
          description: "Faster rendering results in a better user experience.",
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
};
