import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean up website URL
    let website = formData.website.trim().toLowerCase();
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      website = 'https://' + website;
    }
    
    // Prepare email content
    const emailSubject = `Demo Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`;
    const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Job Title: ${formData.jobTitle}
Company: ${formData.company}
Website: ${website}

Challenges to solve:
${formData.message}
    `.trim();

    // Open default email client with pre-filled content
    window.location.href = `mailto:hidde@witheve.ai?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage="contact" />

      <main className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-brand-h10 font-comfortaa font-bold text-[#FFFFFF] mb-4 leading-tight text-[3rem] sm:text-[4rem]">Contact Eve</h1>
            <p className="text-brand-base text-[#FFFFFF]/70 font-inter mb-10 max-w-2xl mx-auto leading-tight">
            To prepare for our demo call, please share a bit about yourself and the challenges you're hoping to address with Eve.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 sm:p-10 border-2 border-[rgba(216,217,236,0.5)] shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-white font-comfortaa mb-2">
                  First Name<span className="text-[#FF4D1C]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.5)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white font-comfortaa mb-2">
                  Last Name<span className="text-[#FF4D1C]">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-comfortaa mb-2">
                Business Email<span className="text-[#FF4D1C]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="jobTitle" className="block text-white font-comfortaa mb-2">
                Job Title<span className="text-[#FF4D1C]">*</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-white font-comfortaa mb-2">
                Company Name<span className="text-[#FF4D1C]">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="website" className="block text-white font-comfortaa mb-2">
                Company Website<span className="text-[#FF4D1C]">*</span>
              </label>
              <input
                type="text"
                id="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="example.com"
                pattern="^([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,}$"
                title="Enter your domain (e.g., example.com)"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
              />
              <p className="mt-1 text-sm text-white/50 font-inter">
                You can enter your domain with or without www/https://
              </p>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-comfortaa mb-2">
                What challenges are you looking to solve?
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-[rgba(216,217,236,0.2)] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(216,217,236,0.8)] transition-colors"
              />
            </div>

            <button
              type="submit"
                className="w-full bg-gradient-to-r from-[#0E1593] to-[#04062D] text-white font-inter font-bold tracking-wide px-10 py-4 border-2 border-[rgba(216,217,236,0.5)] rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#4F8CFF]/30 focus:outline-none focus:ring-2 focus:ring-[rgba(216,217,236,0.8)] text-lg"
            >
              Book Demo
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact; 