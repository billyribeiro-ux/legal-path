<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Input from '$components/ui/Input.svelte';

	let search = $state('');
</script>

<svelte:head><title>Statute Library — LegalPath</title></svelte:head>

<PageHeader title="Statute Library" description="Search and browse statutes across jurisdictions." />

<div class="statutes-page">
	<Input label="Search Statutes" type="search" bind:value={search} placeholder="Search by keyword, statute number, or topic..." />

	<Card variant="raised">
		<div class="empty-state">
			<p>Enter a search term to find relevant statutes and regulations.</p>
		</div>
	</Card>
</div>

<style>
	.statutes-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.empty-state {
		text-align: center;
		padding: var(--space-10) 0;
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
