<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		title,
		as = 'h2',
		class: className = ''
	}: {
		title: string;
		/** `h1` for standalone pages, `h2` for sections of the landing page. */
		as?: 'h1' | 'h2';
		class?: string;
	} = $props();
</script>

<!--
	The two headings are written out rather than using <svelte:element this={as}>: on a
	dynamic element `use:reveal` sets the element's starting opacity but its
	IntersectionObserver never fires, leaving the heading permanently invisible.
-->
{#if as === 'h1'}
	<h1 use:reveal class="text-4xl font-bold {className}">{title}</h1>
{:else}
	<h2 use:reveal class="text-3xl font-bold {className}">{title}</h2>
{/if}
<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>
