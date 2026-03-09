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
        <section className="integrations">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Ecossistema</span>
                    <h2 className="heading-md">Integre com as ferramentas que você já usa</h2>
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
        </section>
    );
}

export default Integrations;
