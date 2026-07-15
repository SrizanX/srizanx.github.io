<script lang="ts">
	import { projectModelLabels, type Project } from '$lib/data/projects';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import GooglePlayIcon from '$lib/components/icons/GooglePlayIcon.svelte';
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
			<div class="mt-5 flex flex-wrap items-center gap-4">
				{#if project.live}
					<ExternalLink
						href={project.live}
						class="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 transition-all ring-inset hover:bg-neutral-900 hover:ring-white/60"
					>
						<GooglePlayIcon class="h-4 w-4" />
						Get it on Google Play
					</ExternalLink>
				{/if}
				{#if project.github}
					<ExternalLink
						href={project.github}
						class="text-sm text-text-muted transition-colors hover:text-white"
						>GitHub →</ExternalLink
					>
				{/if}
			</div>
		{/if}
	</div>
</div>
