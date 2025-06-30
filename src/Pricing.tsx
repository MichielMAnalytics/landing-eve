import React, { useState } from 'react';
import { Menu, X, Check, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const pricingPlans = [
  {
    name: 'Free',
    price: '€0',
    period: '/month',
    description: 'Try Eve',
    credits: '1.00M credits / month',
    subtitle: 'Get started with:',
    features: [
      'Access to all preconfigured System Agents',
      'Access to 2700+ apps and 10,000+ tools',
    ],
    buttonText: 'Current Plan',
    popular: false,
    color: '#ffffff',
    background: '#ffffff',
  },
  {
    name: 'Pro',
    price: '€29',
    period: '/month',
    description: 'For more projects and usage',
    credits: '15.0M credits / month',
    subtitle: 'Everything in Free, plus:',
    features: [
      'Access to all state of the art large language models',
      'Access to workflows',
    ],
    buttonText: 'Upgrade to Pro',
    popular: true,
    color: '#0EA5E9',
    background: '#0EA5E9',
  },
  {
    name: 'Max',
    price: '€99',
    period: '/month',
    description: 'Get the most out of Eve',
    credits: '60.0M credits / month',
    subtitle: 'Everything in Pro, plus:',
    features: [
      '5x more credits than Pro',
      'Access to global apps without credentials',
      'Priority support',
      'Request custom apps and tools',
    ],
    buttonText: 'Upgrade to Max',
    popular: false,
    color: '#FF4D1C',
    background: '#FF4D1C'
  },
];

const faqs = [
  {
    question: "How does the credit system work?",
    answer: "Credits are consumed when you use features like running automations or chatting with agents. Each plan comes with a monthly credit allowance that refreshes every billing cycle. Unused credits roll over to the next month, except those in the free plan."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can change your plan at any time. When upgrading, the new features and credit limits are available immediately. When downgrading, changes take effect at the start of your next billing cycle."
  },
  {
    question: "What happens if I run out of credits?",
    answer: "If you reach your credit limit, you can purchase additional credits or upgrade to a higher tier plan with more credits. We'll notify you before you run out so you can take action."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! You can start with our Free plan which includes 1.00M credits per month and access to all basic features. This allows you to explore Eve's capabilities before committing to a paid plan."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept IDEAL payments and all major credit cards and offer invoicing options for enterprise customers. All payments are processed securely through our payment provider."
  },
  // {
  //   question: "Is there a discount for annual billing?",
  //   answer: "Yes! You can save up to 15% by choosing annual billing. Contact our sales team to learn more about annual pricing options."
  // },
  {
    question: "How secure is Eve with my data?",
    answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards to ensure your data is protected. All data is processed in compliance with GDPR and other privacy regulations."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include access to our comprehensive documentation and community support. Pro and Max plans include priority support with faster response times. Enterprise customers receive dedicated support with custom SLAs."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className="border border-[rgba(216,217,236,0.1)] rounded-2xl overflow-hidden bg-[#040404] transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6 flex justify-between items-center">
        <h3 className="text-xl font-comfortaa text-white">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 text-white transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>
      <div 
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-white/70 font-inter">{answer}</p>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage="pricing" />

      <main>
        {/* Main Pricing Content */}
        <section className="py-32" aria-label="Pricing Plans">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-brand-h10 font-comfortaa font-bold text-[#FFFFFF] mb-4 leading-tight text-[3rem] sm:text-[4rem]">Pricing</h1>
            <p className="text-brand-base text-[#FFFFFF]/70 font-inter mb-10 max-w-2xl mx-auto leading-tight">
              Start for free. Upgrade to get the capacity that exactly matches your team's needs.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid md:grid-cols-3 gap-8 mt-12" role="list">
            {pricingPlans.map((plan, idx) => {
              return (
                <div
                  key={plan.name}
                  className={`relative bg-[#040404] rounded-3xl p-8 flex flex-col h-full ${
                    plan.popular ? 'border-[1px] border-[#0000FF]' : 'border-2 border-[rgba(216,217,236,0.1)]'
                  }`}
                  role="listitem"
                >

                  <div className="flex flex-col mb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-[32px] font-comfortaa text-white">{plan.name}</h3>
                      {plan.popular && (
                        <div className="bg-[#00FF9D] text-black text-sm px-3 py-1 rounded-full font-medium">
                          POPULAR
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-baseline mb-2">
                    <span className="text-[40px] text-white font-comfortaa font-bold">{plan.price}</span>
                    <span className="text-lg text-white ml-1 font-comfortaa">{plan.period}</span>
                  </div>

                  <p className="text-base text-white/70 mb-4 font-inter">{plan.description}</p>
                  
                  <p className="text-base text-white/70 mb-6 font-inter">{plan.credits}</p>

                  {plan.subtitle && (
                    <p className="text-base text-white/70 mb-4 font-inter">{plan.subtitle}</p>
                  )}

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-white/70 font-inter">
                        <Check className="w-5 h-5 mr-3 text-white flex-shrink-0 mt-1" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-inter font-semibold text-white transition-all duration-300 ${
                      plan.name === 'Free' 
                        ? 'bg-transparent border-2 border-[rgba(216,217,236,0.5)] hover:bg-white/10' 
                        : plan.popular
                        ? 'bg-gradient-to-r from-[#0E1593] to-[#04062D] hover:from-[#0E1593]/90 hover:to-[#04062D]/90 border-2 border-[rgba(216,217,236,0.5)] rounded-[12px]'
                        : 'bg-[#040404] border-2 border-[rgba(216,217,236,0.5)] hover:bg-white/10'
                    }`}
                    onClick={() => window.open('https://app.witheve.ai/', '_blank')}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center mt-16">
            <p className="text-white text-lg mb-4">Need unlimited credits and enterprise features?</p>
            <button
              className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              onClick={() => window.open('https://witheve.ai/contact', '_blank')}
            >
              Contact Sales
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 max-w-4xl mx-auto px-4" aria-label="Frequently Asked Questions">
          <h2 className="text-[3rem] font-comfortaa font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing; 