<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import DownloadSimple from 'phosphor-svelte/lib/DownloadSimple';
	import Printer from 'phosphor-svelte/lib/Printer';
	import Copy from 'phosphor-svelte/lib/Copy';
	import Trash from 'phosphor-svelte/lib/Trash';

	interface Props {
		ondownload?: () => void;
		onprint?: () => void;
		oncopy?: () => void;
		ondelete?: () => void;
		showDelete?: boolean;
	}

	let { ondownload, onprint, oncopy, ondelete, showDelete = false }: Props = $props();
</script>

<div class="document-actions">
	{#if ondownload}
		<Button variant="secondary" size="sm" onclick={ondownload}>
			{#snippet icon()}<DownloadSimple size={16} />{/snippet}
			Download
		</Button>
	{/if}
	{#if onprint}
		<Button variant="secondary" size="sm" onclick={onprint}>
			{#snippet icon()}<Printer size={16} />{/snippet}
			Print
		</Button>
	{/if}
	{#if oncopy}
		<Button variant="ghost" size="sm" onclick={oncopy}>
			{#snippet icon()}<Copy size={16} />{/snippet}
			Copy
		</Button>
	{/if}
	{#if showDelete && ondelete}
		<Button variant="danger" size="sm" onclick={ondelete}>
			{#snippet icon()}<Trash size={16} />{/snippet}
			Delete
		</Button>
	{/if}
</div>

<style>
	.document-actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}
</style>
