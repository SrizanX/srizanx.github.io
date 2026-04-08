import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`/src/content/posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: {
				title: post.metadata?.title ?? 'Untitled',
				description: post.metadata?.description ?? '',
				date: post.metadata?.date ?? '',
				tags: post.metadata?.tags ?? []
			}
		};
	} catch {
		error(404, 'Post not found');
	}
};
