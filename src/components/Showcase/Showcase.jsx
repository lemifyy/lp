import React from 'react';
import agendaImg from '../../assets/agenda.png';
import crmImg from '../../assets/crm.png';
import lemiImg from '../../assets/lemi.png';
import resumoImg from '../../assets/resumo.png';
import './Showcase.css';

function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Seu novo colaborador</h2>
          <p className="text-lg">
            Aumente a produtividade da sua equipe com nosso agente especializado em cada parte do seu negócio.
          </p>
        </div>

        <div className="showcase-grid">
          {/* Agentes - Lemi */}
          <div className="card showcase-card showcase-card--lemi">
            <div className="showcase-content">
              <span className="showcase-badge badge-conversational">Conversacional</span>
              <h3 className="showcase-title">Lemi</h3>
              <div className="showcase-image" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <img src={lemiImg} alt="Agente Lemi" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
              </div>
              <p className="showcase-desc">
                Dê personalidade ao seu negócio. Configure tom de voz, estilo de escrita e comportamento para um atendimento único e humanizado.
              </p>
            </div>
          </div>

          {/* Agenda - Agenda */}
          <div className="card showcase-card showcase-card--agenda">
            <div className="showcase-content">
              <span className="showcase-badge badge-scheduler">Agendador</span>
              <h3 className="showcase-title">Smart Booking</h3>
              <div className="showcase-image" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <img src={agendaImg} alt="Agendamento inteligente" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
              </div>
              <p className="showcase-desc">
                Organize sua agenda sem esforço. Nosso agente identifica horários livres e marca compromissos automaticamente durante a conversa.
              </p>
            </div>
          </div>

          {/* Resumos - Resumos */}
          <div className="card showcase-card showcase-card--resumos">
            <div className="showcase-content">
              <span className="showcase-badge badge-summary">Resumo</span>
              <h3 className="showcase-title">Insights Rápidos</h3>
              <div className="showcase-image" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <img src={resumoImg} alt="Resumos Inteligentes" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
              </div>
              <p className="showcase-desc">
                Não perca tempo lendo históricos longos. Receba um resumo inteligente com os pontos principais de cada interação finalizada.
              </p>
            </div>
          </div>

          {/* CRM - CRM */}
          <div className="card showcase-card showcase-card--crm">
            <div className="showcase-content">
              <span className="showcase-badge badge-crm">CRM</span>
              <h3 className="showcase-title">Pipeline Ativo</h3>
              <div className="showcase-image" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <img src={crmImg} alt="CRM Inteligente" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
              </div>
              <p className="showcase-desc">
                Gestão comercial autônoma. Seus leads são qualificados e movidos pelo funil de vendas sem que você precise apertar um botão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
