<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let fullName = $state('');
	let email = $state('');
	let usState = $state('');
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
			// TODO: API call
			window.location.href = '/dashboard';
		} catch (err) {
			error = 'Registration failed. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>Register — LegalPath</title></svelte:head>

<form onsubmit={handleSubmit}>
	<h2 class="auth-title">Create your account</h2>
	<p class="auth-subtitle">Start navigating your legal case today</p>

	{#if error}
		<p class="auth-error" role="alert">{error}</p>
	{/if}

	<div class="auth-fields">
		<Input label="Full Name" type="text" bind:value={fullName} required autocomplete="name" />
		<Input label="Email" type="email" bind:value={email} required autocomplete="email" />
		<Input label="State / Jurisdiction" type="text" bind:value={usState} required placeholder="e.g. California" />
		<Input label="Password" type="password" bind:value={password} required autocomplete="new-password" />
		<Input label="Confirm Password" type="password" bind:value={confirmPassword} required autocomplete="new-password" />
	</div>

	<div class="auth-actions">
		<Button variant="primary" fullWidth {loading} type="submit">Create Account</Button>
	</div>

	<p class="auth-footer">
		Already have an account? <a href="/login">Log in</a>
	</p>
</form>

<style>
	.auth-title { font-size: var(--text-xl); font-family: var(--font-heading); text-align: center; }
	.auth-subtitle { font-size: var(--text-sm); color: var(--color-text-secondary); text-align: center; margin-top: var(--space-1); }
	.auth-error { font-size: var(--text-sm); color: var(--color-error); text-align: center; padding: var(--space-3); background-color: var(--color-error-light); border-radius: var(--radius-md); margin-top: var(--space-4); }
	.auth-fields { display: flex; flex-direction: column; gap: var(--space-4); margin-top: var(--space-6); }
	.auth-actions { margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
	.auth-footer { margin-top: var(--space-6); text-align: center; font-size: var(--text-sm); color: var(--color-text-secondary); }
</style>
