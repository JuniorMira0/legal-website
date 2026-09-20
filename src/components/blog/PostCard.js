import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from './usePosts';

function PostCard({ post, index = 0 }) {
  return (
    <article
      className="post-card reveal"
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <Link to={`/blog/${post.slug}`} className="post-card-link">
        <div className="post-card-media">
          {post.image ? (
            <img src={post.image} alt="" loading="lazy" />
          ) : (
            <span className="post-card-placeholder" aria-hidden="true">
              GQ
            </span>
          )}
        </div>
        <div className="post-card-body">
          <div className="post-meta">
            {post.category && (
              <span className="post-category">{post.category}</span>
            )}
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h3 className="post-card-title">{post.title}</h3>
          {post.summary && <p className="post-card-summary">{post.summary}</p>}
          <span className="post-card-more">Ler artigo →</span>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;
