import { motion } from 'framer-motion';
import { HardHat, Shield, Factory, GraduationCap, UtensilsCrossed, Building2 } from 'lucide-react';

import industryConstruction from '@/assets/industry-construction.jpg';
import industrySecurity from '@/assets/industry-security.jpg';
import industryManufacturing from '@/assets/industry-manufacturing.jpg';
import industrySchools from '@/assets/industry-schools.jpg';
import industryHospitality from '@/assets/industry-hospitality.jpg';
import industryCommercial from '@/assets/industry-commercial.jpg';

const industries = [
  {
    id: 1,
    name: 'Construction',
    image: industryConstruction,
    icon: HardHat,
    description: [
      "Make sure your teams clock in and out at their place of work on time and be sure they are actually on site by using GPS location",
      "Rather clock them in at their place of work after they have kitted into their PPE, drawn their tools from the store, and moved onto their place of work",
      "Then clock them out at shift end at their place of work. They can then move back to the yard, return tools, clean up and leave – i.e. no idling time is wasted",
      "Use the data to monitor labour costs by the day with real time cost reporting and avoid losses that could have been prevented if identified earlier",
      "Moving from site to site is easy as Better Times tracks daily activities and moves (transfers)",
      "All this can be done using your smart phone"
    ]
  },
  {
    id: 2,
    name: 'Security',
    image: industrySecurity,
    icon: Shield,
    description: [
      "Many shift options, including night shifts, make logging accurate time spent on site difficult – not with Better Times",
      "You can customise all your sites shifts, regardless of how long or when, to suit your business",
      "Guards simply clock in and out at shift change and Better Times does the rest",
      "Large & permanent sites can choose static devices, but easiest is to simply use a smart phone"
    ]
  },
  {
    id: 3,
    name: 'Manufacturing',
    image: industryManufacturing,
    icon: Factory,
    description: [
      "Teams can easily clock into the factory on the factory floor at their place of work at start of shift",
      "Track costs (time spent) on individual projects within the factory by using Better Times to plot the time spent on daily activities even if individuals are working on multiple projects each day",
      "If supply and install is your thing, plot both the manufacturing costs and the installation costs of each project by simply clocking in/out of each project as needed"
    ]
  },
  {
    id: 4,
    name: 'Schools',
    image: industrySchools,
    icon: GraduationCap,
    description: [
      "Both staff and learners are easily managed by Better Times in the Schools environment",
      "Learners need data for the legislated registers, and staff need to conform to their attendance requirements",
      "All easily done on static devices or mobile devices – or – both"
    ]
  },
  {
    id: 5,
    name: 'Hospitality',
    image: industryHospitality,
    icon: UtensilsCrossed,
    description: [
      "Hours and variable shifts are generally a headache for Hospitality businesses – not with Better Times",
      "Simply set up each location with the applicable shift and staff clock in and out accordingly",
      "Mobile people are tracked and managed on deliveries and driving as they clock into each location while on the move"
    ]
  },
  {
    id: 6,
    name: 'Commercial',
    image: industryCommercial,
    icon: Building2,
    description: [
      "Staff need to clock in and out of office and home environments in the modern world",
      "Be sure that your staff are where they say they are by using Better Times and be sure that the allocated hours are accurate",
      "Access control to entrances can also be integrated with Better Times to be doubly sure only allowed staff enter the premises as well tracking their attendance",
      "Project manage costs by clocking into allocated projects (or multiple projects) each day"
    ]
  },
];

const IndustryGrid = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden aspect-[4/3] group"
          >
            <img
              src={industry.image}
              alt={industry.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Default State - Icon and Name */}
            <div className="absolute inset-0 bg-primary/60 group-hover:opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
              <industry.icon size={40} className="mb-2 sm:mb-3 opacity-80 sm:w-12 sm:h-12 lg:w-14 lg:h-14" strokeWidth={1.5} />
              <span className="text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wider text-center px-2">
                {industry.name}
              </span>
            </div>

            {/* Hover State - Description */}
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-4 sm:p-6 lg:p-8 text-white overflow-y-auto">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <industry.icon size={24} strokeWidth={1.5} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                <h4 className="text-base sm:text-xl lg:text-2xl font-bold uppercase tracking-wider">
                  {industry.name}
                </h4>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {industry.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base leading-relaxed"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00bcd4] mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustryGrid;
