import React from 'react';

import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  ReactIcon,
  TypescriptIcon,
  DockerIcon,
  ExpressIcon,
  JwtIcon,
  PostgreSQLIcon,
} from './techStackIcons';

type Projects = {
  id: number;
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
  status: string;
  image: string;
};

// Projects data
export const PROJECTS: Projects[] = [
  {
    id: 1,
    title: 'Shop-clone',
    description:
      'A Ecommerce website where you can buy and sell products built with Next.js and supabase',
    link: 'https://ecommerce-supabase-nextjs.vercel.app/',
    github: 'https://github.com/tarektech/shopease-ecommerce',
    tags: ['Next.js', 'Supabase', 'Full Stack', 'Ecommerce'],
    status: 'Full Stack',
    image: '/projects/shop-clone-ecommerce.png',
  },
  {
    id: 2,
    title: 'developers-blog',
    description:
      'A developer blog for sharing knowledge and experiences, built with Next.js and Supabase',
    link: 'https://developersblog-psi.vercel.app/',
    github: 'https://github.com/tarektech/devblog',
    tags: ['Next.js', 'Supabase', 'Blog'],
    status: 'Full Stack',
    image: '/projects/DevBlog.png',
  },
  {
    id: 3,
    title: 'Online Education platform',
    description:
      'An online education platform for students to learn and grow built with Next.js and supabase',
    link: 'https://online-education-platform-kappa.vercel.app/',
    github: 'https://github.com/tarektech/online-education-platform', // Replace with actual GitHub URL
    tags: ['React.js', 'Frontend', 'Education', 'Responsive'],
    status: 'Frontend Only',
    image: '/projects/education-online-platform.png',
  },
  {
    id: 4,
    title: 'abstract-landing-page',
    description: 'A landing page built with basics of html, css and javascript',
    link: 'https://tarektech.github.io/abstract-landing-page/',
    github: 'https://github.com/tarektech/abstract-landing-page',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Frontend Only',
    image: '/projects/frontend-project-1.png',
  },
  {
    id: 5,
    title: 'insure-landing-page',
    description: 'A landing page built with basics of html, css and javascript',
    link: 'https://tarektech.github.io/insure-landing-page/',
    github: 'https://github.com/tarektech/insure-landing-page',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Frontend Only',
    image: '/projects/frontend-project-2.png',
  },
];

type Certifications = {
  title: string;
  year: string;
  category: string;
  icon: React.ReactNode;
};

// Certifications data
export const CERTIFICATIONS: Certifications[] = [
  {
    title: 'Prompt Engineering for ChatGPT',
    year: '2025',
    category: 'AI & Machine Learning',
    icon: <ReactIcon />,
  },
  {
    title: 'Foundations of Prompt Engineering',
    year: '2025',
    category: 'AI & Machine Learning',
    icon: <ReactIcon />,
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    year: '2024',
    category: 'Frontend Development',
    icon: <ReactIcon />,
  },
  {
    title: 'React Native – The Practical Guide',
    year: '2024',
    category: 'Mobile Development',
    icon: <ReactIcon />,
  },
  {
    title: 'MERN Stack – Full Stack MERN Development',
    year: '2024',
    category: 'Full Stack Development',
    icon: <ReactIcon />,
  },
  {
    title: 'CSS – Flexbox, Grid, SASS',
    year: '2022',
    category: 'Frontend Development',
    icon: <ReactIcon />,
  },
  {
    title: 'React – The Complete Guide (Hooks, Redux, Router)',
    year: '2022',
    category: 'Frontend Development',
    icon: <ReactIcon />,
  },
  {
    title: 'Node.js – The Complete Guide (MVC, REST, GraphQL, Deno)',
    year: '2022',
    category: 'Backend Development',
    icon: <ReactIcon />,
  },
  {
    title: 'Clean Code Practices',
    year: '2021–2022',
    category: 'Best Practices',
    icon: <ReactIcon />,
  },
  {
    title: 'JavaScript & jQuery',
    year: '2021–2022',
    category: 'Programming',
    icon: <ReactIcon />,
  },
  {
    title: 'Figma UI/UX Design',
    year: '2021–2022',
    category: 'Design',
    icon: <ReactIcon />,
  },
];

type CategoryColors = {
  [key: string]: string;
};
export const CATEGORY_COLORS: CategoryColors = {
  'AI & Machine Learning': 'from-orange-500 to-pink-500',
  'Frontend Development': 'from-orange-500 to-cyan-500',
  'Mobile Development': 'from-green-500 to-orange-500',
  'Full Stack Development': 'from-orange-500 to-red-500',
  'Backend Development': 'from-gray-500 to-orange-500',
  'Best Practices': 'from-yellow-500 to-orange-500',
  Programming: 'from-indigo-500 to-orange-500',
  Design: 'from-pink-500 to-orange-500',
};

type TechStack = {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
};
// Tech Stack data - updated to match the image design
export const TECH_STACK: TechStack[] = [
  {
    name: 'HTML',
    icon: <HtmlIcon />,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'CSS',
    icon: <CssIcon />,
    color: 'from-orange-500 to-cyan-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'JavaScript',
    icon: <JsIcon />,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindIcon />,
    color: 'from-cyan-500 to-orange-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Express JS',
    icon: <ExpressIcon />,
    color: 'from-orange-500 to-pink-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Node JS',
    icon: <NodeIcon />,
    color: 'from-green-500 to-orange-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'React + Native',
    icon: <ReactIcon />,
    color: 'from-cyan-500 to-orange-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'MongoDB',
    icon: <MongoIcon />,
    color: 'from-green-500 to-teal-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'JWT',
    icon: <JwtIcon />,
    color: 'from-pink-500 to-orange-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQLIcon />,
    color: 'from-orange-500 to-indigo-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'TypeScript',
    icon: <TypescriptIcon />,
    color: 'from-orange-600 to-orange-800',
    bgColor: 'bg-orange-600/10',
  },
  {
    name: 'Docker',
    icon: <DockerIcon />,
    color: 'from-orange-500 to-cyan-500',
    bgColor: 'bg-orange-500/10',
  },
];
