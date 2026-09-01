<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { name } from '$lib/data/profile';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import FilterPill from '$lib/components/ui/FilterPill.svelte';

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

<Seo
	title="Blog — {name}"
	description="Articles and thoughts on Android development, Kotlin, and mobile engineering."
/>

<section class="min-h-screen pt-28 pb-24">
	<div class="mx-auto max-w-4xl px-6">
		<SectionHeading as="h1" title="Blog" />
		<p class="mt-4 text-text-muted">
			Thoughts on Android development, Kotlin, and mobile engineering.
		</p>

		<!-- Topic filters -->
		<div class="mt-8 flex flex-wrap gap-2">
			<FilterPill active={activeTag === null} onclick={() => (activeTag = null)}>All</FilterPill>
			{#each allTags as tag (tag)}
				<FilterPill
					active={activeTag === tag}
					onclick={() => (activeTag = activeTag === tag ? null : tag)}
				>
					{tag}
				</FilterPill>
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
								class="card card-hover group block p-6"
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
											<span class="tag">{tag}</span>
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
