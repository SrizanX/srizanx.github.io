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
				title: 'Sr. Software Engineer - Mobile',
				start: '2026-01',
				end: '2026-08',
				points: [
					'Implemented a disaster recovery mechanism that lets the app fetch and switch to a new API base URL at runtime, keeping it usable when the primary server goes down.',
					'Migrated the app to a new design system, updating shared components and screen styling across the codebase.'
				]
			},
			{
				title: 'Software Engineer III - Mobile',
				start: '2025',
				end: '2026',
				points: [
					'Active contributor to the development of the Jatri User App, a multimodal transportation platform for Android and iOS, built with Flutter to deliver a seamless cross-platform experience.',
					'Maintained all the intracity bus, toll plaza and water transport POS apps.'
				]
			},
			{
				title: 'Software Engineer I - Android',
				start: '2024',
				end: '2025',
				points: [
					'Collaborated with cross-functional teams to define, design, and ship new features.',
					'Participated in code reviews and improved code quality and maintainability.'
				]
			},
			{
				title: 'Software Engineer',
				start: '2023',
				end: '2024',
				points: [
					'Participated in the modernization of 10+ legacy Android applications and implemented modern architecture patterns, resulting in improved maintainability and performance.',
					'Contributed to the development of the dynamic ticket format system that allows companies to customize their ticket layouts without code changes, improving flexibility and reducing maintenance overhead.',
					'Developed a CI/CD pipeline using GitHub Actions, automating build and deliver to testers and production, resulting in a 30% reduction in deployment time and improved release reliability.'
				]
			},
			{
				title: 'Jr. Software Engineer',
				start: '2022-04',
				end: '2023',
				points: [
					'Began my software development journey, building a strong foundation in Android development and contributing to impactful projects.',
					'Key contributor to the Water Transport CabinMan App, enabling efficient launch cabin operations and integrating thermal ticket printing with the RPP300 device.'
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
