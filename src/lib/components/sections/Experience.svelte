<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const experience = [
		{
			company: 'Jatri Services Ltd',
			url: 'https://jatri.co/',
			roles: [
				{
					title: 'Software Engineer - III',
					period: '2023 — Present',
					points: [
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
					]
				},
				{
					title: 'Junior Android Developer',
					period: '2022 — 2023',
					points: [
						'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
						'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
						'At vero eos et accusamus et iusto odio dignissimos ducimus.'
					]
				}
			]
		}
	];
</script>

<section id="experience" class="bg-surface-light py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Experience</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div use:staggerReveal={{ stagger: 200, y: 40 }} class="mt-12 space-y-12">
			{#each experience as { company, url, roles } (company)}
				<div class="relative border-l-2 border-primary-light/30 pl-8">
					<div
						class="absolute top-0 -left-2.25 h-4 w-4 rounded-full border-2 border-primary-light bg-surface-light shadow-[0_0_8px_rgba(59,130,246,0.4)]"
					></div>
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<h3 class="text-xl font-semibold">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							class="transition-colors hover:text-primary-light"
						>
							{company}
						</a>
					</h3>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->

					<div class="mt-4 space-y-8">
						{#each roles as role (role.title)}
							<div>
								<p class="text-sm text-accent">{role.period}</p>
								<h4 class="mt-1 text-lg font-medium">{role.title}</h4>
								<ul class="mt-3 space-y-2">
									{#each role.points as point (point)}
										<li class="text-sm leading-relaxed text-text-muted">• {point}</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
