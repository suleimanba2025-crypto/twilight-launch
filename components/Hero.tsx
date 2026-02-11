
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useLanguage } from './LanguageContext';

interface HeroProps {
  setView?: (view: 'home' | 'cases') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();

  const orb1Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, -150]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Explicitly typing variants to help TypeScript inference
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Using a tuple for ease to satisfy Framer Motion's Easing type requirements
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#f8fafc]">
      <motion.div 
        style={{ y: orb1Y }}
        className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ y: orb2Y }}
        className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-purple-400 rounded-full opacity-[0.05] blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="text-center lg:text-left rtl:lg:text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center py-2 px-5 bg-white shadow-sm rounded-full mb-8 transform -rotate-1 border border-gray-100"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-900">{t('hero_badge')}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 tracking-tighter text-[#0f172a]">
            {t('hero_title_1')} <br/>
            <span className="gradient-text">{t('hero_title_2')}</span> <br/>
            {t('hero_title_3')}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            {t('hero_subtitle')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <motion.a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="bg-twilight text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-xl w-full sm:w-auto text-center group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t('hero_cta_1')}
                <i className="fas fa-arrow-right text-sm rtl:rotate-180"></i>
              </span>
            </motion.a>
            <motion.button 
              onClick={() => { if(setView) { setView('cases'); window.scrollTo(0,0); }}}
              className="bg-white text-blue-900 border border-gray-100 px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-gray-50 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-star text-amber-400"></i>
              {t('nav_cases')}
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex justify-center relative perspective-[1200px]">
           <motion.div 
            className="relative z-20 w-full max-w-md"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1.5, 0, -1.5, 0]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
           >
              <div className="bg-white/90 backdrop-blur-2xl p-12 rounded-[4.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] border border-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600"></div>
                 <div className="space-y-8">
                    {[
                      { label: 'Market Share', val: '+450%', w: 'w-full' },
                      { label: 'Ad Performance', val: 'x12.5', w: 'w-[88%]' },
                      { label: 'Acquisition', val: '+92%', w: 'w-[94%]' }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2.5">
                        <div className="flex justify-between font-black text-[10px] uppercase tracking-widest text-gray-400">
                          <span>{item.label}</span>
                          <span className="text-blue-600">{item.val}</span>
                        </div>
                        <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden border">
                          <div className={`h-full bg-twilight rounded-full ${item.w}`}></div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </motion.div>
           
           {/* Decorative floating elements */}
           <motion.div 
            className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
           />
        </div>
      </div>
    </div>
  );
};

export default Hero;
