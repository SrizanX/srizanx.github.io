<script lang="ts">
	import { resolve } from '$app/paths';
	import { name, shortName, designation } from '$lib/data/profile';
</script>

<footer class="border-t border-white/10 bg-surface">
	<div class="mx-auto max-w-6xl px-6 py-12">
		<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
			<div>
				<a href={resolve('/')} class="text-xl font-bold text-primary-light">{name}</a>
				<p class="mt-1 text-sm text-text-muted">{designation}</p>
			</div>
		</div>

		<div class="mt-8 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
			<p>&copy; {new Date().getFullYear()} {shortName}. All rights reserved.</p>
		</div>
	</div>
</footer>
