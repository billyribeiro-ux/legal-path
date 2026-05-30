<script lang="ts">
	import type { Snippet } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import TopBar from './TopBar.svelte';
	import BottomNav from './BottomNav.svelte';
	import { breakpoints } from '$lib/utils/breakpoints.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
	let sidebarOpenDesktop = $state(true);

	const isMobile = $derived(!breakpoints.md.current);
	const sidebarOpen = $derived(isMobile ? false : sidebarOpenDesktop);
</script>

<div class="app-shell">
	{#if !isMobile}
		<Sidebar open={sidebarOpen} />
	{/if}
	<div class="app-shell__main" class:app-shell__main--sidebar-open={sidebarOpen && !isMobile}>
		<TopBar ontogglesidebar={() => { sidebarOpenDesktop = !sidebarOpenDesktop; }} />
		<main class="app-shell__content">
			{@render children()}
		</main>
	</div>
	{#if isMobile}
		<BottomNav />
	{/if}
</div>

<style>
	.app-shell {
		display: flex;
		min-height: 100dvh;
		background-color: var(--color-bg-page);
	}
	.app-shell__main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
		transition: margin-left var(--duration-normal) var(--easing-default);
	}
	.app-shell__main--sidebar-open {
		margin-left: var(--sidebar-width);
	}
	.app-shell__content {
		flex: 1;
		padding: var(--space-6);
		padding-bottom: calc(var(--space-6) + env(safe-area-inset-bottom, 0px));
		max-width: var(--content-max-width);
		width: 100%;
		margin: 0 auto;
	}
	@media (max-width: 767px) {
		.app-shell__content {
			padding: var(--space-4);
			padding-bottom: calc(var(--bottomnav-height) + var(--space-4) + env(safe-area-inset-bottom, 0px));
		}
	}
</style>
