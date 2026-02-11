
import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  detail: string;
  color: string;
}

interface ServiceCardProps extends ServiceDetail {
  onOpen: (service: ServiceDetail) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, detail, color, onOpen }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen({ icon, title, description, detail, color })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'transform 0.1s ease-out',
      }}
      className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl group relative overflow-hidden cursor-pointer transform-gpu"
    >
      <div className={`absolute top-0 left-0 w-1.5 h-full ${color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      
      <div className={`w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-950 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 shadow-sm`}>
        <i className={`fas ${icon} text-2xl text-blue-900 group-hover:text-white`}></i>
      </div>
      
      <h3 className="text-xl font-black mb-4 group-hover:text-blue-900 transition-colors">{title}</h3>
      
      <p className="text-gray-500 leading-relaxed text-sm font-light mb-8">
        {description}
      </p>
      
      <div className="flex items-center gap-3 text-blue-600 font-black uppercase tracking-widest text-[10px]">
        <span>{t('learn_more')}</span>
        <i className="fas fa-arrow-right rtl:rotate-180 group-hover:translate-x-1 transition-transform"></i>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      icon: "fa-wand-sparkles",
      title: t('service_meta_title'),
      description: t('service_meta_desc'),
      detail: t('service_meta_detail'),
      color: "bg-blue-600"
    },
    {
      icon: "fa-chart-line",
      title: t('service_media_title'),
      description: t('service_media_desc'),
      detail: t('service_media_detail'),
      color: "bg-purple-600"
    },
    {
      icon: "fa-fire-flame-curved",
      title: t('service_growth_title'),
      description: t('service_growth_desc'),
      detail: t('service_growth_detail'),
      color: "bg-cyan-500"
    }
  ];

  return (
    <div className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-800 rounded-full text-[9px] font-black uppercase tracking-widest mb-4">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{t('services_title')}</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
            {t('services_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className={`reveal`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <ServiceCard 
                {...service}
                onOpen={setActiveService}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {activeService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0f172a]/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActiveService(null)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${activeService.color} p-6 flex items-center gap-4 text-white`}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <i className={`fas ${activeService.icon} text-xl`}></i>
              </div>
              <h4 className="text-lg font-black uppercase tracking-widest">{activeService.title}</h4>
              <button onClick={() => setActiveService(null)} className="ml-auto rtl:ml-0 rtl:mr-auto p-2 hover:bg-white/10 rounded-full transition-colors">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-black mb-4 text-blue-900">{activeService.title}</h3>
              <p className="text-gray-800 text-base leading-relaxed font-medium mb-6">
                {activeService.description}
              </p>
              <div className="h-px w-full bg-gray-100 mb-6"></div>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                {activeService.detail}
              </p>

              <div className="mt-8">
                <button 
                  onClick={() => setActiveService(null)}
                  className="w-full bg-gray-50 text-gray-800 py-4 rounded-xl font-black hover:bg-twilight hover:text-white transition-all active:scale-95 text-sm"
                >
                  {t('close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
