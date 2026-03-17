<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let caseName = $state('');
	let caseType = $state('');
	let jurisdiction = $state('');
	let description = $state('');
	let loading = $state(false);

	async function handleCreate(e: Event) {
		e.preventDefault();
		loading = true;
		try {
			// TODO: API call to create case
			window.location.href = '/cases';
		} catch {
			// TODO: handle error
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>New Case — LegalPath</title></svelte:head>

<PageHeader title="Create New Case" description="Set up a new legal case to start tracking." />

<Card variant="raised">
	<form onsubmit={handleCreate} class="case-form">
		<Input label="Case Name" type="text" bind:value={caseName} required placeholder="e.g. Smith v. Johnson" />
		<Input label="Case Type" type="text" bind:value={caseType} required placeholder="e.g. Small Claims, Family Law" />
		<Input label="Jurisdiction" type="text" bind:value={jurisdiction} required placeholder="e.g. California Superior Court" />
		<div class="form-field">
			<label for="description">Description</label>
			<textarea id="description" bind:value={description} rows={4} placeholder="Brief description of your case..."></textarea>
		</div>
		<div class="form-actions">
			<Button variant="ghost" onclick={() => window.location.href = '/cases'}>Cancel</Button>
			<Button variant="primary" {loading} type="submit">Create Case</Button>
		</div>
	</form>
</Card>

<style>
	.case-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.form-field {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.form-field label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.form-field textarea {
		padding: var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		resize: vertical;
		font-family: inherit;
	}
	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}
</style>
