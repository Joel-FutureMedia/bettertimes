import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Access to a web portal',
  'Dashboard',
  'Data for payroll & cost reporting',
  'Mobile App',
];

const TrialCTA = () => {
  return (
    <section className="bg-accent py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Start your <strong>FREE TRIAL</strong> now
            </h2>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-white text-base sm:text-lg">
                  <Check size={18} className="text-white flex-shrink-0 sm:w-5 sm:h-5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center sm:col-span-2 lg:col-span-1"
          >
            <a
              href="/contact"
              className="morphing-circle group w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-white font-bold text-base sm:text-lg uppercase tracking-wide relative"
            >
              <span className="relative z-10">Contact us</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrialCTA;
