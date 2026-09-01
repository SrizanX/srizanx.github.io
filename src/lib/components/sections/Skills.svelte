<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';
	import { skillGroups } from '$lib/data/skills';
</script>

<section id="skills" class="bg-surface-light py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 use:reveal class="text-3xl font-bold">Skills & Tech Stack</h2>
		<div use:reveal={{ delay: 100 }} class="mt-2 h-1 w-16 rounded bg-primary-light"></div>

		<div use:staggerReveal={{ delay: 150 }} class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each skillGroups as group (group.category)}
				<div>
					<h3 class="mb-3 text-sm font-semibold tracking-wider text-primary-light uppercase">
						{group.category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each group.skills as skill (skill.name)}
							<div class="group/skill relative hover:z-30">
								<span
									class="inline-block cursor-default rounded-full border border-white/10 bg-surface px-3 py-1.5 text-sm text-text-muted transition-all duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:border-primary-light/50 group-hover/skill:text-primary-light group-hover/skill:shadow-md group-hover/skill:shadow-primary-light/10"
								>
									{skill.name}
								</span>

								<!-- hover popover -->
								<div
									role="tooltip"
									class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2 translate-y-1 scale-95 opacity-0 transition-all duration-200 ease-out group-hover/skill:translate-y-0 group-hover/skill:scale-100 group-hover/skill:opacity-100"
								>
									<div
										class="rounded-lg border border-primary-light/30 bg-surface/95 px-3.5 py-2.5 text-left text-xs leading-relaxed text-text shadow-xl shadow-black/50 backdrop-blur-sm"
									>
										<span
											class="mb-1 block text-[0.65rem] font-semibold tracking-wider text-primary-light uppercase"
											>{skill.name}</span
										>
										{skill.description}
									</div>
									<!-- arrow -->
									<div
										class="absolute top-full left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-b border-primary-light/30 bg-surface"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
