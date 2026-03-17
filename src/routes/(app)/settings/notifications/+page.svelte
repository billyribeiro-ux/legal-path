<script lang="ts">
	import PageHeader from '$components/layout/PageHeader.svelte';
	import Card from '$components/ui/Card.svelte';
	import Button from '$components/ui/Button.svelte';

	let deadlineReminders = $state(true);
	let emailNotifications = $state(true);
	let caseUpdates = $state(true);
</script>

<svelte:head><title>Notification Settings — LegalPath</title></svelte:head>

<PageHeader title="Notifications" description="Manage how and when you receive notifications." />

<Card variant="raised">
	<form class="settings-form" onsubmit={(e) => e.preventDefault()}>
		<label class="toggle-row">
			<input type="checkbox" bind:checked={deadlineReminders} />
			<div>
				<span class="toggle-label">Deadline Reminders</span>
				<span class="toggle-desc">Get reminded before upcoming deadlines</span>
			</div>
		</label>
		<label class="toggle-row">
			<input type="checkbox" bind:checked={emailNotifications} />
			<div>
				<span class="toggle-label">Email Notifications</span>
				<span class="toggle-desc">Receive notifications via email</span>
			</div>
		</label>
		<label class="toggle-row">
			<input type="checkbox" bind:checked={caseUpdates} />
			<div>
				<span class="toggle-label">Case Updates</span>
				<span class="toggle-desc">Get notified when your case status changes</span>
			</div>
		</label>
		<div class="form-actions">
			<Button variant="primary" type="submit">Save Preferences</Button>
		</div>
	</form>
</Card>

<style>
	.settings-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.toggle-row {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		cursor: pointer;
	}
	.toggle-row input[type="checkbox"] {
		margin-top: var(--space-1);
	}
	.toggle-label {
		display: block;
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.toggle-desc {
		display: block;
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.form-actions {
		display: flex;
		justify-content: flex-end;
		margin-top: var(--space-4);
	}
</style>
