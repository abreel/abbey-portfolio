import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Project, ProjectFrontmatter } from '@/types/project';

const projectsDir = path.join(process.cwd(), 'projects');

// ---------- Helpers ----------

function getProjectImages(slug: string): string[] {
  const publicImagesDir = path.join(process.cwd(), 'public', 'projects', slug, 'images');

  if (!fs.existsSync(publicImagesDir)) return [];

  const files = fs.readdirSync(publicImagesDir);
  return files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
    .map((file) => `/projects/${slug}/images/${file}`); // This is correct path to use in <Image />
}

// ---------- Core Functions ----------

export async function getAllProjects(): Promise<Project[]> {
  const folders = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    folders.map(async (folder): Promise<Project | null> => {
      const projectPath = path.join(projectsDir, folder);

      let mdxPath = path.join(projectPath, 'index.mdx');
      if (!fs.existsSync(mdxPath)) {
        mdxPath = path.join(projectPath, 'index.md');
        if (!fs.existsSync(mdxPath)) return null;
      }

      const source = fs.readFileSync(mdxPath, 'utf8');
      const { content, data } = matter(source);

      // Validate required frontmatter
      if (!data.title || !data.description) return null;

      const slug = folder;

      const mdxSource = await serialize(content, {
        scope: data,
      });

      const metadata: Required<ProjectFrontmatter> = {
        title: data.title,
        description: data.description,
        slug,
        date: data.date ?? '', // default empty
        coverImage: data.coverImage ?? '',

        overview: data.overview ?? '',
        features: data.features ?? [],
        technologies: {
          frontend: data.technologies?.frontend ?? [],
          visualization: data.technologies?.visualization ?? [],
          auth: data.technologies?.auth ?? [],
          data: data.technologies?.data ?? [],
          deploy: data.technologies?.deploy ?? [],
        },
        screenshots: data.screenshots ?? [],
        outcome: data.outcome ?? '',
        cta: {
          text: data.cta?.text ?? '',
          link: data.cta?.link ?? '',
        },
        ...data,
      };

      const images = getProjectImages(folder);

      return {
        slug,
        metadata,
        mdxSource,
        images,
      };
    }),
  );

  return projects.filter((project): project is Project => project !== null);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const dir = path.join(projectsDir, slug);
  let mdxPath = path.join(dir, 'index.mdx');

  if (!fs.existsSync(mdxPath)) {
    mdxPath = path.join(dir, 'index.md');
    if (!fs.existsSync(mdxPath)) {
      return null;
    }
  }

  const source = fs.readFileSync(mdxPath, 'utf8');
  const { content, data } = matter(source);

  if (!data.title || !data.description) return null;

  const mdxSource = await serialize(content, {
    scope: data,
  });

  const metadata: Required<ProjectFrontmatter> = {
    title: data.title,
    description: data.description,
    slug,
    date: data.date ?? '', // default empty
    coverImage: data.coverImage ?? '',

    overview: data.overview ?? '',
    features: data.features ?? [],
    technologies: {
      frontend: data.technologies?.frontend ?? [],
      visualization: data.technologies?.visualization ?? [],
      auth: data.technologies?.auth ?? [],
      data: data.technologies?.data ?? [],
      deploy: data.technologies?.deploy ?? [],
    },
    screenshots: data.screenshots ?? [],
    outcome: data.outcome ?? '',
    cta: {
      text: data.cta?.text ?? '',
      link: data.cta?.link ?? '',
    },
    ...data,
  };

  const images = getProjectImages(slug);

  return {
    slug,
    metadata,
    mdxSource,
    images,
  };
}
