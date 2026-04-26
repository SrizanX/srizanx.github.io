<script lang="ts">
	import { staggerReveal } from '$lib/actions/reveal';
	import { reveal } from '$lib/actions/reveal';

	const skillGroups = [
		{
			category: 'Languages',
			icon: '⌨',
			skills: ['Kotlin', 'Java', 'Dart', 'TypeScript'],
			highlights: ['Kotlin', 'TypeScript']
		},
		{
			category: 'Android',
			icon: '◈',
			skills: ['Jetpack Compose', 'XML Views', 'Room DB', 'Hilt / Dagger', 'Coroutines'],
			highlights: ['Jetpack Compose', 'Coroutines']
		},
		{
			category: 'Architecture',
			icon: '◻',
			skills: ['MVVM', 'MVI', 'Clean Architecture', 'Multi-Module'],
			highlights: ['Clean Architecture']
		},
		{
			category: 'Networking',
			icon: '⟳',
			skills: ['Retrofit', 'OkHttp', 'Ktor', 'WebSockets', 'REST APIs'],
			highlights: ['Ktor']
		},
		{
			category: 'Tools & Workflow',
			icon: '◎',
			skills: ['Android Studio', 'Git', 'Firebase', 'CI/CD', 'Agile / Scrum'],
			highlights: ['CI/CD']
		},
		{
			category: 'Cross-Platform',
			icon: '◈',
			skills: ['Flutter', 'Kotlin Multiplatform (KMP)'],
			highlights: ['Kotlin Multiplatform (KMP)']
		},
		{
			category: 'Hobby / Exploring',
			icon: '◉',
			skills: ['Spring', 'Svelte', 'NestJS'],
			highlights: ['Svelte']
		}
	];

	const totalSkills = skillGroups.reduce((sum, g) => sum + g.skills.length, 0);
</script>

<section id="skills" class="skills-section">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<div use:reveal class="section-header">
			<p class="eyebrow">// stack.overview</p>
			<h2 class="section-title">Skills & <span>Tech Stack</span></h2>
		</div>

		<div use:staggerReveal={{ delay: 100 }} class="cards-grid">
			{#each skillGroups as group (group.category)}
				<div class="skill-card">
					<div class="card-header">
						<span class="card-icon">{group.icon}</span>
						<span class="cat-label">{group.category}</span>
					</div>
					<div class="tags">
						{#each group.skills as skill (skill)}
							<span class="tag" class:highlight={group.highlights.includes(skill)}>{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="bottom-bar">
			<span class="status-dot" aria-hidden="true"></span>
			<span class="status-text">actively building</span>
			<span class="skill-count">{totalSkills} technologies</span>
		</div>
	</div>
</section>

<style>
	.skills-section {
		background: #0d0f14;
		min-height: 100vh;
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
		background: rgba(99, 210, 219, 0.06);
		top: -100px;
		right: -80px;
	}
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(168, 85, 247, 0.05);
		bottom: 10%;
		left: -60px;
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
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		overflow: hidden;
	}

	.skill-card {
		background: #0d0f14;
		padding: 1.5rem;
		position: relative;
		transition: background 0.3s;
	}
	.skill-card:hover {
		background: #111418;
	}
	.skill-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid transparent;
		transition: border-color 0.3s;
		pointer-events: none;
	}
	.skill-card:hover::after {
		border-color: rgba(99, 210, 219, 0.15);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 1rem;
	}
	.card-icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background: rgba(99, 210, 219, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		flex-shrink: 0;
	}
	.cat-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #63d2db;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		font-weight: 600;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		padding: 4px 10px;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: #9ba3b8;
		transition: all 0.25s;
	}
	.skill-card:hover .tag {
		border-color: rgba(99, 210, 219, 0.2);
		color: #c8d0e0;
	}
	.tag.highlight {
		background: rgba(99, 210, 219, 0.08);
		border-color: rgba(99, 210, 219, 0.3);
		color: #63d2db;
	}

	.bottom-bar {
		margin-top: 2.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}
	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #4ade80;
		box-shadow: 0 0 8px #4ade80;
		animation: pulse 2s ease-in-out infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}
	.status-text {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #4a5568;
		letter-spacing: 0.1em;
	}
	.skill-count {
		margin-left: auto;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #4a5568;
	}
</style>
