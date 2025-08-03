'use client';

import { useEffect, useState } from 'react';
import fuzzysort from 'fuzzysort';
import { Project } from '@/types/project';
import ProjectsList from '@/components/lists/ProjectsList';
import PageLayout from '@/components/layouts/Layout';

interface NotFoundProps {
  allProjects: Project[];
  invalidSlug: string;
}

export default function NotFound({ allProjects, invalidSlug }: NotFoundProps) {
  const [suggestions, setSuggestions] = useState<Project[]>([]);
  const [featured, setFeatured] = useState<Project[]>([]);

  useEffect(() => {
    const results = fuzzysort.go(invalidSlug, allProjects, {
      key: 'metadata.title',
      limit: 5,
      threshold: -10000,
    });

    setSuggestions(results.map((r) => r.obj));

    // Just in case there are no suggestions, pick 3 random fallback projects
    if (results.length === 0) {
      const shuffled = [...(allProjects || [])].sort(() => 0.5 - Math.random());
      setFeatured(shuffled.slice(0, 3));
    }
  }, [invalidSlug, allProjects]);

  const displayProjects = suggestions.length > 0 ? suggestions : featured;

  return (
    <PageLayout>
      <div className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          {suggestions.length > 0 ? 'Did you mean:' : 'Check these out instead:'}
        </h2>

        <ProjectsList projects={displayProjects} />
      </div>
    </PageLayout>
  );
}
