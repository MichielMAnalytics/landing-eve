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
  const [currentSlide, setCurrentSlide] = useState(0);

  const solutions = [
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(solutions.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(solutions.length / 3)) % Math.ceil(solutions.length / 3));
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Automation",
      description: "Leverage advanced AI models to automate complex workflows and tasks with ease."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Visual Flow Builder",
      description: "Create sophisticated automation flows with our intuitive drag-and-drop interface."
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: "Modular Components",
      description: "Mix and match pre-built components to create custom solutions for any use case."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Optimization",
      description: "Automatically optimize your workflows for maximum efficiency and performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance built into every aspect of the platform."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Deep insights into your automation performance and business impact."
    }
  ];

  // Custom logo component based on your design
  const Logo = () => (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center relative" style={{ backgroundColor: '#0E1593' }}>
      <div className="absolute inset-1">
        <div className="w-full h-1.5 bg-white rounded-sm mb-0.5"></div>
        <div className="w-3/4 h-1.5 bg-white rounded-sm mb-0.5"></div>
        <div className="w-full h-1.5 bg-white rounded-sm"></div>
      </div>
    </div>
  );

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
      <section className="relative min-h-[calc(80vh)] flex items-center overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left: Text & Buttons */}
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            {/* <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 mt-12 bg-[#0E1593] font-inter"
              style={{ border: '2px solid rgba(216, 217, 236, 0.2)' }}
            >
              <span className="text-[#FFFFFF]">Eve</span>
            </div> */}
            <h1 className="text-6xl lg:text-6xl font-bold mb-8 font-comfortaa tracking-tight text-[#FFFFFF] leading-custom">
              Automate everything.
            </h1>
            <p className="text-xl mb-12 text-[#fefefe]/70 font-inter max-w-2xl">
              Build, grow, and scale your work with a team of AI employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="
                  bg-gradient-to-r from-[#0E1593] to-[#04062D]
                  text-white font-inter font-bold tracking-wide
                  px-10 py-4 border border-[rgba(216,217,236,0.2)] rounded-[12px]
                  transition-all duration-200
                  hover:shadow-2xl hover:shadow-[#4F8CFF]/60
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60
                  text-lg
                "
              >
                Get started
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center w-full">
            <img 
              src="/eve1.png" 
              alt="Eve AI employee illustration" 
              className="w-full max-w-md md:max-w-lg rounded-xl object-contain p-2" 
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Product Showcase - commented out for now
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="border-2 border-[#EEF6FC] rounded-2xl overflow-hidden flex justify-center items-center p-4 md:p-8 bg-white">
            <img src="/publictrial.png" alt="Product Screenshot" className="w-full max-w-5xl rounded-xl shadow-md object-contain" />
          </div>
        </div>
      </section>
      */}

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-[#0E1593] font-inter mx-auto"
              style={{ border: '2px solid rgba(216,217,236,0.2)' }}
            >
              <span className="text-[#FFFFFF]">Solutions</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-comfortaa font-bold tracking-tight text-[#FFFFFF] mb-4">
              Meet your new AI employees
            </h2>
            <p className="text-xl text-[#fefefe]/70 font-inter max-w-2xl mx-auto">
              Specialized AI agents ready to take over your daily tasks and transform your workflow
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-[#0E0E0E] hover:bg-[#04062D] w-12 h-12 rounded-full border border-[rgba(216,217,236,0.2)] flex items-center justify-center transition-all duration-200"
              aria-label="Previous slide"
            >
              <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-auto">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {solutions.map((solution, index) => (
                  <div 
                    key={solution.name}
                    className="min-w-full lg:min-w-[33.333%] px-4"
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
                      <div className="relative z-10 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-3 font-comfortaa text-[#fff]">
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
                        <button className="bg-[#fff]/10 hover:bg-[#fff]/20 text-[#fff] px-6 py-3 rounded-xl font-inter transition-colors border border-[rgba(216,217,236,0.2)] w-full mt-auto">
                          Learn more
                </button>
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
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: Math.ceil(solutions.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#0E1593] w-8' : 'bg-[#fff]/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Centered Header Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-comfortaa font-bold text-white text-center leading-tight">
            Automates work.<br />
            Even while you sleep.
          </h2>
        </div>
      </section>

      <AgentUseCases />

      <IntegrationShowcase />

      {/* Features Grid - Temporarily Commented Out
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-comfortaa tracking-tight text-[#FFFFFF]">
              Everything you need to automate
            </h2>
            <p className="text-xl text-[#FEFEFE]/70 font-inter max-w-2xl mx-auto">
              A comprehensive suite of tools designed for building sophisticated AI workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#04062D] rounded-xl p-6 hover:shadow-lg transition-shadow border-2 border-[rgba(216,217,236,0.2)] group hover:border-[rgba(216,217,236,0.5)]"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r from-[#0E1593] to-[#04062D] group-hover:shadow-lg group-hover:shadow-[#0E1593]/20"
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 font-comfortaa tracking-tight text-[#FFFFFF]">
                  {feature.title}
                </h3>
                <p className="text-[#fefefe]/70 text-sm leading-relaxed font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Social Proof - Temporarily Commented Out
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-comfortaa font-bold tracking-tight text-[#0E0E0E] mb-4">
            Trusted by teams and innovators worldwide
            </h2>
          <p className="text-lg text-[#0E0E0E]/70 font-inter mb-10 max-w-2xl mx-auto">
            See how Eve is transforming the way organizations automate and scale their processes.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            <div className="h-12 w-32 bg-[#EEF6FC] rounded flex items-center justify-center text-[#0E1593] font-comfortaa text-xl font-bold shadow-sm">Acme</div>
            <div className="h-12 w-32 bg-[#EEF6FC] rounded flex items-center justify-center text-[#0E1593] font-comfortaa text-xl font-bold shadow-sm">Nova</div>
            <div className="h-12 w-32 bg-[#EEF6FC] rounded flex items-center justify-center text-[#0E1593] font-comfortaa text-xl font-bold shadow-sm">Orbit</div>
            <div className="h-12 w-32 bg-[#EEF6FC] rounded flex items-center justify-center text-[#0E1593] font-comfortaa text-xl font-bold shadow-sm">Zenith</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#EEF6FC] shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EEF6FC] flex items-center justify-center text-2xl font-bold text-[#0E1593] mb-4">SC</div>
              <p className="text-lg text-[#0E0E0E] font-inter mb-4">"We automated our onboarding process in minutes. What used to take hours now happens automatically."</p>
              <div className="font-bold font-comfortaa text-[#0E0E0E]">Sarah Chen</div>
              <div className="text-sm text-[#0E0E0E]/70 font-inter">Operations Director, TechFlow Inc</div>
                </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#EEF6FC] shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EEF6FC] flex items-center justify-center text-2xl font-bold text-[#0E1593] mb-4">MR</div>
              <p className="text-lg text-[#0E0E0E] font-inter mb-4">"The natural language interface is incredible. Our team built complex workflows without any technical knowledge."</p>
              <div className="font-bold font-comfortaa text-[#0E0E0E]">Marcus Rodriguez</div>
              <div className="text-sm text-[#0E0E0E]/70 font-inter">CEO, DataSync Solutions</div>
                </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#EEF6FC] shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EEF6FC] flex items-center justify-center text-2xl font-bold text-[#0E1593] mb-4">ET</div>
              <p className="text-lg text-[#0E0E0E] font-inter mb-4">"Integration with our existing tools was seamless. We're now processing 10x more leads with the same team."</p>
              <div className="font-bold font-comfortaa text-[#0E0E0E]">Emma Thompson</div>
              <div className="text-sm text-[#0E0E0E]/70 font-inter">Process Manager, InnovateCorp</div>
              </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="bg-[#04062D] rounded-xl p-8 sm:p-12 border-2 border-[rgba(216,217,236,0.2)] hover:border-[rgba(216,217,236,0.5)]/20 transition-colors">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-comfortaa tracking-tight text-[#ffffff]">
                Ready to start automating?
            </h2>
              <p className="text-lg text-[#FEFEFE]/70 mb-12 leading-relaxed font-inter">
                Join thousands of AI experts already using Eve to build the future.
              </p>
              <div className="flex justify-center">
                <button 
                  className="group relative px-8 py-4 text-white text-lg font-medium overflow-hidden rounded-lg font-inter"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E1593] to-[#04062D] transition-all duration-300" />
                  <div className="absolute inset-0 border border-[rgba(216,217,236,0.2)] rounded-lg transition-all duration-300 group-hover:bg-[#0E1593]/60" />
                  <span className="relative z-10 text-[#FFFFFF]">Request Access</span>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-[#0E1593]/30" />
                </button>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;