<script lang="ts">
	import Warning from 'phosphor-svelte/lib/Warning';
	import { daysUntil, formatDate } from '$lib/utils/format';

	interface Props {
		title: string;
		dueDate: string;
	}

	let { title, dueDate }: Props = $props();

	const days = $derived(daysUntil(dueDate));
	const isOverdue = $derived(days < 0);
</script>

<div
	class="deadline-alert"
	class:deadline-alert--overdue={isOverdue}
	role="alert"
>
	<div class="deadline-alert__icon">
		<Warning size={20} weight="bold" />
	</div>
	<div class="deadline-alert__content">
		<p class="deadline-alert__title">{title}</p>
		<p class="deadline-alert__date">
			{#if isOverdue}
				Overdue by {Math.abs(days)} days
			{:else}
				Due {formatDate(dueDate)} ({days} days)
			{/if}
		</p>
	</div>
</div>

<style>
	.deadline-alert {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-md);
		background-color: var(--color-warning-light, #fffbeb);
		color: var(--color-warning-dark, #92400e);
		border: 1px solid var(--color-warning, #f59e0b);
	}

	.deadline-alert--overdue {
		background-color: var(--color-error-light, #fef2f2);
		color: var(--color-error-dark, #991b1b);
		border-color: var(--color-error, #ef4444);
	}

	.deadline-alert__icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.deadline-alert__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-0-5);
	}

	.deadline-alert__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		margin: 0;
	}

	.deadline-alert__date {
		font-size: var(--text-xs);
		margin: 0;
		opacity: 0.85;
	}
</style>
