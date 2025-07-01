import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ConnectSafe: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-8 md:pt-12 pb-16 sm:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[57.2%] space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white leading-tight"
          >
            Switch, tag, collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-[#fefefe]/70 font-nunito mb-8 leading-tight max-w-2xl"
          >
            Let helpers collaborate with each other and your tools.
          </motion.p>
        </div>

        {/* Image Container */}
        <div className="w-[80%] sm:w-full lg:basis-[42.8%] flex items-center justify-center mb-6 sm:mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-300">
          <img
            src="/switch.png"
            alt="Eve Security and Privacy"
            className="w-full h-auto object-contain rounded-2xl scale-90 sm:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSafe; 