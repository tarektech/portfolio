export type Certifications = {
  title: string
  year: string
  category: string
  image?: string
}

export const CERTIFICATIONS: Certifications[] = [
  {
    title: 'PostgreSQL for Everybody',
    year: '2025',
    category: 'Database',
    image: '/certifications/PostgreSQL-for-Everybody.jpg',
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    year: '2025',
    category: 'AI & Machine Learning',
    image: '/certifications/prompt-engineering.jpeg',
  },
  {
    title: 'Foundations of Prompt Engineering',
    year: '2025',
    category: 'AI & Machine Learning',
    image: '/certifications/foundation-prompt-engineering-AWS.jpg',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    year: '2024',
    category: 'Frontend Development',
    image: '/certifications/meta-front-end-developer.jpeg',
  },
  {
    title: 'React Native – The Practical Guide',
    year: '2024',
    category: 'Mobile Development',
    image: '/certifications/react-native.jpg',
  },
  {
    title: 'MERN Stack – Full Stack MERN Development',
    year: '2024',
    category: 'Full Stack Development',
    image: '/certifications/MERN-fullstack-development.jpg',
  },
  {
    title: 'CSS – Flexbox, Grid, SASS',
    year: '2022',
    category: 'Frontend Development',
    image: '/certifications/css-complete-guide.jpg',
  },
  {
    title: 'React – The Complete Guide (Hooks, Redux, Router)',
    year: '2022',
    category: 'Frontend Development',
    image: '/certifications/react-complete-guide.png',
  },
  {
    title: 'Node.js – The Complete Guide (MVC, REST, GraphQL, Deno)',
    year: '2022',
    category: 'Backend Development',
    image: '/certifications/nodejs.jpg',
  },
  {
    title: 'Clean Code Practices',
    year: '2021–2022',
    category: 'Best Practices',
    image: '/certifications/clean-code.jpg',
  },
  {
    title: 'JavaScript & jQuery',
    year: '2021–2022',
    category: 'Programming',
    image: '/certifications/javascript.jpg',
  },
  {
    title: 'Figma UI/UX Design',
    year: '2021–2022',
    category: 'Design',
    image: '/certifications/figma.png',
  },
]

/////////////////////

export const CATEGORY_COLORS = {
  'AI & Machine Learning': 'from-orange-500 to-pink-500',
  'Frontend Development': 'from-orange-500 to-cyan-500',
  'Mobile Development': 'from-green-500 to-orange-500',
  'Full Stack Development': 'from-orange-500 to-red-500',
  'Backend Development': 'from-gray-500 to-orange-500',
  'Best Practices': 'from-yellow-500 to-orange-500',
  Programming: 'from-indigo-500 to-orange-500',
  Design: 'from-pink-500 to-orange-500',
  Database: 'from-red-500 to-orange-500',
}
