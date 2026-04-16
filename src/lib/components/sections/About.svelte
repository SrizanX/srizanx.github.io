<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const stats = [
		{ value: 4, suffix: '+', label: 'Years Experience' },
		{ value: 15, suffix: '+', label: 'B2B Apps Built' },
		{ value: 1, suffix: '', label: 'Flutter Project In Play Store' }
	];

	// Extracted About content
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

<section id="about" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">About Me</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div class="mt-12 grid gap-12 md:grid-cols-2">
			<div use:reveal={{ delay: 200 }}>
				{#each aboutParagraphs as paragraph, i (i)}
					<p class="leading-relaxed text-text-muted {i !== 0 ? 'mt-4' : ''}">{paragraph}</p>
				{/each}
			</div>
			<div use:counterReveal class="grid grid-cols-2 gap-6" use:staggerReveal={{ stagger: 120 }}>
				{#each stats as stat (stat.label)}
					<div
						class="rounded-lg border border-white/10 bg-surface-light p-6 transition-all duration-300 hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-light/5"
					>
						<p class="text-3xl font-bold text-primary-light">
							{Math.round(progress.current * stat.value)}{stat.suffix}
						</p>
						<p class="mt-1 text-sm text-text-muted">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
