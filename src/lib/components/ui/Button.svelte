<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		loading?: boolean;
		fullWidth?: boolean;
		children: Snippet;
		icon?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		loading = false,
		fullWidth = false,
		disabled = false,
		children,
		icon,
		...rest
	}: Props = $props();
</script>

<button
	class="btn btn--{variant} btn--{size}"
	class:btn--full={fullWidth}
	disabled={disabled || loading}
	aria-busy={loading}
	{...rest}
>
	{#if loading}
		<span class="btn__spinner" aria-hidden="true"></span>
	{:else if icon}
		<span class="btn__icon">{@render icon()}</span>
	{/if}
	<span class="btn__label">{@render children()}</span>
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		border-radius: var(--radius-md);
		font-family: var(--font-body);
		font-weight: var(--weight-medium);
		transition: background-color var(--duration-fast) var(--easing-default),
			color var(--duration-fast) var(--easing-default),
			box-shadow var(--duration-fast) var(--easing-default);
		white-space: nowrap;
		cursor: pointer;
		border: 1px solid transparent;
	}

	.btn:focus-visible {
		box-shadow: var(--focus-ring);
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Sizes */
	.btn--sm {
		padding: var(--space-1) var(--space-3);
		font-size: var(--text-sm);
		min-height: 32px;
	}
	.btn--md {
		padding: var(--space-2) var(--space-4);
		font-size: var(--text-sm);
		min-height: 40px;
	}
	.btn--lg {
		padding: var(--space-3) var(--space-6);
		font-size: var(--text-base);
		min-height: 48px;
	}

	/* Variants */
	.btn--primary {
		background-color: var(--color-primary-700);
		color: var(--color-text-inverse);
	}
	.btn--primary:hover:not(:disabled) {
		background-color: var(--color-primary-800);
	}
	.btn--primary:active:not(:disabled) {
		background-color: var(--color-primary-900);
	}

	.btn--secondary {
		background-color: var(--color-bg-surface);
		color: var(--color-text-primary);
		border-color: var(--color-border);
	}
	.btn--secondary:hover:not(:disabled) {
		background-color: var(--color-bg-sunken);
	}

	.btn--ghost {
		background-color: transparent;
		color: var(--color-text-secondary);
	}
	.btn--ghost:hover:not(:disabled) {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-primary);
	}

	.btn--danger {
		background-color: var(--color-error);
		color: var(--color-text-inverse);
	}
	.btn--danger:hover:not(:disabled) {
		background-color: var(--color-error-dark);
	}

	.btn--full {
		width: 100%;
	}

	.btn__icon {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.btn__spinner {
		width: 1em;
		height: 1em;
		border: 2px solid currentColor;
		border-right-color: transparent;
		border-radius: var(--radius-full);
		animation: spin 0.6s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
