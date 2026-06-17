<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/sections/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects — Mahdi Saifullah Srizan</title>
	<meta
		name="description"
		content="A complete list of mobile apps and projects built by Mahdi Saifullah Srizan."
	/>
</svelte:head>

<section class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<a
			href="{resolve('/')}#projects"
			class="text-sm text-text-muted transition-colors hover:text-white">← Back home</a
		>
		<h1 use:reveal class="mt-4 text-4xl font-bold">All Projects</h1>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>
		<p use:reveal={{ delay: 150 }} class="mt-4 text-text-muted">
			{projects.length} projects and counting.
		</p>

		<div
			use:staggerReveal={{ stagger: 80, y: 40 }}
			class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
		>
			{#each projects as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
