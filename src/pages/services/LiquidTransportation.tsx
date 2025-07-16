import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Transportation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                  Liquid Cargo Transportation
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Reliable handling and distribution of liquid cargo across domestic and international routes
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      alt="Liquid Transportation Service"
                      className="w-full h-full object-cover"
                      src="/trucks.png"
                    />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

       {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Specialized Expertise in Liquid Transportation
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">
                Transporting liquid cargo demands specialized expertise, and we provide comprehensive solutions ensuring the safe and efficient delivery of your valuable cargo. Understanding the unique challenges of liquid transport, whether chemicals, food-grade products, or other bulk items, we utilize a specialized fleet and equipment, including ISO tanks, flexitanks, and specialized tankers, managed by a team trained in strict safety protocols.
              </p>
              <p className="text-gray-700 text-justify">
                We offer end-to-end logistics, encompassing pre-shipment planning, route optimization, regulatory compliance, temperature-controlled transportation for sensitive cargo, secure loading/unloading, and real-time tracking. Our commitment to safety and reliability guarantees your cargo arrives in perfect condition and on time, making us a trusted partner for both domestic and international transportation needs.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {[{
              icon: <Droplets className="h-10 w-10 text-brand-gold" />,
              title: "Specialized Equipment",
              description: "ISO tanks, flexitanks, and specialized tankers for all cargo types"
            }, {
              icon: <Truck className="h-10 w-10 text-brand-gold" />,
              title: "End-to-End Logistics",
              description: "Complete solutions from planning to delivery"
            }, {
              icon: <BarChart className="h-10 w-10 text-brand-gold" />,
              title: "Temperature Control",
              description: "Maintain optimal conditions for sensitive cargo"
            }, {
              icon: <ShieldCheck className="h-10 w-10 text-brand-gold" />,
              title: "Safety First",
              description: "Strict protocols and trained personnel handle your cargo"
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-4 bg-amber-50 p-3 rounded-full inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
            
            {/* CTA Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Transport Your Liquid Cargo?</h3>
              <p className="mb-6 text-green-50">
                Contact our specialists today for tailored transportation solutions.
              </p>
              <a href="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Get a Quote
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transportation;
