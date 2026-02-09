import { useEffect } from 'react';

// Import all client logos
import alphaOmega from '@/assets/client-logos/Alpha Omega.jpg';
import ansultech from '@/assets/client-logos/Ansultech, Zambia.jpg';
import bafokengHydraulics from '@/assets/client-logos/Bafokeng Hydraulics, Zambia.jpg';
import bergvliet from '@/assets/client-logos/Bergvliet.png';
import clTrading from '@/assets/client-logos/CL Trading.jpg';
import elsopexCivils from '@/assets/client-logos/Elsopex Civils.png';
import falcon from '@/assets/client-logos/Falcon.png';
import haygroveTunnels from '@/assets/client-logos/Haygrove Tunnels.png';
import krt from '@/assets/client-logos/KRT B&W.png';
import legend from '@/assets/client-logos/Legend B&W.png';
import masafrica from '@/assets/client-logos/Masafrica B&W.png';
import meatBrothers from '@/assets/client-logos/Meat Brothers.jpg';
import metapipe from '@/assets/client-logos/MetaPipe.png';
import mgm from '@/assets/client-logos/MGM .jpg';
import mutapaMining from '@/assets/client-logos/Mutapa Mining (MMP).jpg';
import paragon from '@/assets/client-logos/Paragon MB.png';
import prosec from '@/assets/client-logos/Prosec Logo .jpg';
import rainbow from '@/assets/client-logos/Rainbow B&W.png';
import sourceworx from '@/assets/client-logos/Sourceworx B&W.png';
import southYeaster from '@/assets/client-logos/South Yeaster B&W.png';
import spallingWorx from '@/assets/client-logos/Spalling Worx B&W.png';
import vula from '@/assets/client-logos/Vula B&W.png';

// First row: 7 logos scrolling right
const row1Logos = [
  { src: alphaOmega, alt: 'Alpha Omega' },
  { src: ansultech, alt: 'Ansultech, Zambia' },
  { src: bafokengHydraulics, alt: 'Bafokeng Hydraulics, Zambia' },
  { src: bergvliet, alt: 'Bergvliet' },
  { src: clTrading, alt: 'CL Trading' },
  { src: elsopexCivils, alt: 'Elsopex Civils' },
  { src: falcon, alt: 'Falcon' },
];

// Second row: 7 logos scrolling left
const row2Logos = [
  { src: haygroveTunnels, alt: 'Haygrove Tunnels' },
  { src: krt, alt: 'KRT' },
  { src: legend, alt: 'Legend' },
  { src: masafrica, alt: 'Masafrica' },
  { src: meatBrothers, alt: 'Meat Brothers' },
  { src: metapipe, alt: 'MetaPipe' },
  { src: mgm, alt: 'MGM' },
];

// Third row: 8 logos scrolling right
const row3Logos = [
  { src: mutapaMining, alt: 'Mutapa Mining (MMP)' },
  { src: paragon, alt: 'Paragon MB' },
  { src: prosec, alt: 'Prosec Logo' },
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
      
      @keyframes scrollLeft {
        0% {
          transform: translateX(calc(-100% / 3));
        }
        100% {
          transform: translateX(0);
        }
      }
      
      .logo-scroll-right {
        animation: scrollRight 45s linear infinite;
      }
      
      .logo-scroll-left {
        animation: scrollLeft 45s linear infinite;
      }
      
      .logo-scroll-right:hover,
      .logo-scroll-left:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const LogoRow = ({ logos, direction }: { logos: typeof row1Logos; direction: 'right' | 'left' }) => {
    // Duplicate logos multiple times for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos];
    const animationClass = direction === 'right' ? 'logo-scroll-right' : 'logo-scroll-left';

    return (
      <div className="relative overflow-hidden py-2 md:py-3 lg:py-4 w-full">
        {/* Fade edges - minimal for edge-to-edge effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
        
        <div className={`flex items-center gap-3 md:gap-4 lg:gap-5 ${animationClass}`} style={{ width: 'max-content' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 flex items-center justify-center px-2 md:px-3 lg:px-4 group"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg p-2 md:p-3 lg:p-4 shadow-md hover:shadow-xl transition-all duration-500 group-hover:scale-105 border border-gray-100 hover:border-primary/30">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[90%] max-w-[90%] object-contain filter grayscale-[20%] hover:grayscale-0 transition-all duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-8 md:py-10 lg:py-12 overflow-hidden w-full">
      {/* Title */}
      <div className="text-center mb-6 md:mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Our Clients
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Trusted by industry leaders across various sectors
        </p>
      </div>

      {/* Three scrolling rows - edge to edge, no padding */}
      <div className="space-y-0 md:space-y-1 w-full">
        {/* Row 1: Scrolling Right - 7 logos */}
        <LogoRow logos={row1Logos} direction="right" />
        
        {/* Row 2: Scrolling Left - 7 logos */}
        <LogoRow logos={row2Logos} direction="left" />
        
        {/* Row 3: Scrolling Right - 8 logos */}
        <LogoRow logos={row3Logos} direction="right" />
      </div>
    </section>
  );
};

export default ClientLogosCarousel;

