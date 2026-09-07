export const ACCENTS = [
  { name: 'Electric blue', value: '#3B82F6' },
  { name: 'Deep indigo', value: '#1D4ED8' },
  { name: 'Violet', value: '#7C6BFF' },
  { name: 'Cyan', value: '#22D3EE' },
  { name: 'Amber', value: '#F59E0B' },
]

export const SERVICES = [
  {
    num: '01', title: 'Software & Product',
    desc: 'Digital products engineered around your business, your users and your goals.',
    cta: 'Explore Software',
    items: ['Custom Software Development', 'Web Application Development', 'Mobile Application Development', 'SaaS Development', 'API Development', 'Enterprise Applications', 'Product Engineering', 'Legacy Modernization'],
  },
  {
    num: '02', title: 'AI & Data',
    desc: 'Turn data and artificial intelligence into practical business capabilities.',
    cta: 'Explore AI & Data',
    items: ['Artificial Intelligence', 'Generative AI', 'AI Agents', 'Machine Learning', 'Data Engineering', 'Data Analytics', 'Business Intelligence', 'Predictive Analytics', 'AI Automation'],
  },
  {
    num: '03', title: 'Cloud & DevOps',
    desc: 'Infrastructure designed to deploy faster, operate reliably and scale confidently.',
    cta: 'Explore Cloud',
    items: ['Cloud Architecture', 'Cloud Migration', 'DevOps', 'CI/CD', 'Infrastructure Automation', 'Docker', 'Kubernetes', 'Monitoring', 'Performance Optimization'],
  },
  {
    num: '04', title: 'Design & Digital Experience',
    desc: 'Digital experiences that are intuitive, useful and built around real people.',
    cta: 'Explore Design',
    items: ['UI/UX Design', 'Product Design', 'Website Development', 'E-commerce', 'Design Systems', 'Branding', 'Digital Experiences'],
  },
  {
    num: '05', title: 'Automation & Integration',
    desc: 'Connect systems, eliminate repetitive work and make your business run smarter.',
    cta: 'Explore Automation',
    items: ['Business Process Automation', 'Workflow Automation', 'System Integration', 'API Integrations', 'CRM Integration', 'ERP Integration', 'Custom Internal Tools', 'AI-powered Automation'],
  },
  {
    num: '06', title: 'Engineering & Support',
    desc: 'Extend your technology capabilities with experienced engineering teams.',
    cta: 'Explore Engineering',
    items: ['Dedicated Development Teams', 'Staff Augmentation', 'QA & Testing', 'Test Automation', 'Code Reviews', 'Maintenance', 'Technical Support', 'Application Modernization'],
  },
]

export const PIPELINE = [
  { n: '01', label: 'Discovery & strategy', meta: 'scoped' },
  { n: '02', label: 'Product design', meta: 'systemized' },
  { n: '03', label: 'Engineering', meta: 'in build' },
  { n: '04', label: 'QA & automation', meta: 'gated' },
  { n: '05', label: 'Cloud deployment', meta: 'ci/cd' },
  { n: '06', label: 'Scale & support', meta: 'ongoing' },
]

export const JOURNEY = [
  { name: 'IDEA', note: 'problem framing' },
  { name: 'DESIGN', note: 'experience' },
  { name: 'BUILD', note: 'engineering' },
  { name: 'TEST', note: 'quality' },
  { name: 'DEPLOY', note: 'infrastructure' },
  { name: 'SCALE', note: 'growth' },
]

export const PROBLEMS = [
  { num: '01', quote: '“We have an idea.”', solution: 'Product Development', body: 'Turn your concept into a real digital product.' },
  { num: '02', quote: '“Too much manual work.”', solution: 'AI & Automation', body: 'Automate repetitive processes and give your team time back.' },
  { num: '03', quote: '“Our systems don’t talk to each other.”', solution: 'Integration', body: 'Connect your tools, systems and data.' },
  { num: '04', quote: '“Our technology is holding us back.”', solution: 'Modernization', body: 'Upgrade legacy systems without disrupting the business.' },
  { num: '05', quote: '“We need more engineering capacity.”', solution: 'Dedicated Teams', body: 'Extend your team with experienced developers, designers and QA engineers.' },
]

export const PROCESS = [
  { num: '01', name: 'Discover', body: 'Understand the business, users and problem.' },
  { num: '02', name: 'Define', body: 'Turn requirements into a clear product and technology strategy.' },
  { num: '03', name: 'Design', body: 'Create intuitive experiences and scalable product architecture.' },
  { num: '04', name: 'Build', body: 'Engineer the solution using modern technologies.' },
  { num: '05', name: 'Test', body: 'Validate quality, security, performance and reliability.' },
  { num: '06', name: 'Launch', body: 'Deploy, monitor and optimize.' },
  { num: '07', name: 'Scale', body: 'Continuously improve as the business grows.' },
]

export const TECH = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'C#'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Angular'] },
  { name: 'Backend', items: ['Django', 'FastAPI', 'Node.js', '.NET'] },
  { name: 'AI & Data', items: ['Machine Learning', 'Generative AI', 'LLMs', 'Data Engineering', 'Analytics'] },
  { name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
]

export const WORK = [
  {
    num: 'Case 01', tag: 'automation', name: 'AI Automation Platform', industry: 'Business Operations',
    challenge: 'Manual workflows were consuming valuable time.',
    solution: 'An AI-powered automation platform connecting existing systems and automating repetitive processes.',
    stack: ['Python', 'LLMs', 'FastAPI', 'AWS'], outcome: 'Placeholder example — outcomes to be supplied by the company.',
  },
  {
    num: 'Case 02', tag: 'commerce', name: 'Digital Commerce Platform', industry: 'Retail',
    challenge: 'Disconnected systems created a fragmented customer experience.',
    solution: 'A scalable digital commerce platform connecting customer experience, operations and business systems.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Kubernetes'], outcome: 'Placeholder example — outcomes to be supplied by the company.',
  },
  {
    num: 'Case 03', tag: 'enterprise', name: 'Enterprise Management Platform', industry: 'Enterprise',
    challenge: 'Complex business operations were spread across multiple systems.',
    solution: 'A centralized platform designed to simplify operations and provide a unified view of the business.',
    stack: ['React', 'Django', 'Azure', 'Redis'], outcome: 'Placeholder example — outcomes to be supplied by the company.',
  },
]

export const PRINCIPLES = [
  { num: '01', title: 'Business first', body: 'We understand the problem before choosing the technology.' },
  { num: '02', title: 'Engineered to scale', body: 'We build with reliability, maintainability and growth in mind.' },
  { num: '03', title: 'One team', body: 'Designers, developers, AI specialists and infrastructure engineers working together.' },
  { num: '04', title: 'Built for people', body: 'Technology should simplify work, not make it more complicated.' },
]

export const FOUNDERS = [
  { num: '01', name: 'Founder One', role: 'Chief Executive Officer', bio: 'Placeholder bio — leads company strategy, client partnerships and long-term technology direction.' },
  { num: '02', name: 'Founder Two', role: 'Chief Technology Officer', bio: 'Placeholder bio — owns engineering standards, architecture decisions and platform reliability.' },
  { num: '03', name: 'Founder Three', role: 'Head of AI & Data', bio: 'Placeholder bio — leads applied AI, data engineering and analytics practice across projects.' },
  { num: '04', name: 'Founder Four', role: 'Head of Design & Product', bio: 'Placeholder bio — leads product thinking, experience design and the shared design system.' },
]
