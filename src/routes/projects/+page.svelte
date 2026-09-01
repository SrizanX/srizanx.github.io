<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { projects, projectCategories, type ProjectCategory } from '$lib/data/projects';
	import ProjectCard from '$lib/components/sections/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { name } from '$lib/data/profile';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import FilterPill from '$lib/components/ui/FilterPill.svelte';

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
	title="Projects — {name}"
	description="A complete list of mobile apps and projects built by {name}."
/>

<Section>
	<a
		href="{resolve('/')}#projects"
		class="text-sm text-text-muted transition-colors hover:text-white">← Back home</a
	>
	<SectionHeading as="h1" title="All Projects" class="mt-4" />

	<div
		use:reveal={{ delay: 150 }}
		class="mt-8 flex flex-wrap gap-2"
		role="group"
		aria-label="Filter projects by category"
	>
		{#each filters as { value, label } (value)}
			<FilterPill active={active === value} onclick={() => (active = value)}>{label}</FilterPill>
		{/each}
	</div>

	<p use:reveal={{ delay: 200 }} class="mt-4 text-text-muted">
		{visible.length}
		{visible.length === 1 ? 'project' : 'projects'}.
	</p>

	<!-- Re-key on the active filter so the staggered reveal replays for each new set. -->
	{#key active}
		<div use:staggerReveal={{ stagger: 80, y: 40 }} class="mt-8 grid gap-6 lg:grid-cols-2">
			{#each visible as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	{/key}
</Section>
