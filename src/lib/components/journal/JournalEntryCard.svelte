<script lang="ts">
	import type { JournalEntry } from '$lib/types/journal';
	import { formatDate } from '$lib/utils/format';
	import { truncateText } from '$lib/utils/format';
	import ActivityIcon from './ActivityIcon.svelte';
	import Trash from 'phosphor-svelte/lib/Trash';

	interface Props {
		entry: JournalEntry;
		onclick?: () => void;
		ondelete?: () => void;
	}

	let { entry, onclick, ondelete }: Props = $props();
</script>

<div class="journal-card" role="listitem">
	<button class="journal-card__main" onclick={onclick} type="button">
		<div class="journal-card__icon">
			<ActivityIcon entryType={entry.entryType} />
		</div>
		<div class="journal-card__content">
			<p class="journal-card__text">{truncateText(entry.content, 150)}</p>
			<div class="journal-card__meta">
				<span class="journal-card__type">{entry.entryType.replace('_', ' ')}</span>
				<span class="journal-card__date">{formatDate(entry.createdAt, 'relative')}</span>
			</div>
		</div>
	</button>
	{#if ondelete && entry.entryType === 'manual'}
		<button class="journal-card__delete" onclick={ondelete} type="button" aria-label="Delete entry">
			<Trash size={16} />
		</button>
	{/if}
</div>

<style>
	.journal-card {
		display: flex;
		align-items: flex-start;
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		transition: border-color var(--duration-fast);
	}
	.journal-card:hover {
		border-color: var(--color-primary-300);
	}
	.journal-card__main {
		display: flex;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		flex: 1;
		text-align: left;
		min-width: 0;
	}
	.journal-card__icon {
		flex-shrink: 0;
		padding-top: var(--space-0-5);
	}
	.journal-card__content {
		flex: 1;
		min-width: 0;
	}
	.journal-card__text {
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		line-height: var(--leading-relaxed);
	}
	.journal-card__meta {
		display: flex;
		gap: var(--space-2);
		margin-top: var(--space-2);
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.journal-card__type {
		text-transform: capitalize;
	}
	.journal-card__delete {
		padding: var(--space-3);
		color: var(--color-text-tertiary);
		transition: color var(--duration-fast);
		flex-shrink: 0;
	}
	.journal-card__delete:hover {
		color: var(--color-error);
	}
</style>
