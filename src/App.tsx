import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useGoogleAnalytics, GA_EVENTS } from './hooks/useGoogleAnalytics';
import useTermly from './hooks/useTermly';
import TermlyContainer from './components/TermlyContainer';
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
import ModelAgnostic from './components/ModelAgnostic';
import DataPrivacySection from './components/DataPrivacySection';
import CTASection from './components/CTASection';
import ValuesSection from './components/ValuesSection';
import SecuritySection from './components/SecuritySection';
import Contact from './Contact';
import Pricing from './Pricing';
import Terms from './Terms';
import Privacy from './Privacy';
import Cookies from './Cookies';

// Brand Color Palette
/*
Primary Colors:
- Brand Blue: #0E1593 | Brand Dark: #04062D
- Brand Dark: #04062D
- Brand Black: #0E0E0E
- Brand White: #FFFFFF

Extended Palette:
- Royal Purple: #6E3ADE | Deep Royal: #4A1BA6
- Electric Orange: #FF4D1C | Deep Orange: #B82F00 ""not used!!!""
- Vibrant Green: #00B37E | Deep Green: #006647
- Deep Red: #E11D48 | Rich Red: #8B1130
- Bright Yellow: #F69902 | Deep Gold: #8B4500
- Ocean Blue: #0EA5E9 | Deep Ocean: #065786
- Magenta: #DB2777 | Deep Magenta: #8B1748
*/

// Critical images that need to be preloaded immediately
const CRITICAL_IMAGES = [
  '/homepage.png',
  '/eve_showcase.png',
  '/vira2.png',
  '/rob2.png',
  '/autoeve-logo.png'
];

// Preload images using link tags in head
const preloadWithLinkTags = () => {
  CRITICAL_IMAGES.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Preload images using Image object
const preloadWithImageObject = () => {
  return Promise.all(
    CRITICAL_IMAGES.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    })
  ).catch(error => {
    console.warn('Image preloading had some failures:', error);
  });
};

function HomePage() {
  const { trackEvent } = useGoogleAnalytics();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Execute both preloading strategies
    preloadWithLinkTags();
    
    const loadImages = async () => {
      await preloadWithImageObject();
      setImagesLoaded(true);
    };
    
    loadImages();
  }, []);

  // Only render content when images are loaded
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-nunito">Loading...</div>
      </div>
    );
  }

  const handleGetStarted = () => {
    trackEvent(GA_EVENTS.BUTTON.CATEGORY, GA_EVENTS.BUTTON.ACTIONS.CLICK_GET_STARTED);
    window.location.href = 'https://app.witheve.ai/register';
  };

  const handleBookDemo = () => {
    trackEvent(GA_EVENTS.BUTTON.CATEGORY, GA_EVENTS.BUTTON.ACTIONS.CLICK_BOOK_DEMO);
    navigate('/contact');
  };

  return (
    <div className="min-h-nscreen lightblue-grid-bg overscroll-none">
      <Navbar currentPage="home" />
      
      {/* Hero Section */}
      <main className="transform-gpu">
        <section className="min-h-screen bg-black sm:pt-24 md:pt-32 will-change-transform" aria-label="Hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
            {/* Hero Text Content */}
            <div className="text-center w-full max-w-4xl mx-auto mt-[20vh] sm:mt-0 mb-4 sm:mb-16 md:mb-24">
              <div className="flex flex-col items-center justify-center">
                <div className="text-center w-full">
                  <h1 className="font-comfortaa text-[#FFFFFF] leading-[1.1] mb-0 sm:mb-2 text-[3rem] sm:text-[4rem] transform-gpu">
                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                      Work{" "} 
                      <TypingEffect 
                        words={['smarter', 'easier', 'faster']} 
                        speed={125}
                        className="text-[#FFFFFF]"
                      /> ,
                    </div>
                  </h1>
                  <h1 className="font-comfortaa text-[#FFFFFF] leading-[1.1] mb-4 sm:mb-6 text-[3rem] sm:text-[4rem]">
                    work with eve
                  </h1>
                  <p className="text-brand-base text-[#fefefe]/70 font-nunito mb-10 leading-tight max-w-2xl mx-auto">
                    Build, grow, and scale your work with a team of AI helpers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[500px] mx-auto w-full">
                    <button 
                      className="
                        w-full
                        inline-flex
                        justify-center
                        bg-gradient-to-r from-[#0E1593] to-[#04062D]
                        text-white font-nunito font-bold tracking-wide
                        px-6 py-[14px] sm:px-10 sm:py-4
                        border-2 border-[rgba(216,217,236,0.5)] rounded-[12px]
                        transition-all duration-200
                        hover:shadow-xl hover:shadow-[#4F8CFF]/30
                        focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                        text-lg
                      "
                      onClick={handleGetStarted}
                    >
                      Get started
                    </button>
                    <button 
                      className="
                        w-full
                        inline-flex
                        justify-center
                        bg-transparent
                        text-white font-nunito font-bold tracking-wide
                        px-6 py-[14px] sm:px-10 sm:py-4
                        border-2 border-[rgba(216,217,236,0.5)] rounded-[12px]
                        transition-all duration-200
                        hover:bg-white/5
                        focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                        text-lg
                      "
                      onClick={handleBookDemo}
                    >
                      Book a demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="w-full flex justify-center items-center mt-12 sm:mt-8">
              <div className="w-full max-w-5xl rounded-2xl flex items-center justify-center px-6 sm:px-4 transform-gpu">
                <img
                  src="/homepage.png"
                  alt="Eve Agent Builder Interface"
                  className="w-full h-auto object-contain rounded-2xl border-2 border-[rgba(216,217,236,0.5)]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="view_solution" className="will-change-transform">
          <SolutionSection />
        </section>

        {/* Build Your Own Agent Section */}
        <section id="view_build_agent" className="will-change-transform">
          <BuildYourOwnAgent />
        </section>

        {/* Values Section
        <ValuesSection /> */}

        {/* Fullscreen Centered Header Section */}
        <section className="w-full min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center bg-black py-16 sm:py-20 will-change-transform" aria-label="Key benefit">
          <div className="max-w-2xl sm:max-w-3xl mx-auto px-4">
            <h2 className="text-brand-h10 font-comfortaa font-bold text-white text-center leading-tight text-[3rem] sm:text-[4rem] break-words transform-gpu">
              Automates work,<br />
              even while you sleep
            </h2>
          </div>
        </section>

        {/* Only render AgentUseCases when images are loaded */}
        <div className={`transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <AgentUseCases />
        </div>

        <IntegrationShowcase />

        <ConnectSafe />

        <SecuritySection />

        <DataPrivacySection />

        <ModelAgnostic />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  // Initialize Termly
  useTermly();

  return (
    <>
      <TermlyContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </>
  );
}

export default App;