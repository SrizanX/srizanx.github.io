<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const experience = [
		{
			company: 'Jatri Services Ltd',
			url: 'https://jatri.co/',
			roles: [
				{
					title: 'Software Engineer III - Mobile',
					period: '2025 — Present',
					points: [
						'Active contributor to the development of the Jatri User App, a multimodal transportation platform for Android and iOS, built with Flutter to deliver a seamless cross-platform experience.',
						'Maintain all the intracity bus, toll plaza and water transport pos apps.'
					]
				},
				{
					title: 'Software Engineer I - Android',
					period: '2024 — 2025',
					points: [
						'Collaborated with cross-functional teams to define, design, and ship new features.',
						'Participated in code reviews and improved code quality and maintainability.'
					]
				},
				{
					title: 'Software Engineer',
					period: '2023 — 2024',
					points: [
						'Participated in the modernization of 10+ legacy Android applications and implemented modern architecture patterns, resulting in improved maintainability and performance.',
						'Contributed to the development of the dynamic ticket format system that allows companies to customize their ticket layouts without code changes, improving flexibility and reducing maintenance overhead.',
						'Developed a CI/CD pipeline using GitHub Actions, automating build and deliver to testers and production, resulting in a 30% reduction in deployment time and improved release reliability.'
					]
				},
				{
					title: 'Jr. Software Engineer',
					period: '2022 — 2023',
					points: [
						'Began my software development journey, building a strong foundation in Android development and contributing to impactful projects.',
						'Key contributor to the Water Transport CabinMan App, enabling efficient launch cabin operations and integrating thermal ticket printing with the RPP300 device.'
					]
				}
			]
		}
	];

	// Track expanded state for each company using state for reactivity
	let expandedCompanies = $state<Record<string, boolean>>({});

	function toggleCompany(company: string) {
		expandedCompanies[company] = !expandedCompanies[company];
	}
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
						<!-- Show only the latest role by default -->
						{#if roles.length > 0}
							<div>
								<p class="text-sm text-accent">{roles[0].period}</p>
								<h4 class="mt-1 text-lg font-medium">{roles[0].title}</h4>
								<ul class="mt-3 space-y-2">
									{#each roles[0].points as point (point)}
										<li class="text-sm leading-relaxed text-text-muted">• {point}</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Expandable previous roles -->
						{#if roles.length > 1}
							<button
								class="mt-4 text-sm text-primary-light underline hover:text-accent focus:outline-none"
								onclick={() => toggleCompany(company)}
								aria-expanded={!!expandedCompanies[company]}
								aria-controls="previous-roles-{company}"
							>
								{expandedCompanies[company] ? 'Hide previous roles' : 'Show previous roles'}
							</button>
							{#if expandedCompanies[company]}
								<div id="previous-roles-{company}" class="mt-4 space-y-8">
									{#each roles.slice(1) as role (role.title)}
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
							{/if}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
