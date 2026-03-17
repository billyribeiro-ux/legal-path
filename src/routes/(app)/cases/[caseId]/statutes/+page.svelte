<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
</script>

<svelte:head><title>Statutes — LegalPath</title></svelte:head>

<PageHeader title="Relevant Statutes" description="Statutes and regulations relevant to your case." />

<Card variant="raised">
	<div class="empty-state">
		<p>Relevant statutes will be suggested based on your case type and jurisdiction.</p>
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
