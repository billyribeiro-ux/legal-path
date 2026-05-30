import { browser } from '$app/environment';

const STORAGE_KEY = 'lp-disclaimers';

function createDisclaimerState() {
	let accepted = $state<Set<string>>(new Set());

	if (browser) {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			try {
				accepted = new Set(JSON.parse(saved));
			} catch {
				// ignore corrupted data
			}
		}
	}

	function persist() {
		if (browser) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify([...accepted]));
		}
	}

	return {
		hasAccepted(id: string): boolean {
			return accepted.has(id);
		},
		accept(id: string) {
			accepted = new Set([...accepted, id]);
			persist();
		},
		get hasAcceptedGlobal() {
			return accepted.has('global');
		},
		acceptGlobal() {
			accepted = new Set([...accepted, 'global']);
			persist();
		},
		reset() {
			accepted = new Set();
			if (browser) localStorage.removeItem(STORAGE_KEY);
		}
	};
}

export const disclaimers = createDisclaimerState();
