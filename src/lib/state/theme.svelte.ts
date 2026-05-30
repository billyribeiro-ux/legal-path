import { browser } from '$app/environment';

type ThemePreference = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

function createThemeState() {
	let preference = $state<ThemePreference>('system');
	let mediaQueryMatches = $state(false);

	if (browser) {
		const saved = localStorage.getItem('lp-theme') as ThemePreference | null;
		if (saved) preference = saved;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQueryMatches = mediaQuery.matches;
		mediaQuery.addEventListener('change', (e) => {
			mediaQueryMatches = e.matches;
		});
	}

	const resolved = $derived<ResolvedTheme>(
		preference === 'system' ? (mediaQueryMatches ? 'dark' : 'light') : preference
	);

	$effect(() => {
		if (browser) {
			localStorage.setItem('lp-theme', preference);
		}
	});

	$effect(() => {
		if (browser) {
			document.documentElement.setAttribute('data-theme', resolved);
		}
	});

	return {
		get preference() {
			return preference;
		},
		set preference(v: ThemePreference) {
			preference = v;
		},
		get resolved() {
			return resolved;
		},
		get isDark() {
			return resolved === 'dark';
		},
		toggle() {
			preference = resolved === 'dark' ? 'light' : 'dark';
		}
	};
}

export const theme = createThemeState();
