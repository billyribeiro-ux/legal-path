<script lang="ts">
	import type { Case } from '$lib/types/case';
	import Badge from '$components/ui/Badge.svelte';
	import { formatDate } from '$lib/utils/format';
	import Briefcase from 'phosphor-svelte/lib/Briefcase';

	interface Props {
		caseData: Case;
	}

	let { caseData }: Props = $props();

	const statusColors: Record<string, string> = {
		active: 'success',
		closed: 'default',
		on_hold: 'warning',
		appealing: 'info'
	};
</script>

<a href="/cases/{caseData.id}" class="case-card">
	<div class="case-card__icon"><Briefcase size={24} weight="duotone" /></div>
	<div class="case-card__content">
		<h3 class="case-card__title">{caseData.title}</h3>
		<p class="case-card__meta">
			{caseData.jurisdiction} &middot; {caseData.caseType.replace('_', ' ')}
			{#if caseData.docketNumber}&middot; #{caseData.docketNumber}{/if}
		</p>
	</div>
	<div class="case-card__right">
		<Badge variant={statusColors[caseData.status] ?? 'default'}>{caseData.status}</Badge>
		<span class="case-card__date">{formatDate(caseData.updatedAt)}</span>
	</div>
</a>

<style>
	.case-card {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		text-decoration: none;
		transition: all var(--duration-fast);
	}
	.case-card:hover {
		border-color: var(--color-primary-300);
		box-shadow: var(--shadow-sm);
	}
	.case-card__icon {
		color: var(--color-primary-600);
		flex-shrink: 0;
	}
	.case-card__content {
		flex: 1;
		min-width: 0;
	}
	.case-card__title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.case-card__meta {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		margin-top: var(--space-0-5);
		text-transform: capitalize;
	}
	.case-card__right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: var(--space-1);
		flex-shrink: 0;
	}
	.case-card__date {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
</style>
