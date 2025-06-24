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

const BuildYourOwnAgent: React.FC = () => {
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
    <section className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        {/* Text Content - Now on the left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-3/5 mb-10 lg:mb-0 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white mb-2 leading-tight"
          >
            Or build your own.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-brand-base text-white/70 font-inter leading-tight max-w-xl mb-4 mx-auto lg:mx-0"
          >
            Eve lets you create custom AI agents and workflows, tailored to your specific needs. Integrate any tool you want and share with your team.
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
              onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
            >
              <span className="relative z-10">Start building</span>
            </button>
          </motion.div>
        </div>

        {/* Video Placeholder - Right side */}
        <div className="flex items-center justify-center w-full lg:basis-2/5 min-h-[200px] sm:min-h-[240px]">
          <div className="w-full max-w-sm sm:max-w-md aspect-video bg-[#181A2A] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#4F8CFF]/40">
            <span className="text-white/60 text-base sm:text-lg font-inter">Video coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourOwnAgent; 