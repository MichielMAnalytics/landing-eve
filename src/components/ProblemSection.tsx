import React, { useRef, useLayoutEffect, useState } from 'react';

const DOT_SIZE = 16; // px

const ProblemSection: React.FC = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [linePoints, setLinePoints] = useState<{ x1: number, y1: number, x2: number, y2: number, midY: number } | null>(null);

  useLayoutEffect(() => {
    if (!leftCardRef.current || !rightCardRef.current || !containerRef.current) return;

    const leftRect = leftCardRef.current.getBoundingClientRect();
    const rightRect = rightCardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate the center bottom of the left card (dot position)
    const x1 = leftRect.left - containerRect.left + leftRect.width / 2;
    const y1 = leftRect.bottom - containerRect.top + DOT_SIZE / 2;

    // Calculate the center top of the right card (dot position)
    const x2 = rightRect.left - containerRect.left + rightRect.width / 2;
    const y2 = rightRect.top - containerRect.top - DOT_SIZE / 2;

    // Mid Y for the horizontal segment
    const midY = y1 + (y2 - y1) * 0.3; // adjust 0.3 for how far down the horizontal goes

    setLinePoints({ x1, y1, x2, y2, midY });
  }, []);

  return (
    <section className="py-12 sm:py-20 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center relative">
        {/* Badge
        <div 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 mt-12 bg-[#0E1593] font-inter"
            style={{ border: '2px solid rgba(216, 217, 236, 0.2)' }}
          >
            <span className="text-[#FFFFFF]">The problem</span>
        </div> 
        */}
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-comfortaa font-bold text-[#FFFFFF] mb-4 custom-heading-spacing text-center max-w-3xl">
          Complex processes are still solved manually, while they should be solved by an agent.
        </h2>

        {/* SVG Connector Line (hide on mobile, show on sm+) */}
        {linePoints && (
          <svg
            className="absolute left-0 top-0 w-full h-full pointer-events-none z-10 hidden sm:block"
            width="100%"
            height="100%"
          >
            <polyline
              points={`
                ${linePoints.x1},${linePoints.y1}
                ${linePoints.x1},${linePoints.midY}
                ${linePoints.x2},${linePoints.midY}
                ${linePoints.x2},${linePoints.y2}
              `}
              stroke="#0E1593"
              strokeWidth="3.5"
              fill="none"
              strokeLinejoin="miter"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 6px #0E1593)' }}
            />
          </svg>
        )}

        {/* First card */}
        <div className="w-full flex justify-center sm:justify-start mt-12 sm:mt-24" style={{ position: 'relative', zIndex: 10 }}>
          <div ref={leftCardRef} className="relative bg-[#04062D] border-2 border-[rgba(216,217,236,0.2)] rounded-2xl shadow-lg p-5 sm:p-8 font-inter text-[#fefefe] text-base sm:text-lg max-w-md w-full overflow-visible">
            {/* Top Center Dot */}
            <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-[#0E1593] border-2 border-white shadow-[0_0_12px_2px_rgba(14,21,147,0.5)] z-20"></div>
            A lot of processes could be solved by ai, but very few tools and solutions are available that actually execute the tasks correctly.
            Save hours a day with ready-to-go AI agents that do your work. Automating simple and complex tasks, outsource everything.
            {/* Bottom Center Dot */}
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-4 h-4 rounded-full bg-[#0E1593] border-2 border-white shadow-[0_0_12px_2px_rgba(14,21,147,0.5)] z-20"></div>
          </div>
        </div>
        {/* Second card */}
        <div className="w-full flex justify-center sm:justify-end mt-12 sm:mt-20">
          <div ref={rightCardRef} className="relative bg-[#04062D] border-2 border-[rgba(216,217,236,0.2)] rounded-2xl shadow-lg p-5 sm:p-8 font-inter text-[#fefefe] text-base sm:text-lg max-w-md w-full overflow-visible">
            {/* Top Center Dot */}
            <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-[#0E1593] border-2 border-white shadow-[0_0_12px_2px_rgba(14,21,147,0.5)] z-20"></div>
            Current AI tools are either too simple to solve real problems, or require deep technical expertise and endless integrations. This makes them inaccessible to your employees.
            {/* Bottom Center Dot */}
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-4 h-4 rounded-full bg-[#0E1593] border-2 border-white shadow-[0_0_12px_2px_rgba(14,21,147,0.5)] z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 