<script lang="ts">
	import type { StatuteSearchResult } from '$lib/types/statute';
	import Badge from '$components/ui/Badge.svelte';

	interface Props {
		result: StatuteSearchResult;
	}

	let { result }: Props = $props();

	let relevancePercent = $derived(Math.round(result.relevanceScore * 100));

	type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

	let relevanceVariant: BadgeVariant = $derived(
		relevancePercent >= 80 ? 'success' : relevancePercent >= 50 ? 'warning' : 'default'
	);

	const typeColors: Record<string, BadgeVariant> = {
		statute: 'primary',
		regulation: 'info',
		procedure: 'warning',
		form_instruction: 'default'
	};
</script>

<article class="statute-result" aria-label="Statute: {result.statute.title}">
	<div class="statute-result__header">
		<Badge variant={typeColors[result.statute.sourceType] ?? 'default'} size="sm">
			{result.statute.sourceType.replace('_', ' ')}
		</Badge>
		<Badge variant={relevanceVariant} size="sm">
			{relevancePercent}% match
		</Badge>
	</div>
	<cite class="statute-result__citation">{result.statute.citation}</cite>
	<h3 class="statute-result__title">{result.statute.title}</h3>
	{#if result.statute.plainEnglish}
		<p class="statute-result__summary">{result.statute.plainEnglish}</p>
	{/if}
	{#if result.matchedSections?.length}
		<div class="statute-result__sections">
			{#each result.matchedSections as section (section)}
				<span class="statute-result__section">{section}</span>
			{/each}
		</div>
	{/if}
</article>

<style>
	.statute-result {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-fast);
	}
	.statute-result:hover {
		border-color: var(--color-primary-300);
		box-shadow: var(--shadow-sm);
	}
	.statute-result__header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.statute-result__citation {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-primary-700);
		font-style: normal;
	}
	.statute-result__title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		font-family: var(--font-heading);
		color: var(--color-text-primary);
	}
	.statute-result__summary {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}
	.statute-result__sections {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
	}
	.statute-result__section {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		background-color: var(--color-bg-sunken);
		padding: var(--space-0-5) var(--space-2);
		border-radius: var(--radius-sm);
	}
</style>
