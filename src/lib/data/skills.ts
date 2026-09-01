export type Skill = { name: string; description: string };
export type SkillGroup = { category: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
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
