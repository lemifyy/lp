import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Lemify" style={{ height: '32px' }} />
            </div>
            <p className="footer-tagline">
              Plataforma de atendimento unificado. Conecte todos os seus canais,
              automatize processos e encante seus clientes.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/pepchat" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com/company/pepchat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://wa.me/5511957839501" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div className="footer-links">
            <div className="footer-links-title">Produto</div>
            <a href="#features">Recursos</a>
            <a href="#showcase">Showcase</a>
            <a href="https://app.pepchat.com.br/signup">Criar conta</a>
          </div>

          {/* Empresa */}
          <div className="footer-links">
            <div className="footer-links-title">Empresa</div>
            <a href="#">Sobre nós</a>
            <a href="#">Blog</a>
            <a href="mailto:contato@lemify.com.br">Contato</a>
          </div>

          {/* Suporte */}
          <div className="footer-links">
            <div className="footer-links-title">Suporte</div>
            <a href="#">Central de ajuda</a>
            <a href="https://wa.me/5511957839501" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
            <a href="mailto:suporte@lemify.com.br">Email de suporte</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025-{new Date().getFullYear()} Lemify Digital LTDA. Todos os direitos reservados.
          </div>
          <div className="footer-legal">
            <a href="/termos">Termos de uso</a>
            <a href="/privacidade">Política de privacidade</a>
            <a href="/lgpd">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
