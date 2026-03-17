<script lang="ts">
	import type { DocumentTemplate } from '$lib/types/document';
	import Badge from '$components/ui/Badge.svelte';
	import FileText from 'phosphor-svelte/lib/FileText';

	interface Props {
		template: DocumentTemplate;
		onclick?: () => void;
	}

	let { template, onclick }: Props = $props();
</script>

<button class="template-card" onclick={onclick} type="button" role="listitem">
	<div class="template-card__icon">
		<FileText size={24} weight="duotone" />
	</div>
	<div class="template-card__content">
		<h3 class="template-card__title">{template.name}</h3>
		<p class="template-card__description">{template.description}</p>
		<div class="template-card__meta">
			<Badge variant="default">{template.category.replace('_', ' ')}</Badge>
			<span class="template-card__fields">{template.fields.length} fields</span>
		</div>
	</div>
</button>

<style>
	.template-card {
		display: flex;
		gap: var(--space-3);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		text-align: left;
		transition: all var(--duration-fast);
		width: 100%;
	}
	.template-card:hover {
		border-color: var(--color-primary-300);
		box-shadow: var(--shadow-sm);
	}
	.template-card__icon {
		color: var(--color-primary-600);
		flex-shrink: 0;
		padding-top: var(--space-0-5);
	}
	.template-card__content {
		flex: 1;
		min-width: 0;
	}
	.template-card__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.template-card__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-1);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.template-card__meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-2);
	}
	.template-card__fields {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
</style>
