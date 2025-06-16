import React from 'react';
import Navbar from './components/Navbar';
import MeetOurStars from './components/MeetOurStars';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import AgentExplanation from './components/AgentExplanation';
import AgentCard, { AgentCardProps } from './components/AgentCard';
import AgentCarousel from './components/AgentCarousel';

const Products: React.FC = () => {
  // Icons for the SAGE agent cards
  const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const LightningIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const sageAgentProps = {
    title: {
      prefix: "AI",
      highlight: "Support Agent"
    },
    features: [
      "Handles customer inquiries instantly. Available 24/7",
      "Learns from every interaction. Improves continuously",
      "Manages multiple conversations with consistent quality"
    ],
    cards: [
      {
        title: "Instant response",
        description: "Zero wait time, always",
        icon: ClockIcon
      },
      {
        title: "Smart routing",
        description: "Right agent, right time",
        icon: LightningIcon
      },
      {
        title: "Knowledge base",
        description: "Always up to date",
        icon: ShieldIcon
      },
      {
        title: "Analytics",
        description: "Deep insights",
        icon: ChartIcon
      }
    ],
    imageSrc: "/Sage.png",
    colors: {
      primary: "#0EA5E9",
      secondary: "#0EA5E9"
    }
  };

  const mayaAgentProps = {
    title: {
      prefix: "AI",
      highlight: "Marketing Agent"
    },
    features: [
      "Creates compelling content across all channels",
      "Optimizes campaigns in real-time",
      "Personalizes messaging for maximum engagement"
    ],
    cards: [
      {
        title: "Content Creation",
        description: "AI-powered creativity",
        icon: ClockIcon
      },
      {
        title: "Campaign Optimization",
        description: "Data-driven decisions",
        icon: LightningIcon
      },
      {
        title: "Audience Insights",
        description: "Deep understanding",
        icon: ShieldIcon
      },
      {
        title: "Performance Tracking",
        description: "Real-time metrics",
        icon: ChartIcon
      }
    ],
    imageSrc: "/Maya.png",
    colors: {
      primary: "#6E3ADE",
      secondary: "#9333EA"
    }
  };

  const flowAgentProps = {
    title: {
      prefix: "AI",
      highlight: "Workflow Agent"
    },
    features: [
      "Automates complex business processes",
      "Coordinates across teams and tools",
      "Ensures compliance and documentation"
    ],
    cards: [
      {
        title: "Process Automation",
        description: "End-to-end workflow",
        icon: ClockIcon
      },
      {
        title: "Team Coordination",
        description: "Seamless collaboration",
        icon: LightningIcon
      },
      {
        title: "Compliance",
        description: "Built-in governance",
        icon: ShieldIcon
      },
      {
        title: "Documentation",
        description: "Automatic tracking",
        icon: ChartIcon
      }
    ],
    imageSrc: "/Flow.png",
    colors: {
      primary: "#00B37E",
      secondary: "#059669"
    }
  };

  const agentCards: AgentCardProps[] = [sageAgentProps, mayaAgentProps, flowAgentProps];

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
            aria-label="Request Access"
          >
            Request Access
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
                title: "Innovation",
                description: "Pushing the boundaries of what's possible with AI technology."
              },
              {
                title: "Reliability",
                description: "Building trustworthy solutions that deliver consistent results."
              },
              {
                title: "Impact",
                description: "Creating meaningful change in how businesses operate."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0E1593] to-[#04062D] border-2 border-[rgba(216,217,236,0.5)] rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:border-[rgba(216,217,236,0.8)] transition-all duration-300"
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
      <section className="min-h-[70vh] flex items-center justify-center bg-balck px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">
          <div className="relative flex flex-col items-center">

            {/* Main Text Content */}
            <motion.div
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-comfortaa font-bold leading-[1.2] tracking-tight mb-8">
                <span className="bg-gradient-to-r from-[#0E1593] via-[#0EA5E9] to-[#0EA5E9] text-transparent bg-clip-text">Built for ops teams.</span>
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

      {/* Agent Solutions Section */}
      <section className="py-24 bg-black">
        <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-center text-white mb-16">
          Meet Our <span className="bg-gradient-to-r from-[#0EA5E9] to-[#6E3ADE] text-transparent bg-clip-text">AI Agents</span>
        </h2>
        <AgentCarousel cards={agentCards} />
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