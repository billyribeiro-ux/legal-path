<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let email = $state('');
	let currentPassword = $state('');
	let newPassword = $state('');
</script>

<svelte:head><title>Account Settings — LegalPath</title></svelte:head>

<PageHeader title="Account" description="Manage your account credentials and security." />

<div class="account-sections">
	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Email Address</h3>{/snippet}
		<form class="settings-form" onsubmit={(e) => e.preventDefault()}>
			<Input label="Email" type="email" bind:value={email} autocomplete="email" />
			<div class="form-actions">
				<Button variant="primary" type="submit">Update Email</Button>
			</div>
		</form>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Change Password</h3>{/snippet}
		<form class="settings-form" onsubmit={(e) => e.preventDefault()}>
			<Input label="Current Password" type="password" bind:value={currentPassword} autocomplete="current-password" />
			<Input label="New Password" type="password" bind:value={newPassword} autocomplete="new-password" />
			<div class="form-actions">
				<Button variant="primary" type="submit">Update Password</Button>
			</div>
		</form>
	</Card>

	<Card variant="raised">
		{#snippet header()}<h3 class="section-title">Danger Zone</h3>{/snippet}
		<p class="danger-text">Permanently delete your account and all associated data.</p>
		<Button variant="ghost" onclick={() => {}}>Delete Account</Button>
	</Card>
</div>

<style>
	.account-sections {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.section-title {
		font-size: var(--text-base);
		font-family: var(--font-heading);
		font-weight: var(--weight-semibold);
	}
	.settings-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.form-actions {
		display: flex;
		justify-content: flex-end;
		margin-top: var(--space-2);
	}
	.danger-text {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-3);
	}
</style>
