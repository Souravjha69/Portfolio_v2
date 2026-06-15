// ── All portfolio data in one place ──
// Edit this file to update your content across the entire site

export const personal = {
  name: 'Sourav Kumar Jha',
  title: 'AI Engineer & Full Stack Developer',
  tagline: 'M.S. Machine Learning · Drexel University · Building LLM-integrated systems & scalable backends that ship to production.',
  location: 'Philadelphia, PA',
  email: 'souravkumarjha301@gmail.com',
  phone: '+1 215-240-9310',
  linkedin: 'https://www.linkedin.com/in/souravitachi/',
  github: 'https://github.com/Souravjha69',
  status: 'Open to work · Available immediately',
  timezone: 'EST (UTC−5)',
}

export const stats = [
  { number: '3', suffix: '+', label: 'AI Apps Shipped' },
  { number: '3.7', suffix: '', label: 'M.S. GPA Drexel' },
  { number: '5', suffix: '+', label: 'Languages & Stacks' },
  { number: '18', suffix: 'mo', label: 'Production Experience' },
]

export const techStack = [
  'LLM APIs', 'React.js', 'Node.js', 'Python', 'MongoDB',
  'Docker', 'Prompt Engineering', 'REST APIs', 'Deep Learning',
  'Reinforcement Learning', 'GitHub Actions', 'OpenAI API',
]

export const skills = [
  {
    category: 'AI & LLM',
    icon: '🤖',
    items: ['LLM API Integration', 'Prompt Engineering', 'Eval Frameworks', 'AI Guardrails', 'OpenAI API', 'Reinforcement Learning', 'Deep Learning'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST API Design', 'Microservices', 'Authentication', 'System Architecture'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design', 'Next.js'],
  },
  {
    category: 'Data & DevOps',
    icon: '🗄️',
    items: ['MongoDB', 'SQL', 'Docker', 'GitHub Actions', 'CI/CD', 'Postman', 'Git'],
  },
]

export const experience = [
  {
    company: 'CyberSigma Consulting Services',
    role: 'Software Developer',
    date: 'Feb 2024 – Aug 2025',
    location: 'Philadelphia, PA',
    bullets: [
      'Architected scalable full-stack apps (Node.js, Express.js, React.js, MongoDB) for client-facing & internal workflows with high availability in production',
      'Led LLM API integration experiments — designed prompt strategies, evaluated AI response quality & benchmarked latency-accuracy tradeoffs',
      'Built production-grade RESTful APIs & AI-augmented backend services with secure auth & workflow automation for regulated environments',
      'Implemented CI/CD pipelines via GitHub Actions; diagnosed & resolved performance bottlenecks across deployment cycles',
    ],
  },
  {
    company: 'Academic & Personal Projects',
    role: 'AI Platform Developer',
    date: '2023 – Present',
    location: 'Full Stack + AI',
    bullets: [
      'Built AI-Powered Code Reviewer with OpenAI integration, evaluation frameworks & guardrails for production use',
      'Developed Virtual Assistant with LLM APIs optimized for latency and NL query handling at scale',
      'Engineered Payment Gateway backend with compliance-ready architecture & audit logging under concurrent load',
      'Technical bridge between engineering & stakeholders — translated architecture decisions into roadmap priorities',
    ],
  },
]

