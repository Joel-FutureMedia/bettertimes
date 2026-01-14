import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import aboutHero from '@/assets/about-hero.jpg';
import teamAlex from '@/assets/team-alex.png';
import teamShaunagh from '@/assets/team-shaunagh.png';
import teamVanessa from '@/assets/team-vanessa.png';
import teamCraig from '@/assets/team-craig.png';
import teamMary from '@/assets/team-mary.png';
import teamMicah from '@/assets/team-micah.png';
import teamIkeraam from '@/assets/team-ikeraam.png';

const teamMembers = [
  { name: 'Alex van den Bosch', role: 'Developer, Technical', image: teamAlex },
  { name: 'Shaunagh van der Merwe', role: 'Sales', image: teamShaunagh },
  { name: 'Vanessa Rossouw', role: 'Project Management', image: teamVanessa },
  { name: 'Craig Fussell', role: 'Co-founder, Civil Engineer', image: teamCraig },
  { name: 'Ikeraam de Jongh', role: 'Better Fixed Support', image: teamIkeraam },
  { name: 'Mary Shout', role: 'Admin & Finance', image: teamMary },
  { name: 'Micah Frank', role: 'Better Fixed Support', image: teamMicah },
];

const trialFeatures = [
  'Access to a web portal',
  'Dashboard',
  'Data for payroll & cost reporting',
  'Mobile App',
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-[#0a2540]/70" />
        
        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-2xl pt-20 sm:pt-24"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              <strong>Better Times</strong> identified the need for a cost effective, efficient and easily portable system that measures and manages on or off-site staff time and attendance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Better Times Began */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0066cc] mb-8">
                How Better Times began
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                With our experience in the construction industry, we saw the need for a simple time and attendance system offering accurate control over the workforce. From site to site and changing workers, to "buddy" systems that disrupt cashflow, we brainstormed what would work best to save our clients time and money.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                As construction engineers, we know how time and attendance systems let us down, adding extra administrative burdens to already pressurised project environments. Better Times is poised to set the world of workforce management on fire through its simple and fool-proof design. When we say "mobile" and "real-time", we mean it!
              </p>

              <h3 className="text-2xl font-bold text-[#0a2540] mb-4">
                What is our BIGGEST LEARNING so far?
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Understanding that the challenges faced when managing a construction based workforce apply to any type or size of business. We are assisting Clients across all industries, businesses, institutions, schools and educational organisations. The common denominator is a driven need to easily manage their people by being fair to both employer and employee, especially with regards to hours at work, payroll accuracy, production measurement and real-time people management.
              </p>
            </motion.div>

            {/* Right - Craig's Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0a2540]">
                <img
                  src={teamCraig}
                  alt="Craig Fussell"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-semibold text-[#0a2540]">Craig Fussell</h4>
              <p className="text-gray-500 uppercase tracking-wider text-sm">
                CO-FOUNDER & CIVIL ENGINEER AT LARGE
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Goal Quote Section */}
      <section className="py-16 bg-gradient-to-r from-[#0066cc] to-[#00bcd4]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-8 lg:gap-16">
            {/* Quote Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <span className="text-[120px] lg:text-[180px] font-bold text-[#00bcd4]/50 leading-none">"</span>
            </motion.div>

            {/* Quote Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Goal</h3>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                We help financial managers save significant time and avoid financial loss so they can focus on their primary responsibilities without being distracted by inefficient payroll and attendance issues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#e8f4fc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-[#0a2540]">{member.name}</h4>
                <p className="text-gray-500 text-xs sm:text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pink CTA Section */}
      <section className="py-16 bg-[#e91e63]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white italic">
                Start your FREE<br />TRIAL now
              </h3>
            </motion.div>

            {/* Middle - Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-3">
                {trialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check size={20} className="text-[#0a2540]" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <Link
                to="/#contact"
                className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-xl uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
