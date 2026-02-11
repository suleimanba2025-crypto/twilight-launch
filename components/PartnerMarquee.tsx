
import React from 'react';
import { useLanguage } from './LanguageContext';

const PartnerMarquee: React.FC = () => {
  const { t } = useLanguage();
  const clientKeys = Array.from({ length: 10 }, (_, i) => `client_${i + 1}`);

  return (
    <div className="py-8 bg-white border-y border-gray-100 overflow-hidden relative group">
      {/* Dynamic Overlays for smooth fading effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex flex-col items-center mb-4">
        <p className="text-[10px] font-black text-blue-900/40 uppercase tracking-[0.4em] mb-2">
          {t('hero_trusted')}
        </p>
      </div>

      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* First set of names */}
        <div className="flex gap-16 items-center px-8">
          {clientKeys.map((key) => (
            <span key={key} className="text-lg font-black text-slate-300 hover:text-blue-600 transition-colors duration-500 cursor-default whitespace-nowrap uppercase tracking-tighter">
              {t(key)}
            </span>
          ))}
        </div>
        {/* Duplicate set for seamless looping */}
        <div className="flex gap-16 items-center px-8">
          {clientKeys.map((key) => (
            <span key={`${key}-dup`} className="text-lg font-black text-slate-300 hover:text-blue-600 transition-colors duration-500 cursor-default whitespace-nowrap uppercase tracking-tighter">
              {t(key)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
