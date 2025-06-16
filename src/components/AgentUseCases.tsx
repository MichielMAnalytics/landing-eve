import React from 'react';

const AgentUseCases: React.FC = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col gap-16">
      {/* Top Card - Alex */}
      <div className="relative bg-gradient-to-br from-[#6E3ADE] to-[#04062D] rounded-3xl shadow-2xl flex flex-col md:flex-row items-center p-10 md:p-20 overflow-visible min-h-[420px] border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]">
        {/* Text */}
        <div className="flex-1 z-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-comfortaa font-bold text-white mb-4">
            Alex, schedule my meetings for me
          </h2>
          <p className="text-lg md:text-md text-white/80 font-inter max-w-xl mb-4">
            Automate your calendar and reminders with AI. Let Alex handle your scheduling, so you never miss a meeting again.
          </p>
        </div>
        {/* Image as flex child, visually breaking out */}
        <div className="flex-1 flex justify-end items-end relative z-20 mt-8 md:mt-0">
          <img
            src="/alex3.png"
            alt="Alex scheduling meetings"
            className="drop-shadow-2xl"
            style={{
              width: 'auto',
              height: '320px',
              transform: 'translateY(30px) scale(1.3)', // visually breaks out below card
              maxWidth: 'none',
              maxHeight: 'none',
              zIndex: 20,
            }}
          />
        </div>
      </div>
      {/* Bottom Cards - Sage & Nova */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sage Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#0EA5E9] to-[#04062D] rounded-3xl shadow-2xl flex flex-col md:flex-col items-center p-8 md:p-12 overflow-visible min-h-[340px] border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]">
          <div className="flex-1 z-10 flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-comfortaa font-bold text-white mb-3 text-center">Sage, check my customer feedback</h3>
            <p className="text-lg md:text-md text-white/80 font-inter max-w-md text-center mb-6">Analyze and summarize customer comments and reviews automatically. Sage helps you stay on top of your audience's needs.</p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20 mt-4">
            <img 
              src="/sage3.png" 
              alt="Sage analyzing feedback" 
              className="drop-shadow-2xl"
              style={{
                width: 'auto',
                height: '250px',
                transform: 'translateY(20px) scale(1.15)',
                maxWidth: 'none',
                maxHeight: 'none',
                zIndex: 20,
              }}
            />
          </div>
        </div>
        {/* Nova Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#FFD600] to-[#04062D] rounded-3xl shadow-2xl flex flex-col md:flex-col items-center p-8 md:p-12 overflow-visible min-h-[340px] border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]">
          <div className="flex-1 z-10 flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-comfortaa font-bold text-white mb-3 text-center">Nova, give me a daily business summary</h3>
            <p className="text-lg md:text-md text-white/80 font-inter max-w-md text-center mb-6">Get actionable insights and summaries from your business data every morning. Nova keeps you informed and ahead.</p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20 mt-4">
            <img 
              src="/nova3.png" 
              alt="Nova providing summary" 
              className="drop-shadow-2xl"
              style={{
                width: 'auto',
                height: '220px',
                transform: 'translateY(18px) scale(1.12)',
                maxWidth: 'none',
                maxHeight: 'none',
                zIndex: 20,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentUseCases; 