export type ProjectCategory = 'professional' | 'personal';

/** Who the app is for — shown as a badge on each project card. */
export type ProjectModel = 'b2b' | 'b2c' | 'personal';

export const projectModelLabels: Record<ProjectModel, string> = {
	b2b: 'B2B',
	b2c: 'B2C',
	personal: 'Personal'
};

export type Project = {
	title: string;
	desc: string;
	tags: string[];
	screenshots: string[];
	/** Client/work apps vs. personal/open-source builds. Drives the /projects tabs. */
	category: ProjectCategory;
	/** Business model / audience — rendered as a badge on the card. */
	model: ProjectModel;
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
		model: 'b2c',
		live: 'https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en',
		featured: true
	},
	{
		title: 'Intracity Counterman (Auto Sync)',
		desc: 'Offline-first POS ticketing app for fixed bus counters. Fetches route configs on launch, then operates fully offline. Ticket data syncs to the server automatically at periodic intervals.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Offline-First'],
		screenshots: [],
		category: 'professional',
		model: 'b2b'
	},
	{
		title: 'Intracity Counterman (Manual Sync)',
		desc: 'Lightweight variant for counters with limited connectivity. Operates fully offline after initial setup. Ticket data syncs on-demand when the user triggers a manual sync.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'Offline-First'],
		screenshots: [],
		category: 'professional',
		model: 'b2b'
	},
	{
		title: 'Toll Collection',
		desc: 'Offline-first POS app for booth-based toll collection on Sunmi terminals. Records vehicle passages, prints receipts on-device, and queues transactions locally, syncing to the central server in the background when connectivity is available.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Sunmi'],
		screenshots: ['/screenshots/toll/01.webp'],
		category: 'professional',
		model: 'b2b',
		featured: true
	},
	{
		title: 'Toll Collection (Hanif Flyover)',
		desc: 'Specialized toll collection build tailored for the Hanif Flyover, adapting the toll POS workflow to the flyover’s vehicle classes and fare structure. Runs fully offline with automatic background sync, and prints on both Sunmi terminals and USB printers for fast receipts with automatic paper cut.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Sunmi', 'USB Printing'],
		screenshots: ['/screenshots/toll-hanif/01.webp', '/screenshots/toll-hanif/02.webp'],
		category: 'professional',
		model: 'b2b',
		featured: true
	},
	{
		title: 'Launch Deck Ticketing',
		desc: 'Offline-first POS app for issuing deck tickets aboard passenger launches. Handles fare selection, local storage of sales, and background sync. Prints on Sunmi terminals and can also issue vehicle ferry tickets over Bluetooth from any phone.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Sunmi', 'Bluetooth Printing'],
		screenshots: [
			'/screenshots/deck/01.webp',
			'/screenshots/deck/02.webp',
			'/screenshots/deck/03.webp',
			'/screenshots/deck/04.webp'
		],
		category: 'professional',
		model: 'b2b',
		featured: true
	},
	{
		title: 'Cruise Deck Ticketing (Saint Martin)',
		desc: 'Deck ticketing POS for Saint Martin cruise ships, tuned to cruise routes and passenger fares. Operates fully offline on Sunmi terminals with on-device printing and automatic background sync to the central server.',
		tags: ['Kotlin', 'Room', 'Retrofit', 'WorkManager', 'Sunmi'],
		screenshots: [
			'/screenshots/deck-cruise/01.webp',
			'/screenshots/deck-cruise/02.webp',
			'/screenshots/deck-cruise/03.webp',
			'/screenshots/deck-cruise/04.webp'
		],
		category: 'professional',
		model: 'b2b',
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
		model: 'personal',
		github: 'https://github.com/srizanx/xtra_pr_71',
		featured: true
	}
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories: { value: ProjectCategory; label: string }[] = [
	{ value: 'professional', label: 'Professional' },
	{ value: 'personal', label: 'Personal' }
];
