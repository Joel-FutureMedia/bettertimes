import { useEffect } from 'react';

// Import all available client logos from the folder
import krt from '@/assets/client-logos/KRT B&W.png';
import legend from '@/assets/client-logos/Legend B&W.png';
import masafrica from '@/assets/client-logos/Masafrica B&W.png';
import rainbow from '@/assets/client-logos/Rainbow B&W.png';
import sourceworx from '@/assets/client-logos/Sourceworx B&W.png';
import southYeaster from '@/assets/client-logos/South Yeaster B&W.png';
import spallingWorx from '@/assets/client-logos/Spalling Worx B&W.png';
import vula from '@/assets/client-logos/Vula B&W.png';

// All available logos - 8 logos total in a single row
const allLogos = [
  { src: krt, alt: 'KRT' },
  { src: legend, alt: 'Legend' },
  { src: masafrica, alt: 'Masafrica' },
  { src: rainbow, alt: 'Rainbow' },
  { src: sourceworx, alt: 'Sourceworx' },
  { src: southYeaster, alt: 'South Yeaster' },
  { src: spallingWorx, alt: 'Spalling Worx' },
  { src: vula, alt: 'Vula' },
];

const ClientLogosCarousel = () => {
  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollRight {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100% / 3));
        }
      }
      
      .logo-scroll-right {
        animation: scrollRight 45s linear infinite;
      }
      
      .logo-scroll-right:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const LogoRow = ({ logos }: { logos: typeof allLogos }) => {
    // Duplicate logos multiple times for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
      <div className="relative overflow-hidden py-1 md:py-2 lg:py-3 w-full">
        {/* Fade edges - minimal for edge-to-edge effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
        
        <div className="flex items-center gap-4 md:gap-5 lg:gap-6 logo-scroll-right" style={{ width: 'max-content' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center px-2 md:px-3 lg:px-4 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white pt-2 md:pt-3 lg:pt-4 pb-4 md:pb-5 lg:pb-6 overflow-hidden w-full">
      {/* Title */}
      <div className="text-center mb-3 md:mb-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1">
          Our Clients
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
          Trusted by industry leaders across various sectors
        </p>
      </div>

      {/* Single scrolling row - all logos scrolling right, edge to edge */}
      <div className="w-full">
        <LogoRow logos={allLogos} />
      </div>
    </section>
  );
};

export default ClientLogosCarousel;

