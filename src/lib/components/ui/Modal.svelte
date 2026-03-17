<script lang="ts">
	import type { Snippet } from 'svelte';
	import { trapFocus } from '$lib/utils/a11y';

	interface Props {
		open: boolean;
		title: string;
		onclose: () => void;
		children: Snippet;
		actions?: Snippet;
		size?: 'sm' | 'md' | 'lg';
	}

	let { open, title, onclose, children, actions, size = 'md' }: Props = $props();

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) onclose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}

	function dialogRef(node: HTMLElement) {
		const cleanup = trapFocus(node);
		return { destroy: cleanup };
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal-overlay" onclick={handleBackdropClick} onkeydown={handleKeydown}>
		<div
			class="modal modal--{size}"
			role="dialog"
			aria-modal="true"
			aria-label={title}
			use:dialogRef
		>
			<div class="modal__header">
				<h2 class="modal__title">{title}</h2>
				<button class="modal__close" onclick={onclose} aria-label="Close">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 5l10 10M15 5L5 15" />
					</svg>
				</button>
			</div>
			<div class="modal__body">
				{@render children()}
			</div>
			{#if actions}
				<div class="modal__actions">
					{@render actions()}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background-color: var(--color-bg-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-4);
		z-index: var(--z-modal);
		animation: fadeIn var(--duration-fast) var(--easing-out);
	}
	.modal {
		background-color: var(--color-bg-surface);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
		max-height: 85vh;
		display: flex;
		flex-direction: column;
		animation: slideUp var(--duration-normal) var(--easing-out);
	}
	.modal--sm { width: min(400px, 100%); }
	.modal--md { width: min(560px, 100%); }
	.modal--lg { width: min(720px, 100%); }
	.modal__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-4) var(--space-6);
		border-bottom: 1px solid var(--color-border);
	}
	.modal__title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		font-family: var(--font-heading);
	}
	.modal__close {
		color: var(--color-text-tertiary);
		padding: var(--space-1);
		border-radius: var(--radius-md);
		display: flex;
	}
	.modal__close:hover {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-primary);
	}
	.modal__body {
		padding: var(--space-6);
		overflow-y: auto;
		flex: 1;
	}
	.modal__actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-3);
		padding: var(--space-4) var(--space-6);
		border-top: 1px solid var(--color-border);
	}
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	@keyframes slideUp {
		from { transform: translateY(8px); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
	}
</style>
