<script lang="ts">
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { email, github, linkedin } from '$lib/data/profile';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const linkClass =
		'flex items-center gap-3 text-text-muted transition-all duration-300 hover:translate-x-2 hover:text-white';
</script>

<Section id="contact">
	<SectionHeading title="Get In Touch" />

	<div class="mt-12 max-w-xl">
		<p use:reveal={{ delay: 200 }} class="leading-relaxed text-text-muted">
			Feel free to reach out if you want to collaborate on a project, have a question, or just want
			to connect.
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
</Section>
