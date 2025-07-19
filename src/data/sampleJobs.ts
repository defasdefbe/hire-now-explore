import { Job } from '@/types/job';

export const sampleJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'Join our dynamic team as a Senior Frontend Developer! You will be responsible for building cutting-edge web applications using React, TypeScript, and modern frontend technologies. Work with a talented team to create user-friendly interfaces that scale to millions of users.',
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong knowledge of HTML, CSS, and JavaScript',
      'Experience with state management (Redux, Zustand)',
      'Familiarity with testing frameworks (Jest, React Testing Library)',
      'Understanding of web performance optimization'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible working hours',
      'Remote work options',
      'Professional development budget'
    ],
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15',
    experienceLevel: 'Senior Level',
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript', 'Redux']
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'We are looking for an experienced Product Manager to drive product strategy and execution. You will work closely with engineering, design, and business teams to deliver exceptional products that delight our customers.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with Agile/Scrum methodologies',
      'Excellent communication and leadership skills',
      'Data-driven decision making approach'
    ],
    benefits: [
      'Equity participation',
      'Comprehensive health coverage',
      'Unlimited PTO',
      'Commuter benefits',
      'Team building events'
    ],
    postedDate: '2024-01-12',
    applicationDeadline: '2024-02-12',
    experienceLevel: 'Mid Level',
    skills: ['Product Strategy', 'Agile', 'Analytics', 'Leadership', 'User Research']
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$80,000 - $100,000',
    description: 'Create beautiful and intuitive user experiences for our digital products. You will collaborate with product managers and developers to design interfaces that are both functional and aesthetically pleasing.',
    requirements: [
      '2+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong portfolio demonstrating design thinking',
      'Understanding of user-centered design principles',
      'Experience with prototyping and user testing'
    ],
    benefits: [
      'Creative freedom and autonomy',
      'Latest design tools and equipment',
      'Health and wellness programs',
      'Flexible schedule',
      'Design conference attendance'
    ],
    postedDate: '2024-01-10',
    applicationDeadline: '2024-02-10',
    experienceLevel: 'Mid Level',
    skills: ['Figma', 'User Research', 'Prototyping', 'Visual Design', 'Usability Testing']
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataDriven Corp',
    location: 'Remote',
    type: 'Remote',
    salary: '$110,000 - $140,000',
    description: 'Analyze large datasets to extract meaningful insights and build predictive models. You will work with machine learning algorithms and statistical methods to solve complex business problems.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      'Strong programming skills in Python or R',
      'Experience with machine learning frameworks',
      'Knowledge of SQL and database systems',
      'Strong statistical analysis skills'
    ],
    benefits: [
      'Fully remote position',
      'Top-tier hardware provided',
      'Learning and development budget',
      'Annual company retreats',
      'Stock options'
    ],
    postedDate: '2024-01-08',
    applicationDeadline: '2024-02-08',
    experienceLevel: 'Senior Level',
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow']
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$95,000 - $125,000',
    description: 'Streamline our development and deployment processes by implementing CI/CD pipelines and managing cloud infrastructure. You will ensure our applications are scalable, reliable, and secure.',
    requirements: [
      '3+ years of DevOps experience',
      'Strong knowledge of AWS or Azure',
      'Experience with Docker and Kubernetes',
      'Proficiency in Infrastructure as Code (Terraform)',
      'Understanding of monitoring and logging tools'
    ],
    benefits: [
      'Cloud certification support',
      'Home office setup allowance',
      'Performance bonuses',
      'Health and wellness benefits',
      '4-day work week'
    ],
    postedDate: '2024-01-05',
    applicationDeadline: '2024-02-05',
    experienceLevel: 'Mid Level',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
  },
  {
    id: '6',
    title: 'Junior Software Developer',
    company: 'CodeAcademy Inc.',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$65,000 - $80,000',
    description: 'Perfect opportunity for recent graduates! Join our mentorship program and work on real projects while learning from experienced developers. You will contribute to web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      'Basic knowledge of JavaScript and web technologies',
      'Understanding of version control (Git)',
      'Eagerness to learn and grow',
      'Strong problem-solving skills'
    ],
    benefits: [
      'Mentorship program',
      'Professional development courses',
      'Flexible work arrangements',
      'Health benefits',
      'Career advancement opportunities'
    ],
    postedDate: '2024-01-03',
    applicationDeadline: '2024-02-03',
    experienceLevel: 'Entry Level',
    skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'Problem Solving']
  }
];