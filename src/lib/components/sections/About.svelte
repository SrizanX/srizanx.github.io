<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const stats = [
		{ value: 4, suffix: '+', label: 'Years Experience' },
		{ value: 10, suffix: '+', label: 'Apps Published' },
		{ value: 50, suffix: 'K+', label: 'Downloads' },
		{ value: 15, suffix: '+', label: 'Clients Served' }
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
				<p class="leading-relaxed text-text-muted">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
					vestibulum vestibulum. Cras vehicula, mi eget laoreet venenatis, eros enim gravida augue,
					vel accumsan enim nisi id orci.
				</p>
				<p class="mt-4 leading-relaxed text-text-muted">
					Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin
					molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit
					amet nisl tempus convallis.
				</p>
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
