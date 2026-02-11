import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import Counter from './Counter';
import { useLanguage } from './LanguageContext';

interface CaseStudiesProps {
  setView?: (view: 'home' | 'cases') => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ setView }) => {
  const { t, language } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  // Logos
  const placeholderLogo = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800";
  const ahlainLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770318917/photo_2026-02-05_22-14-55_jlsm3d.jpg";
  const itzelLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770630018/491416978_17844898536463945_560524543983758760_n_tnbhid.jpg";
  const alamaryLogo = "https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/610945553_122098444947196992_7432279059217016965_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BfR8wFVdFq8Q7kNvwGc1hGx&_nc_oc=AdkvI4Jttp8UIj1VyieaYQcMLcodyGqFKPofdNMQ8VHi-kc2C6bGNs7WepK68F__2zM&_nc_zt=23&_nc_ht=scontent-kul2-1.xx&_nc_gid=druSmKb8IQ0nhED_LBd95Q&oh=00_Aft6e5CZxPciSx0LBakzcNF8BbZA0oxdEtC01UuxLbpVuQ&oe=698F446A";
  const maisaLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629926/587638203_18513964402069068_6690291382408477906_n_l1wqky.jpg";
  const saafLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629860/514866127_18389517673140941_1874118622954017770_n_fm9yet.jpg";
  const arabicOudLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629519/601692253_17942313777094213_8259808535277826093_n_odno7s.jpg";
  const tuiloraLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629275/608634274_17846095650657269_6105515746631073382_n_vkfkxb.jpg";
  const msLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629770/506299091_17846283435500736_3209526984635416805_n_qqqokm.jpg";
  const mseeLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770629591/547964571_17906650488239478_6766787924072207112_n_r5mhfv.jpg";
  const awtarLogo = "https://res.cloudinary.com/dabsjkp57/image/upload/v1770321376/awtar_n7gnjm.png";

  const cards = [
    { id: 1, end: 100, suffix: '%', color: 'bg-blue-600', icon: 'fa-palette', image: ahlainLogo, title: 'case_ahlain_title', cat: 'case_ahlain_cat' },
    { id: 2, end: 10286, suffix: '', color: 'bg-purple-600', icon: 'fa-chart-line', image: tuiloraLogo, title: 'case_tuilora_title', cat: 'case_tuilora_cat' },
    { id: 3, end: 500, suffix: '+', color: 'bg-cyan-600', icon: 'fa-users-viewfinder', image: msLogo, title: 'case_ms_title', cat: 'case_ms_cat' },
    { id: 4, end: 230, suffix: '', color: 'bg-amber-600', icon: 'fa-crown', image: awtarLogo, title: 'case_awtar_title', cat: 'case_awtar_cat' },
    { id: 5, end: 2025, suffix: '', color: 'bg-stone-800', icon: 'fa-gem', image: arabicOudLogo, title: 'case_arabicoud_title', cat: 'case_arabicoud_cat' },
    { id: 6, end: 2, suffix: 'kg', color: 'bg-yellow-600', icon: 'fa-jar', image: alamaryLogo, title: 'case_alamary_title', cat: 'case_alamary_cat' },
    { id: 7, end: 2, suffix: 'kg', color: 'bg-green-700', icon: 'fa-leaf', image: saafLogo, title: 'case_saaf_title', cat: 'case_saaf_cat' },
    { id: 8, end: 70, suffix: '+', color: 'bg-pink-600', icon: 'fa-shirt', image: maisaLogo, title: 'case_maisa_title', cat: 'case_maisa_cat' },
    { id: 9, end: 70, suffix: '', color: 'bg-indigo-600', icon: 'fa-graduation-cap', image: mseeLogo, title: 'case_msee_title', cat: 'case_msee_cat' },
    { id: 10, end: 140, suffix: '%', color: 'bg-fuchsia-600', icon: 'fa-sparkles', image: itzelLogo, title: 'case_itzel_title', cat: 'case_itzel_cat' }
  ];

  const loopCards = [...cards, ...cards]; 

  useEffect(() => {
    if (contentRef.current) {
      const singleSetWidth = contentRef.current.scrollWidth / 2;
      x.set(-singleSetWidth);
    }
  }, [language]);

  useAnimationFrame((time, delta) => {
    if (!contentRef.current) return;
    const singleSetWidth = contentRef.current.scrollWidth / 2;
    let currentX = x.get();
    if (!isDragging) {
      const speed = 0.03;
      const direction = language === 'ar' ? 1 : -1;
      currentX += direction * speed * delta;
    }
    if (currentX <= -1.5 * singleSetWidth) { 
      currentX += singleSetWidth;
    } else if (currentX >= 0) {
      currentX -= singleSetWidth;
    }
    x.set(currentX);
  });

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) { e.preventDefault(); e.stopPropagation(); return; }
    if (setView) { setView('cases'); window.scrollTo(0, 0); }
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('results_title')}</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          onClick={() => { if(setView) { setView('cases'); window.scrollTo(0,0); }}}
          className="text-blue-600 font-black flex items-center gap-2 mx-auto uppercase text-xs tracking-widest border-b-2 border-blue-600 pb-1 cursor-pointer"
        >
          {t('nav_cases')} <i className="fas fa-arrow-right rtl:rotate-180"></i>
        </motion.button>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          ref={contentRef}
          style={{ x }}
          drag="x"
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => { setTimeout(() => setIsDragging(false), 50); }}
          className="flex gap-6 py-12 w-fit cursor-grab active:cursor-grabbing"
        >
          {loopCards.map((card, idx) => (
            <div key={`${card.id}-${idx}`} onClick={handleClick} className="flex-shrink-0 w-[300px] md:w-[400px] group select-none cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden pointer-events-auto">
                <div className="h-48 overflow-hidden relative bg-gray-50 p-6 flex items-center justify-center">
                  <img src={card.image} alt={t(card.title)} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none" draggable="false" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <span className="text-white text-3xl font-black"><Counter end={card.end} suffix={card.suffix} /></span>
                    <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center text-white shadow-lg`}>
                       <i className={`fas ${card.icon} text-xs`}></i>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">{t(card.cat)}</p>
                  <h4 className="text-lg font-black text-blue-900 mb-4">{t(card.title)}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{t('cases_view_project')}</span>
                    <i className="fas fa-arrow-right rtl:rotate-180 text-gray-300 group-hover:text-blue-600 transition-all"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;