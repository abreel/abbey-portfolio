import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LetsTalkCTA = () => (
  <div className="py-4 text-center space-y-4">
    <p>Need a project? Whether it&apos;s a modern web app, intuitive UI, or AI-powered product</p>
    <Button asChild size="lg" className="rounded-full px-6 py-4">
      <Link href="#contact">Let&apos;s Talk</Link>
    </Button>
  </div>
);
