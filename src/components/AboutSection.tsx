import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Real-time payroll-friendly time and attendance data',
  'Cost-effective pay-as-you-go monthly rates',
  'Time saving in-office and on-site',
  'Real-time cost reporting',
  'No licensing fees',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Title, Description, and Features */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2540] mb-6 sm:mb-8">
              Take control of your workforce tracking
            </h2>
            <div className="border-l-4 border-[#0066cc] pl-4 sm:pl-6 mb-6 sm:mb-8">
              <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                <strong className="text-[#0a2540]">Better Times</strong> is the complete solution for employee time tracking and real-time labour management. Use a smartphone (iOS or Android) to digitally capture attendance, clocking in/out, cost reporting, location and more, to accurately track employee hours, position and cost allocation, and streamline your payroll.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Workers are easily checked in and out using choices between NFC tags, QR Codes and Face Validation and a mobile phone linked directly to your company management and payroll system.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold uppercase text-xs sm:text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              About us
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
          </motion.div>

          {/* Right Side - Features Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="space-y-3 sm:space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <Check size={18} className="text-secondary flex-shrink-0 mt-0.5 sm:w-[22px] sm:h-[22px]" strokeWidth={3} />
                  <span className="text-[#0a2540] font-medium text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Video and CTA */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl aspect-video border-2 sm:border-4 border-[#0a2540]">
              {/* YouTube Embed */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/q1ZKt5SXUlY"
                title="Better Times - Time and Attendance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* No More Paying Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-full py-6 sm:py-0"
          >
            <div className="text-center max-w-md">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a2540] mb-3 sm:mb-4">
                No More Paying For Wasted Time
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Accurately Track Labor, Streamline Payroll, And Maximize Efficiency With Better Times.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
