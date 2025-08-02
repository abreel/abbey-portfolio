import { getAllProjects } from '@/lib/projects';
import AnimatedSections from './AnimatedSections';

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <div className="px-6 py-14 max-w-7xl mx-auto">
      <AnimatedSections projects={projects} />
    </div>
  );
}
