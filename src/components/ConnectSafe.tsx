import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ConnectSafe: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0EA5E9]/5 via-black to-[#6E3ADE]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[57.2%] space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h2 font-comfortaa font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6E3ADE] leading-tight"
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
        <div className="w-[80%] sm:w-full lg:basis-[42.8%] flex items-center justify-center mb-6 sm:mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-300 min-h-[240px] sm:min-h-[340px]">
          <img
            src="/switch.gif"
            alt="Eve Switch and Collaboration"
            className="w-full h-full object-contain rounded-2xl scale-90 sm:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSafe; 