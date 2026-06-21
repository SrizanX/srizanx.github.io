<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import socialPhoto from '$lib/assets/social_photo.webp';

	// Extracted variables
	const designation = 'Mobile Application Developer';
	const name = 'Srizan';
	const description = `
Android native app developer with 4+ years of experience. Passionate about building robust, high-quality mobile applications. Skilled in Kotlin and Java for Android, and also experienced with Flutter for cross-platform development and exploring Kotlin Multiplatform (KMP) for sharing code across Android and iOS.`;

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

	<div class="mx-auto w-full max-w-6xl px-6">
		<div class="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-20">
			<div class="max-w-3xl flex-1">
				<p
					class="hero-item mb-4 text-sm font-medium tracking-wider text-accent uppercase"
					style="animation-delay: 0ms"
				>
					{designation}
				</p>
				<h1
					class="hero-item text-5xl leading-tight font-bold md:text-7xl"
					style="animation-delay: 150ms"
				>
					Hi, I'm
					<span class="bg-linear-to-r from-primary-light to-accent bg-clip-text text-transparent">
						{name}
					</span>
				</h1>
				<p
					class="hero-item mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
					style="animation-delay: 300ms"
				>
					{description}
				</p>
				<div class="hero-item mt-8 flex flex-wrap gap-4" style="animation-delay: 500ms">
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
			</div>
			<!-- Photo -->
			<div class="flex flex-1 items-center justify-center">
				<div
					class="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-primary-light/30 to-accent/30 shadow-lg md:h-72 md:w-72"
				>
					<img
						src={socialPhoto}
						alt="Mahdi Saifullah Srizan"
						class="h-full w-full rounded-full object-cover"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-item {
		animation: hero-fly-in 0.7s ease both;
	}

	@keyframes hero-fly-in {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
