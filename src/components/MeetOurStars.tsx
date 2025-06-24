import React from 'react';

const FeaturedAgents: React.FC = () => (
  <section className="py-24 bg-gradient-to-t from-black to-[#04062D]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-comfortaa font-bold tracking-tight text-[#FFFFFF] mb-3">
          Meet Your Stars
        </h2>
        <p className="text-xl text-[#fefefe]/70 font-inter max-w-xl mx-auto">
          Discover the power of hiring digital employees that are ready to transform your workflow.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 mt-24">
        {/* Left Card - Sage */}
        <div className="relative z-10 w-full md:w-[28%] max-w-sm -rotate-3 md:mt-12 md:mb-0 mb-8 md:mr-[-24px] group transition-transform duration-300">
          <div className="rounded-2xl p-8 flex flex-col items-center bg-gradient-to-br from-[#0EA5E9] to-[#04062D] border-2 border-[rgba(216,217,236,0.7)] shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6">
              <img 
                src="/Sage.png"
                alt="Sage Agent"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img 
                src="/sage2.png"
                alt="Sage Agent Hover"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-comfortaa font-bold text-white mb-2">Sage</h3>
            <div className="text-lg text-white/80 font-inter mb-3">Your Support Expert</div>
            <ul className="mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center text-white/90 font-inter text-sm"><span className="mr-2">•</span>Multi-channel support</li>
              <li className="flex items-center text-white/90 font-inter text-sm"><span className="mr-2">•</span>Knowledge base</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-6 py-2.5 rounded-lg font-inter font-semibold text-base border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto"
              onClick={() => window.open('https://app.witheve.ai/register', '_blank')}
            >Hire me!</button>
          </div>
        </div>
        {/* Center Card - Alex */}
        <div className="relative z-20 w-full md:w-[36%] max-w-lg scale-105 md:scale-110 shadow-2xl md:-mt-8 md:mx-0 mx-auto group transition-transform duration-300">
          <div className="rounded-2xl p-10 flex flex-col items-center bg-gradient-to-br from-[#6E3ADE] to-[#04062D] border-2 border-[rgba(216,217,236,0.7)] shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="relative w-44 h-44 md:w-56 md:h-56 mb-8">
              <img 
                src="/Alex.png"
                alt="Alex Agent"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img 
                src="/alex2.png"
                alt="Alex Agent Hover"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-2">Alex</h3>
            <div className="text-xl text-white/80 font-inter mb-4">Your Smart Scheduler</div>
            <ul className="mb-8 space-y-3 text-left w-full max-w-sm mx-auto text-base">
              <li className="flex items-center text-white/90 font-inter"><span className="mr-2">•</span>Calendar sync</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-2">•</span>Smart reminders</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-2">•</span>Meeting suggestions</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-8 py-3 rounded-lg font-inter font-semibold text-xl border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto"
              onClick={() => window.open('https://app.witheve.ai/register', '_blank')}
            >Hire me!</button>
          </div>
        </div>
        {/* Right Card - Nova */}
        <div className="relative z-10 w-full md:w-[28%] max-w-sm rotate-3 md:mb-12 md:mt-0 mt-8 md:ml-[-24px] group transition-transform duration-300">
          <div className="rounded-2xl p-8 flex flex-col items-center bg-gradient-to-br from-[#FFD600] to-[#04062D] border-2 border-[rgba(216,217,236,0.7)] shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6">
              <img 
                src="/Nova.png"
                alt="Nova Agent"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img 
                src="/nova3.png"
                alt="Nova Agent Hover"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-comfortaa font-bold text-white mb-2">Nova</h3>
            <div className="text-lg text-white/80 font-inter mb-3">Your Analytics Guru</div>
            <ul className="mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center text-white/90 font-inter text-sm"><span className="mr-2">•</span>Data analysis</li>
              <li className="flex items-center text-white/90 font-inter text-sm"><span className="mr-2">•</span>Predictive modeling</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-6 py-2.5 rounded-lg font-inter font-semibold text-base border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto"
              onClick={() => window.open('https://app.witheve.ai/register', '_blank')}
            >Hire me!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAgents; 