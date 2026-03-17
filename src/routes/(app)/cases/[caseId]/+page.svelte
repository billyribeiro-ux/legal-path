<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import ProgressBar from '$components/ui/ProgressBar.svelte';
</script>

<svelte:head><title>Case Overview — LegalPath</title></svelte:head>

<PageHeader title="Case Overview" description="Summary and key details for this case." />

<div class="overview-grid">
	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Case Details</h3>{/snippet}
		<dl class="detail-list">
			<dt>Case ID</dt>
			<dd>{page.params.caseId}</dd>
			<dt>Status</dt>
			<dd>Active</dd>
			<dt>Type</dt>
			<dd>—</dd>
			<dt>Jurisdiction</dt>
			<dd>—</dd>
		</dl>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Progress</h3>{/snippet}
		<ProgressBar value={0} max={100} label="Case Progress" showPercent />
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Next Steps</h3>{/snippet}
		<p class="empty-text">No upcoming tasks. Check the Roadmap tab for your procedural steps.</p>
	</Card>
</div>

<style>
	.overview-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-4);
	}
	.section-title {
		font-size: var(--text-base);
		font-family: var(--font-heading);
		font-weight: var(--weight-semibold);
	}
	.detail-list {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--space-2) var(--space-4);
		font-size: var(--text-sm);
	}
	.detail-list dt {
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
	}
	.detail-list dd {
		color: var(--color-text-primary);
	}
	.empty-text {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		padding: var(--space-4) 0;
	}
</style>
