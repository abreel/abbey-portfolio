import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <div className="grid gap-6">
        {projects.map(
          (proj) =>
            proj && (
              <Link key={proj.slug} href={`/portfolio/${proj.slug}`}>
                <div className="border p-4 rounded shadow hover:shadow-md transition">
                  <h2 className="text-xl font-semibold">{proj.metadata.title}</h2>
                  <p>{proj.metadata.description}</p>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
