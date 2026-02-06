import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
            Pricing Options
          </h2>
          <p className="text-base sm:text-lg text-primary font-medium">
            BETTER TIMES scales with you as your business grows
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Free Trial - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl overflow-hidden"
          >
            {/* Abstract background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <circle cx="350" cy="50" r="150" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="400" cy="150" r="100" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 300 Q 100 250 200 300 T 400 300" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 350 Q 150 300 300 350 T 400 350" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Free Trial</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/90">Fully functional use of your portal to test BETTER TIMES</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/90">Better Times tags delivered to your address</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/90">Order additional tags with us at any time</span>
                </li>
              </ul>

              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full gap-2 bg-white text-primary py-3 px-6 rounded-full font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Per Month */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Per Month</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Unlimited clocking in and clocking out of workforce</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Unlimited use of your portal to track and report on your workforce</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Collated data for integration with payroll systems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">You only pay for as many people that use the system each month, i.e. "pay-as-you-go"</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center justify-center w-full gap-2 bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Card 3: Custom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">Custom</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Unlimited use of your portal to track and report on your workforce</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Order additional tags with us at any time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">Better Times is cost effective and suitable for very small to very large businesses</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center justify-center w-full gap-2 bg-accent text-white py-3 px-6 rounded-full font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
