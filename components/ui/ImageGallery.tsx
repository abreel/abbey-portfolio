import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./PhotoSwipeLightbox'), { ssr: false });

export const ImageGallery = ({ screenshots }: { screenshots: string[] }) => {
  const galleryItems = screenshots.map((src) => ({
    src,
    width: 1280, // adjust based on actual image resolution
    height: 720,
  }));

  return (
    screenshots?.length > 0 && (
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
          <Gallery items={galleryItems} />
        </div>
      </section>
    )
  );
};
