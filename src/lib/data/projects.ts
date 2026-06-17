export type Project = {
	title: string;
	desc: string;
	tags: string[];
	screenshots: string[];
	github?: string;
	live?: string;
	/** Surfaced on the home page when true. */
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Jatri - Multimode Travel App',
		desc: 'A multimode travel app that simplifies bus ticketing, car rentals, and group trip planning into a single platform. Serving thousands of daily commuters across Bangladesh.',
		tags: ['Dart', 'Flutter', 'Bloc', 'Google Maps SDK', 'Firebase'],
		screenshots: [
			'/screenshots/jatri/01.webp',
			'/screenshots/jatri/02.webp',
			'/screenshots/jatri/03.webp'
		],
		live: 'https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en',
		featured: true
	},
	{
		title: 'Intracity Counterman (Auto Sync)',
		desc: 'Offline-first POS ticketing app for fixed bus counters. Fetches route configs on launch, then operates fully offline. Ticket data syncs to the server automatically at periodic intervals.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Offline-First'],
		screenshots: [],
		featured: true
	},
	{
		title: 'Intracity Counterman (Manual Sync)',
		desc: 'Lightweight variant for counters with limited connectivity. Operates fully offline after initial setup. Ticket data syncs on-demand when the user triggers a manual sync.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'Offline-First'],
		screenshots: [],
		featured: true
	}
];

export const featuredProjects = projects.filter((p) => p.featured);
