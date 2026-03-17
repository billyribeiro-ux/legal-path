<script lang="ts">
	import type { Evidence } from '$lib/types/evidence';

	interface Props {
		evidence: Evidence;
	}

	let { evidence }: Props = $props();

	let isImage = $derived(evidence.mimeType.startsWith('image/'));
	let isPdf = $derived(evidence.mimeType === 'application/pdf');
</script>

<div class="evidence-viewer" aria-label="Evidence viewer: {evidence.title}">
	<header class="evidence-viewer__header">
		<h2 class="evidence-viewer__title">{evidence.title}</h2>
		{#if evidence.description}
			<p class="evidence-viewer__desc">{evidence.description}</p>
		{/if}
	</header>

	<div class="evidence-viewer__content">
		{#if isImage}
			<img
				class="evidence-viewer__image"
				src={evidence.filePath}
				alt={evidence.title}
				loading="lazy"
			/>
		{:else if isPdf}
			<div class="evidence-viewer__placeholder" role="img" aria-label="PDF document">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
					<rect x="8" y="4" width="24" height="32" rx="2" />
					<path d="M14 14h12M14 20h12M14 26h8" stroke-linecap="round" />
					<path d="M32 12l8 8v20a2 2 0 01-2 2H18" />
				</svg>
				<p>PDF Document</p>
				<a class="evidence-viewer__link" href={evidence.filePath} target="_blank" rel="noopener noreferrer">
					Open in new tab
				</a>
			</div>
		{:else}
			<div class="evidence-viewer__placeholder" role="img" aria-label="File preview unavailable">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
					<rect x="10" y="6" width="28" height="36" rx="2" />
					<path d="M18 18h12M18 24h12M18 30h8" stroke-linecap="round" />
				</svg>
				<p>Preview not available for this file type</p>
				<a class="evidence-viewer__link" href={evidence.filePath} target="_blank" rel="noopener noreferrer">
					Download file
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
	.evidence-viewer {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.evidence-viewer__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.evidence-viewer__title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		font-family: var(--font-heading);
		color: var(--color-text-primary);
	}
	.evidence-viewer__desc {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
	.evidence-viewer__content {
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		background-color: var(--color-bg-sunken);
	}
	.evidence-viewer__image {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
	}
	.evidence-viewer__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		padding: var(--space-8);
		color: var(--color-text-tertiary);
		text-align: center;
	}
	.evidence-viewer__placeholder p {
		font-size: var(--text-sm);
	}
	.evidence-viewer__link {
		font-size: var(--text-sm);
		color: var(--color-primary-600);
		text-decoration: underline;
	}
	.evidence-viewer__link:hover {
		color: var(--color-primary-800);
	}
</style>
