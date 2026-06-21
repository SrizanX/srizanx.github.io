<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { projects, projectCategories, type ProjectCategory } from '$lib/data/projects';
	import ProjectCard from '$lib/components/sections/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';

	type Filter = 'all' | ProjectCategory;

	const filters: { value: Filter; label: string }[] = [
		{ value: 'all', label: 'All' },
		...projectCategories
	];

	let active = $state<Filter>('all');

	const visible = $derived(
		active === 'all' ? projects : projects.filter((p) => p.category === active)
	);
</script>

<Seo
	title="Projects — Mahdi Saifullah Srizan"
	description="A complete list of mobile apps and projects built by Mahdi Saifullah Srizan."
/>

<section class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<a
			href="{resolve('/')}#projects"
			class="text-sm text-text-muted transition-colors hover:text-white">← Back home</a
		>
		<h1 use:reveal class="mt-4 text-4xl font-bold">All Projects</h1>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div
			use:reveal={{ delay: 150 }}
			class="mt-8 flex flex-wrap gap-2"
			role="group"
			aria-label="Filter projects by category"
		>
			{#each filters as { value, label } (value)}
				<button
					type="button"
					aria-pressed={active === value}
					onclick={() => (active = value)}
					class="rounded-full border px-5 py-2 text-sm font-medium transition-colors {active ===
					value
						? 'border-primary-light/50 bg-primary-light/10 text-primary-light'
						: 'border-white/15 text-text-muted hover:border-white/30 hover:text-white'}"
				>
					{label}
				</button>
			{/each}
		</div>

		<p use:reveal={{ delay: 200 }} class="mt-4 text-text-muted">
			{visible.length}
			{visible.length === 1 ? 'project' : 'projects'}.
		</p>

		<!-- Re-key on the active filter so the staggered reveal replays for each new set. -->
		{#key active}
			<div
				use:staggerReveal={{ stagger: 80, y: 40 }}
				class="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{#each visible as project (project.title)}
					<ProjectCard {project} />
				{/each}
			</div>
		{/key}
	</div>
</section>
