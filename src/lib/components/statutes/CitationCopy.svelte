<script lang="ts">
	interface Props {
		citation: string;
	}

	let { citation }: Props = $props();
	let copied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(citation);
			copied = true;
			setTimeout(() => { copied = false; }, 2000);
		} catch {
			// Fallback for older browsers
			const textarea = document.createElement('textarea');
			textarea.value = citation;
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			copied = true;
			setTimeout(() => { copied = false; }, 2000);
		}
	}
</script>

<button
	class="citation-copy"
	class:citation-copy--copied={copied}
	onclick={copyToClipboard}
	aria-label={copied ? 'Citation copied' : 'Copy citation to clipboard'}
	title={copied ? 'Copied!' : 'Copy citation'}
>
	{#if copied}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<path d="M3 8.5l3 3 7-7"/>
		</svg>
	{:else}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
			<rect x="5" y="5" width="8" height="8" rx="1"/>
			<path d="M11 3H4a1 1 0 00-1 1v7"/>
		</svg>
	{/if}
</button>

<style>
	.citation-copy {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		padding: 0;
		color: var(--color-text-tertiary);
		background-color: transparent;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: all var(--duration-fast);
		flex-shrink: 0;
	}
	.citation-copy:hover {
		color: var(--color-text-primary);
		background-color: var(--color-bg-sunken);
		border-color: var(--color-primary-300);
	}
	.citation-copy:focus-visible {
		box-shadow: var(--focus-ring);
	}
	.citation-copy--copied {
		color: var(--color-success-dark);
		border-color: var(--color-success-dark);
		background-color: var(--color-success-light);
	}
</style>
