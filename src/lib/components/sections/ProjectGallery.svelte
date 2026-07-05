<script lang="ts">
	import { portal } from '$lib/actions/portal';

	let {
		screenshots,
		title,
		class: klass = 'aspect-[16/10]'
	}: { screenshots: string[]; title: string; class?: string } = $props();

	let index = $state(0);
	let paused = $state(false);
	let open = $state(false);
	let visible = $state(false);
	let node: HTMLElement;
	let dialog = $state<HTMLElement>();

	const prev = () => (index = (index - 1 + screenshots.length) % screenshots.length);
	const next = () => (index = (index + 1) % screenshots.length);

	// Only track visibility when there's something to auto-advance.
	$effect(() => {
		if (screenshots.length <= 1) return;
		const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), {
			threshold: 0.2
		});
		observer.observe(node);
		return () => observer.disconnect();
	});

	// Auto-advance only while on screen, not hovered, and the lightbox is closed.
	// Gating on `visible` means a 30-card page runs ~one timer per visible card, not all of them.
	$effect(() => {
		if (screenshots.length <= 1 || paused || open || !visible) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(next, 3500);
		return () => clearInterval(id);
	});

	// Lock page scroll, move focus into the lightbox, and restore it on close.
	$effect(() => {
		if (!open) return;
		const trigger = document.activeElement as HTMLElement | null;
		document.body.style.overflow = 'hidden';
		dialog?.focus();
		return () => {
			document.body.style.overflow = '';
			trigger?.focus();
		};
	});

	function onKey(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') open = false;
		else if (e.key === 'ArrowLeft') prev();
		else if (e.key === 'ArrowRight') next();
		else if (e.key === 'Tab') {
			// Trap focus within the dialog so Tab can't reach the page behind it.
			const focusable = dialog?.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			if (!focusable?.length) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const active = document.activeElement;
			if (e.shiftKey && (active === first || active === dialog)) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && active === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}
</script>

<div
	bind:this={node}
	class="group/gallery relative overflow-hidden bg-surface {klass}"
	role="group"
	aria-label="{title} screenshots"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	{#each screenshots as src, i (src)}
		<div
			class="absolute inset-0 transition-all duration-700 ease-out {i === index
				? 'scale-100 opacity-100'
				: 'scale-105 opacity-0'}"
		>
			<!-- blurred copy fills the letterbox gaps -->
			<img
				{src}
				alt=""
				aria-hidden="true"
				loading="lazy"
				class="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
			/>
			<!-- mobile: full-bleed, anchored to the top; sm+: contained over the blur fill -->
			<img
				{src}
				alt="{title} screenshot {i + 1}"
				loading="lazy"
				class="absolute inset-0 h-full w-full object-cover object-top sm:object-contain"
			/>
		</div>
	{/each}

	<!-- depth/legibility wash + subtle lift on hover -->
	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-t from-surface/60 via-transparent to-transparent transition-opacity duration-500 group-hover/gallery:opacity-60"
	></div>

	<!-- click anywhere on the image to open the lightbox -->
	<button
		type="button"
		aria-label="View {title} screenshot full size"
		onclick={() => (open = true)}
		class="absolute inset-0 z-10 cursor-zoom-in"
	></button>

	{#if screenshots.length > 1}
		<!-- prev / next arrows, revealed on hover -->
		<button
			type="button"
			aria-label="Previous screenshot"
			onclick={prev}
			class="absolute top-1/2 left-2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-surface/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/gallery:opacity-100 hover:bg-surface/90"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
				<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
		<button
			type="button"
			aria-label="Next screenshot"
			onclick={next}
			class="absolute top-1/2 right-2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-surface/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/gallery:opacity-100 hover:bg-surface/90"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
				<path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>

		<div class="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
			{#each screenshots as src, i (src)}
				<button
					type="button"
					aria-label="Show screenshot {i + 1}"
					onclick={() => (index = i)}
					class="h-1.5 rounded-full transition-all duration-300 {i === index
						? 'w-5 bg-white'
						: 'w-1.5 bg-white/40 hover:bg-white/70'}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<svelte:window onkeydown={onKey} />

{#if open}
	<div
		bind:this={dialog}
		use:portal
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm outline-none md:p-8"
		role="dialog"
		aria-modal="true"
		aria-label="{title} screenshots"
	>
		<!-- backdrop: click to close -->
		<button
			class="absolute inset-0 cursor-zoom-out"
			aria-label="Close"
			onclick={() => (open = false)}
		></button>

		<img
			src={screenshots[index]}
			alt="{title} screenshot {index + 1}"
			class="relative max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
		/>

		<!-- close -->
		<button
			type="button"
			aria-label="Close"
			onclick={() => (open = false)}
			class="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
				<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
			</svg>
		</button>

		{#if screenshots.length > 1}
			<button
				type="button"
				aria-label="Previous screenshot"
				onclick={prev}
				class="absolute top-1/2 left-4 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
					<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<button
				type="button"
				aria-label="Next screenshot"
				onclick={next}
				class="absolute top-1/2 right-4 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-6 w-6">
					<path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>

			<div
				class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
			>
				{index + 1} / {screenshots.length}
			</div>
		{/if}
	</div>
{/if}
