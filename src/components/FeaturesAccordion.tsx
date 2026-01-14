import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check } from 'lucide-react';

const leftFeatures = [
  'No specialist hardware is required, just a smart phone is needed as your device (Android or iOS)',
  'Easily (and exceptionally quickly) Clock your Teams in/out Using NFC /QR Codes /and Face Validation',
  'Use a Static wall unit device in access controlled areas – or – use both phones and static devices as needed',
  'Any fraudulent activity is easily exposed as all data entries and edits are tracked',
  'No limit on users of devices or static units',
  'Multiple devices can be used i.e. you do not have to clock into and out of the same device – the system knows where you are.',
  'No limits on number of people or number of teams loaded onto your Portal',
  'All data is easily viewed and approved on the Better Times Portal',
  'All data is editable and can be manually added if you have the necessary security & admin clearance',
];

const rightFeatures = [
  'The portal allows different grades of users based on their security clearance.',
  'All data is POPI protected',
  'All data is easily accessible in Excel format',
  'All data is GPS located when clocking in/out',
  'If connection is lost, data is still recorded in real time and visible (synced) as soon as the device has connection again.',
  'Real time costing is applied to data i.e. you can monitor your daily costs as well as cost reporting over time.',
  'Data is easily sorted into cost centres as chosen when setting up the portal',
  'Data is easily configured for integration into payroll systems (Excel, txt, CSV etc.)',
];

const FeaturesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-4 sm:p-6 flex items-center text-left bg-[#e3f2fd] hover:bg-[#bbdefb] transition-colors rounded-lg"
          >
            <span className="text-[#0a2540] font-bold text-base sm:text-lg md:text-xl flex items-center gap-2">
              <span className="text-[#00bcd4]">{isOpen ? '−' : '+'}</span>
              Click here for a list of key features
            </span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 lg:p-8 grid md:grid-cols-2 gap-6 sm:gap-8 bg-gray-50 rounded-b-lg">
                  <ul className="space-y-3 sm:space-y-4">
                    {leftFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-600">
                        <Check size={16} className="text-[#e91e63] mt-0.5 sm:mt-1 flex-shrink-0 sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3 sm:space-y-4">
                    {rightFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-600">
                        <Check size={16} className="text-[#e91e63] mt-0.5 sm:mt-1 flex-shrink-0 sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
