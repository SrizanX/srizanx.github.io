<script lang="ts">
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { email, github, linkedin } from '$lib/data/profile';

	const linkClass =
		'flex items-center gap-3 text-text-muted transition-all duration-300 hover:translate-x-2 hover:text-white';
</script>

<section id="contact" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Get In Touch</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div class="mt-12 max-w-xl">
			<p use:reveal={{ delay: 200 }} class="leading-relaxed text-text-muted">
				Feel free to reach out if you want to collaborate on a project, have a question, or just
				want to connect.
			</p>

			<div use:staggerReveal={{ stagger: 100, delay: 300 }} class="mt-8 space-y-4">
				<a href="mailto:{email}" class={linkClass}>
					<MailIcon />
					Mail
				</a>
				<ExternalLink href={github} class={linkClass}>
					<GithubIcon />
					Github
				</ExternalLink>
				<ExternalLink href={linkedin} class={linkClass}>
					<LinkedinIcon />
					Linkedin
				</ExternalLink>
			</div>
		</div>
	</div>
</section>
