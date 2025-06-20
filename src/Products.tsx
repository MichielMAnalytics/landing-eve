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

const Products: React.FC = () => {
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
    imageSrc: "/Sage.png",
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
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-comfortaa font-bold text-white mb-8"
          >
            "The future belongs to those who build with intelligence."
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="btn btn-primary bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] border-none text-white px-8 py-4 rounded-xl text-lg font-inter font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#0E1593]/60"
            type="button"
            tabIndex={0}
            aria-label="Login to Eve"
            onClick={() => window.open('https://app.witheve.ai/', '_blank')}
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
          {/*<h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-8 text-center">Our Values</h2>*/}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Automate",
                description: "Automating your work is as easy as chatting with your agents. "
              },
              {
                title: "Control",
                description: "Eve's platform offers full control on your workflow automations."
              },
              {
                title: "Secure",
                description: "Private, secure and compliant. Always."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:border-[rgba(216,217,236,0.8)] transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-comfortaa font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/80 font-inter text-lg">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-comfortaa font-bold leading-[1.2] tracking-tight mb-8">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-comfortaa font-bold leading-[1.2] tracking-tight mb-8">
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

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#04062D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Feature */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="bg-gradient-to-br from-[#00B37E] to-[#04062D] border border-[#00B37E] rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-comfortaa font-bold text-white mb-4">
                  Built into your workflows
                </h3>
                <p className="text-white/80 font-inter text-lg leading-relaxed">
                  Our AI agents seamlessly integrate with your existing processes, understanding your projects, tasks, and documentation without isolated interactions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#E42800] to-[#04062D] border border-[#E42800] rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-comfortaa font-bold text-white mb-4">
                  Learns Automatically
                </h3>
                <p className="text-white/80 font-inter text-lg leading-relaxed">
                  Every interaction enhances our AI's understanding of your processes, adapting instantly to your unique requirements without manual configuration.
                </p>
              </div>
            </motion.div>

            {/* Right Feature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F69902] to-[#04062D] border border-[#F69902] rounded-3xl p-8 h-full backdrop-blur-sm"
            >
              <h3 className="text-2xl sm:text-3xl font-comfortaa font-bold text-white mb-4">
                Delivers Results
              </h3>
              <p className="text-white/80 font-inter text-lg leading-relaxed mb-8">
                While other tools simply provide suggestions, our AI takes action. It understands context, executes tasks, and delivers tangible outcomes that drive your business forward.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white/90 font-inter">Immediate execution of tasks</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-white/90 font-inter">Automated workflow optimization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 