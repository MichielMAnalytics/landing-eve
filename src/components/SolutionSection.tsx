import React, { useState, useRef, useEffect, TouchEvent } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef(true);

  // Create extended arrays for both mobile and desktop
  const extendedSolutions = [...solutions.slice(-1), ...solutions, ...solutions.slice(0, 1)];
  const desktopExtendedSolutions = [...solutions.slice(-2), ...solutions, ...solutions.slice(0, 2)];

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentTouch = e.touches[0].clientX;
    setTouchEnd(currentTouch);
    
    const diff = touchStart - currentTouch;
    const slideWidth = window.innerWidth;
    const currentOffset = (currentSlide * slideWidth) + diff;
    
    setDragOffset(diff);
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${-currentOffset}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = touchStart - touchEnd;
    const slideWidth = window.innerWidth;
    const threshold = slideWidth * 0.2; // 20% threshold for slide change

    let newSlide = currentSlide;
    if (Math.abs(diff) > threshold) {
      newSlide = diff > 0 ? currentSlide + 1 : currentSlide - 1;
    }

    // Handle infinite scroll boundaries
    if (newSlide >= extendedSolutions.length - 1) {
      handleSlideChange(1);
    } else if (newSlide <= 0) {
      handleSlideChange(solutions.length);
    } else {
      handleSlideChange(newSlide);
    }

    setDragOffset(0);
  };

  const handleSlideChange = (slide: number) => {
    setCurrentSlide(slide);
    if (carouselRef.current) {
      const offset = slide * window.innerWidth;
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
      carouselRef.current.style.transition = 'transform 0.3s ease-out';
    }
  };

  const handleDesktopTransitionEnd = () => {
    if (!transitionRef.current) return;
    
    if (carouselRef.current) {
      if (currentSlide >= solutions.length) {
        transitionRef.current = false;
        carouselRef.current.style.transition = 'none';
        setCurrentSlide(0);
        requestAnimationFrame(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${33.3333 * 2}%)`; // 2 clone items at start
          }
        });
      } else if (currentSlide < 0) {
        transitionRef.current = false;
        carouselRef.current.style.transition = 'none';
        setCurrentSlide(solutions.length - 1);
        requestAnimationFrame(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${33.3333 * (solutions.length + 1)}%)`;
          }
        });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const offset = currentSlide * window.innerWidth;
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(-${offset}px)`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  useEffect(() => {
    if (!transitionRef.current) {
      requestAnimationFrame(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'transform 500ms ease-in-out';
          transitionRef.current = true;
        }
      });
    }
  }, [currentSlide]);

  const nextDesktopSlide = () => {
    if (!transitionRef.current) return;
    transitionRef.current = true;
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }
    setCurrentSlide(prev => prev + 1);
  };

  const prevDesktopSlide = () => {
    if (!transitionRef.current) return;
    transitionRef.current = true;
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }
    setCurrentSlide(prev => prev - 1);
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight text-[#FFFFFF]">
            Pick your AI helpers
          </h2>
          <p className="text-brand-base text-[#fefefe]/70 font-inter leading-tight max-w-2xl mx-auto">
            Specialized AI agents ready to take over your daily tasks and transform your workflow.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          {/* Container with negative margin to counter parent padding */}
          <div 
            className="overflow-hidden"
            style={{ margin: '0 -16px' }}
          >
            <div
              ref={carouselRef}
              className="flex touch-pan-x"
              style={{
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                transform: `translateX(-${currentSlide * 100}%)`
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {extendedSolutions.map((solution, idx) => (
                <div 
                  key={`${solution.name}-${idx}`}
                  className="min-w-full px-4 flex-shrink-0"
                  style={{ width: '100vw' }}
                >
                  <div 
                    className={`
                      rounded-3xl p-8 h-full group relative overflow-hidden
                      border border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]
                      transition-all duration-300 flex flex-col
                      ${
                        solution.name === "Alex" ? "bg-gradient-to-br from-[#6E3ADE] to-[#6E3ADEBF]" :
                        solution.name === "Sage" ? "bg-gradient-to-br from-[#0EA5E9] to-[#0EA5E9BF]" :
                        solution.name === "Zen" ? "bg-gradient-to-br from-[#F69902] to-[#F69902BF]" :
                        solution.name === "Finn" ? "bg-gradient-to-br from-[#00B37E] to-[#00B37EBF]" :
                        solution.name === "Maya" ? "bg-gradient-to-br from-[#E42800] to-[#E42800BF]" :
                        "bg-gradient-to-br from-[#FFD600] to-[#FFD600BF]"
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
          
          {/* Mobile Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index + 1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  (currentSlide === index + 1 || 
                   (currentSlide === solutions.length + 1 && index === 0) ||
                   (currentSlide === 0 && index === solutions.length - 1)
                  ) ? 'bg-[#0E1593] w-8' : 'bg-[#fff]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="relative hidden md:block">
          <button 
            onClick={prevDesktopSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200"
            aria-label="Previous slide"
          >
            <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
          </button>
          <div className="overflow-hidden mx-auto">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${33.3333 * (currentSlide + 2)}%)`,
                transition: transitionRef.current ? 'transform 500ms ease-in-out' : 'none'
              }}
              onTransitionEnd={handleDesktopTransitionEnd}
            >
              {desktopExtendedSolutions.map((solution, idx) => (
                <div 
                  key={`${solution.name}-${idx}`}
                  className="min-w-[33.3333%] px-4"
                  style={{ maxWidth: '420px' }}
                >
                  <div 
                    className={`
                      rounded-3xl p-8 h-full group relative overflow-hidden
                      border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]
                      transition-all duration-300 flex flex-col
                      ${
                        solution.name === "Alex" ? "bg-gradient-to-br from-[#6E3ADE] to-[#6E3ADEBF]" :
                        solution.name === "Sage" ? "bg-gradient-to-br from-[#0EA5E9] to-[#0EA5E9BF]" :
                        solution.name === "Zen" ? "bg-gradient-to-br from-[#F69902] to-[#F69902BF]" :
                        solution.name === "Finn" ? "bg-gradient-to-br from-[#00B37E] to-[#00B37EBF]" :
                        solution.name === "Maya" ? "bg-gradient-to-br from-[#E42800] to-[#E42800BF]" :
                        "bg-gradient-to-br from-[#FFD600] to-[#FFD600BF]"
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
            onClick={nextDesktopSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!transitionRef.current) return;
                  transitionRef.current = true;
                  if (carouselRef.current) {
                    carouselRef.current.style.transition = 'transform 500ms ease-in-out';
                  }
                  setCurrentSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index || 
                  (currentSlide === solutions.length && index === 0) ||
                  (currentSlide === -1 && index === solutions.length - 1)
                    ? 'bg-[#0E1593] w-8' 
                    : 'bg-[#fff]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 