
import React from 'react';
import { useLanguage } from './LanguageContext';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t('why_item1_title'),
      desc: t('why_item1_desc'),
      icon: "fa-rocket"
    },
    {
      title: t('why_item2_title'),
      desc: t('why_item2_desc'),
      icon: "fa-eye"
    },
    {
      title: t('why_item3_title'),
      desc: t('why_item3_desc'),
      icon: "fa-location-dot"
    }
  ];

  return (
    <div className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6">{t('why_title_prefix')} <span className="gradient-text">Twilight</span></h2>
            <p className="text-base text-gray-500 mb-8 font-light">
              {t('why_p')}
            </p>
            
            <ul className="space-y-6">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-700 border border-gray-50">
                    <i className={`fas ${item.icon} text-sm`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-black mb-1 leading-none">{item.title}</h4>
                    <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative scale-95">
             <div className="bg-white p-1.5 rounded-[2rem] shadow-lg">
                <img src="https://picsum.photos/seed/analytics/800/800" className="rounded-[1.5rem]" alt="Strategy session" />
             </div>
             <div className="absolute -bottom-6 -left-6 rtl:-left-auto rtl:-right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-green-600 text-[10px]"></i>
                   </div>
                   <div>
                      <p className="font-black text-gray-800 text-xs">{t('why_verified')}</p>
                      <p className="text-[8px] text-gray-400 uppercase tracking-widest">{t('why_security')}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
