'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Optional animated blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gray-700 rounded-full opacity-10 blur-3xl"
          animate={{ x: [0, 100, -100, 0], y: [0, 100, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-100px] w-[400px] h-[400px] bg-gray-600 rounded-full opacity-10 blur-3xl"
          animate={{ x: [0, -80, 40, 0], y: [0, -60, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Glassmorphic content container */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-8 py-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-gray-100 via-white to-gray-100 text-transparent bg-clip-text">
          Sanni Abiodun
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
          A multidisciplinary product developer with 10+ years in UI/UX, web development & ML.
          Founder, team leader, and Upwork Top Rated freelancer with a 100% job success score.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="px-8 py-5 text-base rounded-full bg-white text-black hover:scale-105 transition-transform shadow-md"
          >
            <Link href="#contact">Let’s Collaborate</Link>
          </Button>
        </div>
      </motion.header>
    </div>
  );
}
