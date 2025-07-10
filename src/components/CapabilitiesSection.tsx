import React from 'react';
import { Settings, Brain, Bot, FileCode2, Sparkles, Wrench, Workflow, Globe, MessageSquare } from 'lucide-react';

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  backgroundImage: string; // Make this required
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description, className = "", backgroundImage }) => {
  // Define which cards should have background images
  const shouldShowBackground = ["Orchestration", "Agents"].includes(title);
  const isPromptAssist = title === "Prompt assist";
  
  return (
    <div 
      className={`
        group
        rounded-xl
        border-2 border-[rgba(216,217,236,0.5)]
        hover:border-[rgba(216,217,236,0.7)]
        transition-all duration-500
        transform hover:-translate-y-1
        hover:shadow-lg hover:shadow-[#0EA5E9]/10
        overflow-hidden
        ${className}
      `}
    >
      <div className="relative w-full h-full min-h-[200px]">
        {/* Background Image or Color */}
        {shouldShowBackground ? (
          <img 
            src={backgroundImage}
            alt={`${title} background`}
            className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 opacity-60"
          style={{
              objectPosition: title === "Orchestration" ? "50% 30%" : "center"
            }}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-black/40" />
        )}
        
        {/* Prompt Assist Corner Image */}
        {isPromptAssist && (
          <div className="absolute top-0 right-0 w-2/5 h-2/5 p-4">
            <img 
              src="/promptassist.png"
              alt="Prompt assist illustration"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-500 ${
            shouldShowBackground 
              ? "bg-gradient-to-b from-black/20 via-black/30 to-black/80" 
              : "bg-gradient-to-br from-[#0EA5E9]/5 via-black/50 to-black/60"
          }`}
          style={{
            mixBlendMode: 'multiply'
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 p-5 sm:p-7 h-full flex flex-col">
          <div className="flex-grow"></div>
          <div className="transform transition-transform duration-500 group-hover:translate-y-[-4px]">
            <div className="mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              {icon}
            </div>
            <h3 className="text-white font-comfortaa text-xl sm:text-2xl font-bold mb-2 transition-colors duration-500 group-hover:text-[#fefefe]">{title}</h3>
            <p className="text-[#fefefe]/70 font-nunito text-base sm:text-lg leading-relaxed transition-colors duration-500 group-hover:text-[#fefefe]/90">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CapabilitiesSection: React.FC = () => {
  // Column 1: 2/3 + 1/3 height cards
  const column1: Array<CapabilityCardProps> = [
    {
      icon: <Settings className="w-8 h-8 text-[#00B37E] drop-shadow-[0_0_8px_rgba(0,179,126,0.3)]" />,
      title: "Orchestration",
      description: "Build, chain and orchestrate agents. Automate everything from simple tasks to complex workflows.",
      className: "row-span-2",
      backgroundImage: "/agentchain.png"
    },
    {
      icon: <Brain className="w-8 h-8 text-[#6E3ADE] drop-shadow-[0_0_8px_rgba(110,58,222,0.3)]" />,
      title: "Models",
      description: "Chat with any model. Fast, easy and secure.",
      backgroundImage: "/.png"
    }
  ];

  // Column 2: Full height card
  const column2: Array<CapabilityCardProps> = [
    {
      icon: <Bot className="w-8 h-8 text-[#0EA5E9] drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]" />,
      title: "Agents",
      description: "Advanced agents with file handling",
      className: "row-span-3",
      backgroundImage: "/agents.png"
    }
  ];

  // Column 3: Three equal height cards
  const column3: Array<CapabilityCardProps> = [
    {
      icon: <FileCode2 className="w-8 h-8 text-[#F69902] drop-shadow-[0_0_8px_rgba(246,153,2,0.3)]" />,
      title: "RAG capabilities",
      description: "Create powerful RAG pipelines with your own data",
      backgroundImage: "/homepage.png"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#DB2777] drop-shadow-[0_0_8px_rgba(219,39,119,0.3)]" />,
      title: "Prompt assist",
      description: "100x your output with prompt assist",
      backgroundImage: "/homepage2.png"
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#0E1593] drop-shadow-[0_0_8px_rgba(14,21,147,0.3)]" />,
      title: "Tools",
      description: "Connect to your favorite tools and integrations with a simple click.",
      backgroundImage: "/automate.png"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black via-black to-[#0EA5E9]/5 py-20 sm:py-32 relative overflow-hidden mt-16 sm:mt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      
      <div className="max-w-[85rem] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h1 className="text-brand-h1 font-comfortaa font-bold leading-tight bg-gradient-to-r from-white via-[#0EA5E9] to-white bg-clip-text text-transparent">
              Powerful capabilities at your fingertips
          </h1>
          <p className="text-brand-base text-[#fefefe]/70 font-nunito leading-[1.4] max-w-2xl mx-auto mt-6">
            Discover unique and powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-fr relative">
          {/* Remove border gradient container */}
          
          {/* Column 1 */}
          <div className="grid grid-rows-3 gap-4">
            {column1.map((capability, index) => (
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                className={capability.className}
                backgroundImage={capability.backgroundImage}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid grid-rows-3 gap-4">
            {column2.map((capability, index) => (
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                className={capability.className}
                backgroundImage={capability.backgroundImage}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid grid-rows-3 gap-4">
            {column3.map((capability, index) => (
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                className={capability.className}
                backgroundImage={capability.backgroundImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection; 