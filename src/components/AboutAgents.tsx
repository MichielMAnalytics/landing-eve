import React from 'react';

const FeaturedAgents: React.FC = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center mb-20">
        <div 
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-[#0E1593] font-inter mx-auto"
          style={{ border: '2px solid rgba(216,217,236,0.2)' }}
        >
          <span className="text-[#FFFFFF]">Featured Agents</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-comfortaa font-bold tracking-tight text-[#FFFFFF] mb-4">
          Meet Our Stars
        </h2>
        <p className="text-2xl text-[#fefefe]/70 font-inter max-w-2xl mx-auto">
          Discover the power of our most popular AI agents, ready to transform your workflow.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 mt-32">
        {/* Left Card - Sage */}
        <div className="relative z-10 w-full md:w-[28%] max-w-md -rotate-3 md:mt-16 md:mb-0 mb-12 md:mr-[-32px] group transition-transform duration-300">
          <div className="rounded-3xl p-10 flex flex-col items-center bg-gradient-to-br from-[#0EA5E9] to-[#04062D] border-2 border-[rgba(216,217,236,0.5)] shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-44 h-44 md:w-56 md:h-56 mb-8">
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
            <h3 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-2">Sage</h3>
            <div className="text-xl text-white/80 font-inter mb-4">Your Support Expert</div>
            <ul className="mb-8 space-y-3 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Multi-channel support</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Knowledge base</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-8 py-3 rounded-xl font-inter font-semibold text-lg border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto">Learn more</button>
          </div>
        </div>
        {/* Center Card - Alex */}
        <div className="relative z-20 w-full md:w-[36%] max-w-xl scale-105 md:scale-110 shadow-2xl md:-mt-12 md:mx-0 mx-auto group transition-transform duration-300">
          <div className="rounded-3xl p-14 flex flex-col items-center bg-gradient-to-br from-[#6E3ADE] to-[#04062D] border-2 border-[rgba(216,217,236,0.7)] shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="relative w-56 h-56 md:w-72 md:h-72 mb-10">
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
            <h3 className="text-4xl md:text-5xl font-comfortaa font-bold text-white mb-2">Alex</h3>
            <div className="text-2xl text-white/80 font-inter mb-6">Your Smart Scheduler</div>
            <ul className="mb-10 space-y-4 text-left w-full max-w-md mx-auto text-lg">
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Calendar sync</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Smart reminders</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Meeting suggestions</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-10 py-4 rounded-xl font-inter font-semibold text-2xl border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto">Learn more</button>
          </div>
        </div>
        {/* Right Card - Nova */}
        <div className="relative z-10 w-full md:w-[28%] max-w-md rotate-3 md:mb-16 md:mt-0 mt-12 md:ml-[-32px] group transition-transform duration-300">
          <div className="rounded-3xl p-10 flex flex-col items-center bg-gradient-to-br from-[#FFD600] to-[#04062D] border-2 border-[rgba(216,217,236,0.5)] shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-44 h-44 md:w-56 md:h-56 mb-8">
              <img 
                src="/Nova.png"
                alt="Nova Agent"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <img 
                src="/nova2.png"
                alt="Nova Agent Hover"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-2">Nova</h3>
            <div className="text-xl text-white/80 font-inter mb-4">Your Analytics Guru</div>
            <ul className="mb-8 space-y-3 text-left w-full max-w-xs mx-auto">
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Data analysis</li>
              <li className="flex items-center text-white/90 font-inter"><span className="mr-3">•</span>Predictive modeling</li>
            </ul>
            <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-8 py-3 rounded-xl font-inter font-semibold text-lg border border-[rgba(216,217,236,0.2)] transition-all duration-200 w-full mt-auto">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAgents; 