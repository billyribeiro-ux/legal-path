<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
</script>

<svelte:head><title>Help — LegalPath</title></svelte:head>

<PageHeader title="Help & Support" description="Frequently asked questions and support resources." />

<div class="help-sections">
	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">What is LegalPath?</h3>{/snippet}
		<p class="help-text">
			LegalPath is an AI-powered tool that provides procedural guidance for self-represented litigants.
			It helps you understand court processes, track deadlines, and prepare documents.
		</p>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Is this legal advice?</h3>{/snippet}
		<p class="help-text">
			No. LegalPath provides legal information, not legal advice. The information provided is for
			educational purposes only and should not be considered a substitute for professional legal counsel.
			Always consult with a licensed attorney for advice specific to your situation.
		</p>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">How do I get started?</h3>{/snippet}
		<p class="help-text">
			Create a new case from the Dashboard, enter your case type and jurisdiction, and LegalPath
			will generate a procedural roadmap with deadlines and document templates tailored to your situation.
		</p>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Contact Support</h3>{/snippet}
		<p class="help-text">
			If you need additional help, please email support@legalpath.app.
		</p>
	</Card>
</div>

<style>
	.help-sections {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.section-title {
		font-size: var(--text-base);
		font-family: var(--font-heading);
		font-weight: var(--weight-semibold);
	}
	.help-text {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
	}
</style>
