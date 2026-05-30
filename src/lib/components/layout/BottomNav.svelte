<script lang="ts">
	import { page } from '$app/state';
	import House from 'phosphor-svelte/lib/House';
	import Briefcase from 'phosphor-svelte/lib/Briefcase';
	import BookOpen from 'phosphor-svelte/lib/BookOpen';
	import Gear from 'phosphor-svelte/lib/Gear';

	const items = [
		{ href: '/dashboard', label: 'Home', icon: House },
		{ href: '/cases', label: 'Cases', icon: Briefcase },
		{ href: '/statutes', label: 'Statutes', icon: BookOpen },
		{ href: '/settings', label: 'Settings', icon: Gear }
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<nav class="bottom-nav" aria-label="Main navigation">
	{#each items as item (item.href)}
		<a
			href={item.href}
			class="bottom-nav__item"
			class:bottom-nav__item--active={isActive(item.href)}
			aria-current={isActive(item.href) ? 'page' : undefined}
		>
			<item.icon size={22} weight={isActive(item.href) ? 'fill' : 'regular'} />
			<span class="bottom-nav__label">{item.label}</span>
		</a>
	{/each}
</nav>

<style>
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: var(--bottomnav-height);
		background-color: var(--color-bg-surface);
		border-top: 1px solid var(--color-border);
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: env(safe-area-inset-bottom, 0px);
		z-index: var(--z-sticky);
	}
	.bottom-nav__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-0-5);
		padding: var(--space-1) var(--space-3);
		color: var(--color-text-tertiary);
		text-decoration: none;
		font-size: var(--text-xs);
		transition: color var(--duration-fast);
	}
	.bottom-nav__item--active {
		color: var(--color-primary-700);
	}
	.bottom-nav__label {
		font-weight: var(--weight-medium);
	}
</style>
