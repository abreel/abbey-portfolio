import { getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Content from './Content';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return <Content project={project} />;
}
