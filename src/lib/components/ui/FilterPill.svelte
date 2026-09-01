<script lang="ts">
	import type { Snippet } from 'svelte';

	let { active, onclick, children }: { active: boolean; onclick: () => void; children: Snippet } =
		$props();
</script>

<!-- Shared toggle pill for the /projects category filter and the /blog tag filter. -->
<button
	type="button"
	aria-pressed={active}
	{onclick}
	class="rounded-full border px-5 py-2 text-sm font-medium transition-colors {active
		? 'border-primary-light/50 bg-primary-light/10 text-primary-light'
		: 'border-white/15 text-text-muted hover:border-white/30 hover:text-white'}"
>
	{@render children()}
</button>
