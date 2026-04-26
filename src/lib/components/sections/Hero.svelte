<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import socialPhoto from '$lib/assets/social_photo.png';

	const designation = 'Android Developer';
	const name = 'Srizan';
	const description = `Android native app developer with <strong>4+ years</strong> of experience. Passionate about building robust, high-quality mobile applications — from Jetpack Compose to Kotlin Multiplatform.`;

	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
</script>

<section class="hero">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="orb orb1" aria-hidden="true"></div>
	<div class="orb orb2" aria-hidden="true"></div>

	<div class="inner">
		{#if visible}
			<div class="content">
				<div in:fly={{ y: 16, duration: 600 }} class="eyebrow">
					{designation}
					<span class="eyebrow-dot" aria-hidden="true"></span>
				</div>

				<h1 in:fly={{ y: 20, duration: 600, delay: 100 }}>
					Hi, I'm<br /><span class="name">{name}</span>
				</h1>

				<p in:fly={{ y: 20, duration: 600, delay: 200 }} class="bio">
					{@html description}
				</p>

				<div in:fly={{ y: 20, duration: 600, delay: 300 }} class="btns">
					<a
						href="{resolve('/')}resume.pdf"
						download="Resume-Mahdi_Saifullah_Srizan-Android_Developer.pdf"
						class="btn-primary">Download Resume</a
					>
					<a href="{resolve('/')}#projects" class="btn-ghost">View Projects</a>
					<a href="{resolve('/')}#contact" class="btn-ghost">Contact Me</a>
				</div>

				<div in:fly={{ y: 20, duration: 600, delay: 400 }} class="stats">
					<div><span class="stat-num">4+</span><span class="stat-label">years exp.</span></div>
					<div><span class="stat-num">20+</span><span class="stat-label">technologies</span></div>
					<div><span class="stat-num">KMP</span><span class="stat-label">cross-platform</span></div>
				</div>
			</div>

			<div in:fly={{ y: 20, duration: 700, delay: 150 }} class="avatar-wrap">
				<div class="avatar-ring">
					<div class="avatar-inner">
						<img src={socialPhoto} alt="Mahdi Saifullah Srizan" />
					</div>
				</div>
				<div class="avatar-badge">
					<span class="badge-dot" aria-hidden="true"></span>
					<span class="badge-text">open to work</span>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		background: #0d0f14;
		min-height: 100vh;
		padding: 6rem 2rem 4rem;
		font-family: 'Syne', sans-serif;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(99, 210, 219, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(99, 210, 219, 0.04) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		pointer-events: none;
	}
	.orb1 {
		width: 500px;
		height: 500px;
		background: rgba(99, 210, 219, 0.05);
		top: -160px;
		right: -100px;
	}
	.orb2 {
		width: 300px;
		height: 300px;
		background: rgba(168, 85, 247, 0.04);
		bottom: -80px;
		left: -60px;
	}

	.inner {
		max-width: 900px;
		margin: 0 auto;
		width: 100%;
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 4rem;
		flex-wrap: wrap;
	}

	.content {
		flex: 1;
		min-width: 280px;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #63d2db;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 1.25rem;
	}
	.eyebrow::before {
		content: '';
		width: 20px;
		height: 1px;
		background: #63d2db;
		display: inline-block;
	}

	.eyebrow-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #4ade80;
		box-shadow: 0 0 8px #4ade80;
		animation: pulse 2s ease-in-out infinite;
		margin-left: 4px;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	h1 {
		font-size: clamp(2.5rem, 6vw, 3.75rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.08;
		letter-spacing: -0.03em;
		margin-bottom: 1.25rem;
	}
	.name {
		color: #63d2db;
	}

	.bio {
		font-size: 15px;
		line-height: 1.8;
		color: #6b7589;
		max-width: 480px;
		margin-bottom: 2rem;
	}
	.bio :global(strong) {
		color: #9ba3b8;
		font-weight: 400;
	}

	.btns {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.btn-primary {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		padding: 10px 22px;
		border-radius: 8px;
		background: #63d2db;
		color: #0d0f14;
		font-weight: 600;
		letter-spacing: 0.05em;
		border: none;
		cursor: pointer;
		transition: all 0.2s;
		text-decoration: none;
		display: inline-block;
	}
	.btn-primary:hover {
		background: #7de0e8;
		transform: translateY(-1px);
	}

	.btn-ghost {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		padding: 10px 22px;
		border-radius: 8px;
		background: transparent;
		color: #6b7589;
		border: 1px solid rgba(255, 255, 255, 0.1);
		cursor: pointer;
		transition: all 0.2s;
		text-decoration: none;
		display: inline-block;
		letter-spacing: 0.05em;
	}
	.btn-ghost:hover {
		border-color: rgba(99, 210, 219, 0.3);
		color: #c8d0e0;
		transform: translateY(-1px);
	}

	.stats {
		display: flex;
		gap: 2rem;
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}
	.stat-num {
		font-size: 1.5rem;
		font-weight: 800;
		color: #f0f2f7;
		display: block;
	}
	.stat-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #4a5568;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-top: 2px;
		display: block;
	}

	.avatar-wrap {
		flex-shrink: 0;
		position: relative;
	}

	.avatar-ring {
		width: 220px;
		height: 220px;
		border-radius: 50%;
		border: 1px solid rgba(99, 210, 219, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.avatar-ring::before {
		content: '';
		position: absolute;
		inset: -10px;
		border-radius: 50%;
		border: 1px solid rgba(99, 210, 219, 0.07);
	}

	.avatar-inner {
		width: 192px;
		height: 192px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid rgba(99, 210, 219, 0.15);
	}
	.avatar-inner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar-badge {
		position: absolute;
		bottom: 10px;
		right: 0;
		background: #111418;
		border: 1px solid rgba(99, 210, 219, 0.25);
		border-radius: 20px;
		padding: 5px 12px;
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.badge-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #4ade80;
		box-shadow: 0 0 6px #4ade80;
		animation: pulse 2s ease-in-out infinite;
	}
	.badge-text {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #63d2db;
		letter-spacing: 0.1em;
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.inner {
			flex-direction: column-reverse;
			gap: 2.5rem;
		}
		.avatar-ring {
			width: 160px;
			height: 160px;
		}
		.avatar-inner {
			width: 138px;
			height: 138px;
		}
		.stats {
			gap: 1.25rem;
		}
	}
</style>
