<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import Copy from 'phosphor-svelte/lib/Copy';
	import Check from 'phosphor-svelte/lib/Check';

	interface Props {
		citation: string;
	}

	let { citation }: Props = $props();

	let copied = $state(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(citation);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			// Fallback for environments without clipboard API
			const textarea = document.createElement('textarea');
			textarea.value = citation;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			document.body.removeChild(textarea);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}
	}
</script>

<div class="citation-copy">
	<code class="citation-copy__text">{citation}</code>
	<Button variant="ghost" size="sm" onclick={handleCopy}>
		{#snippet icon()}
			{#if copied}
				<Check size={14} />
			{:else}
				<Copy size={14} />
			{/if}
		{/snippet}
		{copied ? 'Copied!' : 'Copy Citation'}
	</Button>
</div>

<style>
	.citation-copy {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background-color: var(--color-bg-sunken);
		padding: var(--space-1) var(--space-2) var(--space-1) var(--space-3);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}
	.citation-copy__text {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		user-select: all;
	}
</style>
