<script lang="ts">
	import { page } from '$app/state';
	import Button from '$components/ui/Button.svelte';
</script>

<div class="error-page">
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'Something went wrong'}</p>
	<Button variant="primary" onclick={() => window.location.href = '/'}>
		Go Home
	</Button>
</div>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100dvh;
		gap: var(--space-4);
		padding: var(--space-6);
		text-align: center;
	}
	h1 {
		font-size: var(--text-4xl);
		font-family: var(--font-heading);
		color: var(--color-primary-800);
	}
	p {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
	}
</style>
