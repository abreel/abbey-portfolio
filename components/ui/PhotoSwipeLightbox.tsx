import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery({
  items,
}: {
  items: { src: string; width: number; height: number }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: containerRef.current!,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'zoom',
      bgOpacity: 0.9,
      padding: { top: 30, bottom: 30, left: 20, right: 20 },
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="pswp-gallery flex gap-4 overflow-x-auto">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.src}
          data-pswp-width={item.width}
          data-pswp-height={item.height}
          target="_blank"
          rel="noreferrer"
          className="block shrink-0 snap-center"
        >
          <img
            src={item.src}
            alt={`Screenshot ${index + 1}`}
            className="w-[300px] rounded-md shadow-md"
          />
        </a>
      ))}
    </div>
  );
}
