<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	let email = $state('');
	let loading = $state(false);
	let sent = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		error = '';
		try {
			// TODO: API call
			sent = true;
		} catch (err) {
			error = 'Failed to send reset email. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head><title>Forgot Password — LegalPath</title></svelte:head>

{#if sent}
	<div class="auth-sent">
		<h2 class="auth-title">Check your email</h2>
		<p class="auth-subtitle">We sent a password reset link to {email}</p>
		<a href="/login" class="auth-link">Back to login</a>
	</div>
{:else}
	<form onsubmit={handleSubmit}>
		<h2 class="auth-title">Forgot your password?</h2>
		<p class="auth-subtitle">Enter your email and we'll send you a reset link</p>

		{#if error}
			<p class="auth-error" role="alert">{error}</p>
		{/if}

		<div class="auth-fields">
			<Input label="Email" type="email" bind:value={email} required autocomplete="email" />
		</div>

		<div class="auth-actions">
			<Button variant="primary" fullWidth {loading} type="submit">Send Reset Link</Button>
			<a href="/login" class="auth-link">Back to login</a>
		</div>
	</form>
{/if}

<style>
	.auth-title { font-size: var(--text-xl); font-family: var(--font-heading); text-align: center; }
	.auth-subtitle { font-size: var(--text-sm); color: var(--color-text-secondary); text-align: center; margin-top: var(--space-1); }
	.auth-error { font-size: var(--text-sm); color: var(--color-error); text-align: center; padding: var(--space-3); background-color: var(--color-error-light); border-radius: var(--radius-md); margin-top: var(--space-4); }
	.auth-fields { display: flex; flex-direction: column; gap: var(--space-4); margin-top: var(--space-6); }
	.auth-actions { margin-top: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
	.auth-link { font-size: var(--text-sm); color: var(--color-text-link); }
	.auth-sent { text-align: center; display: flex; flex-direction: column; gap: var(--space-3); align-items: center; }
</style>
