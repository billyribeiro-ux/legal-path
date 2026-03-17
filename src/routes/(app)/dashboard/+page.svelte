<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Button from '$components/ui/Button.svelte';
	import Card from '$components/ui/Card.svelte';
	import ProgressBar from '$components/ui/ProgressBar.svelte';
	import Plus from 'phosphor-svelte/lib/Plus';
</script>

<svelte:head><title>Dashboard — LegalPath</title></svelte:head>

<PageHeader title="Dashboard" description="Overview of your cases and upcoming deadlines.">
	{#snippet actions()}
		<Button variant="primary" onclick={() => window.location.href = '/cases/new'}>
			{#snippet icon()}<Plus size={16} />{/snippet}
			New Case
		</Button>
	{/snippet}
</PageHeader>

<div class="dashboard-grid">
	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Active Cases</h3>{/snippet}
		<div class="empty-message">
			<p>No cases yet. Create your first case to get started.</p>
			<Button variant="secondary" size="sm" onclick={() => window.location.href = '/cases/new'}>
				Create Case
			</Button>
		</div>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Upcoming Deadlines</h3>{/snippet}
		<p class="empty-message">No upcoming deadlines.</p>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Case Progress</h3>{/snippet}
		<ProgressBar value={0} max={100} label="Overall Progress" showPercent />
	</Card>
</div>

<style>
	.dashboard-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-4);
	}
	.section-title {
		font-size: var(--text-base);
		font-family: var(--font-heading);
		font-weight: var(--weight-semibold);
	}
	.empty-message {
		text-align: center;
		padding: var(--space-6) 0;
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
	}
</style>
