import './App.css'
import '@xyflow/react/dist/style.css'
import React, { useEffect, useState } from 'react'

import Header from './components/Header/Header.jsx'
import HeroFlow from './components/Hero/HeroFlow.jsx'
import Features from './components/Features/Features.jsx'
import Showcase from './components/Showcase/Showcase.jsx'
import Integrations from './components/Integrations/Integrations.jsx'
import Footer from './components/Footer/Footer.jsx'
import Terms from './components/Terms/Terms.jsx'
import Privacy from './components/Terms/Privacy.jsx'
import LGPD from './components/Terms/LGPD.jsx'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const THRESH_ON = 50;
    const THRESH_OFF = 10;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setScrolled(prev => (y > THRESH_ON ? true : y < THRESH_OFF ? false : prev));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    } catch { }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => {
      try {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'auto';
        }
      } catch { }
    };
  }, []);

  if (path === '/termos') {
    return <Terms />;
  }

  if (path === '/privacidade') {
    return <Privacy />;
  }

  if (path === '/lgpd') {
    return <LGPD />;
  }

  return (
    <div className="lp">
      <Header scrolled={scrolled} />
      <HeroFlow />
      <Features />
      <Showcase />
      <Integrations />
      <Footer />
    </div>
  )
}

export default App
