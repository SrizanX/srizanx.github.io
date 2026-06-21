<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	type Role = {
		title: string;
		start: string;
		/** Inclusive end; `null` means the role is ongoing ("Present"). */
		end: string | null;
		points: string[];
	};

	const experience: { company: string; url: string; roles: Role[] }[] = [
		{
			company: 'Jatri Services Ltd',
			url: 'https://jatri.co/',
			roles: [
				{
					title: 'Software Engineer III - Mobile',
					start: '2025',
					end: null,
					points: [
						'Active contributor to the development of the Jatri User App, a multimodal transportation platform for Android and iOS, built with Flutter to deliver a seamless cross-platform experience.',
						'Maintain all the intracity bus, toll plaza and water transport pos apps.'
					]
				},
				{
					title: 'Software Engineer I - Android',
					start: '2024',
					end: '2025',
					points: [
						'Collaborated with cross-functional teams to define, design, and ship new features.',
						'Participated in code reviews and improved code quality and maintainability.'
					]
				},
				{
					title: 'Software Engineer',
					start: '2023',
					end: '2024',
					points: [
						'Participated in the modernization of 10+ legacy Android applications and implemented modern architecture patterns, resulting in improved maintainability and performance.',
						'Contributed to the development of the dynamic ticket format system that allows companies to customize their ticket layouts without code changes, improving flexibility and reducing maintenance overhead.',
						'Developed a CI/CD pipeline using GitHub Actions, automating build and deliver to testers and production, resulting in a 30% reduction in deployment time and improved release reliability.'
					]
				},
				{
					title: 'Jr. Software Engineer',
					start: '2022',
					end: '2023',
					points: [
						'Began my software development journey, building a strong foundation in Android development and contributing to impactful projects.',
						'Key contributor to the Water Transport CabinMan App, enabling efficient launch cabin operations and integrating thermal ticket printing with the RPP300 device.'
					]
				}
			]
		}
	];

	const formatYear = (end: string | null) => end ?? 'Present';
	const rolePeriod = (role: Role) => `${role.start} — ${formatYear(role.end)}`;

	// Roles are listed latest-first, so the overall tenure spans the last role's
	// start to the first role's end (e.g. "2022 — Present").
	const companyPeriod = (roles: Role[]) =>
		`${roles[roles.length - 1].start} — ${formatYear(roles[0].end)}`;

	// Track expanded state for each company using state for reactivity
	let expandedCompanies = $state<Record<string, boolean>>({});

	function toggleCompany(company: string) {
		expandedCompanies[company] = !expandedCompanies[company];
	}
</script>

<section id="experience" class="bg-surface-light py-24">
	<div class="mx-auto max-w-6xl px-6">
		{#snippet roleBlock(role: Role)}
			<div>
				<div class="flex flex-wrap items-baseline justify-between gap-x-4">
					<h4 class="text-lg font-medium">{role.title}</h4>
					<p class="text-xs whitespace-nowrap text-text-muted">{rolePeriod(role)}</p>
				</div>
				<ul class="mt-3 space-y-2">
					{#each role.points as point (point)}
						<li class="text-sm leading-relaxed text-text-muted">• {point}</li>
					{/each}
				</ul>
			</div>
		{/snippet}

		<h2 use:reveal class="text-3xl font-bold">Experience</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div use:staggerReveal={{ stagger: 200, y: 40 }} class="mt-12 space-y-12">
			{#each experience as { company, url, roles } (company)}
				<div class="relative border-l-2 border-primary-light/30 pl-8">
					<div
						class="absolute top-0 -left-2.25 h-4 w-4 rounded-full border-2 border-primary-light bg-surface-light shadow-[0_0_8px_rgba(59,130,246,0.4)]"
					></div>
					<h3 class="text-xl font-semibold">
						<ExternalLink href={url} class="transition-colors hover:text-primary-light"
							>{company}</ExternalLink
						>
					</h3>
					<p class="mt-1 text-sm font-medium text-accent">{companyPeriod(roles)}</p>

					<div class="mt-4 space-y-8">
						<!-- Show only the latest role by default -->
						{#if roles.length > 0}
							{@render roleBlock(roles[0])}
						{/if}

						<!-- Expandable previous roles -->
						{#if roles.length > 1}
							<button
								class="rounded text-sm text-primary-light underline hover:text-accent focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:outline-none"
								onclick={() => toggleCompany(company)}
								aria-expanded={!!expandedCompanies[company]}
								aria-controls="previous-roles-{company}"
							>
								{expandedCompanies[company] ? 'Hide previous roles' : 'Show previous roles'}
							</button>
							{#if expandedCompanies[company]}
								<div id="previous-roles-{company}" class="mt-4 space-y-8">
									{#each roles.slice(1) as role (role.title)}
										{@render roleBlock(role)}
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
