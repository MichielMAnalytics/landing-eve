import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center">
        <h2 className="text-brand-h1 font-comfortaa font-bold text-[#FFFFFF] mb-10 text-center leading-tight max-w-3xl">
          Let your AI employees do the work.
        </h2>
        <div className="flex justify-center items-center w-full" style={{ minHeight: 320 }}>
          {/* Placeholder for screenshot/image */}
          <div style={{
            width: 600,
            height: 320,
            background: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: '#888' }}>Screenshot Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 