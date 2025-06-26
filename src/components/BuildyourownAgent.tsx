import React from 'react';
import { motion } from 'framer-motion';

const BuildYourOwnAgent: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Text Content - Now on the left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[42.8%] mb-10 lg:mb-0 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white mb-2 leading-tight"
          >
            Or build your own
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-inter leading-tight max-w-xl mb-4 mx-auto lg:mx-0"
          >
           Build your own agent. Add tools, add knowledge. Share with your team.
          </motion.p>
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
          </motion.div>
        </div>

        {/* Image Section - Right side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full lg:basis-[57.2%] min-h-[300px] sm:min-h-[400px]"
        >
          <div className="relative group">
            <div className="relative">
              <img
                src="/agentbuilder.png"
                alt="Eve Agent Builder Interface"
                className="w-full max-w-xl sm:max-w-2xl rounded-xl border-2 border-[rgba(216,217,236,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildYourOwnAgent; 