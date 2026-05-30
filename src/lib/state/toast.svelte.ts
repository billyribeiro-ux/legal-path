export interface ToastItem {
	id: string;
	type: 'success' | 'error' | 'warning' | 'info';
	message: string;
	duration: number;
}

function createToastState() {
	let items = $state<ToastItem[]>([]);

	function add(toast: Omit<ToastItem, 'id' | 'duration'> & { duration?: number }) {
		const id = crypto.randomUUID();
		const duration = toast.duration ?? 5000;
		items.push({ ...toast, id, duration });
		if (duration > 0) {
			setTimeout(() => dismiss(id), duration);
		}
	}

	function dismiss(id: string) {
		items = items.filter((t) => t.id !== id);
	}

	return {
		get items() {
			return items;
		},
		add,
		dismiss,
		success(message: string) {
			add({ type: 'success', message });
		},
		error(message: string) {
			add({ type: 'error', message, duration: 8000 });
		},
		warning(message: string) {
			add({ type: 'warning', message });
		},
		info(message: string) {
			add({ type: 'info', message });
		}
	};
}

export const toasts = createToastState();
