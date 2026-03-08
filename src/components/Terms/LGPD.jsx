import React, { useEffect } from 'react';
import './Terms.css'; // Reutilizando os mesmos estilos sobrios
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LGPD = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Header scrolled={true} />
            <div className="terms-container">
                <h1>CONFORMIDADE COM A LGPD – LEMIFY</h1>
                <p>Este documento detalha como o Lemify cumpre a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e quais são os direitos dos titulares de dados que utilizam nossa plataforma.</p>

                <h2>1. PAPEL DO LEMIFY</h2>
                <p>No contexto da LGPD, o Lemify atua como:</p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '20px', listStyle: 'none' }}>
                    <li><strong>Controlador</strong>: Em relação aos dados cadastrais dos nossos clientes (usuários que contratam o software).</li>
                    <li><strong>Operador</strong>: Em relação aos dados dos contatos (leads/clientes finais) que nossos usuários inserem ou sincronizam na plataforma.</li>
                </ul>

                <h2>2. BASE LEGAL PARA O TRATAMENTO</h2>
                <p>Tratamos dados pessoais apenas sob bases legais válidas, tais como:</p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '20px', listStyle: 'disc' }}>
                    <li>Execução de contrato (fornecimento da plataforma).</li>
                    <li>Cumprimento de obrigação legal.</li>
                    <li>Legítimo interesse do controlador.</li>
                    <li>Consentimento (quando aplicável).</li>
                </ul>

                <h2>3. DIREITOS DOS TITULARES</h2>
                <p>O Lemify garante aos titulares de dados os seguintes direitos:</p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '20px', listStyle: 'disc' }}>
                    <li>Confirmação da existência de tratamento.</li>
                    <li>Acesso aos dados coletados.</li>
                    <li>Correção de dados incompletos ou inexatos.</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                    <li>Informação sobre o compartilhamento de dados com entidades públicas ou privadas.</li>
                </ul>

                <h2>4. RESPONSABILIDADE DO USUÁRIO (CONTROLADOR)</h2>
                <p>O usuário do Lemify, ao utilizar a ferramenta para gerenciar dados de terceiros, assume a posição de Controlador desses dados perante a LGPD. É responsabilidade do usuário garantir que possui a base legal adequada para contatar e processar os dados de seus respectivos leads e clientes.</p>

                <h2>5. MEDIDAS DE PROTEÇÃO E SEGURANÇA</h2>
                <p>Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação.</p>

                <h2>6. DESCARTE DE DADOS</h2>
                <p>Os dados pessoais serão excluídos de nossos servidores quando deixarem de ser necessários para as finalidades para as quais foram coletados, ou quando houver solicitação do titular (observadas as obrigações legais de manutenção de registros).</p>

                <h2>7. ENCARREGADO DE DADOS (DPO)</h2>
                <p>Para exercer seus direitos ou tirar dúvidas sobre como seus dados são tratados, você pode entrar em contato com nosso Encarregado de Proteção de Dados através do canal de suporte da plataforma.</p>

                <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.7, color: '#666666' }}>Data da última atualização: 08 de março de 2026.</p>
            </div>
            <Footer />
        </div>
    );
};

export default LGPD;
