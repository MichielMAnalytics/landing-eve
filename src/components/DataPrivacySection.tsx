import React from 'react';
import { Shield, Check } from 'lucide-react';

const DataPrivacySection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12" aria-label="Data Privacy and Compliance">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-2xl sm:text-brand-h2 font-bold mb-6 sm:mb-8 font-comfortaa leading-tight text-center text-white">
          We care about security & privacy
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data Privacy Box */}
          <div className="bg-gradient-to-br from-[#6E3ADE] to-[#4A1BA6] rounded-xl p-5 sm:p-6 border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]/20 transition-colors h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-lg sm:text-brand-h3 font-bold font-comfortaa text-white">
                    Data Privacy
                  </h3>
                </div>
                <p className="text-sm sm:text-brand-base text-[#FEFEFE]/70 leading-relaxed font-nunito">
                  Your data remains private and inaccessible to anyone. Your data will never be used to train models.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Box */}
          <div className="bg-gradient-to-br from-[#0EA5E9] to-[#065786] rounded-xl p-5 sm:p-6 border-2 border-[rgba(216,217,236,0.5)] hover:border-[rgba(216,217,236,0.8)]/20 transition-colors h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <h3 className="text-lg sm:text-brand-h3 font-bold font-comfortaa text-white">
                    Compliance
                  </h3>
                </div>
                <p className="text-sm sm:text-brand-base text-[#FEFEFE]/70 leading-relaxed font-nunito">
                  GDPR compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection; 