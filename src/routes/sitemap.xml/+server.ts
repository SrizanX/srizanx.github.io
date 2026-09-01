import { SITE_URL } from '$lib/data/profile';

export const prerender = true;

export async function GET() {
	// Discover blog posts the same way the blog index does, so the sitemap never goes stale.
	const modules = import.meta.glob('/src/content/posts/*.md', { eager: true });

	const posts = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		const metadata = (module as { metadata?: Record<string, unknown> }).metadata;
		return { slug, lastmod: (metadata?.date as string) ?? '' };
	});

	const staticEntries = ['', '/projects', '/blog'].map((path) => ({ path, lastmod: '' }));
	const postEntries = posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.lastmod }));

	const urls = [...staticEntries, ...postEntries]
		.map(({ path, lastmod }) => {
			const loc = `\t\t<loc>${SITE_URL}${path}</loc>`;
			const mod = lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : '';
			return `\t<url>\n${loc}${mod}\n\t</url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
