/**
 * Svelte action that reveals elements when they scroll into view.
 * Uses IntersectionObserver for performance.
 *
 * Usage: <div use:reveal> or <div use:reveal={{ delay: 200 }}>
 */
export interface RevealOptions {
	/** Delay in ms before the animation starts */
	delay?: number;
	/** Duration in ms of the animation */
	duration?: number;
	/** How far the element starts offset (px) */
	y?: number;
	/** Threshold (0-1) of element visibility to trigger */
	threshold?: number;
	/** Whether to only animate once */
	once?: boolean;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { delay = 0, duration = 600, y = 30, threshold = 0.15, once = true } = options;

	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = `translateY(${y}px)`;
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Stagger-reveal children of a container.
 * Each direct child gets an incremental delay.
 *
 * Usage: <div use:staggerReveal> or <div use:staggerReveal={{ stagger: 100 }}>
 */
export interface StaggerOptions extends RevealOptions {
	/** Delay increment between each child (ms) */
	stagger?: number;
}

export function staggerReveal(node: HTMLElement, options: StaggerOptions = {}) {
	const {
		stagger = 100,
		duration = 600,
		y = 30,
		threshold = 0.1,
		once = true,
		delay = 0
	} = options;

	const children = Array.from(node.children) as HTMLElement[];
	children.forEach((child, i) => {
		child.style.opacity = '0';
		child.style.transform = `translateY(${y}px)`;
		child.style.transition = `opacity ${duration}ms ease-out ${delay + i * stagger}ms, transform ${duration}ms ease-out ${delay + i * stagger}ms`;
	});

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					children.forEach((child) => {
						child.style.opacity = '1';
						child.style.transform = 'translateY(0)';
					});
					if (once) observer.unobserve(node);
				} else if (!once) {
					children.forEach((child) => {
						child.style.opacity = '0';
						child.style.transform = `translateY(${y}px)`;
					});
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
