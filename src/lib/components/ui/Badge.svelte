<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
		size?: 'sm' | 'md';
		children: Snippet;
	}

	let { variant = 'default', size = 'md', children }: Props = $props();
</script>

<span class="badge badge--{variant} badge--{size}">
	{@render children()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		border-radius: var(--radius-full);
		font-weight: var(--weight-medium);
		white-space: nowrap;
	}
	.badge--sm {
		padding: 0 var(--space-2);
		font-size: var(--text-xs);
		min-height: 20px;
	}
	.badge--md {
		padding: var(--space-0-5) var(--space-3);
		font-size: var(--text-sm);
		min-height: 24px;
	}
	.badge--default {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-secondary);
	}
	.badge--primary {
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}
	.badge--success {
		background-color: var(--color-success-light);
		color: var(--color-success-dark);
	}
	.badge--warning {
		background-color: var(--color-warning-light);
		color: var(--color-warning-dark);
	}
	.badge--danger {
		background-color: var(--color-error-light);
		color: var(--color-error-dark);
	}
	.badge--info {
		background-color: var(--color-info-light);
		color: var(--color-info-dark);
	}
</style>
