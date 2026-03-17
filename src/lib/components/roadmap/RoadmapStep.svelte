<script lang="ts">
	import type { RoadmapStep } from '$lib/types/roadmap';
	import { formatDate, daysUntil, getUrgency } from '$lib/utils/format';
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';
	import Circle from 'phosphor-svelte/lib/Circle';
	import Clock from 'phosphor-svelte/lib/Clock';
	import WarningCircle from 'phosphor-svelte/lib/WarningCircle';

	interface Props {
		step: RoadmapStep;
		isFirst?: boolean;
		isLast?: boolean;
		onclick?: () => void;
	}

	let { step, isFirst = false, isLast = false, onclick }: Props = $props();

	const days = $derived(step.dueDate ? daysUntil(step.dueDate) : null);
	const urgency = $derived(days !== null ? getUrgency(days) : null);
</script>

<div class="step" class:step--completed={step.status === 'completed'} class:step--active={step.status === 'active'} role="listitem">
	<div class="step__connector">
		{#if !isFirst}<div class="step__line step__line--top" class:step__line--done={step.status === 'completed'}></div>{/if}
		<div class="step__icon">
			{#if step.status === 'completed'}
				<CheckCircle size={24} weight="fill" />
			{:else if step.status === 'overdue'}
				<WarningCircle size={24} weight="fill" />
			{:else if step.status === 'active'}
				<Clock size={24} weight="fill" />
			{:else}
				<Circle size={24} />
			{/if}
		</div>
		{#if !isLast}<div class="step__line step__line--bottom"></div>{/if}
	</div>
	<button class="step__content" onclick={onclick} type="button">
		<h4 class="step__title">{step.title}</h4>
		{#if step.description}
			<p class="step__description">{step.description}</p>
		{/if}
		{#if step.dueDate}
			<span class="step__deadline" class:step__deadline--urgent={urgency === 'critical' || urgency === 'overdue'}>
				Due: {formatDate(step.dueDate)} {#if days !== null}({days > 0 ? `${days} days left` : days === 0 ? 'Today' : `${Math.abs(days)} days overdue`}){/if}
			</span>
		{/if}
	</button>
</div>

<style>
	.step {
		display: flex;
		gap: var(--space-4);
		min-height: 80px;
	}
	.step__connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
		width: 24px;
	}
	.step__line {
		flex: 1;
		width: 2px;
		background-color: var(--color-border);
	}
	.step__line--done {
		background-color: var(--color-success);
	}
	.step__icon {
		flex-shrink: 0;
		color: var(--color-text-tertiary);
	}
	.step--completed .step__icon {
		color: var(--color-success);
	}
	.step--active .step__icon {
		color: var(--color-primary-600);
	}
	.step__content {
		flex: 1;
		text-align: left;
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-md);
		margin-bottom: var(--space-3);
		transition: background-color var(--duration-fast);
		width: 100%;
	}
	.step__content:hover {
		background-color: var(--color-bg-sunken);
	}
	.step__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
	}
	.step--completed .step__title {
		color: var(--color-text-tertiary);
	}
	.step__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-1);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.step__deadline {
		display: inline-block;
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		margin-top: var(--space-1);
	}
	.step__deadline--urgent {
		color: var(--color-error);
		font-weight: var(--weight-medium);
	}
</style>
