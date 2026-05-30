<script lang="ts">
	import { page } from '$app/state';
	import House from 'phosphor-svelte/lib/House';
	import Briefcase from 'phosphor-svelte/lib/Briefcase';
	import BookOpen from 'phosphor-svelte/lib/BookOpen';
	import Gear from 'phosphor-svelte/lib/Gear';
	import Question from 'phosphor-svelte/lib/Question';
	import Scales from 'phosphor-svelte/lib/Scales';

	interface Props {
		open?: boolean;
	}

	let { open = $bindable(true) }: Props = $props();

	const navItems = [
		{ href: '/dashboard', label: 'Dashboard', icon: House },
		{ href: '/cases', label: 'Cases', icon: Briefcase },
		{ href: '/statutes', label: 'Statute Lookup', icon: BookOpen },
		{ href: '/settings', label: 'Settings', icon: Gear },
		{ href: '/help', label: 'Help & FAQ', icon: Question }
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

{#if open}
	<aside class="sidebar" aria-label="Main navigation">
		<div class="sidebar__header">
			<a href="/dashboard" class="sidebar__logo">
				<Scales size={28} weight="bold" />
				<span class="sidebar__logo-text">LegalPath</span>
			</a>
		</div>
		<nav class="sidebar__nav">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="sidebar__link"
					class:sidebar__link--active={isActive(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					<item.icon size={20} weight={isActive(item.href) ? 'fill' : 'regular'} />
					<span>{item.label}</span>
				</a>
			{/each}
		</nav>
	</aside>
{/if}

<style>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: var(--sidebar-width);
		background-color: var(--color-bg-surface);
		border-right: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		z-index: var(--z-sticky);
		overflow-y: auto;
	}
	.sidebar__header {
		padding: var(--space-4) var(--space-5);
		border-bottom: 1px solid var(--color-border);
	}
	.sidebar__logo {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		text-decoration: none;
		color: var(--color-primary-800);
	}
	.sidebar__logo-text {
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: var(--weight-bold);
	}
	.sidebar__nav {
		padding: var(--space-3);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		flex: 1;
	}
	.sidebar__link {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: all var(--duration-fast);
	}
	.sidebar__link:hover {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-primary);
	}
	.sidebar__link--active {
		background-color: var(--color-primary-50);
		color: var(--color-primary-800);
	}
</style>
