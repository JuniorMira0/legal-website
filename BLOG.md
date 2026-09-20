# Blog — como funciona e como configurar o painel

## Como funciona

- Os artigos são arquivos Markdown em `content/blog/`.
- Antes de `npm start` e `npm run build`, o script `scripts/build-posts.js` lê esses arquivos e gera
  `public/blog-data/posts.json` e `public/sitemap.xml` (ambos ignorados pelo git).
- O site carrega o `posts.json` e mostra `/blog` e `/blog/<slug>`. O slug vem do título do artigo.
- O advogado publica pelo painel em **`/admin`** (Decap CMS). Ao clicar em "Publicar", o painel faz um
  commit no repositório e o Netlify republica o site sozinho (leva ~1 minuto).

## Configuração do login do painel (uma vez, feita pelo desenvolvedor)

O painel precisa de um "gateway" para que o advogado entre com e-mail e senha, sem ter conta no GitHub.
O Netlify Identity está sendo descontinuado, então a opção recomendada é o **DecapBridge** (gratuito):

1. Suba este projeto para o GitHub (branch `main`) e confirme que o Netlify publica a partir dele.
2. Crie uma conta em <https://decapbridge.com>, cadastre o site e conecte o repositório.
3. Copie a configuração que o DecapBridge mostra em *config.yml* e cole em `public/admin/config.yml`
   (já feito para este site; o token do GitHub fica só no DecapBridge, nunca no repositório).
4. No DecapBridge, convide o e-mail do advogado. Ele recebe um convite e define a senha.
5. Faça o deploy e acesse `https://guilhermequintiliano.netlify.app/admin`.

Alternativa: Netlify Identity + Git Gateway (ainda funciona, mas está em descontinuação).

## Publicando um artigo (para o advogado)

1. Acesse `/admin` e entre com e-mail e senha.
2. Clique em **Novo Artigo**, preencha título, categoria, resumo e texto (a imagem de capa é opcional).
3. Clique em **Publicar → Publicar agora**. Em ~1 minuto o artigo aparece no site.
4. Para guardar sem publicar, marque **Rascunho**.

> Lembrete OAB (Provimento 205/2021): conteúdo informativo e educativo. Sem promessa de resultado,
> captação de clientes ou comparação com outros advogados.

## Observações

- O artigo `content/blog/direitos-do-passageiro-voo-cancelado.md` é só um **exemplo**. Apague ou substitua.
- Os artigos são renderizados no navegador (o site é React sem renderização no servidor). O Google
  indexa, mas se SEO passar a ser prioridade, vale migrar para pré-renderização (ex.: react-snap ou Next.js).
- `public/_redirects` faz o Netlify servir o app em qualquer rota (necessário para links diretos como `/blog/...`).
