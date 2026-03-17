<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Button from '$components/ui/Button.svelte';
	import Card from '$components/ui/Card.svelte';
	import Plus from 'phosphor-svelte/lib/Plus';
</script>

<svelte:head><title>Journal — LegalPath</title></svelte:head>

<PageHeader title="Case Journal" description="Keep notes and track important events for your case.">
	{#snippet actions()}
		<Button variant="primary">
			{#snippet icon()}<Plus size={16} />{/snippet}
			New Entry
		</Button>
	{/snippet}
</PageHeader>

<Card variant="raised">
	<div class="empty-state">
		<p>No journal entries yet. Start recording notes about your case.</p>
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
