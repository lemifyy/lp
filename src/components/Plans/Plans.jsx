import React, { useState, useEffect } from 'react';
import { HiCheck, HiXMark, HiChevronDown } from 'react-icons/hi2';
import { PiRocketLaunch, PiCalendarCheck } from 'react-icons/pi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiMercadopago } from 'react-icons/si';
import './Plans.css';

// URL da API - usar variável de ambiente ou fallback para produção
const API_URL = import.meta.env.VITE_API_URL || 'https://app.lemify.com.br';

// Mapear os recursos do plano para exibição
const PLAN_FEATURES = [
  { key: 'useWhatsapp', label: 'WhatsApp' },
  { key: 'useInstagram', label: 'Instagram' },
  { key: 'useFacebook', label: 'Facebook' },
  { key: 'useMeli', label: 'Mercado Livre' },
  { key: 'useChatbotFlows', label: 'Chatbot' },
  { key: 'useLemiAI', label: 'Lemi AI' },
  { key: 'useScheduler', label: 'Agendamentos' },
  { key: 'useInternalchat', label: 'Chat Interno' },
  { key: 'useCampaigns', label: 'Campanhas' },
  { key: 'useSummaryAgent', label: 'Resumo e Agente' },
];

function Plans() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar planos da API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${API_URL}/api/plans`);
        if (response.ok) {
          const data = await response.json();
          // Ordenar por valor
          const sortedPlans = data
            .filter(p => p.isPublic !== false) // Filtrar planos públicos
            .filter(p => p.slug !== 'trial') // Não mostrar plano trial
            .sort((a, b) => a.value - b.value);
          setPlans(sortedPlans);
        } else {
          console.error('Erro ao buscar planos:', response.status);
          setError('Não foi possível carregar os planos');
        }
      } catch (error) {
        console.error('Erro ao buscar planos:', error.message);
        setError('Não foi possível carregar os planos');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const formatPrice = (value) => {
    if (value === 0) return 'Grátis';
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const toggleDropdown = (planId) => {
    setOpenDropdown(openDropdown === planId ? null : planId);
  };

  // Pegar recursos habilitados do plano
  const getEnabledFeatures = (plan) => {
    return PLAN_FEATURES.filter(feature => plan[feature.key] === true);
  };

  // Pegar recursos desabilitados do plano
  const getDisabledFeatures = (plan) => {
    return PLAN_FEATURES.filter(feature => plan[feature.key] === false);
  };

  return (
    <section className="plans section" id="plans">
      <div className="plans-wrapper">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Comece simples, cresça com o Lemify</h2>
            <p className="text-lg">
              Planos criados para se adaptar ao tamanho do seu time.
            </p>
          </div>

          {loading && (
            <div className="plans-loading">
              <p>Carregando planos...</p>
            </div>
          )}

          {error && !loading && (
            <div className="plans-error">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && plans.length === 0 && (
            <div className="plans-empty">
              <p>Nenhum plano disponível no momento.</p>
            </div>
          )}

          <div className="plans-grid">
            {plans.map((plan, index) => {
              const isPopular = index === 1; // O do meio é o popular
              const isFree = plan.value === 0;
              const enabledFeatures = getEnabledFeatures(plan);
              const disabledFeatures = getDisabledFeatures(plan);

              return (
                <div
                  key={plan.id}
                  className={`card plan-card ${isPopular ? 'plan-card--popular' : ''} ${isFree ? 'plan-card--free' : ''}`}
                >
                  {isPopular && (
                    <div className="plan-badge">Mais popular</div>
                  )}

                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    {plan.description && (
                      <p className="plan-description">{plan.description}</p>
                    )}
                    <div className="plan-price">
                      {isFree ? (
                        <span className="plan-value plan-value--free">Grátis</span>
                      ) : (
                        <>
                          <span className="plan-currency">R$</span>
                          <span className="plan-value">{formatPrice(plan.value)}</span>
                          <span className="plan-period">/mês</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="plan-features">
                    {/* Canais com ícones */}
                    <li className="plan-feature">
                      <HiCheck className="plan-feature-icon plan-feature-icon--check" />
                      <span className="plan-feature-channels">
                        {plan.connections} {plan.connections === 1 ? 'Canal' : 'Canais'}
                        <span className="plan-channel-icons">
                          {plan.useWhatsapp && <FaWhatsapp title="WhatsApp" className="channel-icon channel-icon--whatsapp" />}
                          {plan.useInstagram && <FaInstagram title="Instagram" className="channel-icon channel-icon--instagram" />}
                          {plan.useFacebook && <FaFacebook title="Facebook" className="channel-icon channel-icon--facebook" />}
                          {plan.useMeli && <SiMercadopago title="Mercado Livre" className="channel-icon channel-icon--meli" />}
                        </span>
                      </span>
                    </li>

                    {/* Usuários */}
                    <li className="plan-feature">
                      <HiCheck className="plan-feature-icon plan-feature-icon--check" />
                      <span>{plan.users} {plan.users === 1 ? 'Atendente' : 'Atendentes'}</span>
                    </li>

                    {/* Filas */}
                    <li className="plan-feature">
                      <HiCheck className="plan-feature-icon plan-feature-icon--check" />
                      <span>{plan.queues} {plan.queues === 1 ? 'Fila' : 'Filas'} de atendimento</span>
                    </li>

                    {/* Recursos com check/x */}
                    <li className={`plan-feature ${!plan.useCampaigns ? 'plan-feature--disabled' : ''}`}>
                      {plan.useCampaigns ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Campanhas{plan.useCampaigns && plan.campaignsPerMonthLimit ? ` (${plan.campaignsPerMonthLimit}/mês)` : ''}</span>
                    </li>

                    <li className={`plan-feature ${!plan.useSummaryAgent ? 'plan-feature--disabled' : ''}`}>
                      {plan.useSummaryAgent ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Resumo e Agente</span>
                    </li>

                    <li className={`plan-feature ${!plan.useScheduler ? 'plan-feature--disabled' : ''}`}>
                      {plan.useScheduler ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Agendamento de Mensagens</span>
                    </li>

                    <li className={`plan-feature ${!plan.useChatbotFlows ? 'plan-feature--disabled' : ''}`}>
                      {plan.useChatbotFlows ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Fluxos de Chatbot</span>
                    </li>

                    <li className={`plan-feature ${!plan.useInternalchat ? 'plan-feature--disabled' : ''}`}>
                      {plan.useInternalchat ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Chat Interno</span>
                    </li>

                    <li className={`plan-feature ${!plan.useLemiAI ? 'plan-feature--disabled' : ''}`}>
                      {plan.useLemiAI ? <HiCheck className="plan-feature-icon plan-feature-icon--check" /> : <HiXMark className="plan-feature-icon plan-feature-icon--x" />}
                      <span>Lemi AI (Inteligência Artificial)</span>
                    </li>
                  </ul>

                  <div className="plan-actions">
                    <div
                      className="plan-dropdown"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={`btn ${isPopular ? 'btn-secondary' : 'btn-primary'} plan-btn`}
                        onClick={() => toggleDropdown(plan.id)}
                      >
                        {isFree ? 'Começar grátis' : 'Escolher plano'}
                        <HiChevronDown className={`plan-btn-icon ${openDropdown === plan.id ? 'open' : ''}`} />
                      </button>

                      {openDropdown === plan.id && (
                        <div className="plan-dropdown-menu">
                          <a
                            href={`https://app.lemify.com.br/signup?plan=${plan.slug}`}
                            className="plan-dropdown-item"
                          >
                            <PiRocketLaunch className="plan-dropdown-icon" />
                            <div className="plan-dropdown-content">
                              <span className="plan-dropdown-title">Testar Grátis</span>
                              <span className="plan-dropdown-desc">7 dias sem compromisso</span>
                            </div>
                          </a>
                          <a
                            href={`https://wa.me/5511957839501?text=Olá! Gostaria de agendar uma demonstração do Lemify - Plano ${plan.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="plan-dropdown-item"
                          >
                            <PiCalendarCheck className="plan-dropdown-icon" />
                            <div className="plan-dropdown-content">
                              <span className="plan-dropdown-title">Agendar Demostração</span>
                              <span className="plan-dropdown-desc">Fale com um especialista</span>
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="plans-footer">
            <p className="plans-footer-text">
              Precisa de um plano customizado?
              <a href="https://wa.me/5511957839501" target="_blank" rel="noopener noreferrer">
                Fale com nosso time
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
