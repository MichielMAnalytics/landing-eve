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
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgentUseCases from './components/AgentUseCases';
import IntegrationShowcase from './components/IntegrationShowcase';
import SolutionSection from './components/SolutionSection';
import TypingEffect from './components/TypingEffect';
import BuildYourOwnAgent from './components/BuildyourownAgent';
import ConnectSafe from './components/ConnectSafe';
import CTASection from './components/CTASection';
import ValuesSection from './components/ValuesSection';
import SecuritySection from './components/SecuritySection';

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
        <section className="min-h-[120vh] bg-black pt-24 sm:pt-32" aria-label="Hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
            {/* Hero Text Content */}
            <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
              <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                  <h1 className="text-brand-h10 font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-tight mb-2">
                    <div className="flex justify-center items-center gap-4">
                      Work
                      <TypingEffect 
                        words={['smarter', 'harder', 'faster']} 
                        speed={150}
                        className="text-[#FFFFFF]"
                      />
                    </div>
                  </h1>
                  <h1 className="text-brand-h10 font-bold font-comfortaa tracking-tight text-[#FFFFFF] leading-tight mb-6">
                    Work with eve
                  </h1>
                  <p className="text-brand-base text-[#fefefe]/70 leading-tight font-inter mb-8">
                    Build, grow, and scale your work with a team of AI helpers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto w-full">
                    <button 
                      className="
                        w-full
                        inline-flex
                        justify-center
                        bg-gradient-to-r from-[#0E1593] to-[#04062D]
                        text-white font-inter font-bold tracking-wide
                        px-10 py-4
                        border border-[rgba(216,217,236,0.5)] rounded-[12px]
                        transition-all duration-200
                        hover:shadow-xl hover:shadow-[#4F8CFF]/30
                        focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                        text-lg
                      "
                      onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
                    >
                      Get started
                    </button>
                    <button 
                      className="
                        w-full
                        inline-flex
                        justify-center
                        bg-transparent
                        text-white font-inter font-bold tracking-wide
                        px-10 py-4
                        border border-[rgba(216,217,236,0.5)] rounded-[12px]
                        transition-all duration-200
                        hover:bg-white/5
                        focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                        text-lg
                      "
                      onClick={() => { window.location.href = 'https://app.witheve.ai/demo'; }}
                    >
                      Book a demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="w-full flex justify-center items-center mt-8">
              <div className="w-full max-w-5xl rounded-2xl flex items-center justify-center">
                <img
                  src="/homepage.png"
                  alt="Eve Agent Builder Interface"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-[rgba(216,217,236,0.5)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <SolutionSection />

        {/* Build Your Own Agent Section */}
        <BuildYourOwnAgent />

        {/* Values Section */}
        <ValuesSection />

        {/* Fullscreen Centered Header Section */}
        <section className="w-full min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center bg-black py-16 sm:py-20" aria-label="Key benefit">
          <div className="max-w-2xl sm:max-w-3xl mx-auto px-4">
            <h2 className="text-brand-h10 font-comfortaa font-bold text-white text-center leading-tight break-words">
              Automates work,<br />
              even while you sleep
            </h2>
          </div>
        </section>

        <AgentUseCases />

        <IntegrationShowcase />

        <ConnectSafe />

        <SecuritySection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;