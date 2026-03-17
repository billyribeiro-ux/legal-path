<script lang="ts">
	import Button from '$components/ui/Button.svelte';

	interface Props {
		ondownload?: () => void;
		onprint?: () => void;
		onsave?: () => void;
	}

	let { ondownload, onprint, onsave }: Props = $props();
</script>

<div class="doc-actions" role="toolbar" aria-label="Document actions">
	{#if onsave}
		<Button variant="primary" onclick={onsave}>
			{#snippet icon()}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					<path d="M12.7 3.3L13 5v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h6.7z"/>
					<path d="M10 2v3H6"/>
					<path d="M6 10h4"/>
				</svg>
			{/snippet}
			Save
		</Button>
	{/if}
	{#if ondownload}
		<Button variant="secondary" onclick={ondownload}>
			{#snippet icon()}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					<path d="M8 2v8m0 0l-3-3m3 3l3-3"/>
					<path d="M3 11v2a1 1 0 001 1h8a1 1 0 001-1v-2"/>
				</svg>
			{/snippet}
			Download
		</Button>
	{/if}
	{#if onprint}
		<Button variant="secondary" onclick={onprint}>
			{#snippet icon()}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					<path d="M4 6V2h8v4"/>
					<rect x="2" y="6" width="12" height="6" rx="1"/>
					<path d="M4 12v2h8v-2"/>
				</svg>
			{/snippet}
			Print
		</Button>
	{/if}
</div>

<style>
	.doc-actions {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) 0;
		flex-wrap: wrap;
	}
</style>
