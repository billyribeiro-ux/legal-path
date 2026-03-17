<script lang="ts">
	import type { Evidence } from '$lib/types/evidence';
	import Badge from '$components/ui/Badge.svelte';
	import { formatDate } from '$lib/utils/format';

	interface Props {
		evidence: Evidence;
	}

	let { evidence }: Props = $props();

	let fileSize = $derived(() => {
		const kb = evidence.fileSize / 1024;
		return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
	});

	const categoryColors: Record<string, string> = {
		medical_record: 'danger',
		correspondence: 'info',
		ime_report: 'warning',
		employer_doc: 'primary',
		photo: 'success',
		witness_statement: 'info',
		financial: 'warning'
	};
</script>

<div class="evidence-card" role="article" aria-label="Evidence: {evidence.title}">
	<div class="evidence-card__header">
		<Badge variant={categoryColors[evidence.category] ?? 'default'} size="sm">
			{evidence.category.replace(/_/g, ' ')}
		</Badge>
		<span class="evidence-card__size">{fileSize()}</span>
	</div>
	<h3 class="evidence-card__title">{evidence.title}</h3>
	{#if evidence.description}
		<p class="evidence-card__desc">{evidence.description}</p>
	{/if}
	<p class="evidence-card__date">Uploaded {formatDate(evidence.uploadedAt)}</p>
</div>

<style>
	.evidence-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-fast);
	}
	.evidence-card:hover {
		border-color: var(--color-primary-300);
		box-shadow: var(--shadow-sm);
	}
	.evidence-card__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.evidence-card__size {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.evidence-card__title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.evidence-card__desc {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}
	.evidence-card__date {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
</style>
