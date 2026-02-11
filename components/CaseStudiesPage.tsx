import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

interface CaseStudy {
  id: number;
  titleKey: string;
  categoryKey: string;
  date: string;
  color: string;
  icon: string;
  image: string;
  gallery?: string[];
  insightsImage?: string;
  videos?: string[]; 
  stats: {
    labelKey: string;
    value: string;
  }[];
  content: {
    startingPoint: string;
    solution: string;
    impact: string;
  };
}

interface CaseStudiesPageProps {
  setView?: (view: 'home' | 'cases', id: number | null) => void;
  selectedId: number | null | undefined;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ setView, selectedId }) => {
  const { t, language } = useLanguage();

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

  const cases: CaseStudy[] = [
    { 
      id: 1, 
      titleKey: 'case_ahlain_title', 
      categoryKey: 'case_ahlain_cat', 
      date: 'Jan 2025', 
      color: 'bg-blue-600', 
      icon: 'fa-plane-departure',
      image: ahlainLogo,
      gallery: [
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318145/Ahlain_Travel5_e5xzpr.jpg',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318092/Ahlain_Travel1_bteifz.jpg',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318133/Ahlain_Travel2_vurdba.jpg',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318122/Ahlain_Travel3_ddqe6w.jpg',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318038/Ahlain_Travel4_d7phcm.jpg',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770318094/Ahlain_Travel6_lrtnwf.jpg'
      ],
      stats: [
        { labelKey: language === 'ar' ? 'بوسترات مصممة' : 'Posters Designed', value: '6' },
        { labelKey: language === 'ar' ? 'رضا العميل' : 'Client Satisfaction', value: '100%' }
      ],
      content: {
        startingPoint: t('case_ahlain_starting'),
        solution: t('case_ahlain_solution'),
        impact: t('case_ahlain_impact')
      }
    },
    {
      id: 2,
      titleKey: 'case_tuilora_title',
      categoryKey: 'case_tuilora_cat',
      date: 'Dec 2024',
      color: 'bg-purple-600',
      icon: 'fa-chart-line',
      image: tuiloraLogo,
      insightsImage: 'https://res.cloudinary.com/dabsjkp57/image/upload/v1770319220/Screenshot_2026-02-04_at_10.14.56_AM_ssskxg.png', 
      stats: [
        { labelKey: 'stat_views_24h', value: '10,286' },
        { labelKey: 'stat_convs', value: '63' },
        { labelKey: 'stat_engagement', value: '331' }
      ],
      content: {
        startingPoint: t('case_tuilora_starting'),
        solution: t('case_tuilora_solution'),
        impact: t('case_tuilora_impact')
      }
    },
    {
      id: 3,
      titleKey: 'case_ms_title',
      categoryKey: 'case_ms_cat',
      date: 'Feb 2025',
      color: 'bg-cyan-600',
      icon: 'fa-users-viewfinder',
      image: msLogo,
      gallery: [
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770319926/Screenshot_2026-02-04_at_10.12.30_AM_m5hpee.png',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770319929/Screenshot_2026-02-04_at_10.12.24_AM_cpl7ah.png'
      ],
      videos: ['https://res.cloudinary.com/dabsjkp57/video/upload/v1770320038/Ms_3_phjo3x.mp4'], 
      stats: [
        { labelKey: 'stat_leads_48h', value: '500+' },
        { labelKey: language === 'ar' ? 'معدل التحويل' : 'Conversion Rate', value: 'High' }
      ],
      content: {
        startingPoint: t('case_ms_starting'),
        solution: t('case_ms_solution'),
        impact: t('case_ms_impact')
      }
    },
    {
      id: 4,
      titleKey: 'case_awtar_title',
      categoryKey: 'case_awtar_cat',
      date: 'Feb 2025',
      color: 'bg-amber-600',
      icon: 'fa-crown',
      image: awtarLogo,
      videos: [
        'https://res.cloudinary.com/dabsjkp57/video/upload/v1770320914/Sultan_mrqjcs.mp4',
        'https://res.cloudinary.com/dabsjkp57/video/upload/v1770320856/Lady_Speak_Hand_knozxy.mp4'
      ], 
      stats: [
        { labelKey: 'stat_leads_4d', value: '230' },
        { labelKey: language === 'ar' ? 'نمو الطلب' : 'Demand Growth', value: 'Rapid' }
      ],
      content: {
        startingPoint: t('case_awtar_starting'),
        solution: t('case_awtar_solution'),
        impact: t('case_awtar_impact')
      }
    },
    {
      id: 5,
      titleKey: 'case_arabicoud_title',
      categoryKey: 'case_arabicoud_cat',
      date: 'Jan 2025',
      color: 'bg-stone-800',
      icon: 'fa-gem',
      image: arabicOudLogo,
      videos: [
        'https://res.cloudinary.com/dabsjkp57/video/upload/v1770321629/%D8%B9%D9%88%D8%AF_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_2_rj0d8p.mp4',
        'https://res.cloudinary.com/dabsjkp57/video/upload/v1770321267/%D8%A7%D9%84%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB_%D8%A7%D9%84%D8%B9%D9%88%D8%AF_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%A7%D9%84%D8%B9%D8%B1%D9%88%D8%B6_nj9j1u.mp4',
        'https://res.cloudinary.com/dabsjkp57/video/upload/v1770321285/%D8%A7%D9%84%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%A7%D9%84%D8%A3%D9%88%D9%84_%D8%A7%D9%84%D8%B9%D9%88%D8%AF_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_lokibm.mp4'
      ], 
      stats: [
        { labelKey: 'stat_launch_month', value: language === 'ar' ? 'يناير 2025' : 'Jan 2025' },
        { labelKey: 'stat_brand_reach', value: 'Elite' }
      ],
      content: {
        startingPoint: t('case_arabicoud_starting'),
        solution: t('case_arabicoud_solution'),
        impact: t('case_arabicoud_impact')
      }
    },
    {
      id: 6,
      titleKey: 'case_alamary_title',
      categoryKey: 'case_alamary_cat',
      date: 'Feb 2025',
      color: 'bg-yellow-600',
      icon: 'fa-jar',
      image: alamaryLogo,
      videos: ['https://res.cloudinary.com/dabsjkp57/video/upload/v1770322065/1228_2_1_bdnr21.mp4'], 
      stats: [
        { labelKey: 'stat_sales_1d', value: '2kg' },
        { labelKey: language === 'ar' ? 'هدف يومي' : 'Daily Goal', value: 'Achieved' }
      ],
      content: {
        startingPoint: t('case_alamary_starting'),
        solution: t('case_alamary_solution'),
        impact: t('case_alamary_impact')
      }
    },
    {
      id: 7,
      titleKey: 'case_saaf_title',
      categoryKey: 'case_saaf_cat',
      date: 'Feb 2025',
      color: 'bg-green-700',
      icon: 'fa-leaf',
      image: saafLogo,
      videos: ['https://res.cloudinary.com/dabsjkp57/video/upload/v1770322553/%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%B4%D8%BA%D9%81_%D9%87%D9%88%D9%83_%D8%A7%D9%84%D9%87%D8%AF%D9%8A%D8%A9_d91exf.mp4'], 
      stats: [
        { labelKey: 'stat_sales_1d', value: '2kg' },
        { labelKey: language === 'ar' ? 'رقم قياسي' : 'Record Sales', value: '24h' }
      ],
      content: {
        startingPoint: t('case_saaf_starting'),
        solution: t('case_saaf_solution'),
        impact: t('case_saaf_impact')
      }
    },
    {
      id: 8,
      titleKey: 'case_maisa_title',
      categoryKey: 'case_maisa_cat',
      date: 'Feb 2025',
      color: 'bg-pink-600',
      icon: 'fa-shirt',
      image: maisaLogo,
      insightsImage: 'https://via.placeholder.com/1200x600?text=Snapchat+Screenshot+Review', 
      videos: ['https://res.cloudinary.com/dabsjkp57/video/upload/v1770322928/WhatsApp_Video_2026-01-17_at_14.19.43_n8w6kx.mp4'], 
      stats: [
        { labelKey: 'stat_leads_daily', value: '70+' },
        { labelKey: language === 'ar' ? 'تفاعل عالي' : 'High Engagement', value: 'Viral' }
      ],
      content: {
        startingPoint: t('case_maisa_starting'),
        solution: t('case_maisa_solution'),
        impact: t('case_maisa_impact')
      }
    },
    {
      id: 9,
      titleKey: 'case_msee_title',
      categoryKey: 'case_msee_cat',
      date: 'Feb 2025',
      color: 'bg-indigo-600',
      icon: 'fa-graduation-cap',
      image: mseeLogo,
      gallery: [
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770323873/Screenshot_2026-02-01_at_11.44.09_AM_sfgycp.png',
        'https://res.cloudinary.com/dabsjkp57/image/upload/v1770323882/Screenshot_2026-02-01_at_11.43.40_AM_zxl2ob.png'
      ],
      videos: ['https://play.gumlet.io/embed/69887115924a60df4b356a30?background=false&autoplay=false&loop=false&disable_player_controls=false'],
      stats: [
        { labelKey: 'stat_students_enrolled', value: '70' },
        { labelKey: 'stat_growth_speed', value: '1.5 Mo' }
      ],
      content: {
        startingPoint: t('case_msee_starting'),
        solution: t('case_msee_solution'),
        impact: t('case_msee_impact')
      }
    },
    {
      id: 10,
      titleKey: 'case_itzel_title',
      categoryKey: 'case_itzel_cat',
      date: 'Feb 2025',
      color: 'bg-fuchsia-600',
      icon: 'fa-sparkles',
      image: itzelLogo,
      stats: [
        { labelKey: 'stat_brand_lift', value: '140%' },
        { labelKey: 'stat_target_reach', value: '100%' }
      ],
      content: {
        startingPoint: t('case_itzel_starting'),
        solution: t('case_itzel_solution'),
        impact: t('case_itzel_impact')
      }
    }
  ];

  useEffect(() => {
    if (selectedId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedId]);

  const handleBackToGrid = () => {
    if (setView) {
      setView('cases', null);
    }
  };

  const handleBackToHome = () => {
    if (setView) {
      setView('home', null);
      window.scrollTo(0, 0);
    }
  };

  const selectedCase = selectedId ? cases.find(c => c.id === selectedId) : null;
  const otherProjects = cases.filter(c => c.id !== selectedId).slice(0, 3);

  if (selectedCase) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-white min-h-screen pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <button 
            onClick={handleBackToGrid}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold mb-12 transition-colors uppercase text-xs tracking-widest"
          >
            <i className={`fas fa-arrow-left ${language === 'ar' ? 'rotate-180' : ''}`}></i>
            {language === 'ar' ? 'العودة للمشاريع' : 'Back to Case Studies'}
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className={`${selectedCase.color} inline-block px-4 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-6`}>
                {t(selectedCase.categoryKey)}
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-gray-900">
                {t(selectedCase.titleKey)}
              </h1>
              <p className="text-gray-400 text-sm font-medium mb-12 flex items-center gap-3">
                <i className="far fa-calendar"></i> {selectedCase.date}
              </p>

              <div className="bg-gray-50 border border-gray-100 p-8 rounded-[3rem] mb-12 flex flex-wrap gap-12 relative overflow-hidden shadow-sm">
                {selectedCase.stats.map((stat, i) => (
                  <div key={i} className="relative z-10">
                    <p className="text-blue-600 text-4xl font-black mb-2">{stat.value}</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t(stat.labelKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group bg-gray-50 rounded-[3.5rem] p-4 flex items-center justify-center">
              <img 
                src={selectedCase.image} 
                className="max-w-full max-h-full object-contain relative z-10"
                alt={t(selectedCase.titleKey)}
              />
            </div>
          </div>

          <div className="mt-32 grid lg:grid-cols-12 gap-16 border-t border-gray-100 pt-24">
             <div className="lg:col-span-4 sticky top-32 h-fit">
                <h3 className="text-blue-900 text-sm font-black uppercase tracking-[0.3em] mb-8 border-b border-blue-100 pb-4">
                  {language === 'ar' ? 'نظرة عامة' : 'Overview'}
                </h3>
                <nav className="space-y-4">
                    {['Starting point', 'Solution', 'Business Impact'].map((item) => (
                        <span key={item} className="block text-gray-400 font-bold text-base">
                            {language === 'ar' ? (
                              item === 'Starting point' ? 'نقطة البداية' :
                              item === 'Solution' ? 'الحل' : 'التأثير'
                            ) : item}
                        </span>
                    ))}
                </nav>
             </div>

             <div className="lg:col-span-8 space-y-24">
                <section>
                    <h2 className="text-3xl font-black mb-8 text-gray-900">{language === 'ar' ? 'نقطة البداية' : 'Starting point'}</h2>
                    <p className="text-gray-500 text-xl leading-relaxed font-light italic">
                        {selectedCase.content.startingPoint}
                    </p>
                </section>

                {/* Video Showcase Section */}
                {selectedCase.videos && selectedCase.videos.length > 0 && (
                   <div>
                      <h2 className="text-3xl font-black mb-8 text-gray-900">{t('video_showcase')}</h2>
                      <div className={`grid gap-8 ${selectedCase.videos.length >= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                         {selectedCase.videos.map((vid, i) => (
                             <div key={i} className={`aspect-[9/16] bg-black rounded-[2rem] overflow-hidden relative shadow-xl border-4 border-white group ${vid.includes('gumlet.io') ? 'aspect-video' : ''}`}>
                                {vid.includes('gumlet.io/embed') ? (
                                   <iframe
                                      src={vid}
                                      loading="lazy"
                                      title="Gumlet video player"
                                      className="absolute top-0 left-0 w-full h-full border-none"
                                      referrerPolicy="origin"
                                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                                   />
                                ) : vid.startsWith('http') ? (
                                   <video 
                                    src={vid} 
                                    controls 
                                    className="w-full h-full object-cover"
                                    playsInline
                                    poster={selectedCase.image}
                                   >
                                     <source src={vid} type="video/mp4" />
                                     Your browser does not support the video tag.
                                   </video>
                                ) : (
                                   <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 text-[10px] font-black uppercase tracking-widest bg-slate-50 p-4 text-center">
                                      <span>Placeholder Embed: {vid}</span>
                                      <span className="mt-2 opacity-50">Content Coming Soon</span>
                                   </div>
                                )}
                             </div>
                         ))}
                      </div>
                   </div>
                )}

                {/* Insights Section */}
                {selectedCase.insightsImage && (
                   <section className="bg-blue-50/50 p-8 rounded-[3rem] border border-blue-100">
                      <h2 className="text-2xl font-black mb-6 text-blue-900">{t('insights_title')}</h2>
                      <div className="rounded-[2rem] overflow-hidden shadow-lg bg-white border border-gray-100">
                        <img src={selectedCase.insightsImage} className="w-full h-auto" alt="Campaign Insights" />
                      </div>
                   </section>
                )}

                {/* Gallery (Images) */}
                {selectedCase.gallery && (
                   <div>
                      <h2 className="text-3xl font-black mb-8 text-gray-900">{language === 'ar' ? 'معرض الصور' : 'Visual Gallery'}</h2>
                      <div className={`grid gap-6 ${selectedCase.gallery.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                         {selectedCase.gallery.map((img, i) => (
                             <div key={i} className="relative group overflow-hidden rounded-[2rem] shadow-lg aspect-video md:aspect-[4/3] bg-gray-100 border border-gray-200">
                                <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={`Project Image ${i+1}`} />
                             </div>
                         ))}
                      </div>
                   </div>
                )}

                <section>
                    <h2 className="text-3xl font-black mb-8 text-gray-900">{language === 'ar' ? 'الحل' : 'Solution'}</h2>
                    <p className="text-gray-500 text-xl leading-relaxed font-light">
                        {selectedCase.content.solution}
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-black mb-8 text-gray-900">{language === 'ar' ? 'التأثير' : 'Impact'}</h2>
                    <p className="text-gray-500 text-xl leading-relaxed font-light">
                        {selectedCase.content.impact}
                    </p>
                </section>
             </div>
          </div>

          <div className="mt-32 border-t border-gray-100 pt-24">
            <h2 className="text-4xl font-black mb-12 text-gray-900 tracking-tighter">
              {language === 'ar' ? 'استكشف بقية أعمالنا' : 'Explore Other Projects'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProjects.map((c, idx) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setView && setView('cases', c.id)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                    <img src={c.image} alt={t(c.titleKey)} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                      <div className={`${c.color} w-8 h-8 rounded-lg flex items-center justify-center shadow-lg`}>
                        <i className={`fas ${c.icon} text-[10px]`}></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{t(c.categoryKey)}</p>
                    <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">{t(c.titleKey)}</h3>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-blue-600 font-black text-[9px] uppercase tracking-widest">{t('cases_view_project')}</span>
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <i className="fas fa-arrow-right rtl:rotate-180 text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-start mb-8">
        <button 
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold transition-colors uppercase text-xs tracking-widest"
        >
          <i className={`fas fa-arrow-left ${language === 'ar' ? 'rotate-180' : ''}`}></i>
          {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        </button>
      </div>
      
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight gradient-text"
        >
          {t('cases_hero_title')}
        </motion.h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {t('cases_hero_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setView && setView('cases', c.id)}
            className="group cursor-pointer bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all relative overflow-hidden flex flex-col"
          >
            <div className="relative h-64 overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
              <img src={c.image} alt={t(c.titleKey)} className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-white">
                <div className={`${c.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg`}>
                  <i className={`fas ${c.icon} text-sm`}></i>
                </div>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{t(c.categoryKey)}</p>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{t(c.titleKey)}</h3>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{t('cases_view_project')}</span>
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fas fa-arrow-right rtl:rotate-180"></i>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;