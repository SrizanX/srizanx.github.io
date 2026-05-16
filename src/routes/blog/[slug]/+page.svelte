<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — Srizan</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="blog-post">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>

	<div class="inner">
		<a href={resolve('/blog')} class="back-link">← Back to Blog</a>

		<header class="post-header">
			<time class="post-date" datetime={data.meta.date}>{data.meta.date}</time>
			<h1 class="post-title">{data.meta.title}</h1>
			<p class="post-desc">{data.meta.description}</p>
			{#if data.meta.tags}
				<div class="post-tags">
					{#each data.meta.tags as tag (tag)}
						<span class="post-tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</header>

		<div class="prose">
			<data.content />
		</div>
	</div>
</article>

<style>
	.blog-post {
		background: #0d0f14;
		min-height: 100vh;
		padding: 8rem 2rem 6rem;
		position: relative;
		overflow: hidden;
		font-family: 'Syne', sans-serif;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(99, 210, 219, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(99, 210, 219, 0.04) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}
	.orb1 {
		width: 400px;
		height: 400px;
		background: rgba(99, 210, 219, 0.05);
		top: -80px;
		right: -80px;
	}

	.inner {
		max-width: 720px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.back-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.08em;
		color: #6b7589;
		text-decoration: none;
		display: inline-block;
		margin-bottom: 2.5rem;
		transition: color 0.2s;
	}
	.back-link:hover {
		color: #63d2db;
	}

	.post-header {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.post-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: #63d2db;
		display: block;
		margin-bottom: 0.75rem;
	}

	.post-title {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.15;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
	}

	.post-desc {
		font-size: 15px;
		line-height: 1.75;
		color: #6b7589;
		margin-bottom: 1.25rem;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.post-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 3px 9px;
		border-radius: 4px;
		background: rgba(99, 210, 219, 0.06);
		border: 1px solid rgba(99, 210, 219, 0.2);
		color: #63d2db;
	}

	/* Prose content styles */
	.prose {
		color: #9ba3b8;
		font-size: 15px;
		line-height: 1.85;
	}

	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4) {
		font-family: 'Syne', sans-serif;
		color: #f0f2f7;
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-top: 2.5rem;
		margin-bottom: 0.75rem;
		line-height: 1.2;
	}
	.prose :global(h2) {
		font-size: 1.5rem;
	}
	.prose :global(h3) {
		font-size: 1.2rem;
	}

	.prose :global(p) {
		margin-bottom: 1.25rem;
	}

	.prose :global(a) {
		color: #63d2db;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.2s;
	}
	.prose :global(a:hover) {
		color: #f0f2f7;
	}

	.prose :global(strong) {
		color: #c8d0e0;
		font-weight: 600;
	}

	.prose :global(em) {
		color: #9ba3b8;
	}

	.prose :global(code) {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.875em;
		color: #63d2db;
		background: rgba(99, 210, 219, 0.08);
		border: 1px solid rgba(99, 210, 219, 0.15);
		border-radius: 4px;
		padding: 2px 6px;
	}

	.prose :global(pre) {
		background: #111418;
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 10px;
		padding: 1.25rem 1.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	.prose :global(pre code) {
		background: none;
		border: none;
		padding: 0;
		font-size: 13px;
		color: #c8d0e0;
	}

	.prose :global(blockquote) {
		border-left: 2px solid rgba(99, 210, 219, 0.4);
		padding-left: 1.25rem;
		margin: 1.5rem 0;
		color: #6b7589;
		font-style: italic;
	}

	.prose :global(ul),
	.prose :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}
	.prose :global(li) {
		margin-bottom: 0.4rem;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		margin: 2.5rem 0;
	}

	.prose :global(img) {
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		max-width: 100%;
	}

	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		font-size: 13px;
		margin-bottom: 1.5rem;
	}
	.prose :global(th) {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #63d2db;
		border-bottom: 1px solid rgba(99, 210, 219, 0.2);
		padding: 0.5rem 0.75rem;
		text-align: left;
	}
	.prose :global(td) {
		color: #9ba3b8;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		padding: 0.5rem 0.75rem;
	}
</style>
