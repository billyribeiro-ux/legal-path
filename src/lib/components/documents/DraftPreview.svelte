<script lang="ts">
	import type { DraftSection } from '$lib/types/document';
	import Card from '$components/ui/Card.svelte';
	import FeatureDisclaimer from '$components/disclaimer/FeatureDisclaimer.svelte';
	import { DISCLAIMERS } from '$lib/constants/disclaimers';

	interface Props {
		title: string;
		sections: DraftSection[];
		disclaimer?: string;
	}

	let { title, sections, disclaimer }: Props = $props();
</script>

<div class="draft-preview">
	<FeatureDisclaimer message={disclaimer ?? DISCLAIMERS.documentGeneration.content} />

	<Card variant="outlined" padding="lg">
		<div class="draft-preview__document">
			<h2 class="draft-preview__title">{title}</h2>
			{#each sections as section}
				<div class="draft-preview__section">
					<h3 class="draft-preview__section-title">{section.title}</h3>
					<div class="draft-preview__content">{section.content}</div>
					{#if section.citations?.length}
						<div class="draft-preview__citations">
							{#each section.citations as citation}
								<code class="draft-preview__citation">{citation}</code>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</Card>
</div>

<style>
	.draft-preview {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.draft-preview__document {
		font-family: var(--font-body);
		line-height: var(--leading-relaxed);
	}
	.draft-preview__title {
		font-size: var(--text-xl);
		font-family: var(--font-heading);
		text-align: center;
		margin-bottom: var(--space-6);
		padding-bottom: var(--space-4);
		border-bottom: 2px solid var(--color-border);
	}
	.draft-preview__section {
		margin-bottom: var(--space-6);
	}
	.draft-preview__section-title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		margin-bottom: var(--space-2);
	}
	.draft-preview__content {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		white-space: pre-wrap;
	}
	.draft-preview__citations {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
		margin-top: var(--space-2);
	}
	.draft-preview__citation {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		background-color: var(--color-bg-sunken);
		padding: var(--space-0-5) var(--space-1);
		border-radius: var(--radius-sm);
		color: var(--color-text-tertiary);
	}
</style>
