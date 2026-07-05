<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { featuredProjects, projects } from '$lib/data/projects';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Projects</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div use:staggerReveal={{ stagger: 120, y: 40 }} class="mt-12 grid gap-6 lg:grid-cols-2">
			{#each featuredProjects as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>

		{#if projects.length > featuredProjects.length}
			<div use:reveal class="mt-12 text-center">
				<a
					href={resolve('/projects')}
					class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-primary-light/50 hover:text-primary-light"
				>
					View all projects →
				</a>
			</div>
		{/if}
	</div>
</section>
