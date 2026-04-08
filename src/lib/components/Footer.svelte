<script lang="ts">
	import { resolve } from '$app/paths';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
</script>

<footer class="border-t border-white/10 bg-surface">
	<div class="mx-auto max-w-6xl px-6 py-12">
		<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
			<div>
				<a href={resolve('/')} class="text-xl font-bold text-primary-light">Srizan</a>
				<p class="mt-1 text-sm text-text-muted">Android Developer</p>
			</div>

			<div class="flex gap-6">
				<a
					href="https://github.com/srizanx"
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-white"
					aria-label="GitHub"
				>
					<GithubIcon />
				</a>
				<a
					href="https://linkedin.com/in/srizan"
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-white"
					aria-label="LinkedIn"
				>
					<LinkedinIcon />
				</a>
				<a
					href="mailto:hello@example.com"
					class="text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-white"
					aria-label="Email"
				>
					<MailIcon />
				</a>
			</div>
		</div>

		<div class="mt-8 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
			<p>&copy; {new Date().getFullYear()} Srizan. All rights reserved.</p>
		</div>
	</div>
</footer>
