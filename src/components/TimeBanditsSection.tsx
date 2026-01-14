import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TimeBanditsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a2540] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 flex-1 w-full max-w-2xl"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              How Much Money Are You Losing to Time Bandits?
            </h3>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
              There is no way of knowing unless you measure it. With real-time data, you can manage your labour expenses daily, before it's too late.
            </p>
            <p className="text-white/80 text-sm sm:text-base">
              Calculate how much money Time Bandits are costing your company every year, by using our Time Bandit Calculator!
            </p>
          </motion.div>

          {/* Right Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-auto"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center w-full lg:w-auto gap-2 sm:gap-3 bg-[#00bcd4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold uppercase text-xs sm:text-sm tracking-wide hover:bg-[#00acc1] transition-colors"
            >
              Time Bandit Calculator
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeBanditsSection;
