import React, { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 workflows',
      'Natural language interface',
      'Basic integrations',
      'Email support',
    ],
    popular: false,
    color: '#6E3ADE', // Royal Purple
    background: '#6E3ADE', // Light purple
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Advanced features for growing businesses',
    features: [
      'Unlimited workflows',
      'Advanced AI assistant',
      'Premium integrations',
      'Priority support',
      'Team collaboration',
      'Analytics dashboard',
    ],
    popular: true,
    color: '#0EA5E9', // Ocean Blue
    background: '#0EA5E9', // Light blue
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'On-premise deployment',
      'Advanced security',
    ],
    popular: false,
    color: '#FF4D1C', // Electric Orange
    background: '#FF4D1C', // Light orange
  },
];

const faqs = [
  {
    question: 'Can I try Eve for free?',
    answer: 'We are currently in private beta. Request access to join our early users and get started.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and offer invoicing for enterprise customers.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings.'
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Yes, we offer a 15% discount for annual subscriptions. Contact us for details.'
  },
];

const Pricing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar currentPage="pricing" />

      <main>
        {/* Main Pricing Content */}
        <section className="py-32" aria-label="Pricing Plans">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-[#0E1593] font-inter mx-auto"
              style={{ border: '2px solid rgba(216,217,236,0.2)' }}
              aria-hidden="true"
            >
              <span className="text-[#FFFFFF]">Pricing</span>
            </div>
            <h1 className="text-brand-h1 font-comfortaa font-bold text-[#FFFFFF] mb-4 leading-tight">Choose your plan</h1>
            <p className="text-brand-base text-[#FFFFFF]/70 font-inter mb-10 max-w-2xl mx-auto leading-tight">
              Simple, transparent pricing. No hidden fees. Choose the plan that fits your team.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid md:grid-cols-3 gap-8 mt-12" role="list">
            {pricingPlans.map((plan, idx) => {
              // Gradient backgrounds and borders for each plan
              let gradient = '';
              let border = '';
              if (plan.name === 'Starter') {
                gradient = 'bg-gradient-to-br from-[#6E3ADE] to-[#2D1A5A]';
                border = 'border-[#A084E8]';
              } else if (plan.name === 'Professional') {
                gradient = 'bg-gradient-to-br from-[#0EA5E9] to-[#0B3C5D]';
                border = 'border-[#5ED6FB]';
              } else if (plan.name === 'Enterprise') {
                gradient = 'bg-gradient-to-br from-[#FF4D1C] to-[#7A1B0C]';
                border = 'border-[#FFB199]';
              }
              return (
                <div
                  key={plan.name}
                  className={`border-2 ${gradient} ${border} rounded-3xl p-8 flex flex-col items-center shadow-md transition-all duration-300 text-white ${
                    plan.popular
                      ? 'scale-105 z-10 border-[3px]'
                      : ''
                  }`}
                  role="listitem"
                  aria-label={plan.popular ? `${plan.name} plan - Most popular` : `${plan.name} plan`}
                >
                  {plan.popular && (
                    <div className="mb-4 px-4 py-1 rounded-full bg-white/20 text-white font-inter text-sm font-semibold border border-white/30" aria-label="Most popular plan">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-brand-h2 font-comfortaa font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4" aria-label={`${plan.price}${plan.period}`}> 
                    <span className="text-brand-h3 text-white leading-tight font-comfortaa">{plan.price}</span>
                    <span className="text-brand-base leading-tight text-white/70 font-inter ml-1">{plan.period}</span>
                  </div>
                  <p className="text-white/70 font-inter mb-6 leading-tight">{plan.description}</p>
                  <ul className="mb-8 space-y-4 text-left w-full max-w-xs mx-auto" role="list" aria-label="Plan features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white/90 font-inter" role="listitem">
                        <Check className="w-5 h-5 mr-3 text-white" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full py-3 rounded-xl font-inter font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 mt-auto"
                    tabIndex={0}
                    aria-label={plan.name === 'Enterprise' ? 'Contact Sales' : `Get Started with ${plan.name} plan`}
                    onClick={() => window.open('https://app.witheve.ai/', '_blank')}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" aria-label="Frequently Asked Questions">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-brand-h2 font-comfortaa font-bold text-[#FFFFFF] mb-8 text-center leading-tight">Frequently Asked Questions</h2>
            <div className="space-y-6" role="list">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#04062D] border-2 border-[rgba(216,217,236,0.2)] rounded-xl p-6 hover:border-[rgba(216,217,236,0.3)] transition-all duration-300"
                  role="listitem"
                >
                  <div className="font-bold text-[#FFFFFF] font-comfortaa mb-2 text-brand-baseleading-tight">{faq.question}</div>
                  <div className="text-[#FFFFFF]/80 font-inter leading-tight">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing; 