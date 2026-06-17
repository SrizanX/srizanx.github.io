/**
 * Svelte action that relocates a node to another part of the DOM (default: <body>).
 *
 * Useful for overlays/modals: a `position: fixed` element is positioned relative to
 * the nearest ancestor with a `transform`/`filter`/`will-change`, so rendering it
 * inside a transformed card traps it. Portalling to <body> escapes that.
 *
 * Usage: <div use:portal> or <div use:portal={'#some-target'}>
 */
export function portal(node: HTMLElement, target: HTMLElement | string = document.body) {
	const resolve = (t: HTMLElement | string) =>
		typeof t === 'string' ? document.querySelector<HTMLElement>(t) : t;

	let host = resolve(target);
	host?.appendChild(node);

	return {
		update(newTarget: HTMLElement | string) {
			host = resolve(newTarget);
			host?.appendChild(node);
		},
		destroy() {
			node.remove();
		}
	};
}
