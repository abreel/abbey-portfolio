'use client';

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type AnimatedImageProps = ImageProps & {
  fallbackSrc?: string;
};

export const AnimatedImage = ({
  src,
  alt = '',
  width = 800,
  height = 500,
  className = '',
  fallbackSrc = '/fallback.jpg',
  ...rest
}: AnimatedImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (typeof src !== 'string' || (!src.startsWith('/') && !src.startsWith('http'))) {
    console.warn('Invalid image src:', src);
    return null;
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-xl shadow-md">
        <Image
          src={hasError ? fallbackSrc : src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-cover transition-all duration-700 ease-in-out ${
            isLoading ? 'blur-md scale-105' : 'blur-0 scale-100'
          } ${className}`}
          sizes="(max-width: 768px) 100vw, 700px"
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          {...rest}
        />
      </div>
    </motion.div>
  );
};
