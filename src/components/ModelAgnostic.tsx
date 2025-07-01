import React from 'react';

const ModelAgnostic: React.FC = () => {
  const modelLogos = [
    { name: 'OpenAI', src: '/openai-logo.png' },
    { name: 'Google Gemini', src: '/gemini-logo.png' },
    { name: 'Anthropic Claude', src: '/claude-logo.png' },
    { name: 'Meta', src: '/meta-logo.png' },
    { name: 'GitHub', src: '/github-logo.png' },
    { name: 'Notion', src: '/notion-logo.png' },
    { name: 'Slack', src: '/slack-logo.png' },
    { name: 'Microsoft', src: '/microsoft-logo.png' },
    { name: 'Mistral AI', src: '/mistral-logo.png' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" aria-label="Model Integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="bg-gradient-to-br from-[#00B37E] to-[#006647] rounded-xl p-6 sm:p-8 md:p-12 border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]/20 transition-colors">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[300px]">
            {/* Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center h-full">
              <h2 className="text-brand-h2 font-bold mb-4 font-comfortaa leading-tight text-white">
                Model Agnostic
              </h2>
              <p className="text-brand-base text-[#FEFEFE]/70 leading-relaxed font-nunito">
                Connect to all your existing systems, future proof integrations that utilize best-in-class LLM models and platforms.
              </p>
            </div>

            {/* Logo Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {modelLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="rounded-lg p-4 flex items-center justify-center"
                  >
                    <img 
                      src={logo.src} 
                      alt={`${logo.name} logo`}
                      className="w-[100px] h-[40px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelAgnostic; 