<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
</script>

<svelte:head><title>Roadmap — LegalPath</title></svelte:head>

<PageHeader title="Procedural Roadmap" description="Step-by-step guidance through your legal process." />

<Card variant="raised">
	<div class="empty-state">
		<p>Your procedural roadmap will appear here once the case type and jurisdiction are configured.</p>
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
