import React from 'react';
import './Integrations.css';

// Importando logos de integração
import meli from '../../assets/integrations/meli.png';
import omie from '../../assets/integrations/omie.png';
import tiny from '../../assets/integrations/tiny.webp';
import bling from '../../assets/integrations/bling.png';
import calendar from '../../assets/integrations/calendar.png';
import nuvemshop from '../../assets/integrations/nuvemshop.png';
import shopify from '../../assets/integrations/shopify.png';

const logos = [
    { name: 'Mercado Livre', src: meli },
    { name: 'Omie', src: omie },
    { name: 'Tiny ERP', src: tiny },
    { name: 'Bling', src: bling },
    { name: 'Google Calendar', src: calendar },
    { name: 'Nuvemshop', src: nuvemshop },
    { name: 'Shopify', src: shopify },
];

function Integrations() {
    // Duplicamos a lista para criar o efeito de loop infinito sem gaps no scroll horizontal
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="integrations" id="integrations">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Ecossistema</span>
                    <h2 className="heading-lg">Integrações</h2>
                    <p className="text-lg">
                        Conecte suas plataformas favoritas para alimentar seu agente com dados reais, permitindo um atendimento cada vez mais especializado e eficiente.
                    </p>
                </div>
            </div>

            <div className="logos-wrapper">
                <div className="logos-track">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="logo-item">
                            <img src={logo.src} alt={logo.name} title={logo.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="integrations-cta">
                    <a href="https://app.lemify.com.br/signup" className="btn btn-primary btn-lg">
                        Experimente por 30 dias
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Integrations;
