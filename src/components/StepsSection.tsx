import { motion } from 'framer-motion';

import stepIcon1 from '@/assets/step-icon-1.png';
import stepIcon2 from '@/assets/step-icon-2.png';
import stepIcon3 from '@/assets/step-icon-3.png';

const steps = [
  {
    title: 'Start your free trial today to set up your web portal.',
    description: "Then download our free app onto the supervisors' phones.",
    icon: stepIcon1,
  },
  {
    title: "We'll mail as many NFC tags as you need!",
    description: 'Order additional tags with us at any time.',
    icon: stepIcon2,
  },
  {
    title: 'See the data in real-time on your portal',
    description: 'The supervisor clocks workers in and out through a simple scan using the app: 1 – 3 seconds per person.',
    icon: stepIcon3,
  },
];

const StepsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              {/* Icon */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h4 className="text-base sm:text-lg font-bold text-[#0a2540] mb-2 sm:mb-3">
                {step.title}
              </h4>
              <div className="w-12 sm:w-16 h-1 bg-[#00bcd4] mx-auto mb-2 sm:mb-3" />
              <p className="text-gray-500 text-xs sm:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
