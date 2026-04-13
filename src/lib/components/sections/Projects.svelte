<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const projects = [
		{
			title: 'Jatri - Multimode Travel App',
			desc: 'A multimode travel app that simplifies bus ticketing, car rentals, and group trip planning into a single platform. Serving thousands of daily commuters across Bangladesh.',
			tags: ['Dart', 'Flutter', 'Bloc', 'Google Maps SDK', 'Firebase'],
			screenshots: [] as string[],
			github: '',
			live: 'https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en'
		},
		{
			title: 'Intracity Counterman (Auto Sync)',
			desc: 'Offline-first POS ticketing app for fixed bus counters. Fetches route configs on launch, then operates fully offline. Ticket data syncs to the server automatically at periodic intervals.',
			tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Offline-First'],
			screenshots: [] as string[],
			github: '',
			live: ''
		},
		{
			title: 'Intracity Counterman (Manual Sync)',
			desc: 'Lightweight variant for counters with limited connectivity. Operates fully offline after initial setup. Ticket data syncs on-demand when the user triggers a manual sync.',
			tags: ['Kotlin', 'Room', 'Retrofit', 'Offline-First'],
			screenshots: [] as string[],
			github: '',
			live: ''
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
			{#each projects as { title, desc, tags, screenshots, github, live } (title)}
				<div
					class="group overflow-hidden rounded-lg border border-white/10 bg-surface-light transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/40 hover:shadow-xl hover:shadow-primary-light/5"
				>
					{#if screenshots.length > 0}
						<div class="flex gap-2 overflow-x-auto p-2">
							{#each screenshots as src, i (src)}
								<img
									{src}
									alt="{title} screenshot {i + 1}"
									class="h-40 w-auto shrink-0 rounded object-cover"
								/>
							{/each}
						</div>
					{/if}
					<div class="p-6">
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
						{#if github || live}
							<div
								class="mt-4 flex gap-4 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
							>
								{#if github}
									<a
										href={github}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-text-muted transition-colors hover:text-white">GitHub →</a
									>
								{/if}
								{#if live}
									<a
										href={live}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-text-muted transition-colors hover:text-white"
										>Play Store →</a
									>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
