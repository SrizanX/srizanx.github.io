<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	let activeTag = $state<string | null>(null);

	const allTags = $derived(
		[...new Set(data.posts.flatMap((p) => p.tags))].sort((a, b) => a.localeCompare(b))
	);

	const filtered = $derived(
		activeTag ? data.posts.filter((p) => p.tags.includes(activeTag!)) : data.posts
	);

	// Group posts by year-month
	const grouped = $derived.by(() => {
		const groups: { label: string; posts: typeof data.posts }[] = [];
		let currentLabel = '';
		for (const post of filtered) {
			const d = new Date(post.date);
			const label = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
			if (label !== currentLabel) {
				currentLabel = label;
				groups.push({ label, posts: [] });
			}
			groups.at(-1)!.posts.push(post);
		}
		return groups;
	});
</script>

<svelte:head>
	<title>Blog — Android Development Articles by Srizan</title>
	<meta name="description" content="Articles and thoughts on Android development." />
</svelte:head>

<section class="blog-list">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<div class="page-header">
			<p class="eyebrow">// blog.posts</p>
			<h1 class="page-title">Writing & <span>Articles</span></h1>
			<p class="page-sub">Thoughts on Android development, Kotlin, and mobile engineering.</p>
		</div>

		<div class="tag-filters">
			<button
				class="tag-btn"
				class:active={activeTag === null}
				onclick={() => (activeTag = null)}
			>
				All
			</button>
			{#each allTags as tag (tag)}
				<button
					class="tag-btn"
					class:active={activeTag === tag}
					onclick={() => (activeTag = activeTag === tag ? null : tag)}
				>
					{tag}
				</button>
			{/each}
		</div>

		<div class="posts-groups">
			{#each grouped as group (group.label)}
				<div class="month-group">
					<h2 class="month-label">{group.label}</h2>
					<div class="post-cards">
						{#each group.posts as post (post.slug)}
							<a href={resolve('/blog/[slug]', { slug: post.slug })} class="post-card">
								<div class="post-meta">
									<time class="post-date" datetime={post.date}>{post.date}</time>
								</div>
								<h3 class="post-title">{post.title}</h3>
								<p class="post-desc">{post.description}</p>
								{#if post.tags.length}
									<div class="post-tags">
										{#each post.tags as tag (tag)}
											<span class="post-tag">{tag}</span>
										{/each}
									</div>
								{/if}
								<span class="post-arrow" aria-hidden="true">Read →</span>
							</a>
						{/each}
					</div>
				</div>
			{:else}
				<p class="no-posts">No posts found. Try a different topic.</p>
			{/each}
		</div>
	</div>
</section>

<style>
	.blog-list {
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
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(168, 85, 247, 0.04);
		bottom: 10%;
		left: -60px;
	}

	.inner {
		max-width: 720px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.page-header {
		margin-bottom: 3rem;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.eyebrow::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 1px;
		background: #63d2db;
	}

	.page-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin-bottom: 0.75rem;
	}
	.page-title span {
		color: #63d2db;
	}

	.page-sub {
		font-size: 14px;
		color: #6b7589;
		line-height: 1.6;
	}

	.tag-filters {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 3rem;
	}

	.tag-btn {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 5px 12px;
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.03);
		color: #6b7589;
		cursor: pointer;
		transition: all 0.2s;
	}
	.tag-btn:hover {
		border-color: rgba(99, 210, 219, 0.3);
		color: #c8d0e0;
	}
	.tag-btn.active {
		background: rgba(99, 210, 219, 0.1);
		border-color: rgba(99, 210, 219, 0.4);
		color: #63d2db;
	}

	.posts-groups {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.month-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #4a5568;
		margin-bottom: 1rem;
	}

	.post-cards {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		overflow: hidden;
	}

	.post-card {
		display: block;
		background: #0d0f14;
		padding: 1.5rem;
		text-decoration: none;
		position: relative;
		transition: background 0.25s;
	}
	.post-card:hover {
		background: #111418;
	}
	.post-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid transparent;
		transition: border-color 0.25s;
		pointer-events: none;
	}
	.post-card:hover::after {
		border-color: rgba(99, 210, 219, 0.15);
	}

	.post-meta {
		margin-bottom: 0.4rem;
	}

	.post-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		letter-spacing: 0.1em;
		color: #63d2db;
		text-transform: uppercase;
	}

	.post-title {
		font-size: 16px;
		font-weight: 700;
		color: #c8d0e0;
		margin-bottom: 0.5rem;
		line-height: 1.4;
		transition: color 0.2s;
	}
	.post-card:hover .post-title {
		color: #f0f2f7;
	}

	.post-desc {
		font-size: 13px;
		line-height: 1.7;
		color: #6b7589;
		margin-bottom: 0.75rem;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-bottom: 0.75rem;
	}

	.post-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 3px 8px;
		border-radius: 4px;
		background: rgba(99, 210, 219, 0.06);
		border: 1px solid rgba(99, 210, 219, 0.2);
		color: #63d2db;
	}

	.post-arrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #4a5568;
		letter-spacing: 0.05em;
		transition: color 0.2s;
	}
	.post-card:hover .post-arrow {
		color: #63d2db;
	}

	.no-posts {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: #4a5568;
		letter-spacing: 0.1em;
	}
</style>
