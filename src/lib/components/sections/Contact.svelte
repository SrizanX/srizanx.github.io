<script lang="ts">
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	const links = [
		{
			label: 'mahdi.saifullah@gmail.com',
			href: 'mailto:mahdi.saifullah@gmail.com',
			icon: MailIcon,
			external: false
		},
		{
			label: 'github.com/srizanx',
			href: 'https://github.com/srizanx',
			icon: GithubIcon,
			external: true
		},
		{
			label: 'linkedin.com/in/srizan',
			href: 'https://linkedin.com/in/srizan',
			icon: LinkedinIcon,
			external: true
		}
	];
</script>

<section id="contact" class="contact-section">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<div use:reveal class="section-header">
			<p class="eyebrow">// let's.connect</p>
			<h2 class="section-title">Get In <span>Touch</span></h2>
		</div>

		<div class="contact-body">
			<p use:reveal={{ delay: 100 }} class="cta-text">
				Open to new opportunities, collaborations, or just a good conversation about mobile
				development. Drop me a line — I reply to every message.
			</p>

			<div use:staggerReveal={{ stagger: 80, delay: 150 }} class="links-list">
				{#each links as { label, href, icon: Icon, external } (label)}
					<a
						{href}
						target={external ? '_blank' : undefined}
						rel={external ? 'noopener noreferrer' : undefined}
						class="contact-link"
					>
						<span class="link-icon"><Icon /></span>
						<span class="link-label">{label}</span>
						<span class="link-arrow" aria-hidden="true">→</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		background: #0d0f14;
		padding: 6rem 2rem;
		position: relative;
		overflow: hidden;
		font-family: 'Syne', sans-serif;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(99, 210, 219, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(99, 210, 219, 0.04) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}
	.orb1 {
		width: 400px;
		height: 400px;
		background: rgba(99, 210, 219, 0.05);
		top: -80px;
		right: -80px;
	}
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(168, 85, 247, 0.04);
		bottom: -60px;
		left: -60px;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.section-header {
		margin-bottom: 3rem;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.eyebrow::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 1px;
		background: #63d2db;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}
	.section-title span {
		color: #63d2db;
	}

	.contact-body {
		max-width: 520px;
	}

	.cta-text {
		font-size: 15px;
		line-height: 1.85;
		color: #6b7589;
		margin-bottom: 2.5rem;
	}

	.links-list {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		overflow: hidden;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.1rem 1.25rem;
		background: #0d0f14;
		text-decoration: none;
		transition: background 0.25s;
	}
	.contact-link:hover {
		background: #111418;
	}
	.contact-link:hover .link-arrow {
		color: #63d2db;
		transform: translateX(4px);
	}
	.contact-link:hover .link-label {
		color: #c8d0e0;
	}

	.link-icon {
		color: #63d2db;
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.link-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: #9ba3b8;
		letter-spacing: 0.03em;
		flex: 1;
		transition: color 0.25s;
	}

	.link-arrow {
		font-size: 14px;
		color: #4a5568;
		transition:
			color 0.25s,
			transform 0.25s;
	}
</style>
