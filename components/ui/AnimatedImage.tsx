import { motion } from 'framer-motion';
import Image from 'next/image';
import { ImageProps } from 'next/image';

export const AnimatedImage = ({ src, alt, width, height, className }: ImageProps) => {
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
          src={src}
          alt={alt || ''}
          width={width || 800}
          height={height || 500}
          className={`w-full h-auto object-cover ${className || ''}`}
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>
    </motion.div>
  );
};
