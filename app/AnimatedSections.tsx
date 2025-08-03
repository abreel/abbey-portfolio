'use client';

import { ContactSection } from './ContactSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/homepage/Hero';
import { Project } from '@/types/project';
import ProjectsList from '@/components/lists/ProjectsList';

interface Props {
  projects: Project[];
}

export default function AnimatedSections({ projects }: Props) {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <div className="px-6 py-14 max-w-7xl mx-auto">
        {/* Projects Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <ProjectsList projects={featuredProjects} />

        {/* View Portfolio Button */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-80 transition"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
