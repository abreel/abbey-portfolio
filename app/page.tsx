import { getAllProjects } from '@/lib/projects';
import AnimatedSections from './AnimatedSections';

export default async function HomePage() {
  const projects = await getAllProjects();

  return <AnimatedSections projects={projects} />;
}
