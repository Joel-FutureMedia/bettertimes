import { motion } from 'framer-motion';
import { Flame, Calendar, BarChart3, Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    icon: Flame,
    price: 'Free',
    description: 'Perfect for small teams getting started',
    features: ['Up to 10 users', 'Basic reporting', 'Email support', 'Mobile app access'],
    highlighted: true,
    bgColor: 'bg-secondary',
  },
  {
    name: 'Professional',
    icon: Calendar,
    price: 'Custom',
    description: 'For growing businesses with more needs',
    features: ['Unlimited users', 'Advanced analytics', 'Priority support', 'API access', 'Custom integrations'],
    highlighted: false,
    bgColor: 'bg-primary',
  },
  {
    name: 'Enterprise',
    icon: BarChart3,
    price: 'Contact us',
    description: 'Full-featured solution for large organizations',
    features: ['Everything in Professional', 'Dedicated account manager', 'Custom development', 'SLA guarantee', 'On-site training'],
    highlighted: false,
    bgColor: 'bg-accent',
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Pricing Options</h3>
          <p className="text-lg sm:text-xl text-primary">
            BETTER TIMES scales with you as your business grows
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl ${plan.bgColor} ${
                plan.highlighted ? 'ring-4 ring-yellow-400 sm:transform sm:scale-105' : ''
              }`}
            >
              <plan.icon size={40} className="mb-3 sm:mb-4 opacity-80 sm:w-12 sm:h-12" />
              <h4 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{plan.price}</p>
              <p className="text-white/80 mb-4 sm:mb-6 text-xs sm:text-sm">{plan.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <Check size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-white/20 hover:bg-white/30 py-2.5 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
