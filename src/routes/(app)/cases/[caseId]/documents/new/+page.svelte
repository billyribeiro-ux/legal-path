<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let title = $state('');
	let templateType = $state('');
	let loading = $state(false);

	async function handleCreate(e: Event) {
		e.preventDefault();
		loading = true;
		try {
			// TODO: API call
			window.location.href = `/cases/${page.params.caseId}/documents`;
		} catch {
			// TODO: handle error
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>New Document — LegalPath</title></svelte:head>

<PageHeader title="New Document" description="Create a new document using AI-powered templates." />

<Card variant="raised">
	<form onsubmit={handleCreate} class="doc-form">
		<Input label="Document Title" type="text" bind:value={title} required placeholder="e.g. Motion to Dismiss" />
		<Input label="Template Type" type="text" bind:value={templateType} placeholder="e.g. Motion, Complaint, Response" />
		<div class="form-actions">
			<Button variant="ghost" onclick={() => window.location.href = `/cases/${page.params.caseId}/documents`}>Cancel</Button>
			<Button variant="primary" {loading} type="submit">Create Document</Button>
		</div>
	</form>
</Card>

<style>
	.doc-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}
</style>
