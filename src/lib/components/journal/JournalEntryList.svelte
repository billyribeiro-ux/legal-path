<script lang="ts">
	import type { JournalEntry } from '$lib/types/journal';
	import JournalEntryCard from './JournalEntryCard.svelte';

	interface Props {
		entries: JournalEntry[];
	}

	let { entries }: Props = $props();
</script>

<div class="journal-list" role="feed" aria-label="Journal entries">
	{#each entries as entry (entry.id)}
		<JournalEntryCard {entry} />
	{/each}
</div>

{#if entries.length === 0}
	<p class="journal-list__empty">No journal entries yet.</p>
{/if}

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
