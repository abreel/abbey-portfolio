'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/projects';
import { HeroSection } from '@/components/homepage/Hero';

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
              <Card className="hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group bg-white dark:bg-zinc-900">
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={`/projects/${project.slug}/cover.jpg`}
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
      <motion.section
        id="contact"
        className="mt-36 text-center px-4 py-8 md:py-16 bg-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="mb-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Whether it’s a modern web app, intuitive UI, or AI-powered product — I’m here to help
          bring your vision to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button variant="secondary" asChild size="lg" className="rounded-full px-6 py-4">
            <Link href="https://wa.me/2348091565803" target="_blank">
              WhatsApp Me
            </Link>
          </Button>
          <Button asChild size="lg" className="rounded-full px-6 py-4">
            <Link href="mailto:support@designsynchrony.com.ng">Email Me</Link>
          </Button>
          <Button variant="secondary" asChild size="lg" className="rounded-full px-6 py-4">
            <Link href="https://www.upwork.com/freelancers/~01xxxxxxxxxxxxxxxx">
              View Upwork Profile
            </Link>
          </Button>
        </div>
      </motion.section>
    </>
  );
}
