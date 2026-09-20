import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import usePosts from './usePosts';
import PostCard from './PostCard';

function LatestPosts() {
  const { posts } = usePosts();
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Blog</span>
          <h2 className="section-title">Últimos artigos</h2>
          <p className="section-lead">
            Informação jurídica em linguagem clara sobre os seus direitos.
          </p>
        </div>
        <div className="post-grid">
          {posts.slice(0, 3).map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
        <div className="latest-more">
          <Link to="/blog" className="btn btn-dark">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
