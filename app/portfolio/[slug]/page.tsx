import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import Content from './Content';
import NotFound from './not-found';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    const allProjects = await getAllProjects();
    return <NotFound allProjects={allProjects} invalidSlug={(await params).slug} />;
  }

  return <Content project={project} />;
}
