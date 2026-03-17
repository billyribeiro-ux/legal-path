import type { Case } from '$lib/types/case';

function createCaseState() {
	let activeCase: Case | null = $state(null);
	let cases: Case[] = $state([]);
	const activeCaseId = $derived(activeCase?.id ?? null);
	const activeCaseTitle = $derived(activeCase?.title ?? '');
	const caseCount = $derived(cases.length);

	return {
		get activeCase() {
			return activeCase;
		},
		get cases() {
			return cases;
		},
		get activeCaseId() {
			return activeCaseId;
		},
		get activeCaseTitle() {
			return activeCaseTitle;
		},
		get caseCount() {
			return caseCount;
		},
		setActiveCase(c: Case) {
			activeCase = c;
		},
		clearActiveCase() {
			activeCase = null;
		},
		setCases(list: Case[]) {
			cases = list;
		},
		addCase(c: Case) {
			cases = [...cases, c];
		},
		updateCase(id: string, updates: Partial<Case>) {
			cases = cases.map((c) => (c.id === id ? { ...c, ...updates } : c));
			if (activeCase?.id === id) {
				activeCase = { ...activeCase, ...updates } as Case;
			}
		},
		removeCase(id: string) {
			cases = cases.filter((c) => c.id !== id);
			if (activeCase?.id === id) activeCase = null;
		}
	};
}

export const caseState = createCaseState();
