import ProjectsList from '@/components/lists/ProjectsList';
import { getAllProjects } from '@/lib/projects';
import { ContactSection } from '../ContactSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center pt-8">Portfolio</h1>
      <div className="max-w-7xl mx-auto">
        <div className="py-4 text-center space-y-4">
          <p>
            Need a project? Whether it&apos;s a modern web app, intuitive UI, or AI-powered product
          </p>
          <Button asChild size="lg" className="rounded-full px-6 py-4">
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>
        <div className="p-6">
          <ProjectsList projects={projects} />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
