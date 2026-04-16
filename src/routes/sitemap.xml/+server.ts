export const prerender = true;

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
			<!-- <url> elements go here -->
            <url>
              <loc>https://srizanx.github.io/blog</loc>
              <lastmod>2026-04-16</lastmod>
            </url>
            <url>
              <loc>https://srizanx.github.io/blog/managing-multiple-git-configs</loc>
              <lastmod>2026-04-16</lastmod>
            </url>

            <url>
              <loc>https://srizanx.github.io/blog/android-ci-cd-guide</loc>
              <lastmod>2026-04-16</lastmod>
            </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
