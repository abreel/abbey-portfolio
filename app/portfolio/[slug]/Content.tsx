'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { AnimatedImage } from '@/components/ui/AnimatedImage';
import { MDXContent } from '@/components/MDXContent';
import { MDXComponents, Project } from '@/types/project';
import { ImageGallery } from '@/components/ui/ImageGallery';
import PageLayout from '@/components/layouts/Layout';
import { LetsTalkCTA } from '../LetsTalkCTA';

const components: MDXComponents = {
  Image: AnimatedImage,
  h2: (props: HTMLMotionProps<'h2'>) => (
    <motion.h2
      {...props}
      className={`text-2xl font-semibold mt-10 mb-4 text-gray-800 ${props.className ?? ''}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    />
  ),
  p: (props: HTMLMotionProps<'p'>) => (
    <motion.p
      {...props}
      className={`text-gray-700 leading-relaxed my-4 ${props.className ?? ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    />
  ),
};

export default function Content({ project }: { project: Project }) {
  const meta = project.metadata;

  return (
    <PageLayout>
      <div className="px-6 pt-12 space-y-10 max-w-7xl mx-auto">
        {meta.coverImage && (
          <AnimatedImage
            src={`/projects/${project.slug}${meta.coverImage}`}
            alt={`${meta.title} Cover`}
            width={800}
            height={500}
            className="rounded-lg shadow-md h-[70vh] max-h-[500px] object-cover"
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-3 tracking-wide">{meta.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{meta.description}</p>
        </motion.div>

        {project.images?.length > 0 && <ImageGallery screenshots={project.images} />}

        <LetsTalkCTA />

        {meta.overview && (
          <section>
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p className="text-gray-700">{meta.overview}</p>
          </section>
        )}

        {meta.features?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {meta.features.map((feature, i) => (
                <div key={i} className="p-4 border rounded-xl bg-white shadow-sm space-y-2">
                  <div className="text-2xl">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {meta.technologies && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              {Object.entries(meta.technologies).map(([key, techs]) =>
                techs?.length ? (
                  <div key={key}>
                    <h3 className="capitalize font-medium text-gray-900 mb-1">{key}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ) : null,
              )}
            </div>
          </section>
        )}

        {meta.outcome && (
          <section>
            <h2 className="text-2xl font-bold mb-2">Outcome</h2>
            <p className="text-gray-700">{meta.outcome}</p>
          </section>
        )}

        {/* Other content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="prose prose-lg max-w-none text-gray-800"
        >
          <MDXContent project={project} components={components} />
        </motion.div>
      </div>
    </PageLayout>
  );
}
