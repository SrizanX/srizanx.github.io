<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const projects = [
		{
			title: 'Project Alpha',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
			tags: ['Kotlin', 'Jetpack Compose', 'Room']
		},
		{
			title: 'Project Beta',
			desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
			tags: ['Java', 'MVVM', 'Retrofit']
		},
		{
			title: 'Project Gamma',
			desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			tags: ['Kotlin', 'Multi-Module', 'Hilt']
		},
		{
			title: 'Project Delta',
			desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
			tags: ['Flutter', 'Dart', 'Firebase']
		},
		{
			title: 'Project Epsilon',
			desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
			tags: ['Kotlin', 'Compose', 'GraphQL']
		},
		{
			title: 'Project Zeta',
			desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.',
			tags: ['Java', 'XML Views', 'WebSockets']
		}
	];
</script>

<section id="projects" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Projects</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div
			use:staggerReveal={{ stagger: 120, y: 40 }}
			class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
		>
			{#each projects as { title, desc, tags } (title)}
				<div
					class="group rounded-lg border border-white/10 bg-surface-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/40 hover:shadow-xl hover:shadow-primary-light/5"
				>
					<h3 class="text-lg font-semibold transition-colors group-hover:text-primary-light">
						{title}
					</h3>
					<p class="mt-3 text-sm leading-relaxed text-text-muted">{desc}</p>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each tags as tag (tag)}
							<span class="rounded-full bg-primary-light/10 px-3 py-1 text-xs text-primary-light"
								>{tag}</span
							>
						{/each}
					</div>
					<div
						class="mt-4 flex gap-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
					>
						<a
							href={resolve('/')}
							class="text-sm text-text-muted transition-colors hover:text-white">GitHub →</a
						>
						<a
							href={resolve('/')}
							class="text-sm text-text-muted transition-colors hover:text-white">Live →</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
