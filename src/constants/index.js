import {
  ai,
  software,
  cloud,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  linkedIn,
  gitHub,
  resume,
  instagram,
  rome2rio,
  cra,
  c,
  aws,
  csharp,
  java,
  mysql,
  python,
  cpanel,
  wordpress,
  twitter,
  dijkstra,
  rpg,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Software Development",
    icon: software,
  },
  {
    title: "Artificial Intelligence",
    icon: ai,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Rome2rio, Melbourne",
    icon: rome2rio,
    iconBg: "#f83b92",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Building a hotels and accommodation experience that helps users book the right hotel for their trip using both frontend (React, TypeScript) and backend (C#, .NET) technology.",
      "Successfully launched Accommodation MVP as part of the pod team, contributing to various areas such as the header section, i18n translation system, implementing an initial filter button and improving user flow between calendar and room details form components.",
      "Conducted a front-end accessibility audit and improved the codebase and discovered a critical bug during bug bashing session.",
      "Leveraged React, JavaScript, TypeScript, and C# to develop the front-end and back-end of Accommodation MVP.",
      "Maintained the product and released updates on a daily basis as part of the BAU Roaster, ensuring millions of users had a seamless experience.",
      "Participated in brown bag sessions focused on learning new topics such as CI/CD, SEO, GitHub workflow, and System Design.",
      "Demonstrated excellent communication skills by delivering a speech at the company's weekly all-hands meeting and hosting a Mid-OKR check-in with leaders of the company.",
    ],
    source_code_link: "https://www.rome2rio.com/",
  },
  {
    title: "Junior Software Engineer & Data Analyst",
    company_name: "CopyRich Academy (CRA), Singapore",
    icon: cra,
    iconBg: "#0b144b",
    date: "Dec 2020 - Jan 2023",
    points: [
      "Established an email marketing system deploying AWS Cloud services (EC2, SNS, SES) and managed over 2,000 contacts, solved the pre-existing problem of needing to rely on third-party email provider with content restriction",
      "Analysed website traffic data using Google Analytics to quantify campaign results and developed a targeted marketing strategy based on the data in combination with Facebook ads and Facebook Pixel",
      "Planned and structured the company's website, including landing pages and 5 product pages. Constantly improving the page design with customers’ needs in mind for their ease of use and navigation",
      "Administered web server and database of the email system leveraging AWS services and cPanel & WHM, writing Cron Jobs and scripts to maintain the system.",
    ],
    source_code_link: "https://copyrichacademy.com/",
  },
];

const projects = [
  {
    name: "Personal Portfolio website",
    description: "The website you are currently viewing!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ZyLen888/3d-portfolio",
  },
  {
    name: "Subjectivity index based on tweets",
    description:
      "Leveraging supervised learning techniques to predict people’s subjectivity using their posts on Twitter",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Regression",
        color: "green-text-gradient",
      },
      {
        name: "Decision Tree",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/ZyLen888/Subjectivity-Index-Twitter",
  },
  {
    name: "Dijkstra Algorithm: Solver for the Flow Free game",
    description:
      "Applying learned knowledge about Dijkstra Algorithm to build a solver for the Flow Free Game",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithm & Data Structure",
        color: "green-text-gradient",
      },
      {
        name: "Dijkstra",
        color: "pink-text-gradient",
      },
    ],
    image: dijkstra,
    source_code_link:
      "https://github.com/ZyLen888/Dijkstra-Solver-for-the-Flow-Free-game",
  },
  {
    name: "RPG Game",
    description:
      "A fantasy role-playing game in Java called ShadowDimension (inspired by Stranger Things)",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "green-text-gradient",
      },
      {
        name: "UML Diagram",
        color: "pink-text-gradient",
      },
    ],
    image: rpg,
    source_code_link: "https://github.com/ZyLen888/Shadow-Dimension",
  },
];

const socialMedia = [
  {
    name: "LinkedIn",
    image: linkedIn,
    source_code_link: "https://www.linkedin.com/in/zhenliumeimiliu/",
  },
  {
    name: "GitHub",
    image: gitHub,
    source_code_link: "https://github.com/ZyLen888",
  },
  {
    name: "Instagram",
    image: instagram,
    source_code_link: "https://www.instagram.com/meimi_er/",
  },
];

export { services, technologies, experiences, projects, socialMedia };
