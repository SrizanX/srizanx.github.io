<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { name } from '$lib/data/profile';
</script>

<svelte:head>
	<title>{page.status} — {name}</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<p
		class="bg-linear-to-b from-primary-light/60 to-primary-light/10 bg-clip-text text-[10rem] leading-none font-black tracking-tight text-transparent select-none"
	>
		{page.status}
	</p>

	<h1 class="mt-2 text-3xl font-bold">
		{#if page.status === 404}
			Page Not Found
		{:else}
			Something Went Wrong
		{/if}
	</h1>

	<div class="mt-3 h-1 w-16 rounded bg-primary-light"></div>

	<p class="mt-6 max-w-sm leading-relaxed text-text-muted">
		{#if page.status === 404}
			The page you're looking for doesn't exist or has been moved.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>

	<a
		href={resolve('/')}
		class="mt-8 rounded-lg bg-primary-light px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary hover:shadow-lg hover:shadow-primary-light/20"
	>
		← Back to Home
	</a>
</div>
