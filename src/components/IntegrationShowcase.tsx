import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Integration logos sets (public URLs or local assets)
const logoSets = [
  [
    { src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", alt: "GitHub" },
    { src: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png", alt: "Vercel" },
    { src: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png", alt: "Discord" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg", alt: "X" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", alt: "Notion" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", alt: "Slack" },
  ],
  [
    { src: "https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png", alt: "Google Cloud" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg", alt: "LinkedIn" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", alt: "Instagram" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", alt: "Telegram" },
  ],
  [
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg", alt: "WhatsApp" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg", alt: "Shopify" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Salesforce_logo.svg", alt: "Salesforce" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg", alt: "Netlify" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Firebase_logo.svg", alt: "Firebase" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Twilio_logo.svg", alt: "Twilio" },
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
                  className="rounded-xl shadow-lg flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#181A2A]"
                >
                  <img src={logo.src} alt={logo.alt} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-3/5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-comfortaa font-bold text-white mb-4 sm:mb-6 leading-[1.2]"
          >
            Integrates with your favorite systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white/70 font-inter leading-relaxed max-w-xl mb-6 sm:mb-8 mx-auto lg:mx-0"
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