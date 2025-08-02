'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/projects';

interface Props {
  projects: Project[];
}

export default function AnimatedSections({ projects }: Props) {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Sanni Abiodun</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Multidisciplinary product developer with 10+ years in UI/UX, web development & ML.
            Founder, team leader, and Upwork Top Rated freelancer with a 100% job success score.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#contact">Let’s Collaborate</Link>
            </Button>
          </div>
        </header>
      </motion.div>

      {/* Projects Section */}
      <motion.h2
        className="text-3xl font-semibold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group">
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative w-full h-60">
                  <Image
                    src={project.images[0]}
                    alt={project.metadata.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{project.metadata.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.metadata.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="mt-28 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Let&rsquo;s Work Together</h2>
        <p className="mb-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Whether it&rsquo;s a modern web app, intuitive UI, or AI-powered product — I’m here to
          help bring your vision to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="https://wa.me/2348091565803" target="_blank">
              WhatsApp Me
            </Link>
          </Button>
          <Button asChild>
            <Link href="mailto:support@designsynchrony.com.ng">Email Me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.upwork.com/freelancers/~01xxxxxxxxxxxxxxxx">
              View Upwork Profile
            </Link>
          </Button>
        </div>
      </motion.section>
    </>
  );
}
