import type { PageLoad } from './$types';

type Post = {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
};

export const load: PageLoad = async () => {
	const modules = import.meta.glob('/src/content/posts/*.md', { eager: true });

	const posts: Post[] = (Object.entries(modules) as [string, Record<string, unknown>][])
		.map(([path, module]) => {
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			const metadata = module.metadata as Record<string, unknown> | undefined;
			return {
				slug,
				title: (metadata?.title as string) ?? 'Untitled',
				description: (metadata?.description as string) ?? '',
				date: (metadata?.date as string) ?? '',
				tags: (metadata?.tags as string[]) ?? []
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
