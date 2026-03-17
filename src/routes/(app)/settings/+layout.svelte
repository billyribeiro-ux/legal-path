<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	let { children }: { children: Snippet } = $props();

	const tabs = [
		{ href: '/settings', label: 'General' },
		{ href: '/settings/account', label: 'Account' },
		{ href: '/settings/notifications', label: 'Notifications' }
	];
</script>

<div class="settings-layout">
	<nav class="settings-nav">
		{#each tabs as tab}
			<a
				href={tab.href}
				class="settings-nav__link"
				class:settings-nav__link--active={page.url.pathname === tab.href}
			>
				{tab.label}
			</a>
		{/each}
	</nav>
	<div class="settings-content">
		{@render children()}
	</div>
</div>

<style>
	.settings-layout {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: var(--space-6);
	}
	.settings-nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.settings-nav__link {
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		text-decoration: none;
		border-radius: var(--radius-md);
		transition: background-color 0.15s, color 0.15s;
	}
	.settings-nav__link:hover {
		background-color: var(--color-bg-hover);
		color: var(--color-text-primary);
	}
	.settings-nav__link--active {
		background-color: var(--color-primary-50);
		color: var(--color-primary-700);
	}
	@media (max-width: 640px) {
		.settings-layout {
			grid-template-columns: 1fr;
		}
		.settings-nav {
			flex-direction: row;
			overflow-x: auto;
		}
	}
</style>
