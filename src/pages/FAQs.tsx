import { motion } from 'framer-motion';
import { Check, Plus, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import faqHero from '@/assets/faq-hero.jpg';
import faqPerson from '@/assets/faq-person.jpg';

const faqData = [
  {
    question: "How quick and easy is it to clock workers in and out on a daily basis?",
    answer: "Once opened on the phone or device, workers simply scan the unique tags against the device/smartphone and this is automatically read by the NFC Scanner or QR Code and Face Validated. This process is \"instant\" and avoids time wasting or queuing at clock in."
  },
  {
    question: "What device do I need for clocking my workforce in and out each day?",
    answer: "Most current Smartphones are NFC enabled and are suitable for Better Times. There are also specific site and impact resistant phones suitable for construction sites, etc. Better Times is compatible with both Android and iOS operating systems."
  },
  {
    question: "What happens at the end of my Free Trial?",
    answer: "We will send you Better Times Tags to suit your needs and then assist you with what's needed to fully utilise the Portal. Billing for each individual worker will start once the system is fully loaded."
  },
  {
    question: "Do I have to sign up for a long contract in order to use Better Times?",
    answer: "No, Better Times is billed monthly on a base fee and per worker."
  },
  {
    question: "How does the pricing model work and what will it cost me per month?",
    answer: "Better Times has a base fee for setting up and managing the Data and Dashboard within the Portal. On top of this, each worker is then billed for per month within a \"pay as you use\" system. The system allows fluctuations in numbers as work forces grow and shrink through projects."
  },
  {
    question: "What does the Portal offer for my monthly fee?",
    answer: "The online Portal (backed up in the Cloud) is both a data generating service, and an extremely powerful real time management tool where daily data, real time Dashboards and collatable Payroll data is exported for Payroll Integration. Access to a web portal, Dashboard, Data for payroll & cost reporting, Mobile App. Any fraudulent activity is easily exposed as all data entries and edits are tracked. No limit on users of devices or static units. Multiple devices can be used .i.e. you do not have to clock into and out of the same device – the system knows where you are. No limits on number of people or number of teams loaded onto your Portal. All data is easily viewed and approved on the Better Times Portal. All data is editable and can be manually added if you have the necessary security & admin clearance .i.e. certain Portal Users are blocked from seeing sensitive data like pay. The portal allows different grades of users based on their security clearance. All data is POPI protected. All data is easily accessible in Excel format. All data is GPS located when clocking in/out. If connection is lost, data is still recorded in real time and visible (synced) as soon as the device has connection again. Real time costing is applied to data .i.e. you can monitor your daily costs as well as cost reporting over time. Data is easily sorted into cost centres as chosen when setting up the portal .i.e. you will always know who cost what, for how long, what they were doing and where. Data is easily configured for integration into payroll systems (Excel, txt, CSV etc.)"
  },
  {
    question: "How many sites am I allowed to allocate on my Portal?",
    answer: "As many as you need."
  },
  {
    question: "How many employees am I allowed to load and clock in/out on my Portal?",
    answer: "As many as you need."
  },
  {
    question: "How many devices am I allowed to run on my Portal?",
    answer: "As many as you need."
  },
  {
    question: "What information do I see on the Dashboard of my Portal?",
    answer: "The Dashboard offers an overview of the entire business regarding who is on site at each location and when they clocked in and out? The Dashboard also has an efficient filter system (in real time) that allows the user to search for suitable individual or site information. These filters are set per worker, per site, per date (or period), and worker activity."
  },
  {
    question: "Can I clock workers in more than once per day?",
    answer: "Yes. If a worker needs to leave site and come back, simply clock them out when they leave and back in when they start again."
  },
  {
    question: "How do I avoid workers clocking each other in and out?",
    answer: "Each worker is individually loaded onto the portal with a unique ID, together with a photograph of the worker. On clocking in, their photograph is displayed on the device/smartphone. The Face Validation option asks the device to photograph each person as they clock in/out which is then validated by the system and prevents any fraudulent behaviour."
  },
  {
    question: "Can I manually load or edit current data if the device is not working or if workers have not clocked in?",
    answer: "Yes. If mistakes are made on site while clocking in or out, the portal does allow users with security clearance to make manual entries or to manually edit entries before being approved for Payroll integration."
  },
  {
    question: "What security do I have on sensitive payroll and time and attendance data in the Portal?",
    answer: "Access to the Portal is strictly controlled through approved users by each Client."
  },
  {
    question: "Can I edit data using the App or from the device?",
    answer: "No, the App is only allowed to capture clocking in, clocking out and location data, none of which is editable through the App. This is a security feature and prevents editing from the device."
  },
  {
    question: "Does Better Times integrate with my Payroll system?",
    answer: "The Better Times Portal is able to collate data into exportable formats that are suited to your payroll system."
  },
  {
    question: "Am I able to use bespoke NFC tags for my company and workforce?",
    answer: "Yes, Better Times is able to supply bespoke tags that are \"fit for purpose\" for your business."
  },
  {
    question: "Where do I buy suitable NFC Tags that are compatible with the Better Times App?",
    answer: "Better Times supplies the correctly formatted NFC tags to ensure perfect compatibility with the Better Times App which is loaded onto each active device. This is to ensure that unsuitable tags are avoided and do not corrupt data. You can order more tags by sending us an email: ",
    answerLink: { text: "click here", href: "mailto:info@bettertimes.co.za" }
  },
  {
    question: "What kind of NFC tags are available from Better Times?",
    answer: "NFC tags from Better Times can be purchased in many forms as 'fit for purpose'. For example, sticker tags can be used on Safety PPE, on ID Tags, on name tags, on equipment, etc. Plastic type tags come in many forms such as Key Chain Tags, ID Card Tags, etc."
  },
  {
    question: "How long do I have to pay my bill?",
    answer: "7 Working days from issue of invoice."
  },
  {
    question: "What happens if I don't pay my bill?",
    answer: "We will ask nicely for outstanding payments and if payment is not made after this request, we will unfortunately need to deny access to the portal. Clocking in/out on site will still be available for a reasonable time until the bill has been paid making sure that your data is uninterrupted for the next payroll."
  }
];

const trialFeatures = [
  'Access to a web portal',
  'Dashboard',
  'Data for payroll & cost reporting',
  'Mobile App',
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={faqHero}
            alt="People using Better Times"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            FAQs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Know what you're getting
          </motion.p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ Accordion - Left Side */}
            <div className="lg:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-primary mb-10"
              >
                A few questions about our package
              </motion.h2>

              <Accordion type="single" collapsible className="space-y-0">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left py-5 text-base font-medium text-foreground hover:no-underline [&>svg]:hidden">
                        <div className="flex items-center justify-between w-full pr-4">
                          <span>{faq.question}</span>
                          <Plus className="h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 [[data-state=open]>&]:rotate-45" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                        {faq.answerLink && (
                          <a
                            href={faq.answerLink.href}
                            className="text-primary hover:underline ml-1"
                          >
                            {faq.answerLink.text}
                          </a>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>

            {/* Right Side - Image and Contact */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-32"
              >
                <div className="rounded-3xl overflow-hidden mb-6">
                  <img
                    src={faqPerson}
                    alt="Person using Better Times"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-foreground mb-6">
                  If you require more information please contact us.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  CONTACT US
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pink CTA Section */}
      <section className="bg-brand-pink py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Start your FREE<br />TRIAL now
              </h2>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {trialFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <Check size={20} className="text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center md:justify-end"
            >
              <a
                href="#contact"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg hover:bg-white hover:text-brand-pink transition-all duration-300"
              >
                CONTACT US
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
