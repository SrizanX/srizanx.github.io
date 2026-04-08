<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links: { route: '/' | '/blog'; hash: string; label: string }[] = [
		{ route: '/', hash: '', label: 'Home' },
		{ route: '/', hash: '#about', label: 'About' },
		{ route: '/', hash: '#projects', label: 'Projects' },
		{ route: '/', hash: '#experience', label: 'Experience' },
		{ route: '/blog', hash: '', label: 'Blog' },
		{ route: '/', hash: '#contact', label: 'Contact' }
	];
</script>

<header
	class="fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 {scrolled
		? 'border-b border-white/10 bg-surface/90 shadow-lg shadow-black/20'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="text-xl font-bold text-primary-light">Srizan</a>

		<!-- Desktop Nav -->
		<ul class="hidden gap-8 md:flex">
			{#each links as { route, hash, label } (label)}
				<li>
					<a
						href="{resolve(route)}{hash}"
						class="relative text-sm font-medium text-text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded after:bg-primary-light after:transition-all after:duration-300 hover:text-white hover:after:w-full"
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile Toggle -->
		<button
			class="text-text-muted transition-transform duration-200 active:scale-90 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<XIcon />
			{:else}
				<MenuIcon />
			{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<ul
			transition:slide={{ duration: 200 }}
			class="border-t border-white/10 bg-surface px-6 py-4 md:hidden"
		>
			{#each links as { route, hash, label } (label)}
				<li>
					<a
						href="{resolve(route)}{hash}"
						class="block py-2 text-sm text-text-muted transition-colors hover:text-white"
						onclick={() => (mobileOpen = false)}
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