export const projects = [
  {
    id: '01',
    icon: '🤖',
    title: 'AI-Powered Code Reviewer',
    description: 'MERN stack + OpenAI LLM APIs for automated code review. Prompt strategies, eval frameworks & AI guardrails balancing accuracy, cost & latency.',
    tags: ['MERN', 'OpenAI', 'LLM'],
    category: ['ai', 'fullstack'],
    year: '2024',
    longDesc: 'MERN-stack app integrating OpenAI LLM APIs for automated code review. Built prompt strategies, evaluation frameworks & AI guardrails. Scalable backend APIs, structured logging & responsive dashboard for AI feedback.',
    techFull: ['OpenAI API', 'Node.js', 'React.js', 'MongoDB', 'LLM'],
  },
  {
    id: '02',
    icon: '💬',
    title: 'Virtual AI Assistant',
    description: 'Production virtual assistant with LLM APIs for NL query handling at scale. Optimized pipelines for latency with DB-backed conversation state.',
    tags: ['Node.js', 'LLM APIs', 'MongoDB'],
    category: ['ai', 'fullstack'],
    year: '2024',
    longDesc: 'Production virtual assistant with LLM APIs for NL query handling at scale. Optimized AI pipelines for latency. Secure auth, session management & DB-backed conversation state.',
    techFull: ['LLM APIs', 'Node.js', 'MongoDB', 'Auth'],
  },
  {
    id: '03',
    icon: '💳',
    title: 'Secure Payment Gateway',
    description: 'Secure payment backend with Node.js, Express.js, MongoDB. REST APIs for transaction lifecycle, audit logging & compliance-ready architecture.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: ['backend', 'fullstack'],
    year: '2023',
    longDesc: 'Secure payment processing backend (Node.js, Express.js, MongoDB) with REST APIs for transaction lifecycle management, audit logging & compliance-ready architecture under concurrent load.',
    techFull: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
  },
  {
    id: '04',
    icon: '⚡',
    title: 'CyberSigma Platform',
    description: 'Scalable full-stack apps for client-facing workflows. AI-augmented backend services, secure auth & CI/CD for high-availability deployment.',
    tags: ['Full Stack', 'AI', 'CI/CD'],
    category: ['ai', 'fullstack', 'backend'],
    year: '2024',
    longDesc: 'Scalable full-stack applications for client-facing & internal workflows. AI-augmented backend services, secure auth patterns & CI/CD via GitHub Actions for high-availability production deployment.',
    techFull: ['Full Stack', 'AI', 'CI/CD', 'Docker'],
  },
]

export const services = [
  { icon: '🤖', title: 'LLM Integration', desc: 'Production LLM features with prompt engineering, eval frameworks & guardrails for accuracy & cost efficiency.' },
  { icon: '🏗️', title: 'Full Stack Development', desc: 'End-to-end MERN stack apps — architecture to scalable deployment with CI/CD & high availability.' },
  { icon: '🔌', title: 'REST API Design', desc: 'Production-grade APIs with secure auth, workflow automation & compliance-ready patterns.' },
  { icon: '🧠', title: 'AI Product Strategy', desc: 'Bridge engineering & stakeholders — translate AI capabilities into roadmap priorities & scalable systems.' },
  { icon: '⚡', title: 'Performance Optimization', desc: 'Benchmark & optimize AI pipelines, backend latency & system reliability for production scale.' },
  { icon: '🎓', title: 'ML Research & Dev', desc: 'Applied ML — Deep Learning, Reinforcement Learning, turning academic rigor into engineering solutions.' },
]

export const education = [
  {
    badge: 'Current',
    badgeColor: 'blue' as const,
    university: 'Drexel University',
    degree: 'M.S. Machine Learning',
    date: 'Sep 2025 – Aug 2027 · Philadelphia, PA',
    detail: 'Deep Learning · Reinforcement Learning · Distributed Systems · Algorithms · AI Systems',
    gpa: 'GPA 3.7 / 4.0',
  },
  {
    badge: 'Completed',
    badgeColor: 'violet' as const,
    university: 'IIIT Bangalore',
    degree: 'PG Program — ML & AI',
    date: 'Sep 2024 – Aug 2025',
    detail: 'Reinforcement Learning · Machine Learning · Deep Learning · Data Toolkit',
    gpa: null,
  },
  {
    badge: 'Degree',
    badgeColor: 'gray' as const,
    university: 'Chandigarh University',
    degree: 'B.E. Computer Science',
    date: 'Aug 2021 – May 2024',
    detail: 'CS fundamentals, programming & systems design foundation.',
    gpa: null,
  },
]

