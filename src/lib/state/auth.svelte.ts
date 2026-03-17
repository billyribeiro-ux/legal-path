import { browser } from '$app/environment';
import type { User } from '$lib/types/user';

function createAuthState() {
	let user: User | null = $state(null);
	let token: string | null = $state(null);
	let refreshToken: string | null = $state(null);
	const isAuthenticated = $derived(user !== null && token !== null);

	if (browser) {
		const savedToken = localStorage.getItem('lp-token');
		const savedRefresh = localStorage.getItem('lp-refresh-token');
		if (savedToken) token = savedToken;
		if (savedRefresh) refreshToken = savedRefresh;
	}

	return {
		get user() {
			return user;
		},
		get token() {
			return token;
		},
		get isAuthenticated() {
			return isAuthenticated;
		},
		setAuth(u: User, t: string, rt?: string) {
			user = u;
			token = t;
			if (rt) refreshToken = rt;
			if (browser) {
				localStorage.setItem('lp-token', t);
				if (rt) localStorage.setItem('lp-refresh-token', rt);
			}
		},
		clearAuth() {
			user = null;
			token = null;
			refreshToken = null;
			if (browser) {
				localStorage.removeItem('lp-token');
				localStorage.removeItem('lp-refresh-token');
			}
		},
		getToken() {
			return token;
		},
		getRefreshToken() {
			return refreshToken;
		}
	};
}

export const auth = createAuthState();
