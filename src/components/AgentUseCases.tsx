import React from 'react';

const AgentUseCases: React.FC = () => (
  <section className="py-16 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 lg:gap-16">
      {/* Top Card - Alex */}
      <div className="relative bg-gradient-to-br from-[#6E3ADE] to-[#04062D] rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center p-8 lg:p-20 overflow-visible min-h-[340px] lg:min-h-[420px] border-2 border-[rgba(216,217,236,0.8)]">
        {/* Text */}
        <div className="flex-1 z-10 flex flex-col justify-center text-center lg:text-left space-y-2">
          <h2 className="text-brand-h2 font-comfortaa font-bold text-white leading-tight mb-2">
            Alex, schedule my meetings for me
          </h2>
          <p className="text-white/80 font-inter leading-tight max-w-xl mb-4 mx-auto lg:mx-0">
            Automate your calendar and reminders with AI. Let Alex handle your scheduling, so you never miss a meeting again.
          </p>
        </div>
        {/* Image Container */}
        <div className="flex-1 flex justify-center lg:justify-end items-end relative z-20 mt-4 lg:mt-0">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-auto lg:h-auto">
            <img
              src="/alex3.png"
              alt="Alex scheduling meetings"
              className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[320px] scale-110 lg:translate-y-[30px] lg:scale-[1.3]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Cards - Sage & Nova */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {/* Sage Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#0EA5E9] to-[#04062D] rounded-3xl shadow-2xl flex flex-col items-center p-8 lg:p-12 overflow-visible min-h-[340px] border-2 border-[rgba(216,217,236,0.8)]">
          <div className="flex-1 z-10 flex flex-col items-center justify-center space-y-2">
            <h3 className="text-brand-h2 font-comfortaa font-bold text-white leading-tight mb-2 text-center">
              Sage, check my customer feedback
            </h3>
            <p className="text-white/80 font-inter leading-tight max-w-md text-center mb-4 lg:mb-6">
              Analyze and summarize customer comments and reviews automatically. Sage helps you stay on top of your audience's needs.
            </p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20 mt-4">
            <div className="relative w-[280px] h-[280px] sm:w-[240px] sm:h-[240px] lg:w-auto lg:h-auto">
              <img 
                src="/sage3.png" 
                alt="Sage analyzing feedback" 
                className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[250px] scale-110 lg:translate-y-[20px] lg:scale-[1.15]"
              />
            </div>
          </div>
        </div>

        {/* Nova Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#FFD600] to-[#04062D] rounded-3xl shadow-2xl flex flex-col items-center p-8 lg:p-12 overflow-visible min-h-[340px] border-2 border-[rgba(216,217,236,0.8)]">
          <div className="flex-1 z-10 flex flex-col items-center justify-center space-y-2">
            <h3 className="text-brand-h2 font-comfortaa font-bold leading-tight text-white mb-2 text-center">
              Nova, give me a daily business summary
            </h3>
            <p className="text-white/80 leading-tight font-inter max-w-md text-center mb-4 lg:mb-6">
              Get actionable insights and summaries from your business data every morning. Nova keeps you informed and ahead.
            </p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20 mt-4">
            <div className="relative w-[280px] h-[280px] sm:w-[240px] sm:h-[240px] lg:w-auto lg:h-auto">
              <img 
                src="/nova3.png" 
                alt="Nova providing summary" 
                className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[250px] scale-110 lg:translate-y-[18px] lg:scale-[1.12]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentUseCases; 