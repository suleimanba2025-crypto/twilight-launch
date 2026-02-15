
import React from 'react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative scale-95">
            <img
              src="https://picsum.photos/seed/office/800/600"
              alt="Agency Office"
              className="rounded-[2.5rem] shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 bg-twilight px-6 py-4 rounded-2xl text-white shadow-lg z-20 hidden sm:block pointer-events-none">
              <p className="text-2xl font-black">5+</p>
              <p className="text-[8px] font-medium opacity-80 uppercase tracking-widest">{t('about_years')}</p>
            </div>
          </div>

          <div className="md:pl-8 rtl:md:pl-0 rtl:md:pr-8">
            <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight tracking-tight">
              {t('about_title')} <span className="text-blue-800">{t('about_city')}</span>
            </h2>
            <p className="text-base text-gray-500 mb-6 leading-relaxed font-light">
              {t('about_p1')}
            </p>
            <p className="text-base text-gray-500 mb-8 leading-relaxed font-light">
              {t('about_p2')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <i className="fas fa-circle-check text-cyan-500 mt-1 text-xs"></i>
                <div>
                  <h4 className="font-black text-sm">{t('about_data_driven')}</h4>
                  <p className="text-[10px] text-gray-400">{t('about_data_driven_desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <i className="fas fa-circle-check text-cyan-500 mt-1 text-xs"></i>
                <div>
                  <h4 className="font-black text-sm">{t('about_local_dna')}</h4>
                  <p className="text-[10px] text-gray-400">{t('about_local_dna_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
