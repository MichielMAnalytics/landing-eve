import React from 'react';
import { motion } from 'framer-motion';

const KeyFeatures: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-brand-h1 font-comfortaa font-bold text-white mb-8 text-center">Key Features</h2>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Feature */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="bg-gradient-to-br from-[#00B37E] to-[#04062D] border border-[#00B37E] rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-brand-h3 font-comfortaa font-bold text-white mb-4">
              Built into your workflows
            </h3>
            <p className="text-brand-base text-white/80 font-inter leading-relaxed">
              Our AI agents seamlessly integrate with your existing processes, understanding your projects, tasks, and documentation without isolated interactions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#E42800] to-[#04062D] border border-[#E42800] rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-brand-h3 font-comfortaa font-bold text-white mb-4">
              Learns Automatically
            </h3>
            <p className="text-brand-base text-white/80 font-inter leading-relaxed">
              Every interaction enhances our AI's understanding of your processes, adapting instantly to your unique requirements without manual configuration.
            </p>
          </div>
        </motion.div>

        {/* Right Feature */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F69902] to-[#04062D] border border-[#F69902] rounded-3xl p-8 h-full backdrop-blur-sm"
        >
          <h3 className="text-brand-h3 font-comfortaa font-bold text-white mb-4">
            Delivers Results
          </h3>
          <p className="text-brand-base text-white/80 font-inter leading-relaxed mb-8">
            While other tools simply provide suggestions, our AI takes action. It understands context, executes tasks, and delivers tangible outcomes that drive your business forward.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-brand-base text-white/90 font-inter">Immediate execution of tasks</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <span className="text-brand-base text-white/90 font-inter">Automated workflow optimization</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures; 