<script lang="ts">
	import type { ToastItem } from '$lib/state/toast.svelte';

	interface Props {
		toast: ToastItem;
		ondismiss: (id: string) => void;
	}

	let { toast, ondismiss }: Props = $props();

	const icons: Record<string, string> = {
		success: 'M5 13l4 4L19 7',
		error: 'M6 6l12 12M18 6L6 18',
		warning: 'M12 9v4m0 4h.01',
		info: 'M12 16v-4m0-4h.01'
	};
</script>

<div class="toast toast--{toast.type}" role="alert">
	<svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
		<path d={icons[toast.type]} />
	</svg>
	<p class="toast__message">{toast.message}</p>
	<button class="toast__dismiss" onclick={() => ondismiss(toast.id)} aria-label="Dismiss">
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M4 4l8 8M12 4L4 12" />
		</svg>
	</button>
</div>

<style>
	.toast {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		background-color: var(--color-bg-surface);
		border-left: 4px solid;
		animation: slideIn var(--duration-normal) var(--easing-out);
		max-width: 420px;
	}
	.toast--success { border-left-color: var(--color-success); }
	.toast--error { border-left-color: var(--color-error); }
	.toast--warning { border-left-color: var(--color-warning); }
	.toast--info { border-left-color: var(--color-info); }
	.toast__icon {
		flex-shrink: 0;
		margin-top: 2px;
	}
	.toast--success .toast__icon { color: var(--color-success); }
	.toast--error .toast__icon { color: var(--color-error); }
	.toast--warning .toast__icon { color: var(--color-warning); }
	.toast--info .toast__icon { color: var(--color-info); }
	.toast__message {
		flex: 1;
		font-size: var(--text-sm);
		color: var(--color-text-primary);
	}
	.toast__dismiss {
		flex-shrink: 0;
		color: var(--color-text-tertiary);
		padding: var(--space-1);
		border-radius: var(--radius-sm);
	}
	.toast__dismiss:hover {
		color: var(--color-text-primary);
		background-color: var(--color-bg-sunken);
	}
	@keyframes slideIn {
		from { transform: translateX(100%); opacity: 0; }
		to { transform: translateX(0); opacity: 1; }
	}
</style>
