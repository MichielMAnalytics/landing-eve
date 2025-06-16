import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AgentCard, { AgentCardProps } from './AgentCard';

interface AgentCarouselProps {
  cards: AgentCardProps[];
}

const CARD_HEIGHT = 700; // px, adjust as needed for your design
const GAP = 48; // px, vertical gap between cards

const AgentCarousel: React.FC<AgentCarouselProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // For each card, calculate its vertical position based on scroll progress
  // Each card will slide up as the user scrolls
  const cardTransforms = cards.map((_, i) => {
    // Each card's range is 1 / cards.length
    const start = i / cards.length;
    const end = (i + 1) / cards.length;
    // Card is fully visible at start, fully out at end
    return useTransform(scrollYProgress, [start, end], [0, -CARD_HEIGHT - GAP]);
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[220vh]" // enough height to allow scrolling through all cards
    >
      <div
        className="sticky top-24 flex items-center justify-center min-h-[80vh]"
        style={{ height: CARD_HEIGHT }}
      >
        <div className="relative w-full max-w-7xl">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                zIndex: cards.length - i,
                y: cardTransforms[i],
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AgentCard {...card} className="mb-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCarousel; 