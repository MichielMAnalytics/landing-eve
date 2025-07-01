import React, { useState, useRef, useEffect, TouchEvent, useMemo } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Solution {
  name: string;
  color: string;
  description: string;
  features: string[];
}

interface CarouselConfig {
  itemsPerView: number;
  gap: number;
  infinite: boolean;
}

const solutions: Solution[] = [
  {
    name: "Eve",
    color: "#0E1593",
    description: "Your Personal Assistant.",
    features: [
      "Mail and calendar support",
      "Knowledge base",
      "Workflows"
    ]
  },
  {
    name: "Rob",
    color: "#F69902",
    description: "Recruitment Specialist.",
    features: [
      "Job postings",
      "Candidate screening",
      "Interview scheduling"
    ]
  },
  {
    name: "Vira",
    color: "#00B37E",
    description: "Social Media Manager.",
    features: [
      "Ad campaigns",
      "Social media management",
      "Auto reply"
    ]
  },
  {
    name: "Lexi",
    color: "#E42800",
    description: "Content Creator.",
    features: [
      "Content creation",
      "SEO specialist",
      "Analytics"
    ]
  }
];

const SolutionSection: React.FC = () => {
  const mobileConfig: CarouselConfig = {
    itemsPerView: 1,
    gap: 24,
    infinite: true
  };

  const desktopConfig: CarouselConfig = {
    itemsPerView: 3,
    gap: 24,
    infinite: true
  };

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const config = isMobile ? mobileConfig : desktopConfig;

  // Create extended array for infinite scroll - add clones for seamless transition
  const extendedSolutions = useMemo(() => {
    if (!config.infinite) return solutions;
    // Add more clones to ensure seamless transition
    return [
      ...solutions.slice(-config.itemsPerView),  // Clone end items at start
      ...solutions,
      ...solutions.slice(0, config.itemsPerView)  // Clone start items at end
    ];
  }, [config.infinite, config.itemsPerView]);

  const getTransform = (index: number) => {
    if (!carouselRef.current) return 0;
    const slideWidth = (carouselRef.current.offsetWidth - (config.gap * (config.itemsPerView - 1))) / config.itemsPerView;
    const totalSlideWidth = slideWidth + config.gap;
    // Adjust for the cloned items at the start
    return -(index + config.itemsPerView) * totalSlideWidth;
  };

  const handleSlideTransitionEnd = () => {
    if (!config.infinite || !carouselRef.current) return;
    setIsTransitioning(false);

    // If we're at the cloned end section, jump to the real start
    if (currentIndex >= solutions.length) {
      carouselRef.current.style.transition = 'none';
      const newIndex = currentIndex % solutions.length;
      setCurrentIndex(newIndex);
      carouselRef.current.style.transform = `translateX(${getTransform(newIndex)}px)`;
      // Force browser to process the style change before re-enabling transitions
      carouselRef.current.getBoundingClientRect();
      carouselRef.current.style.transition = '';
    }
    // If we're at the cloned start section, jump to the real end
    else if (currentIndex < 0) {
      carouselRef.current.style.transition = 'none';
      const newIndex = solutions.length - 1;
      setCurrentIndex(newIndex);
      carouselRef.current.style.transform = `translateX(${getTransform(newIndex)}px)`;
      // Force browser to process the style change before re-enabling transitions
      carouselRef.current.getBoundingClientRect();
      carouselRef.current.style.transition = '';
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        setCurrentIndex(0);
      }
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${getTransform(currentIndex)}px)`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, isMobile]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.touches[0].clientX);

    // Calculate drag distance and update transform
    if (carouselRef.current) {
      const dragDistance = touchStart - e.touches[0].clientX;
      const baseTransform = getTransform(currentIndex);
      carouselRef.current.style.transform = `translateX(${baseTransform - dragDistance}px)`;
      carouselRef.current.style.transition = 'none';
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Swipe right
      if (swipeDistance < 0) {
        goToSlide(currentIndex - 1);
      }
      // Swipe left
      else {
        goToSlide(currentIndex + 1);
      }
    } else {
      // Reset position if swipe wasn't long enough
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${getTransform(currentIndex)}px)`;
      }
    }
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight text-[#FFFFFF]">
            Pick your AI helpers
          </h2>
          <p className="text-brand-base text-[#fefefe]/70 font-nunito leading-tight max-w-2xl mx-auto">
            Specialized AI helpers ready to take over your daily tasks and transform your workflow.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-8">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className={`flex transition-transform duration-500 ease-in-out ${isMobile ? 'touch-pan-x' : ''}`}
              style={{
                transform: `translateX(${getTransform(currentIndex)}px)`,
                gap: `${config.gap}px`,
                transition: isDragging ? 'none' : 'transform 500ms ease-in-out'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTransitionEnd={handleSlideTransitionEnd}
            >
              {extendedSolutions.map((solution, idx) => (
                <div 
                  key={`${solution.name}-${idx}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc((100% - ${config.gap * (config.itemsPerView - 1)}px) / ${config.itemsPerView})`
                  }}
                >
                  <div 
                    className={`
                      rounded-3xl p-8 h-[360px] group relative overflow-hidden
                      border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]
                      transition-all duration-300 flex flex-col select-none
                      ${
                        solution.name === "Eve" ? "bg-gradient-to-br from-[#0E1593] to-[#04062D]" :
                        solution.name === "Rob" ? "bg-gradient-to-br from-[#F69902] to-[#8B4500]" :
                        solution.name === "Vira" ? "bg-gradient-to-br from-[#00B37E] to-[#006647]" :
                        "bg-gradient-to-br from-[#E42800] to-[#8B1130]"
                      }
                    `}
                  >
                    <div className="relative z-10 flex flex-col flex-grow space-y-4">
                      <h3 className="text-brand-h2 font-bold mb-3 font-comfortaa text-[#fff]">
                        {solution.name}
                      </h3>
                      <p className="text-[#fff]/90 mb-6 font-nunito">
                        {solution.description}
                      </p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-[#fff]/80 font-nunito">
                            <Check className="w-5 h-5 mr-3 text-[#fff]" /> {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/signup" 
                        className="bg-[#fff]/10 hover:bg-[#fff]/20 text-white px-6 py-2.5 rounded-lg font-nunito font-semibold text-brand-sm border border-[rgba(216,217,236,0.2)] transition-all duration-200 text-center"
                      >
                        Try {solution.name} Now
                      </Link>
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

          {/* Navigation Buttons - only show on desktop */}
          {!isMobile && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#000] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#000] to-transparent pointer-events-none" />
              <button
                onClick={() => !isTransitioning && goToSlide(currentIndex - 1)}
                className="absolute left-0 -translate-x-1/2 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ top: '180px' }} // Half of card height (360px)
                aria-label="Previous slide"
                disabled={isTransitioning}
              >
                <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
              </button>
              <button
                onClick={() => !isTransitioning && goToSlide(currentIndex + 1)}
                className="absolute right-0 translate-x-1/2 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ top: '180px' }} // Half of card height (360px)
                aria-label="Next slide"
                disabled={isTransitioning}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  (currentIndex < 0 ? solutions.length + currentIndex : currentIndex) % solutions.length === index 
                    ? 'bg-[#0E1593] w-8' 
                    : 'bg-[#fff]/20'
                } hover:bg-[#fff]/40`}
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