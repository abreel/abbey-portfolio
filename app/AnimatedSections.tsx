'use client';

import { ContactSection } from './ContactSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Project } from '@/lib/projects';
import { HeroSection } from '@/components/homepage/Hero';
import { Project } from '@/types/project';

interface Props {
  projects: Project[];
}

export default function AnimatedSections({ projects }: Props) {
  console.log(projects);
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group bg-white dark:bg-zinc-900 pt-0">
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={`/projects/${project.slug}/images/cover.jpg`}
                      alt={project.metadata.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                      {project.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.metadata.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
