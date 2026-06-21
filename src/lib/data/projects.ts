export type ProjectCategory = 'professional' | 'personal';

export type Project = {
	title: string;
	desc: string;
	tags: string[];
	screenshots: string[];
	/** Client/work apps vs. personal/open-source builds. Drives the /projects tabs. */
	category: ProjectCategory;
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
		screenshots: ['/screenshots/jatri/01.webp', '/screenshots/jatri/02.webp'],
		category: 'professional',
		live: 'https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en',
		featured: true
	},
	{
		title: 'Intracity Counterman (Auto Sync)',
		desc: 'Offline-first POS ticketing app for fixed bus counters. Fetches route configs on launch, then operates fully offline. Ticket data syncs to the server automatically at periodic intervals.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Offline-First'],
		screenshots: [],
		category: 'professional',
		featured: true
	},
	{
		title: 'Intracity Counterman (Manual Sync)',
		desc: 'Lightweight variant for counters with limited connectivity. Operates fully offline after initial setup. Ticket data syncs on-demand when the user triggers a manual sync.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'Offline-First'],
		screenshots: [],
		category: 'professional',
		featured: true
	},
	{
		title: 'XTRA PR71 Router Controller',
		desc: 'Open-source Android app to control and manage XTRA PR71 pocket routers — power off, restart, and reset remotely, toggle mobile data, monitor connection status, and read or send SMS through the router SIM. Credentials are stored on-device and never sent to external servers.',
		tags: ['Dart', 'Flutter', 'Bloc', 'Freezed', 'Open Source'],
		screenshots: [
			'/screenshots/xtra-pr71/01.webp',
			'/screenshots/xtra-pr71/02.webp',
			'/screenshots/xtra-pr71/03.webp',
			'/screenshots/xtra-pr71/04.webp',
			'/screenshots/xtra-pr71/05.webp',
			'/screenshots/xtra-pr71/06.webp'
		],
		category: 'personal',
		github: 'https://github.com/srizanx/xtra_pr_71'
	}
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: { value: ProjectCategory; label: string }[] = [
	{ value: 'professional', label: 'Professional' },
	{ value: 'personal', label: 'Personal' }
];
