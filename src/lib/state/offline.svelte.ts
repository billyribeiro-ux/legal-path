import { browser } from '$app/environment';

export interface QueuedOperation {
	id: string;
	method: string;
	url: string;
	body?: unknown;
	createdAt: string;
}

function createOfflineState() {
	let isOnline = $state(true);
	let pendingOperations = $state<QueuedOperation[]>([]);
	const hasPendingSync = $derived(pendingOperations.length > 0);
	const pendingCount = $derived(pendingOperations.length);

	if (browser) {
		isOnline = navigator.onLine;
		window.addEventListener('online', () => {
			isOnline = true;
		});
		window.addEventListener('offline', () => {
			isOnline = false;
		});
	}

	return {
		get isOnline() {
			return isOnline;
		},
		get pendingOperations() {
			return pendingOperations;
		},
		get hasPendingSync() {
			return hasPendingSync;
		},
		get pendingCount() {
			return pendingCount;
		},
		enqueue(op: Omit<QueuedOperation, 'id' | 'createdAt'>) {
			pendingOperations = [
				...pendingOperations,
				{ ...op, id: crypto.randomUUID(), createdAt: new Date().toISOString() }
			];
		},
		dequeue(id: string) {
			pendingOperations = pendingOperations.filter((o) => o.id !== id);
		},
		clearQueue() {
			pendingOperations = [];
		}
	};
}

export const offline = createOfflineState();
