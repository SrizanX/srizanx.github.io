export type Role = {
	title: string;
	start: string;
	/** Inclusive end; `null` means the role is ongoing ("Present"). */
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
				title: 'Software Engineer III - Mobile',
				start: '2025',
				end: null,
				points: [
					'Active contributor to the development of the Jatri User App, a multimodal transportation platform for Android and iOS, built with Flutter to deliver a seamless cross-platform experience.',
					'Maintain all the intracity bus, toll plaza and water transport pos apps.'
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
				start: '2022',
				end: '2023',
				points: [
					'Began my software development journey, building a strong foundation in Android development and contributing to impactful projects.',
					'Key contributor to the Water Transport CabinMan App, enabling efficient launch cabin operations and integrating thermal ticket printing with the RPP300 device.'
				]
			}
		]
	}
];

const formatYear = (end: string | null) => end ?? 'Present';

export const rolePeriod = (role: Role) => `${role.start} — ${formatYear(role.end)}`;

// Roles are listed latest-first, so the overall tenure spans the last role's
// start to the first role's end (e.g. "2022 — Present").
export const companyPeriod = (roles: Role[]) =>
	`${roles[roles.length - 1].start} — ${formatYear(roles[0].end)}`;
