import React, { useEffect } from 'react';
import './Terms.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Header scrolled={true} />
            <div className="terms-container">
                <h1>TERMOS DE USO – LEMIFY</h1>
                <p>Bem-vindo ao Lemify. Ao utilizar nossa plataforma, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Por favor, leia-os com atenção.</p>

                <h2>1. ACEITAÇÃO DOS TERMOS</h2>
                <p>Ao acessar ou utilizar o Lemify (a "Plataforma"), você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.</p>

                <h2>2. DESCRIÇÃO DO SERVIÇO</h2>
                <p>O Lemify é uma ferramenta de CRM e automação de vendas projetada para otimizar a comunicação e o gerenciamento de leads. A plataforma oferece funcionalidades como integração com WhatsApp, gestão de tickets, fluxos de automação e integração com ERPs terceiros.</p>

                <h2>3. INTEGRAÇÃO COM WHATSAPP</h2>
                <p>O Lemify utiliza bibliotecas e tecnologias de terceiros para permitir a conexão com o WhatsApp Web.</p>
                <p>3.1. O usuário está ciente de que o uso de automações no WhatsApp pode violar os Termos de Serviço do próprio WhatsApp.</p>
                <p>3.2. O Lemify não se responsabiliza por eventuais banimentos, suspensões ou restrições impostas pelo WhatsApp às contas conectadas à nossa plataforma.</p>
                <p>3.3. A conexão é realizada de forma independente e o usuário assume total responsabilidade pelo conteúdo enviado e pela frequência das comunicações.</p>

                <h2>4. RESPONSABILIDADES DO USUÁRIO</h2>
                <p>4.1. Você é o único responsável por manter a confidencialidade de sua conta e senha.</p>
                <p>4.2. Você concorda em não utilizar a plataforma para o envio de spam, conteúdos ilegais, ofensivos ou que violem direitos de terceiros.</p>
                <p>4.3. O uso de dados de terceiros (leads/contatos) deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados).</p>

                <h2>5. PROPRIEDADE INTELECTUAL</h2>
                <p>Todo o conteúdo, design, logotipos e códigos da plataforma Lemify são de propriedade exclusiva de seus desenvolvedores e protegidos por leis de direitos autorais. É proibida a reprodução ou engenharia reversa do software.</p>

                <h2>6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                <p>Em nenhum caso o Lemify ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucros) decorrentes do uso ou da incapacidade de usar a plataforma, mesmo que tenhamos sido notificados da possibilidade de tais danos.</p>

                <h2>7. ALTERAÇÕES NOS TERMOS</h2>
                <p>Reservamo-nos o direito de revisar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao utilizar este site, você concorda em ficar vinculado à versão atualizada destes termos.</p>

                <h2>8. FORO</h2>
                <p>Estes termos são regidos pelas leis da República Federativa do Brasil e qualquer disputa será resolvida no foro da comarca da sede da empresa proprietária do Lemify.</p>

                <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.7 }}>Data da última atualização: 08 de março de 2026.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
