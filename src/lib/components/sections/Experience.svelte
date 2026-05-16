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

	let expandedCompanies = $state<Record<string, boolean>>({});

	function toggleCompany(company: string) {
		expandedCompanies[company] = !expandedCompanies[company];
	}
</script>

<section id="experience" class="experience-section">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>

	<div class="inner">
		<div use:reveal class="section-header">
			<p class="eyebrow">// career.path</p>
			<h2 class="section-title">Work <span>Experience</span></h2>
		</div>

		<div use:staggerReveal={{ stagger: 200, y: 40 }} class="timeline">
			{#each experience as { company, url, roles } (company)}
				<div class="company-block">
					<div class="timeline-node" aria-hidden="true"></div>

					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<h3 class="company-name">
						<a href={url} target="_blank" rel="noopener noreferrer">{company}</a>
					</h3>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->

					<div class="roles">
						{#if roles.length > 0}
							<div class="role-entry">
								<p class="role-period">{roles[0].period}</p>
								<h4 class="role-title">{roles[0].title}</h4>
								<ul class="role-points">
									{#each roles[0].points as point (point)}
										<li>{point}</li>
									{/each}
								</ul>
							</div>
						{/if}

						{#if roles.length > 1}
							<button
								class="expand-btn"
								onclick={() => toggleCompany(company)}
								aria-expanded={!!expandedCompanies[company]}
								aria-controls="previous-roles-{company}"
							>
								{expandedCompanies[company] ? '− hide previous roles' : '+ show previous roles'}
							</button>

							{#if expandedCompanies[company]}
								<div id="previous-roles-{company}" class="previous-roles">
									{#each roles.slice(1) as role (role.title)}
										<div class="role-entry">
											<p class="role-period">{role.period}</p>
											<h4 class="role-title">{role.title}</h4>
											<ul class="role-points">
												{#each role.points as point (point)}
													<li>{point}</li>
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

<style>
	.experience-section {
		background: #0d0f14;
		padding: 6rem 2rem;
		position: relative;
		overflow: hidden;
		font-family: 'Syne', sans-serif;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(99, 210, 219, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(99, 210, 219, 0.04) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}
	.orb1 {
		width: 400px;
		height: 400px;
		background: rgba(99, 210, 219, 0.05);
		bottom: -100px;
		right: -80px;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.section-header {
		margin-bottom: 3rem;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.eyebrow::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 1px;
		background: #63d2db;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}
	.section-title span {
		color: #63d2db;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.company-block {
		position: relative;
		padding-left: 2rem;
		border-left: 2px solid rgba(99, 210, 219, 0.2);
	}

	.timeline-node {
		position: absolute;
		top: 4px;
		left: -6px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #63d2db;
		box-shadow: 0 0 10px rgba(99, 210, 219, 0.5);
	}

	.company-name {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}
	.company-name a {
		color: #f0f2f7;
		text-decoration: none;
		transition: color 0.2s;
	}
	.company-name a:hover {
		color: #63d2db;
	}

	.roles {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.role-entry {
		padding: 1.25rem 1.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 10px;
		transition: border-color 0.3s;
	}
	.role-entry:hover {
		border-color: rgba(99, 210, 219, 0.15);
	}

	.role-period {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #63d2db;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin-bottom: 0.4rem;
	}

	.role-title {
		font-size: 1rem;
		font-weight: 600;
		color: #c8d0e0;
		margin-bottom: 0.75rem;
	}

	.role-points {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.role-points li {
		font-size: 13px;
		line-height: 1.7;
		color: #6b7589;
		padding-left: 1rem;
		position: relative;
	}
	.role-points li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: #63d2db;
	}

	.expand-btn {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		letter-spacing: 0.1em;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: color 0.2s;
		align-self: flex-start;
	}
	.expand-btn:hover {
		color: #9ba3b8;
	}

	.previous-roles {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
