<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{page.status} — Srizan</title>
</svelte:head>

<div class="error-page">
	<div class="grid-bg" aria-hidden="true"></div>
	<div class="glow-orb orb1" aria-hidden="true"></div>
	<div class="glow-orb orb2" aria-hidden="true"></div>

	<div class="inner">
		<p class="status-code">{page.status}</p>
		<h1 class="error-title">
			{#if page.status === 404}
				Page <span>Not Found</span>
			{:else}
				Something <span>Went Wrong</span>
			{/if}
		</h1>
		<p class="error-msg">
			{#if page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{page.error?.message ?? 'An unexpected error occurred.'}
			{/if}
		</p>
		<a href={resolve('/')} class="home-btn">← Back to Home</a>
	</div>
</div>

<style>
	.error-page {
		background: #0d0f14;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
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
		position: relative;
		z-index: 1;
		text-align: center;
		max-width: 480px;
	}

	.status-code {
		font-family: 'JetBrains Mono', monospace;
		font-size: clamp(5rem, 15vw, 8rem);
		font-weight: 800;
		color: rgba(99, 210, 219, 0.12);
		line-height: 1;
		letter-spacing: -0.05em;
		margin-bottom: -1rem;
		user-select: none;
	}

	.error-title {
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		font-weight: 800;
		color: #f0f2f7;
		line-height: 1.15;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
	}
	.error-title span {
		color: #63d2db;
	}

	.error-msg {
		font-size: 14px;
		line-height: 1.75;
		color: #6b7589;
		margin-bottom: 2.5rem;
	}

	.home-btn {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.05em;
		padding: 10px 24px;
		border-radius: 8px;
		background: rgba(99, 210, 219, 0.1);
		border: 1px solid rgba(99, 210, 219, 0.3);
		color: #63d2db;
		text-decoration: none;
		display: inline-block;
		transition: all 0.2s;
	}
	.home-btn:hover {
		background: rgba(99, 210, 219, 0.15);
		border-color: rgba(99, 210, 219, 0.5);
		transform: translateY(-1px);
	}
</style>
