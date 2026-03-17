<script lang="ts">
	import List from 'phosphor-svelte/lib/List';
	import Moon from 'phosphor-svelte/lib/Moon';
	import Sun from 'phosphor-svelte/lib/Sun';
	import Bell from 'phosphor-svelte/lib/Bell';
	import UserCircle from 'phosphor-svelte/lib/UserCircle';
	import { theme } from '$lib/state/theme.svelte';
	import { auth } from '$lib/state/auth.svelte';

	interface Props {
		ontogglesidebar: () => void;
	}

	let { ontogglesidebar }: Props = $props();
</script>

<header class="topbar">
	<div class="topbar__left">
		<button class="topbar__toggle" onclick={ontogglesidebar} aria-label="Toggle sidebar">
			<List size={24} />
		</button>
	</div>
	<div class="topbar__right">
		<button class="topbar__action" onclick={() => theme.toggle()} aria-label="Toggle theme">
			{#if theme.isDark}
				<Sun size={20} />
			{:else}
				<Moon size={20} />
			{/if}
		</button>
		<button class="topbar__action" aria-label="Notifications">
			<Bell size={20} />
		</button>
		<a href="/settings" class="topbar__user" aria-label="User settings">
			<UserCircle size={28} weight="fill" />
			{#if auth.user}
				<span class="topbar__username">{auth.user.fullName}</span>
			{/if}
		</a>
	</div>
</header>

<style>
	.topbar {
		height: var(--topbar-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 var(--space-4);
		background-color: var(--color-bg-surface);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: var(--z-sticky);
	}
	.topbar__left {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}
	.topbar__toggle {
		display: flex;
		align-items: center;
		padding: var(--space-2);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
	}
	.topbar__toggle:hover {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-primary);
	}
	.topbar__right {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.topbar__action {
		display: flex;
		align-items: center;
		padding: var(--space-2);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
	}
	.topbar__action:hover {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-primary);
	}
	.topbar__user {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-md);
		color: var(--color-text-secondary);
		text-decoration: none;
	}
	.topbar__user:hover {
		background-color: var(--color-bg-sunken);
	}
	.topbar__username {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	@media (max-width: 640px) {
		.topbar__username {
			display: none;
		}
	}
</style>
