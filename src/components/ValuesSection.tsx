import React from 'react';
import { motion } from 'framer-motion';

const ValuesSection: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Work smarter",
              description: "Orchestrate your work with a team of AI helpers."
            },
            {
              title: "Automate everything",
              description: "Automating your work is as easy as chatting with your helpers."
            },
            {
              title: "Context-aware",
              description: "With 2700+ integrations, you can connect your favorite tools and systems to your helpers."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl shadow-xl flex flex-col items-start text-left"
            >
              <h3 className="text-brand-h3 font-comfortaa leading-tight font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text leading-tight text-white/70 font-inter mb-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 