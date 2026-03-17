<script lang="ts">
	import type { DocumentTemplate } from '$lib/types/document';
	import TemplateCard from './TemplateCard.svelte';

	interface Props {
		templates: DocumentTemplate[];
		onselect?: (template: DocumentTemplate) => void;
	}

	let { templates, onselect }: Props = $props();
</script>

<div class="template-list" role="list" aria-label="Document templates">
	{#each templates as template (template.id)}
		<TemplateCard {template} onclick={() => onselect?.(template)} />
	{:else}
		<p class="template-list__empty">No templates available for this case type.</p>
	{/each}
</div>

<style>
	.template-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-4);
	}
	.template-list__empty {
		grid-column: 1 / -1;
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
