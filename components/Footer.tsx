import React from 'react';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo.png'; // استيراد الشعار الجديد

interface FooterProps {
  setView?: (view: 'home' | 'cases') => void;
  currentView?: 'home' | 'cases';
}

const Footer: React.FC<FooterProps> = ({ setView, currentView }) => {
  const { t } = useLanguage();

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#cases') {
      if (setView) {
        setView('cases');
        window.scrollTo(0, 0);
      }
      return;
    }

    if (currentView !== 'home' && setView) {
      setView('home');
      setTimeout(() => {
        scrollToElement(href);
      }, 150);
    } else {
      scrollToElement(href);
    }
  };

  const scrollToElement = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-md">
            <a 
              href="#hero" 
              onClick={(e) => handleNavLinkClick(e, '#hero')}
              className="flex items-center space-x-3 rtl:space-x-reverse group mb-8 cursor-pointer"
            >
              {/* استبدال الصاروخ باللوغو الجديد */}
              <div className="w-10 h-10 flex items-center justify-center transition-all">
                <img src={logo} alt="Twilight Launch" className="w-full h-full object-contain" />
              </div>

              <span className="text-2xl font-black tracking-tighter">
                TWILIGHT<span className="text-blue-500">LAUNCH</span>
              </span>
            </a>
            <h3 className="text-4xl font-bold mb-6">{t('footer_ready')}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-lg font-bold mb-6 text-cyan-400">{t('footer_nav')}</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')} className="hover:text-white transition-colors cursor-pointer">{t('nav_about')}</a></li>
                <li><a href="#services" onClick={(e) => handleNavLinkClick(e, '#services')} className="hover:text-white transition-colors cursor-pointer">{t('nav_services')}</a></li>
                <li><a href="#cases" onClick={(e) => handleNavLinkClick(e, '#cases')} className="hover:text-white transition-colors cursor-pointer">{t('nav_cases')}</a></li>
                <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className="hover:text-white transition-colors cursor-pointer">{t('nav_contact')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-cyan-400">{t('footer_connect')}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a 
                  href="https://wa.me/+96895712001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a 
                  href="https://www.instagram.com/twilightlaunch?igsh=MTliOWVkOWxoeHRibw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://www.facebook.com/share/175NeKKQPG/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 border-t border-gray-800 text-gray-400 text-sm">
           <a 
            href="tel:+96895712001" 
            className="flex items-center space-x-3 rtl:space-x-reverse hover:text-cyan-400 transition-colors"
           >
              <i className="fas fa-phone text-cyan-500"></i>
              <span dir="ltr">+968 9571 2001</span>
           </a>
        </div>
        
        <div className="text-center pt-8 text-gray-600 text-xs border-t border-gray-800">
           &copy; {new Date().getFullYear()} Twilight Launch Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;