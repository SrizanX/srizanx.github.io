<script lang="ts">
	import { projectModelLabels, type Project } from '$lib/data/projects';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import ProjectGallery from './ProjectGallery.svelte';

	let { project }: { project: Project } = $props();
</script>

<div
	class="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-surface-light transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/40 hover:shadow-xl hover:shadow-primary-light/5 sm:flex-row {project
		.screenshots.length > 0
		? 'sm:min-h-64'
		: ''}"
>
	{#if project.screenshots.length > 0}
		<ProjectGallery
			screenshots={project.screenshots}
			title={project.title}
			class="aspect-4/5 w-full sm:aspect-auto sm:w-2/5 sm:max-w-52 sm:shrink-0 sm:self-stretch"
		/>
	{/if}
	<div class="flex-1 p-6">
		<span
			class="inline-block rounded-full border border-white/15 px-2.5 py-0.5 text-xs font-medium tracking-wide text-text-muted uppercase"
		>
			{projectModelLabels[project.model]}
		</span>
		<h3 class="mt-3 text-lg font-semibold transition-colors group-hover:text-primary-light">
			{project.title}
		</h3>
		<p class="mt-3 text-sm leading-relaxed text-text-muted">{project.desc}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<span class="rounded-full bg-primary-light/10 px-3 py-1 text-xs text-primary-light"
					>{tag}</span
				>
			{/each}
		</div>
		{#if project.github || project.live}
			<div
				class="mt-4 flex gap-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
			>
				{#if project.github}
					<ExternalLink
						href={project.github}
						class="text-sm text-text-muted transition-colors hover:text-white"
						>GitHub →</ExternalLink
					>
				{/if}
				{#if project.live}
					<ExternalLink
						href={project.live}
						class="text-sm text-text-muted transition-colors hover:text-white"
						>Play Store →</ExternalLink
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
