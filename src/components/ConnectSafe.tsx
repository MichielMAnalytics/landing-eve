import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ConnectSafe: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-8 md:pt-12 pb-16 sm:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Text Content - Now on the left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[57.2%] mb-10 lg:mb-0 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white mb-2 leading-tight"
          >
            Connect safely
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-inter leading-tight max-w-[90%] pr-8 mb-4 mx-auto lg:mx-0"
          >
            Eve ensures your data stays secure and private. Connect your tools with peace of mind.
          </motion.p>
          {/* Button container
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="group relative w-full sm:w-auto px-8 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-medium overflow-hidden rounded-lg font-inter border border-[rgba(216,217,236,0.5)] bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20"
              onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
            >
              <span className="relative z-10">Start building</span>
            </button>
          </motion.div> */}
        </div>

        {/* Image Container - Right side */}
        <div className="w-full lg:basis-[42.8%] flex items-center justify-center scale-110 transform hover:scale-125 transition-transform duration-300">
          <img
            src="/agentbuilder.png"
            alt="Eve Security and Privacy"
            className="w-full h-auto object-contain rounded-2xl scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSafe; 