import React from 'react';
import { motion } from 'framer-motion';

const ModelAgnostic: React.FC = () => {
  const modelLogos = [
    { name: 'OpenAI', src: '/openai-logo.png' },
    { name: 'Google Gemini', src: '/gemini-logo.png' },
    { name: 'Anthropic Claude', src: '/claude-logo.png' },
    { name: 'Meta', src: '/meta-logo.png' },
    { name: 'GitHub', src: '/github-logo.png' },
    { name: 'Notion', src: '/notion-logo.png' },
    { name: 'Slack', src: '/slack-logo.png' },
    { name: 'Microsoft', src: '/microsoft-logo.png' },
    { name: 'Mistral AI', src: '/mistral-logo.png' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" aria-label="Model Integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-6xl mx-auto relative group">
          {/* Outer Background Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, #00B37E, transparent 70%)`
            }}
          />
          
          <div className="bg-black border border-white/10 rounded-2xl p-6 md:p-10 relative z-20 backdrop-blur-sm overflow-hidden">
            {/* Inner Radial Background Effect */}
            <div 
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, #00B37E30, transparent 85%)`
              }}
            />
            
            <div className="grid lg:grid-cols-2 gap-8 min-h-[320px] relative z-10">
              {/* Left: Centered Title and Description */}
              <div className="flex flex-col justify-center h-full min-h-[240px] space-y-4">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-brand-h2 font-comfortaa font-bold leading-tight text-white">
                    Model Agnostic
                  </h2>
                  <p className="text-white/80 text-lg font-nunito max-w-md">
                    Connect to all your existing systems, future proof integrations that utilize best-in-class LLM models and platforms.
                  </p>
                </div>
              </div>

              {/* Right: Logo Grid */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-3 gap-6 sm:gap-8">
                    {modelLogos.map((logo, index) => (
                      <div 
                        key={index}
                        className="rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                      >
                        <img 
                          src={logo.src} 
                          alt={`${logo.name} logo`}
                          className="w-[100px] h-[40px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelAgnostic; 