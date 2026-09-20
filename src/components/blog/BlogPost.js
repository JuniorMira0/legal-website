import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { FaWhatsapp } from 'react-icons/fa';
import './Blog.css';
import usePosts, { formatDate } from './usePosts';

const whatsappLink =
  'https://wa.me/554188050966?text=Olá,%20li%20um%20artigo%20no%20seu%20blog%20e%20gostaria%20de%20falar%20com%20o%20advogado%20Guilherme%20Quintiliano.';

function BlogPost() {
  const { slug } = useParams();
  const { posts, loading } = usePosts();
  const post = posts.find((p) => p.slug === slug);

  if (loading) {
    return (
      <div className="container article-state">
        <p>Carregando…</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container article-state">
        <Helmet>
          <title>Artigo não encontrado | Guilherme Quintiliano</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Artigo não encontrado</h1>
        <p>Este artigo não existe ou foi removido.</p>
        <Link to="/blog" className="btn btn-dark">
          Ver todos os artigos
        </Link>
      </div>
    );
  }

  return (
    <article className="article">
      <Helmet>
        <title>{post.title} | Guilherme Quintiliano</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        {post.image && <meta property="og:image" content={post.image} />}
      </Helmet>

      <header className="article-header">
        <div className="container article-narrow">
          <Link to="/blog" className="article-back">
            ← Voltar ao blog
          </Link>
          <div className="post-meta">
            {post.category && (
              <span className="post-category">{post.category}</span>
            )}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>· {post.readingMinutes} min de leitura</span>
          </div>
          <h1>{post.title}</h1>
          {post.summary && <p className="article-summary">{post.summary}</p>}
        </div>
      </header>

      {post.image && (
        <div className="container article-cover">
          <img src={post.image} alt="" />
        </div>
      )}

      <div className="container article-narrow">
        <div className="article-content">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>

        <aside className="article-cta">
          <h2>Ficou com alguma dúvida?</h2>
          <p>
            Cada caso tem suas particularidades. Fale diretamente com o
            advogado.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <FaWhatsapp /> Falar pelo WhatsApp
          </a>
        </aside>
      </div>
    </article>
  );
}

export default BlogPost;
