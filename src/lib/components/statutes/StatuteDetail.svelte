<script lang="ts">
	import type { Statute } from '$lib/types/statute';
	import Card from '$components/ui/Card.svelte';
	import Badge from '$components/ui/Badge.svelte';
	import CitationCopy from './CitationCopy.svelte';
	import FeatureDisclaimer from '$components/disclaimer/FeatureDisclaimer.svelte';
	import { DISCLAIMERS } from '$lib/constants/disclaimers';

	interface Props {
		statute: Statute;
	}

	let { statute }: Props = $props();
</script>

<div class="statute-detail">
	<FeatureDisclaimer message={DISCLAIMERS.statuteLookup.content} />

	<Card variant="raised" padding="lg">
		<div class="statute-detail__header">
			<div>
				<code class="statute-detail__citation">{statute.citation}</code>
				<h2 class="statute-detail__title">{statute.title}</h2>
			</div>
			<div class="statute-detail__actions">
				<Badge variant="primary">{statute.sourceType}</Badge>
				<CitationCopy citation={statute.citation} />
			</div>
		</div>

		{#if statute.plainEnglish}
			<div class="statute-detail__plain">
				<h3>Plain English Summary</h3>
				<p>{statute.plainEnglish}</p>
			</div>
		{/if}

		<div class="statute-detail__content">
			<h3>Full Text</h3>
			<div class="statute-detail__text">{statute.content}</div>
		</div>
	</Card>
</div>

<style>
	.statute-detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.statute-detail__header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--space-4);
		flex-wrap: wrap;
	}
	.statute-detail__citation {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-primary-700);
	}
	.statute-detail__title {
		font-size: var(--text-xl);
		font-family: var(--font-heading);
		margin-top: var(--space-1);
	}
	.statute-detail__actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.statute-detail__plain {
		margin-top: var(--space-6);
		padding: var(--space-4);
		background-color: var(--color-bg-sunken);
		border-radius: var(--radius-md);
	}
	.statute-detail__plain h3 {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		margin-bottom: var(--space-2);
	}
	.statute-detail__plain p {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
	}
	.statute-detail__content {
		margin-top: var(--space-6);
	}
	.statute-detail__content h3 {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		margin-bottom: var(--space-2);
	}
	.statute-detail__text {
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-primary);
		white-space: pre-wrap;
	}
</style>
