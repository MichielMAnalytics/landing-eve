import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface AgentCardProps {
  title: {
    prefix: string;
    highlight: string;
  };
  description?: string[];
  features?: Feature[];
  imageSrc: string;
  colors: {
    from: string;
    to: string;
  };
  className?: string;
  backgroundGlowClass?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ title, imageSrc, className, backgroundGlowClass }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 ${className || ''} relative`}>
      <div className="bg-gradient-to-br from-[#000000] to-[#04062D] border-2 border-[rgba(216,217,236,0.7)] rounded-2xl p-6 md:p-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 min-h-[280px]">
          {/* Left: Centered Title */}
          <div className="flex items-center justify-center h-full min-h-[200px]">
            <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-white text-center w-full">
              {title.highlight}
            </h2>
          </div>
          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-sm"
            >
              <img
                src={imageSrc}
                alt="Agent illustration"
                className="relative z-10 w-full h-full object-contain p-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard; 