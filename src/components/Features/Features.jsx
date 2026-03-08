import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineBolt,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import { RiGeminiLine } from 'react-icons/ri';
import './Features.css';

const BRAND_PRIMARY = '#1C403B';

const features = [
  {
    icon: <RiGeminiLine size={28} color={BRAND_PRIMARY} />,
    title: 'Agentes de IA',
    desc: 'Configure seu agente de IA para atender seus clientes, organizar seu funil de vendas e agendar serviços automaticamente.'
  },
  {
    icon: <HiOutlineChatBubbleLeftRight size={28} color={BRAND_PRIMARY} />,
    title: 'Atendimento unificado',
    desc: 'Centralize WhatsApp, Instagram, Facebook Messenger e mais em uma única caixa de entrada com histórico completo de cada cliente.'
  },

  {
    icon: <HiOutlineChartBar size={28} color={BRAND_PRIMARY} />,
    title: 'Métricas e insights',
    desc: 'Acompanhe tempo de resposta, satisfação do cliente e produtividade do time em dashboards em tempo real.'
  },
  {
    icon: <HiOutlineUsers size={28} color={BRAND_PRIMARY} />,
    title: 'Gestão de equipe',
    desc: 'Distribua tickets automaticamente, defina filas de atendimento e monitore o desempenho de cada colaborador.'
  },
  {
    icon: <HiOutlineBolt size={28} color={BRAND_PRIMARY} />,
    title: 'CRM integrado',
    desc: 'Organize leads em funis visuais, registre notas e tarefas, e acompanhe cada oportunidade do primeiro contato à venda.'
  },
  {
    icon: <HiOutlineShieldCheck size={28} color={BRAND_PRIMARY} />,
    title: 'Segurança e LGPD',
    desc: 'Seus dados protegidos com criptografia, backup automático e total conformidade com a Lei Geral de Proteção de Dados.'
  }
];

function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Tudo o que seu time precisa</h2>
          <p className="text-lg">
            Funcionalidades pensadas para escala, controle e performance.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="card feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <a href="https://app.lemify.com.br/signup" className="btn btn-primary btn-lg btn-emphasis-hover">
            Agendar demonstração
            <svg className="btn-emphasis-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 6 15 4 8" stroke="#d8fe6a" strokeWidth="3" strokeLinecap="round" />
              <path d="M18 18 Q 20 12 18 4" stroke="#d8fe6a" strokeWidth="3" strokeLinecap="round" />
              <path d="M26 20 Q 30 15 32 8" stroke="#d8fe6a" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
