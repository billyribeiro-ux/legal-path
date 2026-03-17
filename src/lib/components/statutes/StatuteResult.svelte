<script lang="ts">
	import type { StatuteSearchResult } from '$lib/types/statute';
	import Badge from '$components/ui/Badge.svelte';

	interface Props {
		result: StatuteSearchResult;
		onclick?: () => void;
	}

	let { result, onclick }: Props = $props();
</script>

<button class="statute-result" onclick={onclick} type="button">
	<div class="statute-result__header">
		<code class="statute-result__citation">{result.statute.citation}</code>
		<Badge variant="primary" size="sm">{result.statute.sourceType}</Badge>
	</div>
	<h4 class="statute-result__title">{result.statute.title}</h4>
	{#if result.statute.plainEnglish}
		<p class="statute-result__summary">{result.statute.plainEnglish}</p>
	{/if}
</button>

<style>
	.statute-result {
		display: block;
		width: 100%;
		text-align: left;
		padding: var(--space-4);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		background-color: var(--color-bg-surface);
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
		margin-bottom: var(--space-1);
	}
	.statute-result__citation {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-primary-700);
		font-weight: var(--weight-semibold);
	}
	.statute-result__title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.statute-result__summary {
		margin-top: var(--space-2);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
