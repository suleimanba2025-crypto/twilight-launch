
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import CaseStudiesPage from './components/CaseStudiesPage';
import PartnerMarquee from './components/PartnerMarquee';
import { LanguageProvider } from './components/LanguageContext';

type ViewState = {
  view: 'home' | 'cases';
  caseId?: number | null;
};

const App: React.FC = () => {
  const parsePath = (): ViewState => {
    const path = window.location.pathname;
    if (path.startsWith('/casestudies/')) {
      const id = parseInt(path.replace('/casestudies/', ''), 10);
      return { view: 'cases', caseId: isNaN(id) ? null : id };
    }
    if (path.includes('casestudies')) {
      return { view: 'cases', caseId: null };
    }
    return { view: 'home', caseId: null };
  };

  const [route, setRoute] = useState<ViewState>(parsePath());

  const handleViewChange = (newView: 'home' | 'cases', id: number | null = null) => {
    try {
      let path = '/';
      if (newView === 'cases') {
        path = id ? `/casestudies/${id}` : '/casestudies';
      }
      
      if (window.location.pathname !== path) {
        window.history.pushState({ view: newView, caseId: id }, '', path);
      }
    } catch (e) {
      console.warn('Navigation state update failed', e);
    }
    setRoute({ view: newView, caseId: id });
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setRoute({ view: event.state.view, caseId: event.state.caseId });
      } else {
        setRoute(parsePath());
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      if (revealElements.length > 0) {
        revealElements.forEach(el => observer.observe(el));
      }
    }, 150);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [route.view, route.caseId]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col relative font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-white">
        <Navbar 
          setView={(v) => handleViewChange(v)} 
          currentView={route.view} 
        />
        
        {route.view === 'home' ? (
          <main>
            <section id="hero" className="scroll-mt-32">
              <Hero setView={(v) => handleViewChange(v)} />
            </section>
            
            <PartnerMarquee />
            
            <section id="about" className="scroll-mt-32 reveal">
              <About />
            </section>
            
            <section id="services" className="scroll-mt-32 reveal">
              <Services />
            </section>
            
            <section id="cases" className="scroll-mt-32 reveal">
              <CaseStudies setView={(v) => handleViewChange(v)} />
            </section>
            
            <section id="why-us" className="scroll-mt-32 reveal">
              <WhyUs />
            </section>
          </main>
        ) : (
          <main className="pt-24 min-h-screen bg-white">
            <CaseStudiesPage 
              setView={(v, id) => handleViewChange(v, id)} 
              selectedId={route.caseId}
            />
          </main>
        )}
        
        <section id="contact" className="scroll-mt-32 reveal">
          <Footer setView={(v) => handleViewChange(v)} currentView={route.view} />
        </section>
      </div>
    </LanguageProvider>
  );
};

export default App;
