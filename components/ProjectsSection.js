'use client';
import ProjectCard from './ProjectCard';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

const items = [
  {
    title: 'Enterprise Fundraising Platform - Easyfundrasing',
    description:
      'Led end-to-end development of full-stack features for enterprise-scale fundraising applications serving distributed workflows. Designed and evolved backend services and APIs supporting complex business processes. Built cloud-native infrastructure using AWS/Azure with focus on scalability and resilience. Implemented CI/CD pipelines using Docker and Git-based automation. Improved system performance through database optimization, caching strategies, and service refactoring. Established observability frameworks with monitoring, logging, and alerting for production systems.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS EC2', 'AWS S3', 'AWS Lambda', 'Azure', 'CI/CD', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'GraphQL', 'JWT', 'Microservices'],
    duration: 'Jul 2022 - Mar 2026',
    impact: 'Reduced deployment time by 60%, improved infrastructure costs by 35%'
  },
  {
    title: 'Backend System Modernization - Sodexo',
    description:
      'Led backend development initiatives for scalable enterprise systems and service-oriented architectures. Designed system-level solutions and contributed to architectural decisions for new product features. Modernized legacy components to improve performance, maintainability, and extensibility. Conducted code reviews and mentored engineers to improve code quality and engineering practices. Collaborated with DevOps teams to ensure reliable deployment pipelines and production stability. Participated in technical planning, system design discussions, and cross-team coordination.',
    tags: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'System Design', 'Microservices', 'Azure', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'Code Review', 'Agile', 'Scrum'],
    duration: 'Oct 2021 - May 2022',
    impact: 'Enhanced system performance and maintainability'
  },
  {
    title: 'Full-Stack Web Applications - Inter-Prompt Global',
    description:
      'Developed comprehensive full-stack web applications using React, Angular, Node.js, and Python. Designed and implemented RESTful APIs supporting core business functionalities and third-party integrations. Built scalable frontend architectures with focus on performance, maintainability, and user experience. Optimized relational and non-relational database queries for improved application performance. Worked in Agile teams to deliver features aligned with product and business requirements. Improved backend performance and reduced system latency through targeted optimizations.',
    tags: ['React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'Django', 'MongoDB', 'MySQL', 'REST APIs', 'GraphQL', 'TypeScript', 'Tailwind CSS', 'SEO', 'Agile'],
    duration: 'Oct 2020 - Apr 2022',
    impact: 'Delivered scalable applications with improved performance'
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-20" ref={ref}>
      <div className="mx-auto max-w-6xl space-y-10">
        <div className={`rounded-[2rem] border border-slate-700/60 bg-slate-900/80 p-10 shadow-soft sm:p-12 ${isInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Professional Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Enterprise Software Development & DevOps Leadership</h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Leading development initiatives across Fortune 500 companies, delivering scalable enterprise solutions with modern architectures, cloud-native infrastructure, and automated deployment pipelines. Each project demonstrates proven expertise in full-stack development, system design, and operational excellence.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {items.map((item, index) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              description={item.description}
              tags={item.tags}
              duration={item.duration}
              impact={item.impact}
              isVisible={isInView}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
