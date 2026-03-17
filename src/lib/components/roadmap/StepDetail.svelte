<script lang="ts">
	import type { RoadmapStep } from '$lib/types/roadmap';
	import Button from '$components/ui/Button.svelte';
	import Badge from '$components/ui/Badge.svelte';
	import Card from '$components/ui/Card.svelte';
	import { formatDate } from '$lib/utils/format';
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';

	interface Props {
		step: RoadmapStep;
		oncomplete?: () => void;
	}

	let { step, oncomplete }: Props = $props();
</script>

<Card variant="raised" padding="lg">
	<div class="step-detail">
		<div class="step-detail__header">
			<h3 class="step-detail__title">{step.title}</h3>
			<Badge variant={step.status === 'completed' ? 'success' : step.status === 'overdue' ? 'danger' : 'primary'}>
				{step.status}
			</Badge>
		</div>
		{#if step.description}
			<p class="step-detail__description">{step.description}</p>
		{/if}
		{#if step.dueDate}
			<p class="step-detail__meta">Deadline: {formatDate(step.dueDate, 'long')}</p>
		{/if}
		{#if step.sourceStatute}
			<p class="step-detail__meta">Statute: <code>{step.sourceStatute}</code></p>
		{/if}
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
	}
	.step-detail__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
	}
	.step-detail__meta {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
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
	}
</style>
