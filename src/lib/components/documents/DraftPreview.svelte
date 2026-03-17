<script lang="ts">
	import type { DraftSection } from '$lib/types/document';

	interface Props {
		title: string;
		content: string;
		sections?: DraftSection[];
	}

	let { title, content, sections = [] }: Props = $props();
</script>

<article class="draft-preview" aria-label="Document preview: {title}">
	<header class="draft-preview__header">
		<h1 class="draft-preview__title">{title}</h1>
	</header>

	{#if sections.length > 0}
		{#each sections as section}
			<section class="draft-preview__section">
				<h2 class="draft-preview__section-title">{section.title}</h2>
				<div class="draft-preview__section-content">{section.content}</div>
				{#if section.citations?.length}
					<footer class="draft-preview__citations">
						{#each section.citations as citation}
							<cite class="draft-preview__citation">{citation}</cite>
						{/each}
					</footer>
				{/if}
			</section>
		{/each}
	{:else}
		<div class="draft-preview__body">{content}</div>
	{/if}
</article>

<style>
	.draft-preview {
		max-width: 8.5in;
		margin: 0 auto;
		padding: var(--space-8);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-family: var(--font-body);
		line-height: 1.8;
		color: var(--color-text-primary);
	}
	@media print {
		.draft-preview {
			border: none;
			box-shadow: none;
			padding: 1in;
		}
	}
	.draft-preview__header {
		text-align: center;
		margin-bottom: var(--space-6);
		padding-bottom: var(--space-4);
		border-bottom: 2px solid var(--color-border);
	}
	.draft-preview__title {
		font-size: var(--text-xl);
		font-weight: var(--weight-bold);
		font-family: var(--font-heading);
		color: var(--color-text-primary);
	}
	.draft-preview__section {
		margin-bottom: var(--space-6);
	}
	.draft-preview__section-title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		font-family: var(--font-heading);
		margin-bottom: var(--space-2);
		color: var(--color-text-primary);
	}
	.draft-preview__section-content {
		font-size: var(--text-sm);
		white-space: pre-wrap;
	}
	.draft-preview__citations {
		margin-top: var(--space-2);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.draft-preview__citation {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
		font-style: italic;
	}
	.draft-preview__body {
		font-size: var(--text-sm);
		white-space: pre-wrap;
	}
</style>