export const testimonials = [
  {
    stars: 5,
    text: "Sourav's LLM integration was exceptional — he thought through evaluation frameworks & guardrails too. Production-ready from day one.",
    author: 'Tech Lead',
    role: 'CyberSigma Consulting',
    initials: 'TL',
  },
  {
    stars: 5,
    text: "Rare to find someone who genuinely bridges engineering and product strategy. Translated complex AI decisions into clear roadmap priorities the whole team understood.",
    author: 'Product Manager',
    role: 'Client Team',
    initials: 'PM',
  },
  {
    stars: 5,
    text: "The AI Code Reviewer showed deep understanding of prompt engineering tradeoffs — balancing accuracy, latency & cost in a way most engineers don't consider.",
    author: 'Senior Reviewer',
    role: 'Academic Evaluator',
    initials: 'SR',
  },
]

export const timeline = [
  { year: '2021', company: 'Chandigarh University', role: 'B.E. Computer Science', desc: 'Foundation — algorithms, systems & programming across JavaScript, Python, Java & C/C++. Built the engineering mindset that drives everything since.' },
  { year: '2023', company: 'Payment Gateway Project', role: 'Backend Engineer', desc: 'First serious production system — compliance-ready payment backend with Node.js, Express.js & MongoDB. Learned what "production-grade" really means under concurrent load.' },
  { year: '2024', company: 'CyberSigma Consulting Services', role: 'Software Developer · Philadelphia, PA', desc: 'Architected full-stack apps, led LLM API integrations & built AI-augmented backend services. Bridged engineering and product strategy for regulated environments.' },
  { year: '2024', company: 'IIIT Bangalore PG Program', role: 'Machine Learning & AI', desc: 'Deep-dived into RL, Deep Learning & the data toolkit. Connected academic ML rigor to real production system design.' },
  { year: '2025', company: 'Drexel University', role: 'M.S. Machine Learning · GPA 3.7', desc: 'Studying Deep Learning, Reinforcement Learning, Distributed Systems & AI Systems Engineering at Drexel — while actively delivering AI platform development projects in parallel.' },
]

export const values = [
  { icon: '⚙️', title: 'Engineering First', desc: "I write code that ships. Clean architecture, documented APIs & systems designed to handle real load — not just pass tests." },
  { icon: '🧠', title: 'AI That Actually Works', desc: "LLM integration is more than calling an API. I think through evaluation frameworks, guardrails, cost-accuracy tradeoffs & long-term maintainability." },
  { icon: '🌉', title: 'Bridge Builder', desc: "I speak both languages — explain system architecture to non-technical stakeholders & translate product requirements into engineering roadmaps." },
]

export const faq = [
  { q: 'What is your core tech stack?', a: 'MERN (MongoDB, Express.js, React.js, Node.js) for full-stack apps, Python for ML/AI work, and OpenAI/LLM APIs for AI integration. I containerize with Docker and automate with GitHub Actions CI/CD.' },
  { q: 'Are you open to full-time roles?', a: 'Yes — actively looking for full-time roles in AI engineering, full-stack development or ML engineering. Also open to internships and part-time consulting while completing my M.S. at Drexel.' },
  { q: 'What makes you different as an AI engineer?', a: "I don't just integrate LLM APIs — I build evaluation frameworks, guardrails & think through latency-accuracy-cost tradeoffs for long-term maintainability. I've shipped production AI systems, not just prototypes." },
  { q: 'Do you work remotely / internationally?', a: 'Yes, fully remote-capable. Based in Philadelphia EST but I adapt to overlap requirements for global teams.' },
  { q: 'What is your typical freelance project timeline?', a: 'MVPs typically take 3–8 weeks depending on scope. I provide detailed estimates after understanding your requirements and will never overpromise on delivery.' },
]

export const availability = [
  { day: 'Monday', status: 'available' as const },
  { day: 'Tuesday', status: 'available' as const },
  { day: 'Wednesday', status: 'available' as const },
  { day: 'Thursday', status: 'available' as const },
  { day: 'Friday', status: 'half' as const },
  { day: 'Saturday', status: 'closed' as const },
  { day: 'Sunday', status: 'closed' as const },
]
