<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		surface = false,
		children
	}: {
		id?: string;
		/** Use the alternate (lighter) background — sections alternate down the page. */
		surface?: boolean;
		children: Snippet;
	} = $props();
</script>

<!-- The standard landing-page section shell: vertical rhythm plus the centred content column. -->
<section {id} class="py-24 {surface ? 'bg-surface-light' : ''}">
	<div class="mx-auto max-w-6xl px-6">
		{@render children()}
	</div>
</section>
