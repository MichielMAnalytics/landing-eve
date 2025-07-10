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
  description: string;
  imageSrc: string;
  colors: {
    from: string;
    to: string;
  };
  className?: string;
  backgroundGlowClass?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ title, description, imageSrc, className, backgroundGlowClass, colors }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 ${className || ''} relative group`}>
      {/* Outer Background Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.to}, transparent 70%)`
        }}
      />
      
      <div className="bg-black border border-white/10 rounded-2xl p-6 md:p-10 relative z-20 backdrop-blur-sm overflow-hidden">
        {/* Inner Radial Background Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${colors.to}30, transparent 85%)`
          }}
        />
        
        <div className="grid lg:grid-cols-2 gap-8 min-h-[320px] relative z-10">
          {/* Left: Centered Title and Description */}
          <div className="flex flex-col justify-center h-full min-h-[240px] space-y-4">
            <div className="flex flex-col space-y-4">
              <h2 className="text-brand-h2 font-comfortaa font-bold leading-tight text-white">
              {title.highlight}
            </h2>
              <p className="text-white/80 text-lg font-nunito max-w-md">
                {description}
              </p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative flex items-center justify-center overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[420px]"
              style={{ zIndex: 30 }}
            >
              <img
                src={imageSrc}
                alt="Helper illustration"
                className="relative z-30 w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard; 