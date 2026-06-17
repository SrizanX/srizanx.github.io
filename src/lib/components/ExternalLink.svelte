<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		class: className = '',
		children
	}: { href: string; class?: string; children: Snippet } = $props();
</script>

<!--
	Centralises outbound links: every external link is `noopener noreferrer` by default.
	`href` is an external URL, so it must NOT go through SvelteKit's `resolve()` — that's
	why `svelte/no-navigation-without-resolve` is disabled for this file in eslint.config.js.
-->
<a {href} target="_blank" rel="noopener noreferrer" class={className}>
	{@render children()}
</a>
