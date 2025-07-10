import React from 'react';
import { Shield, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const DataPrivacySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-black to-[#00B37E]/5" aria-label="Data Privacy and Compliance">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-brand-h2 font-comfortaa font-bold mb-8 sm:mb-12 leading-tight text-center bg-gradient-to-r from-white via-white to-[#00B37E] bg-clip-text text-transparent"
          >
            We care about security & privacy
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Data Privacy Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle at 50% 50%, #00B37E, transparent 70%)`
                }}
              />
              
              <div className="bg-black border border-white/10 rounded-2xl p-6 sm:p-8 relative backdrop-blur-sm overflow-hidden">
                {/* Inner Radial Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, #00B37E20, transparent 85%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#00B37E]" />
                    <h3 className="text-xl sm:text-2xl font-bold font-comfortaa text-white">
                      Data Privacy
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-white/80 font-nunito leading-relaxed">
                    Your data remains private and inaccessible to anyone. Your data will never be used to train models.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compliance Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"
                style={{
                  background: `radial-gradient(circle at 50% 50%, #00B37E, transparent 70%)`
                }}
              />
              
              <div className="bg-black border border-white/10 rounded-2xl p-6 sm:p-8 relative backdrop-blur-sm overflow-hidden">
                {/* Inner Radial Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, #00B37E20, transparent 85%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-[#00B37E]" />
                    <h3 className="text-xl sm:text-2xl font-bold font-comfortaa text-white">
                      Compliance
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-white/80 font-nunito leading-relaxed">
                    GDPR compliant. Your data is protected by industry-leading security measures.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection; 