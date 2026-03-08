import React, { useEffect } from 'react';
import './Terms.css'; // Reutilizando os mesmos estilos sobrios
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Header scrolled={true} />
            <div className="terms-container">
                <h1>POLÍTICA DE PRIVACIDADE – LEMIFY</h1>
                <p>A privacidade dos nossos usuários é de extrema importância para o Lemify. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.</p>

                <h2>1. COLETA DE INFORMAÇÕES</h2>
                <p>Coletamos informações que você nos fornece diretamente ao criar uma conta, tais como:</p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '20px', listStyle: 'disc' }}>
                    <li>Nome completo e e-mail.</li>
                    <li>Informações de faturamento (processadas por gateways de pagamento seguros).</li>
                    <li>Dados de contatos e mensagens que você escolhe gerenciar através da nossa ferramenta de CRM.</li>
                </ul>

                <h2>2. USO DAS INFORMAÇÕES</h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '20px', listStyle: 'disc' }}>
                    <li>Fornecer, operar e manter a Plataforma.</li>
                    <li>Melhorar a experiência do usuário e personalizar as funcionalidades.</li>
                    <li>Processar transações e enviar comunicações relacionadas ao serviço.</li>
                    <li>Cumprir obrigações legais e preventivas contra fraudes.</li>
                </ul>

                <h2>3. COMPARTILHAMENTO DE DADOS</h2>
                <p>O Lemify não vende, comercializa ou aluga informações de identificação pessoal de usuários para terceiros. Podemos compartilhar informações com parceiros de confiança (como serviços de hospedagem e gateways de pagamento) apenas na medida necessária para a prestação do serviço.</p>

                <h2>4. SEGURANÇA DOS DADOS</h2>
                <p>Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Utilizamos criptografia e protocolos de segurança modernos para proteger seus dados contra acesso não autorizado.</p>

                <h2>5. COOKIES</h2>
                <p>A plataforma utiliza cookies para melhorar a navegação e entender como o site é utilizado. Você pode optar por desativar os cookies nas configurações do seu navegador, embora isso possa afetar o funcionamento de algumas partes da plataforma.</p>

                <h2>6. ACESSO AOS DADOS DO WHATSAPP</h2>
                <p>Ao conectar seu WhatsApp ao Lemify, a plataforma acessa suas conversas e contatos para possibilitar a gestão via CRM. Estes dados permanecem sob sua propriedade e são utilizados exclusivamente dentro do escopo das funcionalidades contratadas.</p>

                <h2>7. ALTERAÇÕES NESTA POLÍTICA</h2>
                <p>O Lemify pode atualizar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre mudanças significativas através do e-mail cadastrado ou de avisos na plataforma.</p>

                <h2>8. CONTATO</h2>
                <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através dos canais oficiais de suporte.</p>

                <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.7, color: '#666666' }}>Data da última atualização: 08 de março de 2026.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
