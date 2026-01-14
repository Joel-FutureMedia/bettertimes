import { motion } from 'framer-motion';
import payspaceLogo from '@/assets/payspace-logo.png';

const PaySpaceSection = () => {
  return (
    <section className="bg-secondary py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <a href="https://www.payspace.com/payroll-services/" target="_blank" rel="noopener noreferrer">
              <img
                src={payspaceLogo}
                alt="PaySpace by Deel"
                className="w-full max-w-xs sm:max-w-md mx-auto"
              />
            </a>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              <a href="https://www.payspace.com/payroll-services/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Native Integration with PaySpace
              </a>
            </h3>
            <p className="text-white/90 font-semibold text-sm sm:text-base">More coming soon...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaySpaceSection;
