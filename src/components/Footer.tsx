import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#0a2540] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Side - Logo & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 sm:mb-8">
                <img
                  src={logoWhite}
                  alt="Better Times"
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
              
              <div className="mb-4 sm:mb-6">
                <p className="font-bold text-white">Craig Fussell</p>
                <p className="text-white/80 text-sm sm:text-base">Director</p>
                <p className="text-[#00bcd4] text-sm sm:text-base">CTO – Chief Times Officer</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e91e63] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                </div>
                <a href="mailto:craig.fussell@bettertimes.co.za" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base break-all">
                  craig.fussell@bettertimes.co.za
                </a>
              </div>
            </motion.div>

            {/* Right Side - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:text-right"
              id="contact"
            >
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Quick Links</h4>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-sm sm:text-base md:justify-end">
                <a href="/" className="hover:text-white transition-colors">HOME</a>
                <span className="hidden sm:inline">|</span>
                <a href="/about" className="hover:text-white transition-colors">ABOUT US</a>
                <span className="hidden sm:inline">|</span>
                <a href="/faqs" className="hover:text-white transition-colors">FAQs</a>
                <span className="hidden sm:inline">|</span>
                <a href="/contact" className="hover:text-white transition-colors">CONTACT US</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Cyan Bar */}
      <div className="bg-[#00bcd4] py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Better Times.
          </p>
          <a href="#" className="text-white text-xs sm:text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
