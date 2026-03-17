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
	{:else}
		<p class="template-grid__empty">No templates available.</p>
	{/each}
</div>

<style>
	.template-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-4);
	}
	.template-grid__empty {
		grid-column: 1 / -1;
		text-align: center;
		color: var(--color-text-tertiary);
		font-size: var(--text-sm);
		padding: var(--space-8);
	}
</style>
