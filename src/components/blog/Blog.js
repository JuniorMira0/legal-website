import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Blog.css';
import usePosts from './usePosts';
import PostCard from './PostCard';

function Blog() {
  const { posts, loading, error } = usePosts();
  const [category, setCategory] = useState('Todos');

  const categories = [
    'Todos',
    ...new Set(posts.map((p) => p.category).filter(Boolean)),
  ];
  const visible =
    category === 'Todos' ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <Helmet>
        <title>Blog | Guilherme Quintiliano Advocacia</title>
        <meta
          name="description"
          content="Artigos informativos sobre Direito do Consumidor, Cível, Trabalhista e Viagens, por Guilherme Quintiliano, advogado em Curitiba."
        />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <span className="eyebrow">Blog</span>
          <h1>Informação jurídica em linguagem clara</h1>
          <p>
            Artigos sobre os seus direitos no dia a dia: consumo, contratos,
            trabalho e viagens.
          </p>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          {categories.length > 2 && (
            <div
              className="blog-filters"
              role="group"
              aria-label="Filtrar por categoria"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blog-filter ${cat === category ? 'is-active' : ''}`}
                  aria-pressed={cat === category}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {loading && <p className="blog-state">Carregando artigos…</p>}
          {error && (
            <p className="blog-state">
              Não foi possível carregar os artigos agora. Tente novamente em
              instantes.
            </p>
          )}
          {!loading && !error && visible.length === 0 && (
            <p className="blog-state">
              Nenhum artigo publicado ainda. Volte em breve!
            </p>
          )}

          <div className="post-grid">
            {visible.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
