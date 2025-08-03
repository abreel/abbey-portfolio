import { LetsTalkCTA } from './LetsTalkCTA';
import ProjectsList from '@/components/lists/ProjectsList';
import { getAllProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageLayout from '@/components/layouts/Layout';

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-4 text-center pt-8">Portfolio</h1>
      <div className="max-w-7xl mx-auto">
        <LetsTalkCTA />
        <div className="p-6">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </PageLayout>
  );
}
