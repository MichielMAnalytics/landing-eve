import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Integration logos sets (public URLs or local assets)
const logoSets = [
  [
    { src: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", alt: "Gmail" },
    { src: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/outlook_48x1.svg", alt: "Outlook" },
    { src: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png", alt: "Google Drive" },
    { src: "https://cdn.worldvectorlogo.com/logos/figma-1.svg", alt: "Figma" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg", alt: "Zoom" },
    { src: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg", alt: "HubSpot" },
  ],
  [
    { src: "https://cdn.worldvectorlogo.com/logos/trello.svg", alt: "Trello" },
    { src: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", alt: "Salesforce" },
    { src: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg", alt: "Twilio" },
    { src: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", alt: "LinkedIn" },
    { src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", alt: "Slack" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", alt: "Notion" },
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
      }, 500); // Half of the animation duration to ensure smooth transition
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Integrations Grid */}
        <div className="relative flex flex-col items-center justify-center min-h-[240px] sm:min-h-[340px] w-full lg:basis-2/5 mb-10 lg:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSetIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 sm:gap-x-10 sm:gap-y-8 max-w-xs sm:max-w-fit mx-auto min-h-[144px] sm:min-h-[256px]"
            >
              {logoSets[currentSetIndex].map((logo, i) => (
                <div
                  key={logo.src}
                  className="rounded-xl shadow-lg flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
                >
                  <img src={logo.src} alt={logo.alt} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-3/5 space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white mb-2 leading-tight"
          >
            Integrates with your favorite systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-inter leading-tight max-w-xl mb-4 mx-auto lg:mx-0"
          >
            Streamline your business processes by bringing your favorite tools and AI employees together. AI for business makes working with integrations easier than ever.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="group relative w-full sm:w-auto px-8 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-medium overflow-hidden rounded-lg font-inter border border-[rgba(216,217,236,0.2)] bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20"
              onClick={() => window.open('https://app.witheve.ai/register', '_blank')}
            >
              <span className="relative z-10">Try now</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase; 