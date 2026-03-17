<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		error = '';
		try {
			// TODO: API call
			window.location.href = '/dashboard';
		} catch (err) {
			error = 'Invalid email or password';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>Log In — LegalPath</title></svelte:head>

<form onsubmit={handleSubmit}>
	<h2 class="auth-title">Welcome back</h2>
	<p class="auth-subtitle">Log in to your LegalPath account</p>

	{#if error}
		<p class="auth-error" role="alert">{error}</p>
	{/if}

	<div class="auth-fields">
		<Input label="Email" type="email" bind:value={email} required autocomplete="email" />
		<Input label="Password" type="password" bind:value={password} required autocomplete="current-password" />
	</div>

	<div class="auth-actions">
		<Button variant="primary" fullWidth {loading} type="submit">Log In</Button>
		<a href="/forgot-password" class="auth-link">Forgot password?</a>
	</div>

	<p class="auth-footer">
		Don't have an account? <a href="/register">Create one</a>
	</p>
</form>

<style>
	.auth-title { font-size: var(--text-xl); font-family: var(--font-heading); text-align: center; }
	.auth-subtitle { font-size: var(--text-sm); color: var(--color-text-secondary); text-align: center; margin-top: var(--space-1); }
	.auth-error { font-size: var(--text-sm); color: var(--color-error); text-align: center; padding: var(--space-3); background-color: var(--color-error-light); border-radius: var(--radius-md); margin-top: var(--space-4); }
	.auth-fields { display: flex; flex-direction: column; gap: var(--space-4); margin-top: var(--space-6); }
	.auth-actions { margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
	.auth-link { font-size: var(--text-sm); color: var(--color-text-link); }
	.auth-footer { margin-top: var(--space-6); text-align: center; font-size: var(--text-sm); color: var(--color-text-secondary); }
</style>
