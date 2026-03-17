<script lang="ts">
	import type { Evidence, EvidenceCategory } from '$lib/types/evidence';
	import EvidenceCard from './EvidenceCard.svelte';
	import CategoryFilter from './CategoryFilter.svelte';

	interface Props {
		evidence: Evidence[];
		onselect?: (item: Evidence) => void;
		ondelete?: (id: string) => void;
	}

	let { evidence, onselect, ondelete }: Props = $props();

	let activeCategory: EvidenceCategory | 'all' = $state('all');

	const filtered = $derived(
		activeCategory === 'all'
			? evidence
			: evidence.filter((e) => e.category === activeCategory)
	);
</script>

<div class="evidence-list">
	<CategoryFilter bind:value={activeCategory} />
	<div class="evidence-list__grid" role="list" aria-label="Evidence items">
		{#each filtered as item (item.id)}
			<EvidenceCard
				{item}
				onclick={() => onselect?.(item)}
				ondelete={() => ondelete?.(item.id)}
			/>
		{:else}
			<p class="evidence-list__empty">No evidence items found.</p>
		{/each}
	</div>
</div>

<style>
	.evidence-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.evidence-list__grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.evidence-list__empty {
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
