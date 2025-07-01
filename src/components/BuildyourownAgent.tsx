import React from 'react';
import { motion } from 'framer-motion';

const BuildYourOwnAgent: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[42.8%] space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white leading-tight"
          >
            Or build your own
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-nunito leading-tight max-w-xl mx-auto lg:mx-0"
          >
           Build your own helper. Add tools, add knowledge. Share with your team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="w-full sm:w-auto inline-flex justify-center bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-nunito font-bold tracking-wide px-6 py-[14px] sm:px-10 sm:py-4 border border-[rgba(216,217,236,0.5)] rounded-[12px] transition-all duration-200 hover:shadow-xl hover:shadow-[#4F8CFF]/30 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60 text-lg"
              onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
            >
              <span className="relative z-10">Start building</span>
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full lg:basis-[57.2%] min-h-[250px] sm:min-h-[400px]"
        >
          <div className="relative group w-[80%] sm:w-full">
            <div className="relative">
              <img
                src="/agentbuilder.png"
                alt="Eve Helper Builder Interface"
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