# Legal Tech - Landing Page em React

Este repositório contém o código-fonte de uma landing page moderna para uma plataforma (fictícia) de serviços jurídicos, desenvolvida com React. O projeto visa replicar a estrutura visual e os componentes de um design fornecido, focando em uma interface limpa e profissional.

## 🚀 Visão Geral

Landing page responsiva apresentando os serviços e benefícios de uma plataforma de consultoria jurídica. Inclui diversas seções comuns em sites institucionais e de produtos.

## ✨ Screenshot

*(Aqui vai um print da aplicação)*

![Screenshot do Projeto](URL_DA_IMAGEM_AQUI)
*Substitua `URL_DA_IMAGEM_AQUI` pelo link de uma imagem do seu projeto.*


## 📋 Funcionalidades Implementadas (Estrutura)

* **Header:** Cabeçalho fixo com logo e espaço para navegação/ícones.
* **Hero Section:** Seção principal de destaque com título, descrição e CTA.
* **Feature Sections:** Múltiplas seções detalhando funcionalidades ou benefícios, com layout alternando imagem/texto.
* **App Showcase Section:** Seção dedicada a apresentar um aplicativo móvel.
* **Testimonials Section:** Área para exibir depoimentos de clientes (estrutura de cards).
* **Trusted By Section:** Exibição de logos de empresas parceiras/clientes.
* **Call to Action (CTA) Section:** Seção final incentivando o contato ou outra ação.
* **Footer:** Rodapé com links de navegação (companhia, recursos, legal) e informações de copyright.

## 💻 Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **CSS:** Para estilização dos componentes (pode ser CSS puro, CSS Modules, Styled Components, etc. - ajuste conforme o seu caso).
* **JavaScript (ES6+):** Linguagem base para a lógica do React.
* **HTML5:** Estrutura semântica da página.

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (que inclui o npm)
* [Yarn](https://yarnpkg.com/) (Opcional, como alternativa ao npm)

## 🛠️ Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone [https://git@github.com:JuniorMira0/legal-website.git](https://git@github.com:JuniorMira0/legal-website.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd legal-website
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

## ▶️ Como Executar

1.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    Isso iniciará a aplicação em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) (ou a porta indicada no seu terminal) para visualizá-la no navegador. A página será recarregada automaticamente se você fizer edições no código.

2.  **Gerar a build de produção:**
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Isso cria uma pasta `build` com os arquivos otimizados para produção.

## 📁 Estrutura de Pastas (Simplificada)

my-legal-website/
├── public/         # Arquivos estáticos e index.html base
├── src/
│   ├── components/ # Componentes React reutilizáveis (Header, Footer, FeatureSection, etc.)
│   ├── App.js      # Componente principal que monta as seções
│   ├── App.css     # Estilos globais ou do componente App
│   └── index.js    # Ponto de entrada da aplicação React
├── .gitignore      # Arquivos e pastas ignorados pelo Git
├── package.json    # Metadados do projeto e dependências
└── README.md       # Este arquivo
