import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import constructionWorkers from '@/assets/construction-workers.jpg';
import peopleBackground from '@/assets/people-background.jpg';
import schoolImage from '@/assets/school.jpg';
import securityWorkers from '@/assets/security-workers.jpg';
import workers from '@/assets/workers.jpg';
import phoneMockup from '@/assets/phone-mockup.png';

const slides = [
  {
    id: 1,
    image: workers,
    titleLine1: 'Solve your team tracking,',
    titleLine2: 'payroll & cost reporting',
    subtitle: 'Take advantage of this inexpensive and accurate in-your-pocket solution to time and productivity tracking.',
  },
  {
    id: 2,
    image: constructionWorkers,
    titleLine1: 'Solve your team tracking,',
    titleLine2: 'payroll & cost reporting',
    subtitle: 'Take advantage of this inexpensive and accurate in-your-pocket solution to time and productivity tracking.',
  },
  {
    id: 3,
    image: peopleBackground,
    titleLine1: 'Solve your team tracking,',
    titleLine2: 'payroll & cost reporting',
    subtitle: 'Take advantage of this inexpensive and accurate in-your-pocket solution to time and productivity tracking.',
  },
  {
    id: 4,
    image: schoolImage,
    titleLine1: 'Solve your team tracking,',
    titleLine2: 'payroll & cost reporting',
    subtitle: 'Take advantage of this inexpensive and accurate in-your-pocket solution to time and productivity tracking.',
  },
  {
    id: 5,
    image: securityWorkers,
    titleLine1: 'Solve your team tracking,',
    titleLine2: 'payroll & cost reporting',
    subtitle: 'Take advantage of this inexpensive and accurate in-your-pocket solution to time and productivity tracking.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] sm:min-h-[500px] max-h-[600px] overflow-hidden">
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 gradient-overlay" />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full pt-12 sm:pt-10 lg:max-w-xl">
            {/* Text Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                <span className="block">{slides[currentSlide].titleLine1}</span>
                <span className="block">{slides[currentSlide].titleLine2}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-5 max-w-xl">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a href="#how" className="btn-primary text-center text-sm sm:text-base py-3 sm:py-4">
                  Find out how
                </a>
                <a href="#contact" className="btn-secondary text-center text-sm sm:text-base py-3 sm:py-4">
                  Get a free trial
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Phone Mockup - Positioned at bottom right corner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute bottom-0 right-0 z-20"
        >
          <img
            src={phoneMockup}
            alt="Better Times App Interface"
            className="w-[240px] xl:w-[300px] 2xl:w-[360px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${index === currentSlide ? 'slider-dot-active' : ''}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
