<script lang="ts">
	import type { JournalEntry } from '$lib/types/journal';
	import JournalEntryCard from './JournalEntryCard.svelte';

	interface Props {
		entries: JournalEntry[];
		onselect?: (entry: JournalEntry) => void;
		ondelete?: (id: string) => void;
	}

	let { entries, onselect, ondelete }: Props = $props();
</script>

<div class="journal-list" role="list" aria-label="Journal entries">
	{#each entries as entry (entry.id)}
		<JournalEntryCard
			{entry}
			onclick={() => onselect?.(entry)}
			ondelete={() => ondelete?.(entry.id)}
		/>
	{:else}
		<p class="journal-list__empty">No journal entries yet. Start documenting your case.</p>
	{/each}
</div>

<style>
	.journal-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.journal-list__empty {
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
