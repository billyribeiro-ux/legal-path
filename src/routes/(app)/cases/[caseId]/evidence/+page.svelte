<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Button from '$components/ui/Button.svelte';
	import Card from '$components/ui/Card.svelte';
	import Plus from 'phosphor-svelte/lib/Plus';
</script>

<svelte:head><title>Evidence — LegalPath</title></svelte:head>

<PageHeader title="Evidence" description="Upload, organize, and manage your case evidence.">
	{#snippet actions()}
		<Button variant="primary">
			{#snippet icon()}<Plus size={16} />{/snippet}
			Upload Evidence
		</Button>
	{/snippet}
</PageHeader>

<Card variant="raised">
	<div class="empty-state">
		<p>No evidence uploaded yet. Upload files to organize your case evidence.</p>
	</div>
</Card>

<style>
	.empty-state {
		text-align: center;
		padding: var(--space-10) 0;
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
