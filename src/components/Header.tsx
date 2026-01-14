import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import logoDark from '@/assets/logo-dark.png';
import logoWhite from '@/assets/logo-white.png';

const betterVibesLinks = [
  { name: 'Latest News', href: 'https://bettertimes.co.za/latest-news-blog/' },
  { name: 'Better News', href: 'https://bettertimes.co.za/better-news-blog/' },
  { name: 'Case Studies', href: 'https://bettertimes.co.za/case-studies/' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBetterVibesOpen, setIsBetterVibesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBetterVibesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About us', href: '/about', isExternal: false },
    { name: 'FAQs', href: '/faqs', isExternal: false },
    { name: 'Home', href: '/', isExternal: false, isActive: location.pathname === '/' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? logoDark : logoWhite}
              alt="Better Times"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Better Vibes Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBetterVibesOpen(!isBetterVibesOpen)}
                className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 relative group flex items-center gap-1 ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                Better Vibes
                <ChevronDown size={16} className={`transition-transform duration-200 ${isBetterVibesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isBetterVibesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {betterVibesLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                        onClick={() => setIsBetterVibesOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 relative group ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                } ${link.isActive ? (isScrolled ? 'text-primary' : 'text-white') : ''}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-primary' : 'bg-white'
                  } ${link.isActive ? 'w-full' : ''}`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Better Vibes Mobile Dropdown */}
              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setIsBetterVibesOpen(!isBetterVibesOpen)}
                  className="font-semibold text-foreground hover:text-primary py-2 flex items-center justify-between w-full"
                >
                  Better Vibes
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isBetterVibesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isBetterVibesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 overflow-hidden"
                    >
                      {betterVibesLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-semibold text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
