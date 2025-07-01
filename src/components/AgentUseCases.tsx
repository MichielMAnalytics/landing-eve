import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<ImageProps> = ({ src, alt, className, ...props }) => (
  <img
    src={src}
    alt={alt}
    className={`${className} select-none pointer-events-none`}
    loading="eager"
    decoding="sync"
    fetchPriority="high"
    draggable="false"
    onContextMenu={(e) => e.preventDefault()}
    {...props}
  />
);

const AgentUseCases: React.FC = () => (
  <section className="py-16 lg:py-32 transform-gpu">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 lg:gap-16">
      {/* Top Card - Eve */}
      <div className="relative bg-gradient-to-br from-[#0E1593] to-[#04062D] rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center p-8 lg:p-20 overflow-hidden min-h-[340px] lg:min-h-[420px] border-2 border-[rgba(216,217,236,0.8)] will-change-transform">
        {/* Text */}
        <div className="flex-1 z-10 flex flex-col justify-center text-center lg:text-left space-y-2">
          <h2 className="text-brand-h1 font-comfortaa font-bold text-white leading-tight mb-2">
            Eve, answer my emails
          </h2>
          <p className="text-white font-inter leading-tight max-w-xl mb-4 mx-auto lg:mx-0">
            Automate your gmail, calendar and drive with Eve. Let Eve handle your scheduling, emails, meeting preperation and more.
          </p>
        </div>
        {/* Image Container */}
        <div className="flex-1 flex justify-center lg:justify-end items-end relative z-20 mt-4 lg:mt-0">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-auto lg:h-auto transform-gpu">
            <OptimizedImage
              src="/eve_showcase.png"
              alt="Eve handling emails"
              className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[320px] scale-110 lg:translate-y-[30px] lg:scale-[1.3] transform-gpu"
            />
          </div>
        </div>
      </div>

      {/* Bottom Cards - Vira & Rob */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {/* Vira Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#00B37E] to-[#006647] rounded-3xl shadow-2xl flex flex-col items-center p-8 lg:p-12 overflow-hidden min-h-[340px] h-full border-2 border-[rgba(216,217,236,0.8)] will-change-transform">
          <div className="flex-1 z-10 flex flex-col items-center justify-start pt-4 space-y-2">
            <h3 className="text-brand-h2 font-comfortaa font-bold text-white leading-tight mb-2 text-center">
              Vira, write some viral content
            </h3>
            <p className="text-white font-inter leading-tight max-w-md text-center">
              Supercharge your content creation with Vira.
            </p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20">
            <div className="relative w-[280px] h-[280px] sm:w-[240px] sm:h-[240px] lg:w-auto lg:h-auto transform-gpu">
              <OptimizedImage 
                src="/vira3.png" 
                alt="Vira viral content" 
                className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[250px] scale-110 lg:translate-y-[20px] lg:scale-[1.15] transform-gpu"
              />
            </div>
          </div>
        </div>

        {/* Rob Card */}
        <div className="relative flex-1 bg-gradient-to-br from-[#F69902] to-[#8B4500] rounded-3xl shadow-2xl flex flex-col items-center p-8 lg:p-12 overflow-hidden min-h-[340px] h-full border-2 border-[rgba(216,217,236,0.8)] will-change-transform">
          <div className="flex-1 z-10 flex flex-col items-center justify-start pt-4 space-y-2">
            <h3 className="text-brand-h2 font-comfortaa font-bold text-white leading-tight mb-2 text-center">
              Rob, streamline the recruitment process
            </h3>
            <p className="text-white font-inter leading-tight max-w-md text-center">
              Streamline your recruitment process, automate your hiring and get the best candidates.
            </p>
          </div>
          <div className="flex w-full justify-center items-end relative z-20">
            <div className="relative w-[280px] h-[280px] sm:w-[240px] sm:h-[240px] lg:w-auto lg:h-auto transform-gpu">
              <OptimizedImage 
                src="/rob3.png" 
                alt="Rob recruitment process" 
                className="w-full h-full object-contain drop-shadow-2xl lg:w-auto lg:h-[250px] scale-110 lg:translate-y-[20px] lg:scale-[1.15] transform-gpu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentUseCases; 