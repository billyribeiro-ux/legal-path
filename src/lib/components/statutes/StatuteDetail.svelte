<script lang="ts">
	import type { Statute } from '$lib/types/statute';
	import Badge from '$components/ui/Badge.svelte';
	import CitationCopy from './CitationCopy.svelte';

	interface Props {
		statute: Statute;
	}

	let { statute }: Props = $props();

	type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

	const typeColors: Record<string, BadgeVariant> = {
		statute: 'primary',
		regulation: 'info',
		procedure: 'warning',
		form_instruction: 'default'
	};
</script>

<article class="statute-detail" aria-label="Statute detail: {statute.title}">
	<header class="statute-detail__header">
		<div class="statute-detail__meta">
			<Badge variant={typeColors[statute.sourceType] ?? 'default'}>
				{statute.sourceType.replace('_', ' ')}
			</Badge>
			<span class="statute-detail__jurisdiction">{statute.jurisdiction}</span>
		</div>
		<div class="statute-detail__citation-row">
			<cite class="statute-detail__citation">{statute.citation}</cite>
			<CitationCopy citation={statute.citation} />
		</div>
		<h1 class="statute-detail__title">{statute.title}</h1>
	</header>

	{#if statute.plainEnglish}
		<section class="statute-detail__plain" aria-label="Plain English explanation">
			<h2 class="statute-detail__section-title">Plain English Summary</h2>
			<p class="statute-detail__plain-text">{statute.plainEnglish}</p>
		</section>
	{/if}

	<section class="statute-detail__content" aria-label="Full text">
		<h2 class="statute-detail__section-title">Full Text</h2>
		<div class="statute-detail__text">{statute.content}</div>
	</section>

	{#if statute.effectiveDate}
		<footer class="statute-detail__footer">
			<span class="statute-detail__effective">Effective: {statute.effectiveDate}</span>
		</footer>
	{/if}
</article>

<style>
	.statute-detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}
	.statute-detail__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.statute-detail__meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.statute-detail__jurisdiction {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
	.statute-detail__citation-row {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.statute-detail__citation {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--color-primary-700);
		font-style: normal;
	}
	.statute-detail__title {
		font-size: var(--text-xl);
		font-weight: var(--weight-bold);
		font-family: var(--font-heading);
		color: var(--color-text-primary);
	}
	.statute-detail__section-title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		font-family: var(--font-heading);
		color: var(--color-text-primary);
		margin-bottom: var(--space-2);
	}
	.statute-detail__plain {
		padding: var(--space-4);
		background-color: var(--color-info-light);
		border-radius: var(--radius-lg);
	}
	.statute-detail__plain-text {
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		line-height: 1.7;
	}
	.statute-detail__text {
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		line-height: 1.8;
		white-space: pre-wrap;
	}
	.statute-detail__footer {
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-border);
	}
	.statute-detail__effective {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
</style>
