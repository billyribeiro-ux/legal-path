<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	let { children }: { children: Snippet } = $props();

	const tabs = [
		{ href: '', label: 'Overview' },
		{ href: '/roadmap', label: 'Roadmap' },
		{ href: '/documents', label: 'Documents' },
		{ href: '/evidence', label: 'Evidence' },
		{ href: '/journal', label: 'Journal' },
		{ href: '/statutes', label: 'Statutes' }
	];

	function isActive(tabHref: string): boolean {
		const basePath = `/cases/${page.params.caseId}`;
		const fullPath = basePath + tabHref;
		if (tabHref === '') return page.url.pathname === basePath;
		return page.url.pathname.startsWith(fullPath);
	}
</script>

<div class="case-layout">
	<div class="case-tabs" role="tablist">
		{#each tabs as tab (tab.href)}
			<a
				href="/cases/{page.params.caseId}{tab.href}"
				class="case-tab"
				class:case-tab--active={isActive(tab.href)}
				role="tab"
				aria-selected={isActive(tab.href)}
			>
				{tab.label}
			</a>
		{/each}
	</div>
	<div class="case-content">
		{@render children()}
	</div>
</div>

<style>
	.case-layout {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.case-tabs {
		display: flex;
		gap: var(--space-1);
		border-bottom: 1px solid var(--color-border);
		overflow-x: auto;
	}
	.case-tab {
		padding: var(--space-3) var(--space-4);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		text-decoration: none;
		border-bottom: 2px solid transparent;
		white-space: nowrap;
		transition: color 0.15s, border-color 0.15s;
	}
	.case-tab:hover {
		color: var(--color-text-primary);
	}
	.case-tab--active {
		color: var(--color-primary-700);
		border-bottom-color: var(--color-primary-700);
	}
	.case-content {
		min-height: 0;
	}
</style>
