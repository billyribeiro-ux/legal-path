<script lang="ts">
	import type { JournalEntry } from '$lib/types/journal';
	import Badge from '$components/ui/Badge.svelte';
	import ActivityIcon from './ActivityIcon.svelte';
	import { formatDate } from '$lib/utils/format';

	interface Props {
		entry: JournalEntry;
	}

	let { entry }: Props = $props();

	const typeBadge: Record<string, string> = {
		manual: 'primary',
		system: 'default',
		ai_suggested: 'info'
	};
</script>

<article class="journal-card" aria-label="Journal entry from {formatDate(entry.createdAt)}">
	<div class="journal-card__icon">
		<ActivityIcon type={entry.entryType} />
	</div>
	<div class="journal-card__content">
		<div class="journal-card__header">
			<Badge variant={typeBadge[entry.entryType] ?? 'default'} size="sm">
				{entry.entryType.replace('_', ' ')}
			</Badge>
			<time class="journal-card__date" datetime={entry.createdAt}>
				{formatDate(entry.createdAt)}
			</time>
		</div>
		<p class="journal-card__text">{entry.content}</p>
	</div>
</article>

<style>
	.journal-card {
		display: flex;
		gap: var(--space-3);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}
	.journal-card__icon {
		flex-shrink: 0;
		padding-top: var(--space-0-5);
	}
	.journal-card__content {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.journal-card__header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.journal-card__date {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		margin-left: auto;
	}
	.journal-card__text {
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		line-height: 1.6;
		white-space: pre-wrap;
	}
</style>
