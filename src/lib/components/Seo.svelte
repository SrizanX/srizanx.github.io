<script lang="ts">
	import { page } from '$app/state';

	/** Production origin — page.url isn't reliable during static prerender, so canonical/OG URLs are built from this. */
	const SITE_URL = 'https://srizanx.github.io';

	let {
		title,
		description,
		image = '/og-image.png',
		type = 'website'
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article';
	} = $props();

	const canonical = $derived(SITE_URL + page.url.pathname);
	const imageUrl = $derived(image.startsWith('http') ? image : SITE_URL + image);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:site_name" content="Mahdi Saifullah Srizan" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
