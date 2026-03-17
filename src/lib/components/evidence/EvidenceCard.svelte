<script lang="ts">
	import type { Evidence } from '$lib/types/evidence';
	import Badge from '$components/ui/Badge.svelte';
	import { formatDate, formatFileSize } from '$lib/utils/format';
	import File from 'phosphor-svelte/lib/File';
	import Trash from 'phosphor-svelte/lib/Trash';

	interface Props {
		item: Evidence;
		onclick?: () => void;
		ondelete?: () => void;
	}

	let { item, onclick, ondelete }: Props = $props();

	const categoryLabels: Record<string, string> = {
		medical_record: 'Medical Record',
		correspondence: 'Correspondence',
		ime_report: 'IME Report',
		employer_doc: 'Employer Document',
		photo: 'Photo',
		witness_statement: 'Witness Statement',
		financial: 'Financial',
		other: 'Other'
	};
</script>

<div class="evidence-card" role="listitem">
	<button class="evidence-card__main" onclick={onclick} type="button">
		<div class="evidence-card__icon">
			<File size={20} weight="duotone" />
		</div>
		<div class="evidence-card__content">
			<h4 class="evidence-card__title">{item.title}</h4>
			{#if item.description}
				<p class="evidence-card__description">{item.description}</p>
			{/if}
			<div class="evidence-card__meta">
				<Badge variant="default">{categoryLabels[item.category] ?? item.category}</Badge>
				<span>{formatFileSize(item.fileSize)}</span>
				<span>{formatDate(item.uploadedAt)}</span>
			</div>
		</div>
	</button>
	{#if ondelete}
		<button class="evidence-card__delete" onclick={ondelete} type="button" aria-label="Delete evidence">
			<Trash size={16} />
		</button>
	{/if}
</div>

<style>
	.evidence-card {
		display: flex;
		align-items: center;
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		transition: border-color var(--duration-fast);
	}
	.evidence-card:hover {
		border-color: var(--color-primary-300);
	}
	.evidence-card__main {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		flex: 1;
		text-align: left;
		min-width: 0;
	}
	.evidence-card__icon {
		color: var(--color-primary-600);
		flex-shrink: 0;
		padding-top: var(--space-0-5);
	}
	.evidence-card__content {
		flex: 1;
		min-width: 0;
	}
	.evidence-card__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
	}
	.evidence-card__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-0-5);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.evidence-card__meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-2);
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.evidence-card__delete {
		padding: var(--space-3);
		color: var(--color-text-tertiary);
		transition: color var(--duration-fast);
		flex-shrink: 0;
	}
	.evidence-card__delete:hover {
		color: var(--color-error);
	}
</style>
