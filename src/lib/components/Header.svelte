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
		{ route: '/', hash: '#skills', label: 'Skills' },
		{ route: '/', hash: '#projects', label: 'Projects' },
		{ route: '/', hash: '#experience', label: 'Experience' },
		{ route: '/', hash: '#contact', label: 'Contact' },
		{ route: '/blog', hash: '', label: 'Blog' }
	];
</script>

<header class="site-header" class:scrolled>
	<nav class="nav-inner">
		<a href={resolve('/')} class="logo">Mahdi Saifullah Srizan</a>

		<ul class="nav-links">
			{#each links as { route, hash, label } (label)}
				<li>
					<a href="{resolve(route)}{hash}" class="nav-link">{label}</a>
				</li>
			{/each}
		</ul>

		<button
			class="menu-toggle"
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

	{#if mobileOpen}
		<ul transition:slide={{ duration: 200 }} class="mobile-menu">
			{#each links as { route, hash, label } (label)}
				<li>
					<a
						href="{resolve(route)}{hash}"
						class="mobile-link"
						onclick={() => (mobileOpen = false)}
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	.site-header {
		position: fixed;
		top: 0;
		z-index: 50;
		width: 100%;
		background: transparent;
		transition:
			background 0.3s,
			border-color 0.3s,
			box-shadow 0.3s;
		font-family: 'Syne', sans-serif;
	}
	.site-header.scrolled {
		background: rgba(13, 15, 20, 0.92);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.07);
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
	}

	.nav-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 1.1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 15px;
		font-weight: 700;
		color: #f0f2f7;
		text-decoration: none;
		letter-spacing: -0.01em;
		transition: color 0.2s;
	}
	.logo:hover {
		color: #63d2db;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 2rem;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.08em;
		color: #6b7589;
		text-decoration: none;
		text-transform: uppercase;
		position: relative;
		transition: color 0.2s;
	}
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -3px;
		left: 0;
		width: 0;
		height: 1px;
		background: #63d2db;
		transition: width 0.25s ease;
	}
	.nav-link:hover {
		color: #c8d0e0;
	}
	.nav-link:hover::after {
		width: 100%;
	}

	.menu-toggle {
		display: none;
		background: none;
		border: none;
		color: #6b7589;
		cursor: pointer;
		padding: 4px;
		transition: color 0.2s;
	}
	.menu-toggle:hover {
		color: #c8d0e0;
	}

	.mobile-menu {
		list-style: none;
		margin: 0;
		padding: 0.75rem 2rem 1.25rem;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		background: rgba(13, 15, 20, 0.97);
	}

	.mobile-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #6b7589;
		text-decoration: none;
		display: block;
		padding: 0.6rem 0;
		transition: color 0.2s;
	}
	.mobile-link:hover {
		color: #63d2db;
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
		.menu-toggle {
			display: block;
		}
	}
</style>
