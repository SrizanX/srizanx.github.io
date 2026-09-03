export type Role = {
	title: string;
	/** `YYYY-MM` (preferred, renders as "Mar 2025") or a bare `YYYY`. */
	start: string;
	/** Inclusive end, same format as `start`; `null` means the role is ongoing ("Present"). */
	end: string | null;
	points: string[];
};

export type Company = {
	company: string;
	url: string;
	roles: Role[];
};

export const experience: Company[] = [
	{
		company: 'Jatri Services Ltd',
		url: 'https://jatri.co/',
		roles: [
			{
				title: 'Sr. Software Engineer',
				start: '2026-01',
				end: '2026-08',
				points: [
					'Owned 15+ B2B ticketing apps (bus, launch, toll plaza) sharing a common printing core with domain-specific business logic.',
					'Implemented a runtime disaster recovery mechanism to switch API base URLs dynamically during primary server outages.',
					'Delivered a code-wide migration to a new design system, updating shared components and screen styling across all flows.'
				]
			},
			{
				title: 'Software Engineer',
				start: '2023-01',
				end: '2025-12',
				points: [
					'Engineered two mobile apps from scratch using Jetpack Compose and modern Android architecture.',
					'Fixed memory leaks using LeakCanary, resolving repeated out-of-memory crashes.',
					'Designed a reusable printing module supporting both USB and Bluetooth receipt printing.',
					'Built automated CI/CD pipelines with GitHub Actions to streamline test builds to Firebase App Distribution.'
				]
			},
			{
				title: 'Jr. Software Engineer',
				start: '2022-04',
				end: '2022-12',
				points: [
					'Built a custom QR code scanner module leveraging CameraX and ML Kit.',
					'Developed two toll-collection apps, including a specialized solution for the Mayor Mohammad Hanif Flyover.',
					'Modernized the codebase by migrating Dagger to Hilt, adopting Clean Architecture, and replacing RxJava with Kotlin Flow.',
					"Maintained legacy ticket-selling applications for 'Gulshan Chaka' and 'Dhaka Chaka' bus lines to ensure uninterrupted operations."
				]
			}
		]
	}
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Renders `YYYY-MM` as "Mon YYYY", falling back to the bare year for a `YYYY` value. */
const formatDate = (value: string) => {
	const [year, month] = value.split('-');
	const name = MONTHS[Number(month) - 1];
	return name ? `${name} ${year}` : year;
};

const formatEnd = (end: string | null) => (end === null ? 'Present' : formatDate(end));

export const rolePeriod = (role: Role) => `${formatDate(role.start)} — ${formatEnd(role.end)}`;

// Spans the earliest start to the latest end across all roles ("Feb 2022 — Present").
// `YYYY-MM` and `YYYY` both compare correctly as strings, so no date parsing is needed.
export const companyPeriod = (roles: Role[]) => {
	const start = roles.reduce(
		(earliest, r) => (r.start < earliest ? r.start : earliest),
		roles[0].start
	);
	const ongoing = roles.some((r) => r.end === null);
	const end = ongoing
		? null
		: roles.reduce((latest, r) => (r.end! > latest ? r.end! : latest), roles[0].end!);
	return `${formatDate(start)} — ${formatEnd(end)}`;
};
