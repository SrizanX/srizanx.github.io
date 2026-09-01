<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { experience, rolePeriod, companyPeriod, type Role } from '$lib/data/experience';

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
