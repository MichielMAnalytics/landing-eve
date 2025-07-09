/**
 * AgentCardStack Component
 * 
 * A scroll-triggered card stack component that creates a smooth transition between multiple cards.
 * Uses GSAP's ScrollTrigger for scroll-based animations and handles complex z-index and opacity
 * transitions to ensure smooth card transitions.
 * 
 * Animation Sequence:
 * 1. Cards start stacked with only the first card visible
 * 2. As user scrolls, active card fades out while next card moves up from below
 * 3. Each card animates to the exact same final position for visual consistency
 * 
 * Key Features:
 * - Scroll-based triggering
 * - 3D perspective transforms
 * - Managed z-index hierarchy
 * - Controlled opacity transitions
 * - GPU-accelerated animations
 * 
 * @component
 */

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AgentCard, { AgentCardProps } from './AgentCard';

gsap.registerPlugin(ScrollTrigger);

interface AgentCardStackProps {
  /** Array of card configurations to be displayed in the stack */
  cards: AgentCardProps[];
}

const AgentCardStack: React.FC<AgentCardStackProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuration
    const scrollDistance = window.innerHeight * 0.5; // 50vh scroll distance per card transition
    const cardOverlap = 100; // Amount of next card visible (in pixels)
    
    /**
     * Initial State Setup
     * - First card: Centered in view
     * - Next card: Partially visible below (controlled by cardOverlap)
     * - Other cards: Hidden below
     */
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.set(card, {
        y: index === 0 ? 0 : (index === 1 ? window.innerHeight - cardOverlap : window.innerHeight + 100),
        opacity: 1,
        scale: 1,
        rotateX: 0,
        z: index === 0 ? 0 : -100,
        visibility: index <= 1 ? 'visible' : 'hidden',
        zIndex: index
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center-=45%', // Adjusted to start 5% higher
        end: `+=${scrollDistance * (cards.length - 1)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.floor(progress * (cards.length - 1));
          const transitionProgress = (progress * (cards.length - 1)) % 1;

          cardsRef.current.forEach((card, index) => {
            if (!card) return;

            const isActive = index === activeIndex;
            const isNext = index === activeIndex + 1;
            const isNextNext = index === activeIndex + 2;

            if (isActive || isNext || isNextNext) {
              gsap.set(card, { 
                visibility: 'visible',
                zIndex: index,
                opacity: 1
              });
            } else {
              gsap.set(card, { 
                visibility: 'hidden',
                zIndex: index
              });
              return;
            }

            if (isActive) {
              gsap.to(card, {
                y: -100 * transitionProgress,
                z: -200 * transitionProgress,
                scale: 1 - (0.05 * transitionProgress),
                duration: 0,
              });
            } else if (isNext) {
              const moveProgress = Math.max(0, transitionProgress - 0.2);
              const normalizedProgress = moveProgress / 0.8;
              
              gsap.to(card, {
                y: (window.innerHeight - cardOverlap) * (1 - transitionProgress),
                z: -100 * (1 - transitionProgress),
                scale: 1,
                duration: 0,
              });
            } else if (isNextNext) {
              gsap.to(card, {
                y: window.innerHeight - (cardOverlap * transitionProgress),
                visibility: 'visible',
                duration: 0,
              });
            }
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cards.length]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[5vh]"
      style={{
        perspective: '2000px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((cardProps, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="absolute w-full max-w-6xl mx-auto"
            style={{
              willChange: 'transform, opacity',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <div 
              className="transform-gpu"
              style={{
                transformOrigin: '50% 50%',
              }}
            >
              <AgentCard {...cardProps} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCardStack; 