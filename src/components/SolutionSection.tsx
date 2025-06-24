import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Solution {
  name: string;
  color: string;
  description: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    name: "Alex",
    color: "#6E3ADE",
    description: "Automate your scheduling and reminders with smart AI.",
    features: [
      "Calendar sync",
      "Smart reminders",
      "Meeting suggestions"
    ]
  },
  {
    name: "Sage",
    color: "#0EA5E9",
    description: "24/7 customer support and knowledge base management.",
    features: [
      "Multi-channel support",
      "Knowledge base",
      "Ticket automation"
    ]
  },
  {
    name: "Zen",
    color: "#F69902",
    description: "Visualize and analyze your data effortlessly.",
    features: [
      "Automated reporting",
      "Interactive dashboards",
      "Real-time insights"
    ]
  },
  {
    name: "Finn",
    color: "#00B37E",
    description: "Drive growth with AI-powered marketing strategies.",
    features: [
      "Market analysis",
      "Growth predictions",
      "Campaign optimization"
    ]
  },
  {
    name: "Maya",
    color: "#E42800",
    description: "Keep your systems secure with proactive monitoring.",
    features: [
      "Threat detection",
      "Real-time monitoring",
      "Automated responses"
    ]
  },
  {
    name: "Nova",
    color: "#FFD600",
    description: "Unlock business intelligence with advanced analytics.",
    features: [
      "Data analysis",
      "Pattern recognition",
      "Predictive modeling"
    ]
  }
];

const SolutionSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 to account for the cloned items
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef(true);

  // Create an extended array with cloned items for infinite scroll
  const extendedSolutions = [...solutions.slice(-3), ...solutions, ...solutions.slice(0, 3)];

  // Touch/drag support for mobile
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (startX - x);
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (!transitionRef.current) {
      return;
    }

    // If we've moved past the cloned items, jump to the real items without transition
    if (currentSlide >= solutions.length + 1) {
      transitionRef.current = false;
      setCurrentSlide(1);
    } else if (currentSlide <= 0) {
      transitionRef.current = false;
      setCurrentSlide(solutions.length);
    }
  };

  useEffect(() => {
    if (!transitionRef.current) {
      transitionRef.current = true;
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    transitionRef.current = true;
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    transitionRef.current = true;
    setCurrentSlide(prev => prev - 1);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight text-[#FFFFFF]">
            Pick your new AI employees
          </h2>
          <p className="text-brand-base text-[#fefefe]/70 font-inter leading-tight max-w-2xl mx-auto">
            Specialized AI agents ready to take over your daily tasks and transform your workflow.
          </p>
        </div>

        {/* Mobile Carousel (scroll snap, spacers) */}
        <div className="relative md:hidden">
          <div 
            className="overflow-x-auto scrollbar-hide mx-auto"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex">
              {/* Left Spacer for perfect centering */}
              <div aria-hidden="true" style={{ minWidth: '5vw', maxWidth: '5vw', pointerEvents: 'none' }} />
              {solutions.map((solution) => (
                <div 
                  key={solution.name}
                  className="min-w-[90vw] px-4"
                  style={{ maxWidth: '420px', scrollSnapAlign: 'center' }}
                >
                  <div 
                    className={`
                      rounded-3xl p-8 h-full group relative overflow-hidden
                      border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]
                      transition-all duration-300 flex flex-col
                      ${
                        solution.name === "Alex" ? "bg-gradient-to-br from-[#6E3ADE] to-[#04062D]" :
                        solution.name === "Sage" ? "bg-gradient-to-br from-[#0EA5E9] to-[#04062D]" :
                        solution.name === "Zen" ? "bg-gradient-to-br from-[#F69902] to-[#04062D]" :
                        solution.name === "Finn" ? "bg-gradient-to-br from-[#00B37E] to-[#04062D]" :
                        solution.name === "Maya" ? "bg-gradient-to-br from-[#E42800] to-[#04062D]" :
                        "bg-gradient-to-br from-[#FFD600] to-[#04062D]"
                      }
                    `}
                  >
                    <div className="relative z-10 flex flex-col flex-grow space-y-4">
                      <h3 className="text-brand-h2 font-bold mb-3 font-comfortaa text-[#fff]">
                        {solution.name}
                      </h3>
                      <p className="text-[#fff]/90 mb-6 font-inter">
                        {solution.description}
                      </p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-[#fff]/80 font-inter">
                            <Check className="w-5 h-5 mr-3 text-[#fff]" /> {feature}
                          </li>
                        ))}
                      </ul>
                      {/* <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-[#fff] px-6 py-3 rounded-xl font-inter transition-colors border border-[rgba(216,217,236,0.2)] w-full mt-auto">
                        Learn more
                      </button> */}
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-28 h-28 pointer-events-none z-20">
                      <img 
                        src={`/${solution.name}.png`}
                        alt={`${solution.name} Avatar`}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      <img 
                        src={`/${solution.name.toLowerCase()}2.png`}
                        aria-hidden="false"
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Right Spacer for perfect centering */}
              <div aria-hidden="true" style={{ minWidth: '5vw', maxWidth: '5vw', pointerEvents: 'none' }} />
            </div>
          </div>
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all bg-[#fff]/20`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel (3 cards, flex, arrows) */}
        <div className="relative hidden md:block">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
          </button>
          <div className="overflow-hidden mx-auto">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100/3}%)`,
                transitionDuration: transitionRef.current ? '500ms' : '0ms',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSolutions.map((solution, idx) => (
                <div 
                  key={`${solution.name}-${idx}`}
                  className="min-w-[33.3333%] px-4"
                  style={{ maxWidth: '420px' }}
                >
                  <div 
                    className={`
                      rounded-3xl p-8 h-full group relative overflow-hidden
                      border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]
                      transition-all duration-300 flex flex-col
                      ${
                        solution.name === "Alex" ? "bg-gradient-to-br from-[#6E3ADE] to-[#04062D]" :
                        solution.name === "Sage" ? "bg-gradient-to-br from-[#0EA5E9] to-[#04062D]" :
                        solution.name === "Zen" ? "bg-gradient-to-br from-[#F69902] to-[#04062D]" :
                        solution.name === "Finn" ? "bg-gradient-to-br from-[#00B37E] to-[#04062D]" :
                        solution.name === "Maya" ? "bg-gradient-to-br from-[#E42800] to-[#04062D]" :
                        "bg-gradient-to-br from-[#FFD600] to-[#04062D]"
                      }
                    `}
                  >
                    <div className="relative z-10 flex flex-col flex-grow space-y-4">
                      <h3 className="text-brand-h2 font-bold mb-3 font-comfortaa text-[#fff]">
                        {solution.name}
                      </h3>
                      <p className="text-[#fff]/90 mb-6 font-inter">
                        {solution.description}
                      </p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-[#fff]/80 font-inter">
                            <Check className="w-5 h-5 mr-3 text-[#fff]" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-28 h-28 pointer-events-none z-20">
                      <img 
                        src={`/${solution.name}.png`}
                        alt={`${solution.name} Avatar`}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      <img 
                        src={`/${solution.name.toLowerCase()}2.png`}
                        aria-hidden="false"
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: solutions.length / 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setCurrentSlide(index + 1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentSlide) === index + 1 ? 'bg-[#0E1593] w-8' : 'bg-[#fff]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 