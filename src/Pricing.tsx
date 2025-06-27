import React, { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Try Eve',
    credits: '100.0K credits / month',
    subtitle: 'Get started with:',
    features: [
      'Access to all preconfigured System Agents',
      'Access to 2700+ apps and 10,000+ tools',
    ],
    buttonText: 'Get Started',
    popular: false,
    color: '#6E3ADE',
    background: '#6E3ADE',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For more projects and usage',
    credits: '2.00M credits / month',
    subtitle: 'Everything in Free, plus:',
    features: [
      'Access to all state of the art large language models',
      'Access to workflows',
    ],
    buttonText: 'Get Started',
    popular: false,
    color: '#0EA5E9',
    background: '#0EA5E9',
  },
  {
    name: 'Max',
    price: '$99',
    period: '/month',
    description: 'Get the most out of Eve',
    credits: '10.0M credits / month',
    subtitle: 'Everything in Pro, plus:',
    features: [
      '5x more credits than Pro',
      'Access to global apps without credentials',
      'Priority support',
      'Request custom apps and tools',
    ],
    buttonText: 'Get Started',
    popular: true,
    color: '#FF4D1C',
    background: '#FF4D1C'
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
            <h1 className="text-brand-h1 font-comfortaa font-bold text-[#FFFFFF] mb-4 leading-tight">Choose your plan</h1>
            <p className="text-brand-base text-[#FFFFFF]/70 font-inter mb-10 max-w-2xl mx-auto leading-tight">
              Simple, transparent pricing. No hidden fees. Choose the plan that fits your team.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid md:grid-cols-3 gap-8 mt-12" role="list">
            {pricingPlans.map((plan, idx) => {
              return (
                <div
                  key={plan.name}
                  className={`relative bg-gradient-to-br ${
                    plan.name === 'Free' 
                      ? 'from-[#6E3ADE] to-[#6E3ADEBF]' 
                      : plan.name === 'Pro'
                      ? 'from-[#0EA5E9] to-[#0EA5E9BF]'
                      : 'from-[#FF4D1C] to-[#FF4D1CBF]'
                  } border-2 border-[rgba(216,217,236,0.5)] rounded-3xl p-8 flex flex-col shadow-lg h-full ${
                    plan.popular ? 'z-10 border-[3px]' : ''
                  }`}
                  role="listitem"
                  aria-label={plan.popular ? `${plan.name} plan - Current plan` : `${plan.name} plan`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-[32px] font-comfortaa text-white">{plan.name}</h3>
                  </div>

                  <div className="flex items-baseline mb-2 whitespace-nowrap">
                    <span className="text-[40px] text-white font-comfortaa">{plan.price}</span>
                    <span className="text-lg text-white/70 ml-1 font-comfortaa">{plan.period}</span>
                  </div>

                  <p className="text-xl text-white mb-4 font-comfortaa">{plan.description}</p>
                  
                  <p className="text-lg text-white/70 mb-6 font-comfortaa">{plan.credits}</p>

                  {plan.subtitle && (
                    <p className="text-lg text-white mb-4 font-comfortaa">{plan.subtitle}</p>
                  )}

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-white/90 font-comfortaa">
                        <Check className="w-5 h-5 mr-3 text-white flex-shrink-0 mt-1" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-3 rounded-xl font-comfortaa font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 mt-auto"
                    onClick={() => window.open('https://app.witheve.ai/', '_blank')}
                  >
                    {plan.buttonText}
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
                  className="border-2 border-[rgba(216,217,236,0.5)] rounded-xl p-6 hover:border-[rgba(216,217,236,0.3)] transition-all duration-300"
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