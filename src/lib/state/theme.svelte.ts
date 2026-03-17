import { browser } from '$app/environment';

type ThemePreference = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

function createThemeState() {
	let preference: ThemePreference = $state('system');
	let resolved: ResolvedTheme = $state('light');

	if (browser) {
		const saved = localStorage.getItem('lp-theme') as ThemePreference | null;
		if (saved) preference = saved;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		function resolve() {
			if (preference === 'system') {
				resolved = mediaQuery.matches ? 'dark' : 'light';
			} else {
				resolved = preference;
			}
			document.documentElement.setAttribute('data-theme', resolved);
		}

		resolve();
		mediaQuery.addEventListener('change', resolve);

		$effect(() => {
			localStorage.setItem('lp-theme', preference);
			resolve();
		});
	}

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
