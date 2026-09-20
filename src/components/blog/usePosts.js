import { useEffect, useState } from 'react';

let cache = null;

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

// Carrega os artigos gerados por scripts/build-posts.js
export default function usePosts() {
  const [state, setState] = useState({
    posts: cache || [],
    loading: !cache,
    error: false,
  });

  useEffect(() => {
    if (cache) return undefined;
    let active = true;
    fetch('/blog-data/posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('falha ao carregar');
        return res.json();
      })
      .then((posts) => {
        cache = posts;
        if (active) setState({ posts, loading: false, error: false });
      })
      .catch(() => {
        if (active) setState({ posts: [], loading: false, error: true });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}
