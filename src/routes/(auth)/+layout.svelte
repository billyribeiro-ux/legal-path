<script lang="ts">
	import type { Snippet } from 'svelte';
	import Scales from 'phosphor-svelte/lib/Scales';

	let { children }: { children: Snippet } = $props();
</script>

<div class="auth-layout">
	<div class="auth-layout__card">
		<a href="/" class="auth-layout__logo">
			<Scales size={32} weight="bold" />
			<span>LegalPath</span>
		</a>
		{@render children()}
	</div>
</div>

<style>
	.auth-layout {
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-6);
		background-color: var(--color-bg-page);
	}
	.auth-layout__card {
		width: 100%;
		max-width: 440px;
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: var(--space-8);
	}
	.auth-layout__logo {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		font-family: var(--font-heading);
		font-size: var(--text-2xl);
		font-weight: var(--weight-bold);
		color: var(--color-primary-800);
		text-decoration: none;
		margin-bottom: var(--space-6);
		justify-content: center;
	}
</style>
