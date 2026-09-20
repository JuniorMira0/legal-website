/* Lê content/blog/*.md e gera public/blog-data/posts.json e public/sitemap.xml.
   Roda automaticamente antes de `npm start` e `npm run build`. */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://guilhermequintiliano.netlify.app';
const root = path.join(__dirname, '..');
const postsDir = path.join(root, 'content', 'blog');
const outDir = path.join(root, 'public', 'blog-data');

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const files = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
  : [];

const posts = files
  .map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(postsDir, file), 'utf8'));
    const date = data.date ? new Date(data.date) : new Date(0);
    const words = content.trim().split(/\s+/).length;
    return {
      slug: slugify(data.slug || data.title || path.basename(file, '.md')),
      title: data.title || 'Sem título',
      date: date.toISOString(),
      category: data.category || '',
      summary: data.summary || '',
      image: data.image || '',
      draft: data.draft === true,
      readingMinutes: Math.max(1, Math.round(words / 200)),
      body: content.trim(),
    };
  })
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'posts.json'), JSON.stringify(posts));

const urls = ['/', '/blog', ...posts.map((p) => `/blog/${p.slug}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), sitemap);

console.log(`[blog] ${posts.length} artigo(s) publicado(s).`);
