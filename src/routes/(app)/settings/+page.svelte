<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let displayName = $state('');
	let defaultJurisdiction = $state('');
</script>

<svelte:head><title>Settings — LegalPath</title></svelte:head>

<PageHeader title="General Settings" description="Configure your LegalPath preferences." />

<Card variant="raised">
	<form class="settings-form" onsubmit={(e) => e.preventDefault()}>
		<Input label="Display Name" type="text" bind:value={displayName} placeholder="Your name" />
		<Input label="Default Jurisdiction" type="text" bind:value={defaultJurisdiction} placeholder="e.g. California" />
		<div class="form-actions">
			<Button variant="primary" type="submit">Save Changes</Button>
		</div>
	</form>
</Card>

<style>
	.settings-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.form-actions {
		display: flex;
		justify-content: flex-end;
		margin-top: var(--space-4);
	}
</style>
