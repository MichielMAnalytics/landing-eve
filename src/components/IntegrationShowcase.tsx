import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Integration logos sets (local assets)
const logoSets = [
  [
    { src: "/gmail-logo.png", alt: "Gmail" },
    { src: "/outlook-logo.png", alt: "Outlook" },
    { src: "/semrush-logo.png", alt: "Semrush" },
    { src: "/meta-logo.png", alt: "Meta" },
    { src: "/zoom-logo.png", alt: "Zoom" },
    { src: "/hubspot-logo.png", alt: "HubSpot" },
  ],
  [
    { src: "/trello-logo.png", alt: "Trello" },
    { src: "/salesforce-logo.png", alt: "Salesforce" },
    { src: "/twilio-logo.png", alt: "Twilio" },
    { src: "/google-logo.png", alt: "Google Drive" },
    { src: "/slack-logo.png", alt: "Slack" },
    { src: "/notion-logo.png", alt: "Notion" },
  ],
];

const preloadImages = () => {
  logoSets[0].forEach(logo => {
    const img = new window.Image();
    img.src = logo.src;
  });
};

const IntegrationShowcase: React.FC = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev + 1) % logoSets.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12 lg:gap-12">
        {/* Integrations Grid */}
        <div className="relative flex flex-col items-center justify-center min-h-[240px] sm:min-h-[340px] w-[80%] sm:w-full lg:basis-[42.8%] mb-6 sm:mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSetIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-6 sm:gap-x-12 sm:gap-y-10 max-w-xs sm:max-w-fit mx-auto min-h-[144px] sm:min-h-[256px] scale-90 sm:scale-110"
            >
              {logoSets[currentSetIndex].map((logo, i) => (
                <div
                  key={logo.src}
                  className="rounded-xl shadow-lg flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain" 
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-[57.2%] lg:pl-8">
          <div className="space-y-2 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="text-brand-h2 font-comfortaa font-bold leading-tight bg-gradient-to-r from-white via-[#0EA5E9] to-white bg-clip-text text-transparent"
          >
              Safely connect to over 2700 tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
              className="text-brand-base text-white/70 font-nunito font-boldleading-tight max-w-xl mx-auto lg:mx-0"
          >
            Streamline your business processes by bringing your favorite tools and AI helpers together. AI for business makes working with integrations easier than ever.
          </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase; 