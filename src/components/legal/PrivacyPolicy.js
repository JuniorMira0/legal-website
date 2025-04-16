import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div id="privacy-policy-content" className="privacy-policy-page">
      <h1>Política de Privacidade</h1>
      <p>
        Esta landing page tem como objetivo fornecer informações sobre os
        serviços do advogado Guilherme Quintiliano Rehme. Informamos que esta
        página, em sua forma atual, não coleta dados pessoais identificáveis dos
        visitantes, como nomes, e-mails ou números de telefone, a menos que você
        entre em contato diretamente através dos canais de comunicação
        fornecidos (telefone, WhatsApp, e-mail).
      </p>
      <p>
        No entanto, como é padrão em servidores web, informações não
        pessoalmente identificáveis, como logs de acesso (endereço IP, tipo de
        navegador, horários de acesso e páginas visitadas), podem ser
        armazenadas para fins de análise técnica e segurança do site.
      </p>
      <p>
        Ao utilizar esta landing page, você concorda com os termos desta
        política. Quaisquer dúvidas sobre privacidade podem ser direcionadas
        através dos canais de contato fornecidos no site.
      </p>
      {/* Você pode adicionar mais detalhes à sua política aqui */}
    </div>
  );
}

export default PrivacyPolicy;
