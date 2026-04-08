<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — Srizan</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="min-h-screen pt-28 pb-24">
	<div class="mx-auto max-w-3xl px-6">
		<a href={resolve('/blog')} class="text-sm text-text-muted transition-colors hover:text-white"
			>← Back to Blog</a
		>

		<header class="mt-8">
			<p class="text-sm text-accent">{data.meta.date}</p>
			<h1 class="mt-2 text-4xl font-bold">{data.meta.title}</h1>
			<p class="mt-4 text-lg text-text-muted">{data.meta.description}</p>
			{#if data.meta.tags}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each data.meta.tags as tag (tag)}
						<span class="rounded-full bg-primary-light/10 px-3 py-1 text-xs text-primary-light"
							>{tag}</span
						>
					{/each}
				</div>
			{/if}
		</header>

		<div
			class="prose mt-12 max-w-none prose-invert prose-headings:text-text prose-p:text-text-muted prose-a:text-primary-light prose-strong:text-text prose-code:text-accent"
		>
			<data.content />
		</div>
	</div>
</article>
