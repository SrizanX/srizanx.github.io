<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div class="footer-top">
			<div>
				<a href={resolve('/')} class="footer-logo">Mahdi Saifullah Srizan</a>
				<p class="footer-sub">Android Developer</p>
			</div>
		</div>

		<div class="footer-bottom">
			<p class="footer-copy">&copy; {new Date().getFullYear()} Srizan. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: #0d0f14;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		font-family: 'Syne', sans-serif;
	}

	.footer-inner {
		max-width: 900px;
		margin: 0 auto;
		padding: 3rem 2rem;
	}

	.footer-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.footer-logo {
		font-size: 15px;
		font-weight: 700;
		color: #f0f2f7;
		text-decoration: none;
		letter-spacing: -0.01em;
		transition: color 0.2s;
	}
	.footer-logo:hover {
		color: #63d2db;
	}

	.footer-sub {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #4a5568;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin-top: 4px;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding-top: 1.5rem;
	}

	.footer-copy {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: #4a5568;
		letter-spacing: 0.08em;
		text-align: center;
	}
</style>
