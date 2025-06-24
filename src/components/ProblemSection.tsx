import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center space-y-6">
        <h2 className="text-brand-h1 font-comfortaa font-bold text-[#FFFFFF] mb-6 text-center leading-tight max-w-3xl">
          Let your AI employees do the work.
        </h2>
        <div className="flex justify-center items-center w-full min-h-[200px] sm:min-h-[320px]">
          {/* Placeholder for screenshot/image */}
          <div className="w-full max-w-2xl h-[200px] sm:h-[320px] bg-[#eee] flex items-center justify-center rounded-xl">
            <span className="text-[#888]">Screenshot Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 