import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center space-y-6">
        <h2 className="text-brand-h1 font-comfortaa font-bold text-[#FFFFFF] mb-6 text-center leading-tight max-w-3xl">
          Let your AI helpers do the work.
        </h2>
        <div className="flex justify-center items-center w-full min-h-[200px] sm:min-h-[320px]">
          <img 
            src="/eve1.png" 
            alt="Eve AI helper Interface"
            className="w-full max-w-2xl object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 