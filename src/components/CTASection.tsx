import React from 'react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Work better. Work with Eve.",
  description = "Join thousands of AI experts already using Eve to build the future.",
  buttonText = "Get started",
  buttonUrl = "https://app.witheve.ai/"
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="bg-[#04062D] rounded-xl p-6 sm:p-8 md:p-12 border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]/20 transition-colors">
          <div className="max-w-lg mx-auto text-center flex flex-col items-center">
            <h2 className="text-brand-h1 font-bold mb-4 sm:mb-6 font-comfortaa leading-tight text-[#ffffff]">
              {title}
            </h2>
            <p className="text-brand-base text-[#FEFEFE]/70 mb-8 sm:mb-12 leading-tight font-inter">
              {description}
            </p>
            <div className="w-full flex justify-center">
              <button 
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-medium overflow-hidden rounded-lg font-inter"
                aria-label={buttonText}
                onClick={() => { window.location.href = buttonUrl; }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300" />
                <div className="absolute inset-0 border border-[rgba(216,217,236,0.5)] rounded-lg transition-all duration-300 group-hover:bg-[#0E1593]/60" />
                <span className="relative z-10 text-[#FFFFFF]">{buttonText}</span>
                <div className="absolute inset-0 rounded-lg ring-1 ring-[#0E1593]/30" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 