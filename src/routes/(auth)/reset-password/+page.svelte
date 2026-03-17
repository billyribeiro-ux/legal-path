<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let password = $state('');
	let confirmPassword = $state('');
	let loading = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}
		loading = true;
		error = '';
		try {
			// TODO: API call with token from URL
			window.location.href = '/login';
		} catch (err) {
			error = 'Failed to reset password. The link may have expired.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>Reset Password — LegalPath</title></svelte:head>

<form onsubmit={handleSubmit}>
	<h2 class="auth-title">Reset your password</h2>
	<p class="auth-subtitle">Enter your new password below</p>

	{#if error}
		<p class="auth-error" role="alert">{error}</p>
	{/if}

	<div class="auth-fields">
		<Input label="New Password" type="password" bind:value={password} required autocomplete="new-password" />
		<Input label="Confirm Password" type="password" bind:value={confirmPassword} required autocomplete="new-password" />
	</div>

	<div class="auth-actions">
		<Button variant="primary" fullWidth {loading} type="submit">Reset Password</Button>
		<a href="/login" class="auth-link">Back to login</a>
	</div>
</form>

<style>
	.auth-title { font-size: var(--text-xl); font-family: var(--font-heading); text-align: center; }
	.auth-subtitle { font-size: var(--text-sm); color: var(--color-text-secondary); text-align: center; margin-top: var(--space-1); }
	.auth-error { font-size: var(--text-sm); color: var(--color-error); text-align: center; padding: var(--space-3); background-color: var(--color-error-light); border-radius: var(--radius-md); margin-top: var(--space-4); }
	.auth-fields { display: flex; flex-direction: column; gap: var(--space-4); margin-top: var(--space-6); }
	.auth-actions { margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
	.auth-link { font-size: var(--text-sm); color: var(--color-text-link); }
</style>
