import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

function Header({ scrolled }) {
  const [activeSection, setActiveSection] = useState('');
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef({});

  useEffect(() => {
    const sections = ['features', 'showcase', 'integrations'];

    const handleScroll = () => {
      // Se fo um scroll disparado por clique, ignoramos o scroll-spy temporariamente
      if (isManualScroll.current) return;

      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      // Verificação para o final da página (garante ativação do último item)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection('integrations');
        return;
      }

      const scrollPosition = window.scrollY + 200; // Threshold aumentado para detecção mais antecipada

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      updateSlider(activeSection || 'inicio');
    }
  }, [activeSection, isHovering]);

  const updateSlider = (id) => {
    const link = linksRef.current[id];
    if (link && navRef.current) {
      const { offsetLeft, offsetWidth } = link;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1
      });
    } else {
      setSliderStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  const handleMouseEnterNav = () => {
    setIsHovering(true);
  };

  const handleMouseLeaveNav = () => {
    setIsHovering(false);
  };

  const handleMouseEnterItem = (id) => {
    updateSlider(id);
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();

    // Bloqueia o scroll-spy
    isManualScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Desbloqueia o scroll-spy após o tempo da animação (aprox 800ms)
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" className="header-brand">
          <img src={logo} alt="Lemify" className="header-logo" />
        </a>

        <nav
          className="header-nav"
          ref={navRef}
          onMouseEnter={handleMouseEnterNav}
          onMouseLeave={handleMouseLeaveNav}
        >
          <div
            className={`nav-slider ${isHovering ? 'is-hovering' : ''}`}
            style={{
              transform: `translateX(${sliderStyle.left}px)`,
              width: `${sliderStyle.width}px`,
              opacity: sliderStyle.opacity
            }}
          />
          <a
            href="#"
            ref={el => linksRef.current['inicio'] = el}
            className={activeSection === '' ? 'active' : ''}
            onMouseEnter={() => handleMouseEnterItem('inicio')}
            onClick={(e) => {
              e.preventDefault();
              isManualScroll.current = true;
              if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
              scrollTimeout.current = setTimeout(() => {
                isManualScroll.current = false;
              }, 1000);
            }}
          >
            Início
          </a>
          <a
            href="#features"
            ref={el => linksRef.current['features'] = el}
            className={activeSection === 'features' ? 'active' : ''}
            onMouseEnter={() => handleMouseEnterItem('features')}
            onClick={(e) => handleClick(e, 'features')}
          >
            Recursos
          </a>
          <a
            href="#showcase"
            ref={el => linksRef.current['showcase'] = el}
            className={activeSection === 'showcase' ? 'active' : ''}
            onMouseEnter={() => handleMouseEnterItem('showcase')}
            onClick={(e) => handleClick(e, 'showcase')}
          >
            Agentes de IA
          </a>
          <a
            href="#integrations"
            ref={el => linksRef.current['integrations'] = el}
            className={activeSection === 'integrations' ? 'active' : ''}
            onMouseEnter={() => handleMouseEnterItem('integrations')}
            onClick={(e) => handleClick(e, 'integrations')}
          >
            Integrações
          </a>
        </nav>


        <div className="header-actions">
          <a className="btn btn-outline" href="https://app.lemify.com.br/login">
            Entrar
          </a>
          <a className="btn btn-primary" href="https://app.lemify.com.br/signup">
            Cadastre-se
          </a>
          <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#" className={activeSection === '' ? 'active' : ''} onClick={(e) => {
            e.preventDefault();
            isManualScroll.current = true;
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('');
            setIsMobileMenuOpen(false);
            scrollTimeout.current = setTimeout(() => {
              isManualScroll.current = false;
            }, 1000);
          }}>Início</a>

          <a href="#features" className={activeSection === 'features' ? 'active' : ''} onClick={(e) => handleClick(e, 'features')}>Recursos</a>
          <a href="#showcase" className={activeSection === 'showcase' ? 'active' : ''} onClick={(e) => handleClick(e, 'showcase')}>Agentes de IA</a>
          <a href="#integrations" className={activeSection === 'integrations' ? 'active' : ''} onClick={(e) => handleClick(e, 'integrations')}>Integrações</a>
        </nav>
        <div className="mobile-actions">
          <a className="btn btn-outline" href="https://app.lemify.com.br/login">Entrar</a>
          <a className="btn btn-primary" href="https://app.lemify.com.br/signup">Cadastre-se</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
