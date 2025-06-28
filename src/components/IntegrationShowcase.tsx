import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Integration logos sets (public URLs or local assets)
const logoSets = [
  [
    { src: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", alt: "Gmail" },
    { src: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/outlook_48x1.svg", alt: "Outlook" },
    { src: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png", alt: "Google Drive" },
    { src: "https://github.githubassets.com/favicons/favicon.svg", alt: "GitHub" },
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
    <section className="relative pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-8 md:pb-12 bg-black">
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
                  <img src={logo.src} alt={logo.alt} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" loading="lazy" />
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
              className="text-brand-h1 font-comfortaa font-bold text-white leading-tight"
          >
              Safely connect to your favorite tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
              className="text-brand-base text-white/70 font-inter leading-tight max-w-xl mx-auto lg:mx-0"
          >
            Streamline your business processes by bringing your favorite tools and AI helpers together. AI for business makes working with integrations easier than ever.
          </motion.p>
          </div>
          {/* Text Content
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col sm:flex-row justify-center lg:justify-start"
          >
            <button
              className="group relative w-full sm:w-auto px-8 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-medium overflow-hidden rounded-lg font-inter border border-[rgba(216,217,236,0.5)] bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300 hover:shadow-lg hover:shadow-[#0E1593]/20"
              onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
            >
              <span className="relative z-10">Try now</span>
            </button>
          </motion.div>*/}
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase; 