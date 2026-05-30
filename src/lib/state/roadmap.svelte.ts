import type { RoadmapStep } from '$lib/types/roadmap';

function createRoadmapState() {
	let steps = $state<RoadmapStep[]>([]);
	let currentStepIndex = $state(0);
	const currentStep = $derived(steps[currentStepIndex] ?? null);
	const completedSteps = $derived(steps.filter((s) => s.status === 'completed'));
	const progress = $derived(steps.length > 0 ? completedSteps.length / steps.length : 0);
	const upcomingDeadlines = $derived(
		steps
			.filter((s) => s.dueDate && s.status !== 'completed' && s.status !== 'skipped')
			.sort((a, b) => (a.dueDate! > b.dueDate! ? 1 : -1))
	);
	const overdueSteps = $derived(steps.filter((s) => s.status === 'overdue'));

	return {
		get steps() {
			return steps;
		},
		get currentStep() {
			return currentStep;
		},
		get currentStepIndex() {
			return currentStepIndex;
		},
		get completedSteps() {
			return completedSteps;
		},
		get progress() {
			return progress;
		},
		get upcomingDeadlines() {
			return upcomingDeadlines;
		},
		get overdueSteps() {
			return overdueSteps;
		},
		setSteps(s: RoadmapStep[]) {
			steps = s;
			currentStepIndex = 0;
		},
		setCurrentStep(index: number) {
			currentStepIndex = index;
		},
		completeStep(id: string) {
			steps = steps.map((s) =>
				s.id === id
					? { ...s, status: 'completed' as const, completedAt: new Date().toISOString() }
					: s
			);
		},
		resetSteps() {
			steps = [];
			currentStepIndex = 0;
		}
	};
}

export const roadmap = createRoadmapState();
