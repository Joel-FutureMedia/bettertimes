import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Better Times is the best investment we have ever made in our company. The system is so effective and user friendly. Our payroll is a dream now thanks to Better Times! Thank you Craig!",
    name: "Wicus van der Merwe",
    company: "Byhet Renovations",
  },
  {
    quote: "Better times streamlines the wage process and adds great value to the efficiencies of our business",
    name: "Mike van Coller",
    company: "MetaPipe Installation Solutions",
  },
  {
    quote: "I cannot recommend Better Times enough. I love the ease of the system and we have already seen a vast reduction in costs towards wages. Their after-sales service is unbeatable. A huge thanks to Craig and the Team!",
    name: "Natalie Schoeman",
    company: "Premier Concrete Floors",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#e8f4fc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Trusted by businesses across South Africa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center">
                <Quote size={20} className="text-white sm:w-6 sm:h-6" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-primary text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-accent text-xs sm:text-sm font-medium">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
