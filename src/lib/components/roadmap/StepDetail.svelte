<script lang="ts">
	import type { RoadmapStep } from '$lib/types/roadmap';
	import Card from '$lib/components/ui/Card.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { formatDate } from '$lib/utils/format';
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';

	interface Props {
		step: RoadmapStep;
		oncomplete?: () => void;
	}

	let { step, oncomplete }: Props = $props();

	const statusVariant = $derived(
		step.status === 'completed'
			? 'success'
			: step.status === 'overdue'
				? 'danger'
				: step.status === 'active'
					? 'primary'
					: 'default'
	);
</script>

<Card variant="raised" padding="lg">
	<div class="step-detail">
		<div class="step-detail__header">
			<h3 class="step-detail__title">{step.title}</h3>
			<Badge variant={statusVariant}>
				{step.status}
			</Badge>
		</div>

		{#if step.description}
			<p class="step-detail__description">{step.description}</p>
		{/if}

		<div class="step-detail__meta-list">
			{#if step.dueDate}
				<p class="step-detail__meta">
					<strong>Deadline:</strong> {formatDate(step.dueDate, 'long')}
				</p>
			{/if}
			{#if step.sourceStatute}
				<p class="step-detail__meta">
					<strong>Statute:</strong> <code>{step.sourceStatute}</code>
				</p>
			{/if}
			{#if step.eventType}
				<p class="step-detail__meta">
					<strong>Type:</strong> {step.eventType}
				</p>
			{/if}
		</div>

		{#if step.status !== 'completed' && step.status !== 'skipped'}
			<div class="step-detail__actions">
				<Button variant="primary" onclick={oncomplete}>
					{#snippet icon()}<CheckCircle size={16} />{/snippet}
					Mark Complete
				</Button>
			</div>
		{/if}
	</div>
</Card>

<style>
	.step-detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.step-detail__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
	}

	.step-detail__title {
		font-size: var(--text-lg);
		font-family: var(--font-heading);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		margin: 0;
	}

	.step-detail__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
		margin: 0;
	}

	.step-detail__meta-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.step-detail__meta {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		margin: 0;
	}

	.step-detail__meta strong {
		color: var(--color-text-secondary);
	}

	.step-detail__meta code {
		font-family: var(--font-mono);
		background-color: var(--color-bg-sunken);
		padding: var(--space-0-5) var(--space-1);
		border-radius: var(--radius-sm);
		font-size: var(--text-xs);
	}

	.step-detail__actions {
		padding-top: var(--space-2);
		border-top: 1px solid var(--color-border);
	}
</style>
