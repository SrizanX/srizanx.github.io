<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { featuredProjects, projects } from '$lib/data/projects';
	import ProjectCard from './ProjectCard.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
</script>

<Section id="projects">
	<SectionHeading title="Projects" />

	<div use:staggerReveal={{ stagger: 120, y: 40 }} class="mt-12 grid gap-6 lg:grid-cols-2">
		{#each featuredProjects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>

	{#if projects.length > featuredProjects.length}
		<div use:reveal class="mt-12 text-center">
			<a href={resolve('/projects')} class="btn btn-ghost">View all projects →</a>
		</div>
	{/if}
</Section>
