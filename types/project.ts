import { HTMLMotionProps } from 'framer-motion';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ImageProps } from 'next/image';
import { JSX } from 'react';

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage: string;

  overview?: string;

  features?: {
    icon: string;
    title: string;
    description: string;
  }[];

  technologies?: {
    frontend?: string[];
    visualization?: string[];
    auth?: string[];
    data?: string[];
    deploy?: string[];
  };

  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  outcome?: string;
}

export interface Project {
  slug: string;
  metadata: Required<ProjectFrontmatter>;
  mdxSource: MDXRemoteSerializeResult;
  images: string[];
}

export type MDXComponents = Readonly<{
  Image: (props: ImageProps) => JSX.Element | null;
  h2: (props: HTMLMotionProps<'h2'>) => JSX.Element;
  p: (props: HTMLMotionProps<'p'>) => JSX.Element;
}>;
