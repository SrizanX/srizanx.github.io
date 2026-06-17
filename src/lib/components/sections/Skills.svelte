<script lang="ts">
	import { reveal, staggerReveal } from '$lib/actions/reveal';

	type Skill = { name: string; description: string };
	type SkillGroup = { category: string; skills: Skill[] };

	const skillGroups: SkillGroup[] = [
		{
			category: 'Languages',
			skills: [
				{
					name: 'Kotlin',
					description: 'My primary language — coroutines, Flow, and idiomatic null-safe code.'
				},
				{
					name: 'Java',
					description: 'Where it started; still fluent for legacy modules and interop.'
				},
				{ name: 'Dart', description: 'The day-to-day language behind my Flutter apps.' },
				{ name: 'TypeScript', description: 'Type-safe web work — including this very portfolio.' }
			]
		},
		{
			category: 'Android',
			skills: [
				{
					name: 'Jetpack Compose',
					description: 'Modern declarative UI — my default for new Android screens.'
				},
				{
					name: 'XML Views',
					description: 'Battle-tested with the classic view system and custom views.'
				},
				{ name: 'Room DB', description: 'Local persistence and offline-first storage done right.' },
				{
					name: 'Hilt / Dagger',
					description: 'Compile-time dependency injection for apps that scale.'
				},
				{
					name: 'Coroutines',
					description: 'Structured concurrency for clean async and background work.'
				}
			]
		},
		{
			category: 'Architecture',
			skills: [
				{ name: 'MVVM', description: 'Reactive, testable separation of UI and state.' },
				{ name: 'MVI', description: 'Unidirectional, predictable state for complex screens.' },
				{
					name: 'Clean Architecture',
					description: 'Layered, decoupled code that survives feature growth.'
				},
				{
					name: 'Multi-Module',
					description: 'Faster builds and clear boundaries across large codebases.'
				}
			]
		},
		{
			category: 'Networking',
			skills: [
				{ name: 'Retrofit', description: 'Type-safe REST clients — my go-to for talking to APIs.' },
				{ name: 'OkHttp', description: 'Interceptors, caching, and fine-grained request control.' },
				{ name: 'Ktor', description: 'Kotlin-native client for multiplatform networking.' },
				{
					name: 'WebSockets',
					description: 'Real-time, bidirectional features like live chat and sync.'
				},
				{
					name: 'REST APIs',
					description: 'Designing and consuming clean, well-documented endpoints.'
				}
			]
		},
		{
			category: 'Tools & Workflow',
			skills: [
				{ name: 'Android Studio', description: 'Home turf — profiling, debugging, and tooling.' },
				{ name: 'Git', description: 'Confident with branching, rebasing, and a clean history.' },
				{ name: 'Firebase', description: 'Auth, Firestore, Cloud Messaging, and crash reporting.' },
				{
					name: 'CI/CD',
					description: 'Automated builds, signing, and releases via GitHub Actions.'
				},
				{
					name: 'Agile / Scrum',
					description: 'Sprints, standups, and shipping iteratively in a team.'
				}
			]
		},
		{
			category: 'Cross-Platform',
			skills: [
				{
					name: 'Flutter',
					description: 'Production apps from a single, expressive Dart codebase.'
				},
				{
					name: 'Kotlin Multiplatform (KMP)',
					description: 'Sharing business logic across Android and iOS.'
				}
			]
		},
		{
			category: 'Hobby / Exploring',
			skills: [
				{ name: 'Spring', description: 'Exploring backend services and REST APIs in Java/Kotlin.' },
				{ name: 'Svelte', description: 'Building fast, lightweight web UIs — like this site.' },
				{ name: 'NestJS', description: 'Structured Node.js backends for side projects.' }
			]
		}
	];
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
