import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  Zap, 
  MessageSquare, 
  Download, 
  Users, 
  Star,
  Check,
  Bot,
  Workflow,
  Globe,
  Clock,
  Shield,
  Smartphone,
  Brain,
  Sparkles,
  Blocks,
  Cpu
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgentUseCases from './components/AgentUseCases';
import IntegrationShowcase from './components/IntegrationShowcase';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TypingEffect from './components/TypingEffect';
import BuildYourOwnAgent from './components/BuildyourownAgent';

// Brand Color Palette
/*
Primary Colors:
- Brand Blue: #0E1593
- Brand Dark: #04062D
- Brand Black: #0E0E0E
- Brand White: #FFFFFF

Extended Palette:
- Royal Purple: #6E3ADE
- Electric Orange: #FF4D1C
- Vibrant Green: #00B37E
- Deep Red: #E11D48
- Bright Yellow: #FBBF24
- Ocean Blue: #0EA5E9
- Magenta: #DB2777
*/

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Eve2 Scroll Animation Logic ---
  const eve2CardRef = useRef<HTMLDivElement>(null);
  const eve2SectionRef = useRef<HTMLDivElement>(null);
  const [eve2Scroll, setEve2Scroll] = useState(0); // 0 = hidden, 1 = fully up
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!eve2SectionRef.current || !eve2CardRef.current) return;
      const section = eve2SectionRef.current;
      const card = eve2CardRef.current;
      const sectionRect = section.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      // Only activate scroll-jack when section is in view
      if (sectionRect.top < windowH && sectionRect.bottom > 0) {
        // Lock scroll if not already
        if (!scrollLocked) setScrollLocked(true);
        // Map scroll progress to agent animation
        const start = windowH * 0.8;
        const end = windowH * 0.4;
        const progress = (start - cardRect.top) / (start - end);
        const clamped = Math.min(1, Math.max(0, progress));
        setEve2Scroll(clamped);
        // If fully revealed, unlock scroll
        if (clamped === 1 && scrollLocked) setScrollLocked(false);
      } else {
        setEve2Scroll(0);
        setScrollLocked(false);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: false });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollLocked]);

  // Lock scroll by setting body overflow
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scrollLocked]);

  return (
    <div className="min-h-screen lightblue-grid-bg">
      <Navbar currentPage="home" />
      
      {/* Hero Section */}
      <main>
        <section className="min-h-[100dvh] grid grid-rows-[1fr_auto] md:block px-4 md:px-8" aria-label="Hero">
          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto w-full h-full md:min-h-[calc(100vh-80px)] md:flex md:items-center md:justify-between">
            {/* Mobile Layout */}
            <div className="h-full grid grid-rows-[1fr_auto] md:hidden">
              {/* Image Container */}
              <div className="self-center py-12">
                <img 
                  src="/eve1.png" 
                  alt="Eve AI employee illustration" 
                  className="w-[65%] max-w-[280px] mx-auto rounded-xl object-contain" 
                  loading="eager"
                />
              </div>
              
              {/* Text Content - Fixed at Bottom */}
              <div className="self-end pb-8">
                <h1 className="text-4xl font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-[1.2] mb-4">
                  work{' '}
                  <TypingEffect 
                    words={['smarter', 'harder', 'faster']} 
                    speed={150}
                    className="text-[#0E1593]"
                  />
                </h1>
                <h1 className="text-4xl font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-[1.2] mb-4">
                  work with eve.
                </h1>
                <p className="text-lg text-[#fefefe]/70 font-inter mb-6">
                  Build, grow, and scale your work with a team of AI employees.
                </p>
                <button 
                  className="
                    inline-flex
                    bg-gradient-to-r from-[#0E1593] to-[#04062D]
                    text-white font-inter font-bold tracking-wide
                    px-8 py-3.5
                    border border-[rgba(216,217,236,0.2)] rounded-[12px]
                    transition-all duration-200
                    hover:shadow-2xl hover:shadow-[#4F8CFF]/60
                    hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                    text-base
                  "
                  aria-label="Get started with Eve"
                  onClick={() => window.open('https://app.witheve.ai/', '_blank')}
                >
                  Get started
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block w-full md:mt-16 lg:mt-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-row items-center gap-20">
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-6xl font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-[1.2]">
                    Work{' '}
                    <TypingEffect 
                      words={['smarter..', 'harder..', 'faster..']} 
                      speed={150}
                      className="text-[#FFFFFF]"
                    />
                  </h1>
                  <h2 className="text-5xl lg:text-6xl font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-[1.2] mt-2">
                    Work with eve.
                  </h2>
                  <p className="text-xl text-[#fefefe]/70 font-inter max-w-xl mt-6 mb-8">
                    Automate, delegate, and scale your work with a team of AI employees.
                  </p>
                  <button 
                    className="
                      inline-flex
                      bg-gradient-to-r from-[#0E1593] to-[#04062D]
                      text-white font-inter font-bold tracking-wide
                      px-10 py-4
                      border border-[rgba(216,217,236,0.2)] rounded-[12px]
                      transition-all duration-200
                      hover:shadow-xl hover:shadow-[#4F8CFF]/30
                      focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                      text-lg
                    "
                    onClick={() => window.open('https://app.witheve.ai/register', '_blank')}
                  >
                    Get started
                  </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img 
                    src="/eve1.png" 
                    alt="Eve AI employee illustration" 
                    className="w-full max-w-lg rounded-xl object-contain" 
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Build Your Own Agent Section */}
        <BuildYourOwnAgent />

        {/* Fullscreen Centered Header Section */}
        <section className="w-full min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center bg-black py-16 sm:py-20" aria-label="Key benefit">
          <div className="max-w-2xl sm:max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-comfortaa font-bold text-white text-center leading-tight break-words">
              Automates work.<br />
              Even while you sleep.
            </h2>
          </div>
        </section>

        <AgentUseCases />

        <IntegrationShowcase />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="bg-[#04062D] rounded-xl p-6 sm:p-8 md:p-12 border-2 border-[rgba(216,217,236,0.2)] hover:border-[rgba(216,217,236,0.5)]/20 transition-colors">
              <div className="max-w-lg mx-auto text-center flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-comfortaa tracking-tight text-[#ffffff]">
                  Ready to start automating?
                </h2>
                <p className="text-base sm:text-lg text-[#FEFEFE]/70 mb-8 sm:mb-12 leading-relaxed font-inter">
                  Join thousands of AI experts already using Eve to build the future.
                </p>
                <div className="w-full flex justify-center">
                  <button 
                    className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-medium overflow-hidden rounded-lg font-inter"
                    aria-label="Login to Eve"
                    onClick={() => window.open('https://app.witheve.ai/', '_blank')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300" />
                    <div className="absolute inset-0 border border-[rgba(216,217,236,0.2)] rounded-lg transition-all duration-300 group-hover:bg-[#0E1593]/60" />
                    <span className="relative z-10 text-[#FFFFFF]">Get started</span>
                    <div className="absolute inset-0 rounded-lg ring-1 ring-[#0E1593]/30" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;