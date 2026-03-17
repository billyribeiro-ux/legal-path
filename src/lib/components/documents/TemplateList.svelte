<script lang="ts">
	import type { DocumentTemplate } from '$lib/types/document';
	import TemplateCard from './TemplateCard.svelte';

	interface Props {
		templates: DocumentTemplate[];
		onselect: (template: DocumentTemplate) => void;
	}

	let { templates, onselect }: Props = $props();
</script>

<div class="template-grid" role="list" aria-label="Document templates">
	{#each templates as template (template.id)}
		<div role="listitem">
			<TemplateCard {template} onclick={() => onselect(template)} />
		</div>
	{/each}
</div>

{#if templates.length === 0}
	<p class="template-grid__empty">No templates available.</p>
{/if}

<style>
	.template-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-4);
	}
	.template-grid__empty {
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
