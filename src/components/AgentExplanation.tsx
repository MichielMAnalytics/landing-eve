import React from 'react';

interface AgentExplanationProps {
  title: {
    prefix: string;
    highlight: string;
  };
  features: string[];
  cards: Array<{
    title: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }>;
  imageSrc: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

const AgentExplanation: React.FC<AgentExplanationProps> = ({
  title,
  features,
  cards,
  imageSrc,
  colors,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
      <div className={`bg-[#04062D] border border-[${colors.primary}] backdrop-blur-sm rounded-[32px] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12`}>
        {/* Content Side */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl md:text-3xl font-bold text-white">AI</span>
            <span className={`text-2xl md:text-3xl font-bold text-[${colors.primary}]`}>
              {title.highlight}
            </span>
          </div>

          {/* Main Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <p className="text-white text-lg">{feature}</p>
                {index < features.length - 1 && (
                  <div className={`w-full h-px bg-gradient-to-r from-transparent via-[${colors.primary}]/30 to-transparent mb-8`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <card.icon className={`w-5 h-5 text-[${colors.primary}]`} />
                  <h3 className="font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-[#fefefe]/70">{card.description}</p>
              </div>
            ))}
          </div>

          <a href="#" className={`inline-flex items-center text-[${colors.primary}] hover:text-[${colors.primary}]/80 transition-colors`}>
            Learn more
            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Image Side */}
        <div className={`w-full md:w-[400px] aspect-square bg-[#04062D] border border-[${colors.primary}] rounded-3xl flex items-center justify-center relative overflow-hidden`}>
          <img 
            src={imageSrc}
            alt="AI Helpers" 
            className="w-[200px] h-[200px] object-contain relative z-10"
          />
          <div className="absolute inset-0 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default AgentExplanation; 