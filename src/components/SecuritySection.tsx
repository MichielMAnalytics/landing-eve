import React from 'react';
import { motion } from 'framer-motion';

const SecuritySection: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-8 md:pt-12 pb-24 sm:pb-36 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-12">
        {/* Image Container */}
        <div className="w-[80%] sm:w-full lg:basis-[42.8%] flex items-center justify-center mb-6 sm:mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-300 max-w-[600px]">
          <img
            src="/automate.png"
            alt="Eve Security and Privacy"
            className="w-full h-auto object-contain rounded-2xl scale-90 sm:scale-110 max-h-[500px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[57.2%] space-y-6 lg:pl-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white leading-tight"
          >
            Automate with confidence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-nunito leading-tight max-w-xl mx-auto lg:mx-0"
          >
            Eve lets you automate with confidence. Chat, connect, automate.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection; 