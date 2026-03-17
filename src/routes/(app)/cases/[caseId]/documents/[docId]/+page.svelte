<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Button from '$components/ui/Button.svelte';
</script>

<svelte:head><title>Document — LegalPath</title></svelte:head>

<PageHeader title="Document Editor" description="Edit and refine your document with AI assistance.">
	{#snippet actions()}
		<Button variant="secondary" onclick={() => window.location.href = `/cases/${page.params.caseId}/documents`}>
			Back to Documents
		</Button>
	{/snippet}
</PageHeader>

<Card variant="raised">
	<div class="doc-editor">
		<p class="placeholder-text">Document editor will load here for document {page.params.docId}.</p>
	</div>
</Card>

<style>
	.doc-editor {
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.placeholder-text {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
