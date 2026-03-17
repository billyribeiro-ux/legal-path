<script lang="ts">
	import type { Evidence } from '$lib/types/evidence';
	import EvidenceCard from './EvidenceCard.svelte';

	interface Props {
		items: Evidence[];
		onselect: (item: Evidence) => void;
	}

	let { items, onselect }: Props = $props();
</script>

<div class="evidence-list" role="list" aria-label="Evidence items">
	{#each items as item (item.id)}
		<button class="evidence-list__item" role="listitem" onclick={() => onselect(item)} aria-label="View evidence: {item.title}">
			<EvidenceCard evidence={item} />
		</button>
	{/each}
</div>

{#if items.length === 0}
	<p class="evidence-list__empty">No evidence items found.</p>
{/if}

<style>
	.evidence-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.evidence-list__item {
		display: block;
		width: 100%;
		text-align: left;
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
	}
	.evidence-list__item:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
		border-radius: var(--radius-lg);
	}
	.evidence-list__empty {
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
