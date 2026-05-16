<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const projects = [
		{
			title: 'Jatri - Multimode Travel App',
			desc: 'A multimode travel app that simplifies bus ticketing, car rentals, and group trip planning into a single platform. Serving thousands of daily commuters across Bangladesh.',
			tags: ['Dart', 'Flutter', 'Bloc', 'Google Maps SDK', 'Firebase'],
			github: '',
			live: 'https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en'
		},
		{
			title: 'Intracity Counterman (Auto Sync)',
			desc: 'Offline-first POS ticketing app for fixed bus counters. Fetches route configs on launch, then operates fully offline. Ticket data syncs to the server automatically at periodic intervals.',
			tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Offline-First'],
			github: '',
			live: ''
		},
		{
			title: 'Intracity Counterman (Manual Sync)',
			desc: 'Lightweight variant for counters with limited connectivity. Operates fully offline after initial setup. Ticket data syncs on-demand when the user triggers a manual sync.',
			tags: ['Kotlin', 'Room', 'Retrofit', 'Offline-First'],
			github: '',
			live: ''
		}
	];
</script>

<section id="projects" class="projects-section">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<div use:reveal class="section-header">
			<p class="eyebrow">// work.showcase</p>
			<h2 class="section-title">Featured <span>Projects</span></h2>
		</div>

		<div use:staggerReveal={{ stagger: 120, y: 40 }} class="cards-grid">
			{#each projects as { title, desc, tags, github, live } (title)}
				<div class="project-card">
					<div class="card-top">
						<h3 class="project-title">{title}</h3>
						<p class="project-desc">{desc}</p>
					</div>

					<div class="card-bottom">
						<div class="tags">
							{#each tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>

						{#if github || live}
							<div class="links">
								{#if github}
									<a href={github} target="_blank" rel="noopener noreferrer" class="link">
										GitHub →
									</a>
								{/if}
								{#if live}
									<a href={live} target="_blank" rel="noopener noreferrer" class="link">
										Play Store →
									</a>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-section {
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
		top: -80px;
		left: -80px;
	}
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(168, 85, 247, 0.04);
		bottom: -60px;
		right: -40px;
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

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		overflow: hidden;
	}

	.project-card {
		background: #0d0f14;
		padding: 1.75rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: relative;
		transition: background 0.3s;
	}
	.project-card:hover {
		background: #111418;
	}
	.project-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid transparent;
		transition: border-color 0.3s;
		pointer-events: none;
	}
	.project-card:hover::after {
		border-color: rgba(99, 210, 219, 0.15);
	}

	.card-top {
		flex: 1;
	}

	.project-title {
		font-size: 15px;
		font-weight: 700;
		color: #c8d0e0;
		margin-bottom: 0.75rem;
		line-height: 1.3;
		transition: color 0.2s;
	}
	.project-card:hover .project-title {
		color: #63d2db;
	}

	.project-desc {
		font-size: 13px;
		line-height: 1.75;
		color: #6b7589;
	}

	.card-bottom {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 3px 9px;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: #9ba3b8;
		transition: all 0.25s;
	}
	.project-card:hover .tag {
		border-color: rgba(99, 210, 219, 0.2);
		color: #c8d0e0;
	}

	.links {
		display: flex;
		gap: 1rem;
	}
	.link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		text-decoration: none;
		letter-spacing: 0.05em;
		transition: color 0.2s;
	}
	.link:hover {
		color: #9ba3b8;
	}
</style>
