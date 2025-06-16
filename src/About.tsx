import React from 'react';
import Navbar from './components/Navbar';
import FeaturedAgents from './components/MeetOurStars';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage="products" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-comfortaa font-bold text-white mb-6 leading-custom">
              Empowering Your Business <br /> with AI Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-inter leading-relaxed">
              We're revolutionizing the way businesses operate by bringing intelligent automation and AI-powered solutions to your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#04062D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-white/70 font-inter leading-relaxed mb-6">
                At Eve, we believe in the power of artificial intelligence to transform businesses. Our mission is to make AI accessible, practical, and impactful for organizations of all sizes.
              </p>
              <p className="text-lg text-white/70 font-inter leading-relaxed">
                Through our suite of intelligent agents, we're helping businesses automate tasks, make better decisions, and focus on what truly matters - growth and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E1593] to-[#0EA5E9] rounded-3xl opacity-20 blur-xl"></div>
              <img 
                src="/mission-illustration.png" 
                alt="Mission Illustration" 
                className="relative rounded-3xl w-full shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Agents Section */}
      <FeaturedAgents />

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#04062D] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/70 font-inter max-w-2xl mx-auto">
              The principles that guide us in creating the future of work.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-gradient-to-br from-[#0E1593]/10 to-transparent border border-[rgba(216,217,236,0.1)] rounded-xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-comfortaa font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/70 font-inter">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer currentPage="products" />
    </div>
  );
};

export default Products; 