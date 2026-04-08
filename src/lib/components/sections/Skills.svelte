<script lang="ts">
	import { staggerReveal } from '$lib/actions/reveal';
	import { reveal } from '$lib/actions/reveal';

	const skillGroups = [
		{
			category: 'Languages',
			skills: ['Kotlin', 'Java', 'Dart', 'TypeScript']
		},
		{
			category: 'Android',
			skills: ['Jetpack Compose', 'XML Views', 'Room DB', 'Hilt / Dagger', 'Coroutines']
		},
		{
			category: 'Architecture',
			skills: ['MVVM', 'Clean Architecture', 'MVI', 'Multi-Module']
		},
		{
			category: 'Networking',
			skills: ['Retrofit', 'OkHttp', 'GraphQL', 'WebSockets', 'REST APIs']
		},
		{
			category: 'Tools & Workflow',
			skills: ['Android Studio', 'Git', 'Firebase', 'CI/CD', 'Agile / Scrum']
		},
		{
			category: 'Cross-Platform',
			skills: ['Flutter', 'Unit Testing']
		}
	];
</script>

<section class="bg-surface-light py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Skills & Tech Stack</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div use:staggerReveal={{ delay: 150 }} class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each skillGroups as group (group.category)}
				<div>
					<h3 class="mb-3 text-sm font-semibold tracking-wider text-primary-light uppercase">
						{group.category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each group.skills as skill (skill)}
							<span
								class="rounded-full border border-white/10 bg-surface px-3 py-1.5 text-sm text-text-muted transition-all duration-300 hover:border-primary-light/40 hover:text-primary-light hover:shadow-md hover:shadow-primary-light/10"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
