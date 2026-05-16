<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const stats = [
		{ value: 4, suffix: '+', label: 'Years Experience' },
		{ value: 15, suffix: '+', label: 'B2B Apps Built' },
		{ value: 1, suffix: '', label: 'Flutter Project In Play Store' }
	];

	const aboutParagraphs = [
		`I started my journey in mobile development professionally over four years ago, driven by a fascination with how technology can improve everyday life. My expertise lies in building scalable, maintainable Android apps using Kotlin and Java.`,
		`I enjoy tackling complex challenges, collaborating with teams, and continuously learning new tools—like Flutter for cross-platform apps and Kotlin Multiplatform (KMP) to share code across Android and iOS. Outside of coding, I love sharing knowledge and exploring new tech trends.`
	];

	const progress = new Tween(0, { duration: 1500, easing: cubicOut });

	function counterReveal(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					progress.set(1);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}
</script>

<section id="about" class="about-section">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<div use:reveal class="section-header">
			<p class="eyebrow">// about.me</p>
			<h2 class="section-title">Who I <span>Am</span></h2>
		</div>

		<div class="content-grid">
			<div use:reveal={{ delay: 100 }} class="bio-col">
				{#each aboutParagraphs as paragraph, i (i)}
					<p class="bio-text" class:bio-gap={i !== 0}>{paragraph}</p>
				{/each}
			</div>

			<div use:counterReveal use:staggerReveal={{ stagger: 120 }} class="stats-grid">
				{#each stats as stat (stat.label)}
					<div class="stat-card">
						<p class="stat-value">{Math.round(progress.current * stat.value)}{stat.suffix}</p>
						<p class="stat-label">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
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
		width: 350px;
		height: 350px;
		background: rgba(168, 85, 247, 0.05);
		top: -80px;
		left: -60px;
	}
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(99, 210, 219, 0.05);
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

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.bio-col {
		display: flex;
		flex-direction: column;
	}

	.bio-text {
		font-size: 15px;
		line-height: 1.85;
		color: #6b7589;
	}
	.bio-gap {
		margin-top: 1.25rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		overflow: hidden;
	}

	.stat-card {
		background: #0d0f14;
		padding: 1.75rem 1.5rem;
		transition: background 0.3s;
	}
	.stat-card:hover {
		background: #111418;
	}

	.stat-value {
		font-size: 2.25rem;
		font-weight: 800;
		color: #63d2db;
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #4a5568;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		line-height: 1.4;
	}

	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}

	@media (max-width: 480px) {
		.stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
