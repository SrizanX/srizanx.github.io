<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import ProjectGallery from './ProjectGallery.svelte';

	let { project }: { project: Project } = $props();
</script>

<div
	class="group overflow-hidden rounded-lg border border-white/10 bg-surface-light transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/40 hover:shadow-xl hover:shadow-primary-light/5"
>
	{#if project.screenshots.length > 0}
		<ProjectGallery screenshots={project.screenshots} title={project.title} />
	{/if}
	<div class="p-6">
		<h3 class="text-lg font-semibold transition-colors group-hover:text-primary-light">
			{project.title}
		</h3>
		<p class="mt-3 text-sm leading-relaxed text-text-muted">{project.desc}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<span class="rounded-full bg-primary-light/10 px-3 py-1 text-xs text-primary-light">{tag}</span
				>
			{/each}
		</div>
		{#if project.github || project.live}
			<div
				class="mt-4 flex gap-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
			>
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-text-muted transition-colors hover:text-white">GitHub →</a
					>
				{/if}
				{#if project.live}
					<a
						href={project.live}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-text-muted transition-colors hover:text-white">Play Store →</a
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
