import dynamic from 'next/dynamic';
import HeroSection from '../components/HeroSection';
import SectionSkeleton from '../components/SectionSkeleton';

const SummarySection = dynamic(() => import('../components/SummarySection'), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const ExperienceSection = dynamic(() => import('../components/ExperienceSection'), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const ProjectsSection = dynamic(() => import('../components/ProjectsSection'), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const ContactSection = dynamic(() => import('../components/ContactSection'), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
