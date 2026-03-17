<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Button from '$components/ui/Button.svelte';
	import Card from '$components/ui/Card.svelte';
	import Plus from 'phosphor-svelte/lib/Plus';
</script>

<svelte:head><title>Cases — LegalPath</title></svelte:head>

<PageHeader title="My Cases" description="Manage and track all your legal cases.">
	{#snippet actions()}
		<Button variant="primary" onclick={() => window.location.href = '/cases/new'}>
			{#snippet icon()}<Plus size={16} />{/snippet}
			New Case
		</Button>
	{/snippet}
</PageHeader>

<Card variant="raised">
	<div class="empty-state">
		<p>You haven't created any cases yet.</p>
		<Button variant="secondary" size="sm" onclick={() => window.location.href = '/cases/new'}>
			Create Your First Case
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
