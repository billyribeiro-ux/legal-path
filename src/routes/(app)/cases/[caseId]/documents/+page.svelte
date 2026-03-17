<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Button from '$components/ui/Button.svelte';
	import Card from '$components/ui/Card.svelte';
	import Plus from 'phosphor-svelte/lib/Plus';
</script>

<svelte:head><title>Documents — LegalPath</title></svelte:head>

<PageHeader title="Documents" description="Draft and manage your case documents.">
	{#snippet actions()}
		<Button variant="primary" onclick={() => window.location.href = `/cases/${page.params.caseId}/documents/new`}>
			{#snippet icon()}<Plus size={16} />{/snippet}
			New Document
		</Button>
	{/snippet}
</PageHeader>

<Card variant="raised">
	<div class="empty-state">
		<p>No documents yet. Create your first document using AI-powered templates.</p>
		<Button variant="secondary" size="sm" onclick={() => window.location.href = `/cases/${page.params.caseId}/documents/new`}>
			Create Document
		</Button>
	</div>
</Card>

<style>
	.empty-state {
		text-align: center;
		padding: var(--space-10) 0;
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
	}
</style>
