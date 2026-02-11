
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  nav_about: { en: 'About', ar: 'من نحن' },
  nav_services: { en: 'Services', ar: 'خدماتنا' },
  nav_results: { en: 'Results', ar: 'نتائجنا' },
  nav_cases: { en: 'Case Studies', ar: 'قصص النجاح' },
  nav_contact: { en: 'Contact', ar: 'اتصل بنا' },
  nav_cta: { en: 'Start Now', ar: 'ابدأ الآن' },
  hero_badge: { en: 'Top Rated Growth Agency', ar: 'وكالة النمو الأولى' },
  hero_title_1: { en: 'Your Strategic', ar: 'شريكك' },
  hero_title_2: { en: 'Growth', ar: 'الاستراتيجي' },
  hero_title_3: { en: 'Partner in Oman.', ar: 'للنمو في عمان' },
  hero_subtitle: { en: "We don't just run ads; we engineer ROI. Specialized in Meta Ads and growth strategies that double your revenue.", ar: "نحن لا ندير الإعلانات فحسب؛ بل نصمم العائد على الاستثمار. متخصصون في إعلانات Meta واستراتيجيات النمو." },
  hero_cta_1: { en: 'Launch Now', ar: 'أطلق حملتك' },
  hero_cta_2: { en: 'Results', ar: 'النتائج' },
  hero_trusted: { en: 'Our Real Partners', ar: 'شركاء النجاح الحقيقيون' },
  about_years: { en: 'Years in Oman', ar: 'سنوات في عمان' },
  about_title: { en: 'Based in the heart of', ar: 'من قلب' },
  about_city: { en: 'Muscat', ar: 'مسقط' },
  about_p1: { en: 'Located in Bousher, we help ambitious companies scale. We are performance engineers.', ar: 'يقع مقرنا في بوشر، نساعد الشركات الطيوحة على التوسع. نحن مهندسو أداء.' },
  about_p2: { en: 'We focus on numbers, data, and real results. Our local market expertise allows us to deliver unmatched ROI.', ar: 'نركز على الأرقام والبيانات. خبرتنا المحلية تتيح لنا تقديم عائد استثمار لا مثيل له.' },
  about_data_driven: { en: 'Data-Driven', ar: 'مدفوع بالبيانات' },
  about_data_driven_desc: { en: 'Decisions backed by analytics', ar: 'قرارات مدعومة بالتحليلات' },
  about_local_dna: { en: 'Local DNA', ar: 'هوية محلية' },
  about_local_dna_desc: { en: 'Understanding the Omani consumer', ar: 'فهم عميق للمستهلك' },
  services_title: { en: 'Our Expertise', ar: 'خبراتنا' },
  services_subtitle: { en: 'Strategic solutions designed to capture market share.', ar: 'حلول استراتيجية مصممة للاستحواذ على حصة في السوق.' },
  service_meta_title: { en: 'Meta Ads', ar: 'إعلانات ميتا' },
  service_meta_desc: { en: 'Precise targeting and creative campaigns on Facebook & Instagram.', ar: 'استهداف دقيق وحملات إبداعية على فيسبوك وإنستغرام.' },
  service_meta_detail: { en: 'Advanced pixel tracking, CAPI implementation, and hyper-local creative testing. We build high-converting ad funnels that guide Omani consumers from initial awareness to final purchase.', ar: 'تتبع البكسل المتقدم، تنفيذ CAPI، واختبار تصاميم محلية. نقوم ببناء مسارات إعلانية عالية التحويل توجه المستهلكين للشراء.' },
  service_media_title: { en: 'Media Buying', ar: 'شراء المساحات' },
  service_media_desc: { en: 'Smart budget planning for maximum ROI. We optimize every OMR spent.', ar: 'تخطيط ذكي للميزانية لتحقيق أقصى عائد. نحسن كل ريال عماني.' },
  service_media_detail: { en: 'We manage large-scale budgets with a focus on bidding efficiency. Leveraging automated rules to ensure your ad spend is never wasted on low-performing placements.', ar: 'ندير ميزانيات كبيرة مع التركيز على كفاءة المزايدة. نضمن عدم إهدار ميزانيتك الإعلانية على مواضع ضعيفة الأداء.' },
  service_growth_title: { en: 'Growth Strategy', ar: 'استراتيجية النمو' },
  service_growth_desc: { en: 'Full-funnel optimization to turn visitors into loyal customers.', ar: 'تحسين المسار التسويقي بالكامل لتحويل الزوار لعملاء.' },
  service_growth_detail: { en: 'We analyze your entire customer journey, implementing CRO (Conversion Rate Optimization) and retention tactics that increase the Lifetime Value (LTV).', ar: 'نحلل رحلة عميلك بالكامل، وننفذ تكتيكات تحسين معدل التحويل والاحتفاظ التي تزيد من القيمة الدائمة.' },
  results_title: { en: "Our Portfolio", ar: 'معرض أعمالنا' },
  results_subtitle: { en: 'Real impact for our local partners.', ar: 'تأثير حقيقي قدمناه لشركائنا.' },
  results_cta_title: { en: 'Ready for Success?', ar: 'جاهز للنجاح؟' },
  results_cta_btn: { en: 'Book Session', ar: 'احجز جلسة' },
  cases_hero_title: { en: 'Success Stories', ar: 'قصص النجاح' },
  cases_hero_subtitle: { en: 'Explore our latest work and visual designs for Omani brands.', ar: 'اكتشف أحدث أعمالنا وتصاميمنا البصرية للعلامات التجارية العمانية.' },
  cases_view_project: { en: 'View Project', ar: 'عرض المشروع' },
  cases_more_projects: { en: 'Other Projects', ar: 'مشاريع أخرى' },
  footer_ready: { en: 'Ready?', ar: 'جاهز؟' },
  footer_desc: { en: "Start growing with Muscat's best agency.", ar: 'ابدأ النمو مع أفضل وكالة في مسقط.' },
  footer_nav: { en: 'Nav', ar: 'التنقل' },
  footer_connect: { en: 'Connect', ar: 'تواصل' },
  footer_privacy: { en: 'Privacy', ar: 'الخصوصية' },
  footer_address: { en: 'Muscat, Oman', ar: 'مسقط، عمان' },
  learn_more: { en: 'Learn More', ar: 'المزيد' },
  close: { en: 'Close', ar: 'إغلاق' },
  
  // Why Choose Us
  why_title_prefix: { en: 'Why Partner with', ar: 'لماذا تختار' },
  why_p: { 
    en: 'We combine data science with creative intuition to deliver high-performance campaigns that drive actual revenue growth for Omani businesses.', 
    ar: 'نحن نجمع بين علم البيانات والحس الإبداعي لتقديم حملات عالية الأداء تحقق نموًا فعليًا في الإيرادات للشركات العمانية.' 
  },
  why_item1_title: { en: 'ROI Engineering', ar: 'هندسة العائد على الاستثمار' },
  why_item1_desc: { en: 'We optimize every OMR of your budget to ensure maximum return on investment.', ar: 'نحن نحسن كل ريال عماني من ميزانيتك لضمان أقصى قدر من العائد على الاستثمار.' },
  why_item2_title: { en: 'Data-First Strategy', ar: 'استراتيجية مدفوعة بالبيانات' },
  why_item2_desc: { en: 'Every creative decision is backed by real-time analytics and performance data.', ar: 'كل قرار إبداعي مدعوم بالتحليلات الحية وبيانات الأداء في الوقت الفعلي.' },
  why_item3_title: { en: 'Local Market Expertise', ar: 'خبرة عميقة بالسوق العماني' },
  why_item3_desc: { en: 'Deep understanding of local consumer behavior and cultural nuances in Oman.', ar: 'فهم عميق لسلوك المستهلك المحلي والفوارق الثقافية الدقيقة في سلطنة عمان.' },
  why_verified: { en: 'Proven Growth', ar: 'نمو موثوق ومجرب' },
  why_security: { en: 'Performance Guaranteed', ar: 'أداء مضمون' },

  // Clients for Marquee
  client_1: { en: 'Ahlain Travel', ar: 'أهلين ترافيل' },
  client_2: { en: 'Tuilora', ar: 'تولورا' },
  client_3: { en: 'MS International', ar: 'ام سي إنترناشيونال' },
  client_4: { en: 'Awtar Al sultanah', ar: 'أوتار السلطنة' },
  client_5: { en: 'Arabic Oud', ar: 'أربيك عود' },
  client_6: { en: 'Alamary Honey', ar: 'عسل العامري' },
  client_7: { en: 'Saaf', ar: 'سعف' },
  client_8: { en: 'Maisa Fashion', ar: 'ميساء فاشن' },
  client_9: { en: 'M.See Education', ar: 'ام سي التعليمي' },
  client_10: { en: 'Itzel', ar: 'اتزل' },

  // Case Studies
  case_ahlain_title: { en: 'Ahlain Travel', ar: 'أهلين ترافيل' },
  case_ahlain_cat: { en: 'Poster Design', ar: 'تصميم بوسترات' },
  case_ahlain_starting: { en: 'Ahlain Travel needed a visual identity for their holiday packages that resonates with the Omani adventurous spirit.', ar: 'كانت أهلين ترافيل بحاجة إلى هوية بصرية لباقات عطلاتهم تحاكي روح المغامرة لدى العمانيين.' },
  case_ahlain_solution: { en: 'We designed a series of high-impact posters focusing on color psychology and travel storytelling.', ar: 'قمنا بتصميم سلسلة من البوسترات عالية التأثير مع التركيز على سيكولوجية الألوان وسرد قصص السفر.' },
  case_ahlain_impact: { en: 'The new designs unified the brand look across social media and physical branches in Muscat.', ar: 'وحدت التصاميم الجديدة مظهر العلامة التجارية عبر وسائل التواصل الاجتماعي والفروع الفعلية في مسقط.' },

  case_tuilora_title: { en: 'Tuilora', ar: 'تولورا' },
  case_tuilora_cat: { en: 'Meta Ads Strategy', ar: 'استراتيجية إعلانات ميتا' },
  case_tuilora_starting: { en: 'Tuilora aimed to achieve a massive breakout in visibility within a very short timeframe.', ar: 'هدفت تولورا إلى تحقيق اختراق هائل في معدلات الظهور خلال فترة زمنية قصيرة جداً.' },
  case_tuilora_solution: { en: 'We executed an aggressive one-day Meta Ads campaign optimized for engagement and high-volume reach.', ar: 'نفذنا حملة إعلانية مكثفة لمدة يوم واحد على منصات ميتا، محسنة للتفاعل والوصول واسع النطاق.' },
  case_tuilora_impact: { en: 'The campaign resulted in an instant surge, generating over 10,000 views and a 100% increase in all key engagement metrics in just 24 hours.', ar: 'أسفرت الحملة عن طفرة فورية، محققة أكثر من 10,000 مشاهدة وزيادة بنسبة 100% في جميع مؤشرات التفاعل الرئيسية خلال 24 ساعة فقط.' },
  stat_views_24h: { en: 'Views in 24h', ar: 'مشاهدة في 24 ساعة' },
  stat_convs: { en: 'New Conversations', ar: 'محادثة جديدة' },
  stat_engagement: { en: 'Total Engagement', ar: 'إجمالي التفاعل' },
  insights_title: { en: 'Data Verification', ar: 'التحقق من البيانات' },
  video_showcase: { en: 'Video Showcase', ar: 'معرض الفيديوهات' },

  case_ms_title: { en: 'MS International', ar: 'ام سي إنترناشيونال' },
  case_ms_cat: { en: 'Lead Generation', ar: 'توليد عملاء محتملين' },
  case_ms_starting: { en: 'MS International needed a rapid influx of high-quality leads to scale their operations in just a few days.', ar: 'كانت ام سي إنترناشيونال بحاجة إلى تدفق سريع للعملاء المحتملين ذوي الجودة العالية للتوسع في عملياتها خلال أيام معدودة.' },
  case_ms_solution: { en: 'We deployed a high-conversion lead generation funnel specifically targeted at the Omani business sector.', ar: 'قمنا بإطلاق مسار تحويل لتوليد العملاء يستهدف قطاع الأعمال العماني بشكل مباشر ودقيق.' },
  case_ms_impact: { en: 'In just 48 hours, the campaign secured over 500 qualified leads, setting a new benchmark for their customer acquisition cost.', ar: 'في غضون 48 ساعة فقط، أمنت الحملة أكثر من 500 عميل محتمل مؤهل، مما وضع معياراً جديداً لتكلفة اكتساب العملاء لديهم.' },
  stat_leads_48h: { en: 'Leads in 48h', ar: 'زبون مهتم في 48 ساعة' },

  case_awtar_title: { en: 'Awtar Al sultanah', ar: 'أوتار السلطنة' },
  case_awtar_cat: { en: 'Performance Marketing', ar: 'تسويق الأداء' },
  case_awtar_starting: { en: 'Awtar Al sultanah aimed to capture high-value interest for their premium services in a highly competitive Omani niche.', ar: 'هدفت أوتار السلطنة إلى جذب اهتمام عالي القيمة لخدماتها المتميزة في قطاع عماني تنافسي للغاية.' },
  case_awtar_solution: { en: 'We implemented a precision-targeted conversion campaign using custom-built audience segments and premium visual assets.', ar: 'قمنا بتنفيذ حملة تحويل دقيقة الاستهداف باستخدام شرائح جمهور مخصصة وأصول بصرية فاخرة.' },
  case_awtar_impact: { en: 'The campaign delivered 230 qualified leads in just 4 days, maximizing their marketing efficiency and ROI.', ar: 'حققت الحملة 230 عميلاً محتملاً مؤهلاً في غضون 4 أيام فقط، مما أدى إلى تعظيم كفاءتهم التسويقية وعائد الاستثمار.' },
  stat_leads_4d: { en: 'Leads in 4 days', ar: 'زبون مهتم في 4 أيام' },

  case_arabicoud_title: { en: 'Arabic Oud', ar: 'أربيك عود' },
  case_arabicoud_cat: { en: 'Brand Launch', ar: 'إطلاق علامة تجارية' },
  case_arabicoud_starting: { en: 'Arabic Oud entered the luxury perfume market in Muscat, needing a digital debut that matches their aromatic excellence.', ar: 'دخلت أربيك عود سوق العطور الفاخرة في مسقط، وكانت بحاجة إلى ظهور رقمي يوازي تميز عطورها.' },
  case_arabicoud_solution: { en: 'We crafted a comprehensive brand launch strategy, focusing on sensory storytelling and social proof from the first day.', ar: 'صممنا استراتيجية إطلاق شاملة، ركزت على سرد القصص الحسية والإثبات الاجتماعي منذ اليوم الأول.' },
  case_arabicoud_impact: { en: 'The brand successfully launched in January 2025, capturing immediate market attention and high early-stage customer loyalty.', ar: 'تم إطلاق العلامة التجارية بنجاح في يناير 2025، مما جذب اهتماماً فورياً في السوق وولاءً عالياً من العملاء في المراحل الأولى.' },
  stat_launch_month: { en: 'Launch Month', ar: 'شهر الإطلاق' },
  stat_brand_reach: { en: 'Initial Reach', ar: 'الوصول الأولي' },

  case_alamary_title: { en: 'Alamary Honey', ar: 'عسل العامري' },
  case_alamary_cat: { en: 'E-commerce Growth', ar: 'نمو التجارة الإلكترونية' },
  case_alamary_starting: { en: 'Alamary Honey needed to boost their direct-to-consumer sales in the competitive honey market.', ar: 'كان عسل العامري بحاجة لتعزيز مبيعاته المباشرة في سوق العسل التنافسي.' },
  case_alamary_solution: { en: 'We implemented a laser-focused conversion campaign targeting health-conscious consumers with high-quality visual content.', ar: 'نفذنا حملة تحويل مركزة تستهدف المستهلكين المهتمين بالصحة مع محتوى بصري عالي الجودة.' },
  case_alamary_impact: { en: 'In a single day, the brand achieved a milestone of 2kg in high-value sales, proving the effectiveness of the targeted strategy.', ar: 'في يوم واحد، حققت العلامة التجارية إنجازاً ببيع 2 كيلو من العسل عالي القيمة، مما أثبت فعالية الاستراتيجية المستهدفة.' },
  stat_sales_1d: { en: 'Sales in 1 day', ar: 'مبيعات في يوم واحد' },

  case_saaf_title: { en: 'Saaf', ar: 'سعف' },
  case_saaf_cat: { en: 'Direct-to-Consumer Growth', ar: 'نمو المبيعات المباشرة' },
  case_saaf_starting: { en: 'Saaf needed to establish a strong sales channel for their premium organic honey products.', ar: 'كانت سعف بحاجة إلى إنشاء قناة مبيعات قوية لمنتجات عسل النحل العضوي الفاخرة.' },
  case_saaf_solution: { en: 'We developed a conversion-optimized strategy leveraging local culture and high-trust social proof.', ar: 'قمنا بتطوير استراتيجية محسنة للتحويل تستفيد من الثقافة المحلية والإثبات الاجتماعي عالي الثقة.' },
  case_saaf_impact: { en: 'The strategy enabled Saaf to hit a record 2kg in sales in just 24 hours, significantly scaling their daily revenue.', ar: 'مكنت الاستراتيجية سعف من تسجيل رقم قياسي ببيع 2 كيلو في 24 ساعة فقط، مما أدى إلى توسيع دخلهم اليومي بشكل كبير.' },

  case_maisa_title: { en: 'Maisa Fashion', ar: 'ميساء فاشن' },
  case_maisa_cat: { en: 'Viral Lead Gen', ar: 'توليد عملاء فيروسي' },
  case_maisa_starting: { en: 'Maisa Fashion aimed to increase their daily customer inquiries through high-impact social media content.', ar: 'هدفت ميساء فاشن إلى زيادة استفسارات العملاء اليومية من خلال محتوى مؤثر على وسائل التواصل الاجتماعي.' },
  case_maisa_solution: { en: 'We created unique visual posts, including a "Snapchat screenshot" designed to look like a genuine customer review, which sparked massive engagement and trust.', ar: 'قمنا بإنشاء بوستات بصرية مميزة، بما في ذلك "سكرين شوت" لسناب شات مصمم ليبدو كتقييم حقيقي من عميلة، مما أثار تفاعلاً وثقة هائلة.' },
  case_maisa_impact: { en: 'The campaign resulted in over 70 qualified leads daily, transforming their social media presence into a high-performance sales machine.', ar: 'نتج عن الحملة أكثر من 70 عميل محتمل مؤهل يومياً، مما حول تواجدهم على وسائل التواصل إلى آلة مبيعات عالية الأداء.' },
  stat_leads_daily: { en: 'Leads Daily', ar: 'زبون مهتم يومياً' },

  case_msee_title: { en: 'M.See Education', ar: 'ام سي التعليمي' },
  case_msee_cat: { en: 'Educational Growth', ar: 'نمو القطاع التعليمي' },
  case_msee_starting: { en: 'M.See Education reached 30 students over 9 months but struggled to scale further in their initial niche.', ar: 'وصل ام سي التعليمي إلى 30 طالباً خلال 9 أشهر، لكنه واجه صعوبة في التوسع أكثر في فئته الأولية.' },
  case_msee_solution: { en: 'We identified and targeted a completely new market segment through precision Meta Ads, positioning their courses for high-demand skills.', ar: 'حددنا واستهدفنا فئة سوقية جديدة تماماً من خلال إعلانات ميتا الدقيقة، مع إعادة تموضع دوراتهم للمهارات عالية الطلب.' },
  case_msee_impact: { en: 'Student enrollment surged from 30 to 70 in just 1.5 months, achieving more growth in 6 weeks than the previous 9 months combined.', ar: 'ارتفع عدد الطلاب المسجلين من 30 إلى 70 في غضون شهر ونصف فقط، محققاً نمواً في 6 أسابيع أكثر مما حققه في الـ 9 أشهر السابقة مجتمعة.' },
  stat_students_enrolled: { en: 'Students Enrolled', ar: 'طالب مسجل' },
  stat_growth_speed: { en: 'Growth Speed', ar: 'سرعة النمو' },

  case_itzel_title: { en: 'Itzel', ar: 'اتزل' },
  case_itzel_cat: { en: 'Brand Elevation', ar: 'رفع مستوى العلامة' },
  case_itzel_starting: { en: 'Itzel needed to elevate its brand positioning to effectively reach and resonate with a premium target audience in Muscat.', ar: 'كانت اتزل بحاجة إلى رفع مستوى تموضع علامتها التجارية للوصول الفعال والتأثير في جمهور مستهدف متميز في مسقط.' },
  case_itzel_solution: { en: 'We developed and deployed high-tier targeted ads that focused on the lifestyle values and aesthetics of their ideal customer profile.', ar: 'قمنا بتطوير ونشر إعلانات مستهدفة رفيعة المستوى ركزت على قيم نمط الحياة والجماليات الخاصة بملف عميلهم المثالي.' },
  case_itzel_impact: { en: 'The campaigns successfully elevated the brand perception, resulting in a significant uplift in engagement from the high-value target demographic.', ar: 'نجحت الحملات في رفع مستوى إدراك العلامة التجارية، مما أدى إلى زيادة كبيرة في التفاعل من الفئة السكانية المستهدفة ذات القيمة العالية.' },
  stat_brand_lift: { en: 'Brand Lift', ar: 'تحسن البراند' },
  stat_target_reach: { en: 'Target Reach', ar: 'وصول الجمهور' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
