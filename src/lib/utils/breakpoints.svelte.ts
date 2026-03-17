import { browser } from '$app/environment';

function createMediaQuery(query: string): { readonly current: boolean } {
	let matches = $state(false);

	if (browser) {
		const mql = window.matchMedia(query);
		matches = mql.matches;
		mql.addEventListener('change', (e) => {
			matches = e.matches;
		});
	}

	return {
		get current() {
			return matches;
		}
	};
}

export const breakpoints = {
	sm: createMediaQuery('(min-width: 640px)'),
	md: createMediaQuery('(min-width: 768px)'),
	lg: createMediaQuery('(min-width: 1024px)'),
	xl: createMediaQuery('(min-width: 1280px)')
};
