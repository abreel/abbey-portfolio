'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import { AnimatedImage } from '@/components/ui/AnimatedImage';
import { MDXContent } from '@/components/MDXContent';
import { MDXComponents, Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="px-6 py-12 space-y-10">
      <AnimatedImage
        src={`/projects/${project.slug}${meta.coverImage}`}
        alt={`${meta.title} Cover`}
        width={800}
        height={500}
        className="rounded-lg shadow-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif text-gray-900 mb-3 tracking-wide">{meta.title}</h1>
        <p className="text-lg text-gray-600 mb-2">{meta.description}</p>
        <p className="text-sm text-gray-400">{meta.date}</p>
      </motion.div>

      {meta.screenshots?.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <AnimatedImage
                  src={`/projects/${project.slug}/${img}`}
                  alt={img}
                  width={600}
                  height={400}
                />
                {/* {img.caption && (
                                    <p className="text-center text-sm text-gray-500 mt-2">{img.caption}</p>
                                )} */}
              </div>
            ))}
          </div>
        </section>
      )}

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

      {meta.cta && (
        <div className="mt-10">
          <Link
            href={meta.cta.link}
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition"
          >
            {meta.cta.text}
          </Link>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="prose prose-lg max-w-none text-gray-800"
      >
        <MDXContent project={project} components={components} />
      </motion.div>
    </div>
  );
}
