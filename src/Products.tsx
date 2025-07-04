import React from 'react';
import Navbar from './components/Navbar';
import MeetOurStars from './components/MeetOurStars';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import AgentExplanation from './components/AgentExplanation';
import AgentCard from './components/AgentCard';
import PlatformBenefits from './components/PlatformBenefits';
import { EmailIcon, LightningIcon, AutomationIcon, WorkflowIcon } from './components/icons/AgentIcons';
import AgentCardStack from './components/AgentCardStack';
import KeyFeatures from './components/KeyFeatures';
import CTASection from './components/CTASection';
import { useEffect } from 'react';

const Products: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bdrAgentProps = {
    title: {
      prefix: "AI",
      highlight: "BDR Agent",
    },
    imageSrc: "/flow.png",
    colors: {
      from: "#0E1593",
      to: "#0EA5E9"
    },
    backgroundGlowClass: "bg-blue-500/20 blur-2xl"
  };

  const supportAgentProps = {
    title: {
      prefix: "AI",
      highlight: "Support Agent",
    },
    imageSrc: "/Nova.png",
    colors: {
      from: "#6E3ADE",
      to: "#9333EA"
    },
    backgroundGlowClass: "bg-purple-500/20 blur-2xl"
  };

  const researchAgentProps = {
    title: {
      prefix: "AI",
      highlight: "Research Agent",
    },
    imageSrc: "/Eve.png",
    colors: {
      from: "#ffffff",
      to: "#FFFFFF"
    },
    backgroundGlowClass: "bg-orange-400/20 blur-2xl"
  };

  const agentCards = [
    bdrAgentProps,
    supportAgentProps,
    researchAgentProps
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage="products" />
      
      {/* Hero Section (Quote & CTA) */}
      <section className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-black to-[#04062D] px-4 sm:px-8">
        <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-brand-h1 font-comfortaa font-bold text-white mb-2 leading-tight"
          >
            "The future belongs to those who work with intelligence."
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-inter font-bold tracking-wide px-8 py-3.5 border border-[rgba(216,217,236,0.2)] rounded-[12px] transition-all duration-200 hover:shadow-2xl hover:shadow-[#4F8CFF]/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]/60 text-base mt-2"
            type="button"
            tabIndex={0}
            aria-label="Register to Eve"
            onClick={() => { window.location.href = 'https://app.witheve.ai/register'; }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Featured Agents Section really is called aboutagents*/}
      <MeetOurStars />

      {/* Values Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Automate",
                description: "Automating your work is as easy as chatting with your agents. "
              },
              {
                title: "Control",
                description: "Keep a human in the loop. Eve's agents are designed to work alongside you, not replace you."
              },
              {
                title: "Secure",
                description: "Private, secure and compliant first. Always."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:border-[rgba(216,217,236,0.8)] transition-all duration-300 space-y-2"
              >
                <h3 className="text-brand-h2 font-comfortaa leading-tight font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-brand-base leading-tight text-white/80 font-inter mb-2">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="relative flex flex-col items-center">

            {/* Main Text Content */}
            <motion.div
              className="text-center w-full"
            >
              <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#0E1593] via-[#0EA5E9] to-[#0EA5E9] text-transparent bg-clip-text">Welcome to a world</span>
                {' '}
                <span className="text-white"> where AI does your manual work. For you.</span>
                {' '}
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Cards Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-[#04062D] ">
        <AgentCardStack cards={agentCards} />
      </section>

      {/* Target Audience Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-t from-black to-[#04062D] overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="relative flex flex-col items-center">

            {/* Main Text Content */}
            <motion.div
              className="text-center w-full"
            >
              <h2 className="text-brand-h1 font-comfortaa font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-[#0E1593] via-[#0EA5E9] to-[#0EA5E9] text-transparent bg-clip-text">Built for teams.</span>
                {' '}
                <span className="text-white">No technical background required.</span>
                {' '}
                <span className="bg-gradient-to-r from-[#6E3ADE] via-[#0EA5E9] to-[#0EA5E9] text-transparent bg-clip-text">Subject-matter experts</span>
                {' '}
                <span className="text-white">can use Eve to design and use powerful AI agents without relying on developer resources.</span>
                {' '}
                <span className="bg-gradient-to-r from-[#6E3ADE] via-[#0EA5E9] to-[#0EA5E9] text-transparent bg-clip-text">Scale excellence across every area</span>
                {' '}
                <span className="text-white">or team with your intelligent, purpose-built AI workforce.</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-24 bg-black">
        <PlatformBenefits />
      </section>

      {/* Features Section
      <section className="py-32 bg-gradient-to-b from-black to-[#04062D]">
        <KeyFeatures />
      </section> */}

      <CTASection 
        title="Ready to build your AI workforce?"
        description="Join innovative teams already using Eve to scale their operations."
      />

      <Footer />
    </div>
  );
};

export default Products; 