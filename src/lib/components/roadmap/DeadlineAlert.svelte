<script lang="ts">
	import type { RoadmapStep } from '$lib/types/roadmap';
	import { formatDate, daysUntil, getUrgency } from '$lib/utils/format';
	import WarningCircle from 'phosphor-svelte/lib/WarningCircle';
	import Clock from 'phosphor-svelte/lib/Clock';

	interface Props {
		step: RoadmapStep;
		onclick?: () => void;
	}

	let { step, onclick }: Props = $props();

	const days = $derived(step.dueDate ? daysUntil(step.dueDate) : null);
	const urgency = $derived(days !== null ? getUrgency(days) : 'low');
</script>

{#if days !== null && urgency !== 'low'}
	<button
		class="deadline-alert deadline-alert--{urgency}"
		onclick={onclick}
		type="button"
	>
		<div class="deadline-alert__icon">
			{#if urgency === 'overdue' || urgency === 'critical'}
				<WarningCircle size={20} weight="fill" />
			{:else}
				<Clock size={20} weight="fill" />
			{/if}
		</div>
		<div class="deadline-alert__content">
			<span class="deadline-alert__title">{step.title}</span>
			<span class="deadline-alert__date">
				{#if days < 0}
					{Math.abs(days)} days overdue
				{:else if days === 0}
					Due today
				{:else}
					{days} days remaining &middot; {formatDate(step.dueDate!)}
				{/if}
			</span>
		</div>
	</button>
{/if}

<style>
	.deadline-alert {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-md);
		width: 100%;
		text-align: left;
		transition: opacity var(--duration-fast);
	}
	.deadline-alert:hover {
		opacity: 0.85;
	}
	.deadline-alert--overdue {
		background-color: var(--color-error-light, #fef2f2);
		color: var(--color-error);
	}
	.deadline-alert--critical {
		background-color: var(--color-warning-light, #fffbeb);
		color: var(--color-warning-dark, #92400e);
	}
	.deadline-alert--high {
		background-color: var(--color-info-light, #eff6ff);
		color: var(--color-info-dark, #1e40af);
	}
	.deadline-alert--normal {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-secondary);
	}
	.deadline-alert__icon {
		flex-shrink: 0;
	}
	.deadline-alert__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-0-5);
	}
	.deadline-alert__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
	}
	.deadline-alert__date {
		font-size: var(--text-xs);
	}
</style>
