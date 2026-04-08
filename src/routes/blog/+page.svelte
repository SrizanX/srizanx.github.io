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
	<title>Blog — Srizan</title>
	<meta name="description" content="Articles and thoughts on Android development." />
</svelte:head>

<section class="min-h-screen pt-28 pb-24">
	<div class="mx-auto max-w-4xl px-6">
		<h1 class="text-4xl font-bold">Blog</h1>
		<p class="mt-4 text-text-muted">
			Thoughts on Android development, Kotlin, and mobile engineering.
		</p>
		<div class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<!-- Topic filters -->
		<div class="mt-8 flex flex-wrap gap-2">
			<button
				class="rounded-full px-4 py-1.5 text-xs font-medium transition-all {activeTag === null
					? 'bg-primary-light text-white'
					: 'bg-surface-light text-text-muted hover:text-white'}"
				onclick={() => (activeTag = null)}
			>
				All
			</button>
			{#each allTags as tag (tag)}
				<button
					class="rounded-full px-4 py-1.5 text-xs font-medium transition-all {activeTag === tag
						? 'bg-primary-light text-white'
						: 'bg-surface-light text-text-muted hover:text-white'}"
					onclick={() => (activeTag = activeTag === tag ? null : tag)}
				>
					{tag}
				</button>
			{/each}
		</div>

		<!-- Posts grouped by date -->
		<div class="mt-12 space-y-12">
			{#each grouped as group (group.label)}
				<div>
					<h2 class="text-sm font-medium tracking-wider text-text-muted uppercase">
						{group.label}
					</h2>
					<div class="mt-4 space-y-6">
						{#each group.posts as post (post.slug)}
							<a
								href={resolve('/blog/[slug]', { slug: post.slug })}
								class="group block rounded-lg border border-white/10 bg-surface-light p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light/40 hover:shadow-lg hover:shadow-primary-light/5"
							>
								<div class="flex items-center gap-3 text-sm text-accent">
									<time datetime={post.date}>{post.date}</time>
								</div>
								<h3
									class="mt-2 text-xl font-semibold transition-colors group-hover:text-primary-light"
								>
									{post.title}
								</h3>
								<p class="mt-2 text-sm leading-relaxed text-text-muted">{post.description}</p>
								{#if post.tags.length}
									<div class="mt-4 flex flex-wrap gap-2">
										{#each post.tags as tag (tag)}
											<span
												class="rounded-full bg-primary-light/10 px-3 py-1 text-xs text-primary-light"
											>
												{tag}
											</span>
										{/each}
									</div>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			{:else}
				<p class="text-text-muted">No posts found. Try a different topic.</p>
			{/each}
		</div>
	</div>
</section>
