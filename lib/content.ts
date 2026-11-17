/**
 * All site copy lives here so it is easy to update as experience grows.
 * Nothing in this file is invented: every entry mirrors what Jash has confirmed.
 */
export const SITE = {
  name: 'Jash Panchal',
  email: 'jashpanchal95@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jash-panchal-b1ba61449/',
  instagram: 'https://www.instagram.com/jashpanchal.in/',
  credly: 'https://www.credly.com/go/8bNmXDSO',
} as const;

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export const STATEMENT = [
  { k: 'Curious', r: 'by nature' },
  { k: 'Multidisciplinary', r: 'by interest' },
  { k: 'Technological', r: 'by direction' },
] as const;

export interface Trait { tag: string; title: string; text: string }
export const TRAITS: Trait[] = [
  { tag: 'How I think', title: 'Intellectual curiosity', text: 'Start with the question, not the answer.' },
  { tag: 'What pulls me in', title: 'Technology enthusiasm', text: 'Follow what is new, then try it.' },
  { tag: 'How I think', title: 'Multidisciplinary thinking', text: 'Connect fields that rarely meet.' },
  { tag: 'What pulls me in', title: 'Creative exploration', text: 'Leave room for unconventional ideas.' },
  { tag: 'How I think', title: 'Analytical mindset', text: 'Take things apart to see how they work.' },
  { tag: 'What pulls me in', title: 'Continuous learning', text: 'Stay a student, whatever the subject.' },
];

export interface Milestone { tag: string; title: string; lines?: string[] }
export const EDUCATION: Milestone[] = [
  { tag: 'Secondary', title: 'Class X, MH Board' },
  { tag: 'Higher secondary', title: 'Class XII, MH Board' },
  {
    tag: 'Undergraduate',
    title: 'Karnavati University',
    lines: [
      'Bachelor of Technology, Computer Science Engineering',
      'Specialisation in Artificial Intelligence & Machine Learning',
      'Currently pursuing',
    ],
  },
];

export interface Role { year: string; meta: string; title: string; sub: string; points: string[]; note?: string }
export const EXPERIENCE: Role[] = [
  {
    year: '2026', meta: '3 months', title: 'Pixel Infotech', sub: 'Sales & Lead Generation',
    points: ['Conducted cold calls.', 'Worked on generating potential business leads.', 'Gained practical exposure to sales communication and prospecting.'],
  },
  {
    year: '2026', meta: 'Exploration', title: 'Independent freelancing exploration', sub: 'Freelance website sales',
    points: ['Explored the website development services market.', 'Practised prospecting and sales outreach.', 'Developed an understanding of market research and customer acquisition.'],
    note: 'An exploration of the market. No client work is claimed here.',
  },
];

export const PROJECTS = [
  { title: 'Physiotherapy Clinic Website', text: 'Created a website for a physiotherapy clinic using website development tools and AI-assisted workflows.' },
  { title: 'Dental Clinic Website', text: 'Created a website for a dental clinic, exploring digital presentation and business-oriented website development.' },
] as const;

export const WORKSHOP = [
  {
    label: 'The workshop', title: 'Where every program begins.',
    text: 'Python. C. C++. Programs kept exactly as they are: the foundations, practised in plain sight and never dressed up as more than that.',
    items: ['Python programs', 'C programs', 'C++ programs'],
  },
  {
    label: 'The laboratory', title: 'Curiosity, with a prompt.',
    text: 'Generative AI tools, tried and tested. AI-assisted workflows, set to work on real tasks. This is experimentation, labelled honestly: a learner at work, not an expert on display.',
    items: ['Experimented with generative AI tools', 'Used AI-assisted workflows to accomplish various tasks'],
  },
] as const;

export const SKILLS = [
  { name: 'Programming', text: 'Programs and practice exercises.', items: ['Python', 'C', 'C++'] },
  { name: 'Web development', text: 'The language of the web.', items: ['HTML'] },
  { name: 'Artificial intelligence', text: 'Generative AI and the workflows around it.', items: ['Generative AI', 'AI-assisted workflows'] },
  { name: 'Business', text: 'Learned through cold calling and lead generation.', items: ['Sales', 'Marketing'] },
  { name: 'Creative', text: 'A way of looking beyond the screen.', items: ['Photography'] },
  { name: 'Tools', text: 'Whatever helps an idea move.', items: ['AI tools and platforms'] },
] as const;

export type IconKey = 'camera' | 'atom' | 'spark' | 'growth' | 'overlap' | 'film' | 'compass';
export const INTERESTS: { title: string; text: string; icon: IconKey; wide?: boolean }[] = [
  { title: 'Photography', text: 'Learning to see light, framing and the story inside a single moment.', icon: 'camera', wide: true },
  { title: 'Science', text: 'Asking how the world works, then following the answer further.', icon: 'atom' },
  { title: 'Creativity', text: 'Making room for ideas that do not fit a template.', icon: 'spark' },
  { title: 'Business & entrepreneurship', text: 'Outreach, ventures, and how ideas find their people.', icon: 'growth' },
  { title: 'Learning across disciplines', text: 'Borrowing methods from one field to solve problems in another.', icon: 'overlap' },
  { title: 'Cinephile', text: 'Drawn to cinema as craft: story, framing and the choices behind every scene.', icon: 'film' },
  { title: 'Wanderlust', text: 'Travelling to see how other places live, look and think.', icon: 'compass' },
];
