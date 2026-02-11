import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo.png'; // استيراد اللوغو الجديد

interface NavbarProps {
  setView: (view: 'home' | 'cases') => void;
  currentView: 'home' | 'cases';
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (e: React.MouseEvent) => {
    e.preventDefault();
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#cases') {
      setView('cases');
      return;
    }

    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        scrollToElement(href);
      }, 50);
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

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_cases'), href: '#cases' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-3 rtl:space-x-reverse group flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* استبدال الأيقونة المربعة بصورة اللوغو الجديد */}
            <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
              <img src={logo} alt="Twilight Launch" className="w-full h-full object-contain" />
            </div>
            
            {/* الحفاظ على اسم البراند كما هو بتنسيقه الحالي */}
            <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 uppercase">
              TWILIGHT<span className="text-blue-500">LAUNCH</span>
            </span>
          </motion.a>

          {/* ... باقي الكود يظل كما هو دون تغيير ... */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse font-black text-[11px] uppercase tracking-wider">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`${currentView === 'cases' && link.href === '#cases' ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600 transition-colors relative cursor-pointer`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              onClick={toggleLanguage}
              className="text-gray-800 hover:bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 transition-all text-[10px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'AR' : 'EN'}
            </motion.button>

            <motion.a 
              href="#contact" 
              onClick={(e) => handleNavLinkClick(e, '#contact')}
              className="bg-[#0f172a] text-white px-5 py-2.5 rounded-xl font-black hover:bg-blue-600 transition-all shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav_cta')}
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900 border border-gray-100"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-[70] md:hidden flex flex-col items-center justify-center space-y-6 p-6"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
              <i className="fas fa-times text-lg"></i>
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavLinkClick(e, link.href)} 
                className="text-3xl font-black text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button onClick={toggleLanguage} className="text-xl font-black text-blue-600 uppercase tracking-widest">
                {language === 'en' ? 'العربية' : 'English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;