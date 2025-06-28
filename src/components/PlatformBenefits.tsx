import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';

interface TeamMember {
  role: string;
  name: string;
  avatarSrc: string;
  tools: string[];
  position: {
    y: number;  // vertical offset in pixels
    x?: number; // optional horizontal offset in pixels
    scale?: number; // optional scale factor
  };
}

const teamMembers: TeamMember[] = [
  {
    role: "Lifecycle Marketing",
    name: "Sarah Chen",
    avatarSrc: "flow.png",
    tools: ["email", "crm", "analytics"],
    position: {
      y: 40,  // starts lower
      x: -20,
      scale: 0.95
    }
  },
  {
    role: "Data Scientist",
    name: "Marco Garcia",
    avatarSrc: "/Eve.png",
    tools: ["python", "jupyter", "tableau", "sql"],
    position: {
      y: 20,  // moves up
      x: -10,
      scale: 0.98
    }
  },
  {
    role: "User Researcher",
    name: "Rachel Rossi",
    avatarSrc: "/Alex.png",
    tools: ["figma", "miro", "notion"],
    position: {
      y: 0,   // highest point
      scale: 1
    }
  },
  {
    role: "Sales Rep.",
    name: "James Wilson",
    avatarSrc: "/Lexi.png",
    tools: ["salesforce", "slack", "zoom"],
    position: {
      y: 0,   // highest point
      scale: 1
    }
  },
  {
    role: "Customer Support",
    name: "Lisa Park",
    avatarSrc: "/Rob.png",
    tools: ["zendesk", "intercom", "notion", "slack"],
    position: {
      y: 20,  // moves down
      x: 10,
      scale: 0.98
    }
  },
  {
    role: "Quality Control",
    name: "Quincy Ellis",
    avatarSrc: "/Vira.png",
    tools: ["jira", "github", "linear"],
    position: {
      y: 40,  // ends lower
      x: 20,
      scale: 0.95
    }
  }
];

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm-7 7a6 6 0 1112 0H5z" />
      </svg>
    ),
    title: "All-in-one multi-agent platform",
    description: "A flexible, multi-agent platform built for any use case, across any industry."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      </svg>
    ),
    title: "Built for business-critical tasks",
    description: "Built for high-stakes tasks that drive real results — intelligent automation, not just a bot."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Delivers human-quality work",
    description: "Powerful, intelligent automation that matches the quality and precision of top human talent."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>
    ),
    title: "Works the way you do",
    description: "Fully customizable workflows to seamlessly match how your business really operates."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Scalable for enterprise",
    description: "Built to support large-scale operations and grow with your business as your needs evolve."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Active community & faster ROI",
    description: "Tap into our active community to speed up deployment and start seeing results fast."
  }
];

const PlatformBenefits: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 bg-black py-16">
      {/* Team Members */}
      <div className="relative mb-5 hidden sm:block" style={{ zIndex: 0 }}>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center items-start gap-3 sm:gap-6 px-1 sm:px-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: (window.innerWidth >= 640 ? member.position.y : 0) }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                y: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }}
              style={{ 
                transform: window.innerWidth >= 640 ? `translateX(${member.position.x || 0}px) scale(${member.position.scale || 1})` : 'none',
              }}
              className="flex flex-col items-center bg-[#04062D] border border-[rgba(216,217,236,0.5)] rounded-2xl p-3 sm:p-4 hover:border-[rgba(216,217,236,0.8)] transition-all duration-300 mb-2"
            >
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="w-10 h-18 mb-2"
              />
              <h3 className="text-white font-medium text-xs mb-0.5">{member.role}</h3>
              <p className="text-white/60 text-[10px] mb-2">{member.name}</p>
              <div className="flex gap-1">
                {member.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] opacity-20"
                    title={tool}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Title with Blur */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Blur effect background */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[175px]"
          style={{
            zIndex: 1,
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 100%, rgba(0, 0, 0, 0.85) 25%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
              borderRadius: '70%',
              transform: 'translateZ(0)',
              mixBlendMode: 'multiply'
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%, transparent 100%)',
              borderRadius: '90%',
              mixBlendMode: 'normal'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
          style={{ zIndex: 2 }}
        >
          <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight text-white">
            Scale your{' '}
            <span className="bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] text-transparent bg-clip-text">
              <span className="sm:hidden">support</span>
              <span className="hidden sm:inline">
                <TypingEffect words={["support", "operations", "finance", "sales", "research", "quality"]} speed={120} />
              </span>
            </span>
            <br />
            <span className="text-white">
              and free your team for higher impact work
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-12 mb-10 md:mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-start rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-3 text-[#0EA5E9] scale-90">{feature.icon}</div>
            <h3 className="text-brand-h3 font-comfortaa font-bold leading-tight text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/80 font-inter leading-tight">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <button 
          className="inline-flex bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-inter font-bold tracking-wide px-8 py-3.5 border border-[rgba(216,217,236,0.2)] rounded-[12px] transition-all duration-200 hover:shadow-2xl hover:shadow-[#4F8CFF]/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60 text-base"
          onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
        >
          Try for free
        </button>
        <button 
          className="inline-flex bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-inter font-bold tracking-wide px-8 py-3.5 border border-[rgba(216,217,236,0.2)] rounded-[12px] transition-all duration-200 hover:shadow-2xl hover:shadow-[#4F8CFF]/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60 text-base"
          onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
        >
          Request demo
        </button>
      </motion.div>
    </div>
  );
};

export default PlatformBenefits; 