<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { stats, aboutParagraphs } from '$lib/data/about';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

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

<Section id="about">
	<SectionHeading title="About Me" />

	<div class="mt-12 grid gap-12 md:grid-cols-2">
		<div use:reveal={{ delay: 200 }}>
			{#each aboutParagraphs as paragraph, i (i)}
				<p class="leading-relaxed text-text-muted {i !== 0 ? 'mt-4' : ''}">{paragraph}</p>
			{/each}
		</div>
		<div use:counterReveal class="grid grid-cols-2 gap-6" use:staggerReveal={{ stagger: 120 }}>
			{#each stats as stat (stat.label)}
				<div
					class="card p-6 hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-light/5"
				>
					<p class="text-3xl font-bold text-primary-light">
						{Math.round(progress.current * stat.value)}{stat.suffix}
					</p>
					<p class="mt-1 text-sm text-text-muted">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</Section>
