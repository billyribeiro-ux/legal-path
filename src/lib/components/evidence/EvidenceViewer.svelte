<script lang="ts">
	import type { Evidence } from '$lib/types/evidence';
	import Card from '$components/ui/Card.svelte';
	import Badge from '$components/ui/Badge.svelte';
	import { formatDate, formatFileSize } from '$lib/utils/format';
	import DocumentActions from '$components/documents/DocumentActions.svelte';

	interface Props {
		item: Evidence;
		ondownload?: () => void;
		ondelete?: () => void;
	}

	let { item, ondownload, ondelete }: Props = $props();

	const isImage = $derived(item.mimeType?.startsWith('image/'));
</script>

<Card variant="raised" padding="lg">
	<div class="evidence-viewer">
		<div class="evidence-viewer__header">
			<h3 class="evidence-viewer__title">{item.title}</h3>
			<Badge variant="default">{item.category.replace('_', ' ')}</Badge>
		</div>

		{#if isImage}
			<div class="evidence-viewer__preview">
				<img src={item.filePath} alt={item.title} class="evidence-viewer__image" />
			</div>
		{:else}
			<div class="evidence-viewer__no-preview">
				<p>Preview not available for this file type.</p>
			</div>
		{/if}

		{#if item.description}
			<p class="evidence-viewer__description">{item.description}</p>
		{/if}

		{#if item.aiSummary}
			<div class="evidence-viewer__summary">
				<h4 class="evidence-viewer__summary-title">AI Summary</h4>
				<p>{item.aiSummary}</p>
			</div>
		{/if}

		<div class="evidence-viewer__meta">
			<span>Size: {formatFileSize(item.fileSize)}</span>
			<span>Uploaded: {formatDate(item.uploadedAt)}</span>
			{#if item.dateOfDocument}
				<span>Document Date: {formatDate(item.dateOfDocument)}</span>
			{/if}
		</div>

		{#if item.aiTags?.length}
			<div class="evidence-viewer__tags">
				{#each item.aiTags as tag}
					<Badge variant="default">{tag}</Badge>
				{/each}
			</div>
		{/if}

		<DocumentActions {ondownload} ondelete={ondelete} showDelete={!!ondelete} />
	</div>
</Card>

<style>
	.evidence-viewer {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.evidence-viewer__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
	}
	.evidence-viewer__title {
		font-size: var(--text-lg);
		font-family: var(--font-heading);
	}
	.evidence-viewer__preview {
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid var(--color-border);
	}
	.evidence-viewer__image {
		width: 100%;
		height: auto;
		display: block;
	}
	.evidence-viewer__no-preview {
		padding: var(--space-8);
		text-align: center;
		background-color: var(--color-bg-sunken);
		border-radius: var(--radius-md);
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
	}
	.evidence-viewer__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
	}
	.evidence-viewer__summary {
		background-color: var(--color-bg-sunken);
		padding: var(--space-3);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
	.evidence-viewer__summary-title {
		font-size: var(--text-xs);
		font-weight: var(--weight-semibold);
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--space-1);
	}
	.evidence-viewer__meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.evidence-viewer__tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
	}
</style>
