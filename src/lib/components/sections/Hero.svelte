<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';

	// Extracted variables
	const designation = 'Android Developer';
	const name = 'Srizan';
	const description = `
Android native app developer with 4+ years of experience. Passionate about building robust, high-quality mobile applications. Skilled in Kotlin and Java for Android, and also experienced with Flutter for cross-platform development and explore Kotlin Multiplatform (KMP) for sharing code across Android and iOS.`;

	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
</script>

<section class="relative flex min-h-screen items-center overflow-hidden pt-20">
	<!-- Animated background gradient blobs -->
	{#if visible}
		<div
			in:scale={{ duration: 2000, start: 0.5 }}
			class="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-primary-light/5 blur-3xl"
		></div>
		<div
			in:scale={{ duration: 2500, delay: 300, start: 0.5 }}
			class="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-accent/5 blur-3xl"
		></div>
	{/if}

	<div class="mx-auto max-w-6xl px-6">
		<div class="max-w-3xl">
			{#if visible}
				<p
					in:fly={{ y: 24, duration: 700 }}
					class="mb-4 text-sm font-medium tracking-wider text-accent uppercase"
				>
					{designation}
				</p>
				<h1
					in:fly={{ y: 24, duration: 700, delay: 150 }}
					class="text-5xl leading-tight font-bold md:text-7xl"
				>
					Hi, I'm
					<span class="bg-linear-to-r from-primary-light to-accent bg-clip-text text-transparent">
						{name}
					</span>
				</h1>
				<p
					in:fly={{ y: 24, duration: 700, delay: 300 }}
					class="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
				>
					{description}
				</p>
				<div in:fly={{ y: 24, duration: 700, delay: 500 }} class="mt-8 flex flex-wrap gap-4">
					<a
						href="{resolve('/')}resume.pdf"
						download="Resume-Mahdi_Saifullah_Srizan-Android_Developer_at_Jatri_Services_Ltd.pdf"
						class="rounded-lg bg-primary-light px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-light/25 transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-xl hover:shadow-primary-light/30"
					>
						Download Resume
					</a>

					<a
						href="{resolve('/')}#projects"
						class="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-text-muted transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
					>
						View Projects
					</a>
					<a
						href="{resolve('/')}#contact"
						class="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-text-muted transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
					>
						Contact Me
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
