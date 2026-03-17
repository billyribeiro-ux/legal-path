<script lang="ts">
	import type { DocumentTemplate } from '$lib/types/document';
	import Badge from '$components/ui/Badge.svelte';

	interface Props {
		template: DocumentTemplate;
		onclick: () => void;
	}

	let { template, onclick }: Props = $props();

	const categoryColors: Record<string, string> = {
		filing: 'primary',
		motion: 'info',
		form: 'success',
		correspondence: 'warning',
		brief: 'info',
		discovery: 'default'
	};
</script>

<button class="template-card" {onclick} aria-label="Select template: {template.name}">
	<div class="template-card__header">
		<Badge variant={categoryColors[template.category] ?? 'default'} size="sm">
			{template.category.replace('_', ' ')}
		</Badge>
	</div>
	<h3 class="template-card__name">{template.name}</h3>
	<p class="template-card__desc">{template.description}</p>
	<p class="template-card__meta">{template.jurisdiction} &middot; {template.caseType.replace('_', ' ')}</p>
</button>

<style>
	.template-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-2);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		text-align: left;
		cursor: pointer;
		transition: all var(--duration-fast);
		width: 100%;
	}
	.template-card:hover {
		border-color: var(--color-primary-300);
		box-shadow: var(--shadow-sm);
	}
	.template-card:focus-visible {
		box-shadow: var(--focus-ring);
	}
	.template-card__header {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}
	.template-card__name {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.template-card__desc {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: 1.5;
	}
	.template-card__meta {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		text-transform: capitalize;
	}
</style>
