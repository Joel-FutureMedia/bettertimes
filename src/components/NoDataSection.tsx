import { motion } from 'framer-motion';

import iconNfcCard from '@/assets/icon-nfc-card.jpg';
import iconDataConnection from '@/assets/icon-data-connection.png';
import iconHardware from '@/assets/icon-hardware.png';

const NoDataSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden">
          {/* Left - Cyan Card with NFC illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#00bcd4] p-6 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[350px] sm:min-h-[400px] rounded-br-[40px] sm:rounded-br-[60px]"
          >
            <div className="max-w-md">
              <p className="text-white leading-relaxed text-base sm:text-lg">
                <strong>BETTER TIMES</strong> has been expertly designed, developed & managed by Professional on-site Engineers that have substantial specialist experience in large and small scale projects, manufacturing & business.{' '}
                <strong>The system is suitable for any size business or school.</strong>
              </p>
            </div>
            
            {/* NFC Phone Illustration */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <img
                src={iconNfcCard}
                alt="NFC Phone Scanning"
                className="w-36 sm:w-48 h-auto"
              />
            </div>
          </motion.div>

          {/* Right Column - Two Navy Cards */}
          <div className="flex flex-col">
            {/* Top Card - No data connection */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0a2540] p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 flex-1 rounded-br-[40px] sm:rounded-br-[60px]"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
                  No data connection is required!
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  All clocking data simply syncs to your portal when the supervisor's phone is back online.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={iconDataConnection}
                  alt="No data connection required"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                />
              </div>
            </motion.div>

            {/* Bottom Card - No expensive hardware */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a2540] p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 flex-1 rounded-tr-[40px] sm:rounded-tr-[60px] mt-1"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
                  No expensive hardware is required!
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Most modern mobile phones are NFC enabled. All you need is our tags and you're good to go!
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={iconHardware}
                  alt="No expensive hardware required"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoDataSection;
