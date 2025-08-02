import { getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.metadata.title}</h1>
      <p className="mb-6 text-gray-600">{project.metadata.description}</p>

      {/* Render MDX content */}
      <MDXRemote source={project.mdxSource} />

      {/* Display project images */}
      {project.images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {project.images.map((img, idx) => (
            <Image
              key={idx}
              src={`/projects/${project.slug}/${img}`}
              alt={img}
              width={500}
              height={300}
              className="rounded border shadow w-full h-auto"
            />
          ))}
        </div>
      )}
    </div>
  );
}
