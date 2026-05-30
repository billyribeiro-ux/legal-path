<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Tab {
		id: string;
		label: string;
		disabled?: boolean;
	}

	interface Props {
		tabs: Tab[];
		activeTab?: string;
		ontabchange?: (id: string) => void;
		children: Snippet;
	}

	let { tabs, activeTab = $bindable(''), ontabchange, children }: Props = $props();

	$effect(() => {
		if (!activeTab && tabs.length > 0) activeTab = tabs[0].id;
	});

	function selectTab(id: string) {
		activeTab = id;
		ontabchange?.(id);
	}
</script>

<div class="tabs">
	<div class="tabs__list" role="tablist">
		{#each tabs as tab (tab.id)}
			<button
				class="tabs__tab"
				class:tabs__tab--active={activeTab === tab.id}
				role="tab"
				aria-selected={activeTab === tab.id}
				disabled={tab.disabled}
				onclick={() => selectTab(tab.id)}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	<div class="tabs__panel" role="tabpanel">
		{@render children()}
	</div>
</div>

<style>
	.tabs__list {
		display: flex;
		border-bottom: 1px solid var(--color-border);
		gap: 0;
		overflow-x: auto;
	}
	.tabs__tab {
		padding: var(--space-3) var(--space-4);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		border-bottom: 2px solid transparent;
		transition: all var(--duration-fast);
		white-space: nowrap;
	}
	.tabs__tab:hover:not(:disabled) {
		color: var(--color-text-primary);
	}
	.tabs__tab--active {
		color: var(--color-primary-700);
		border-bottom-color: var(--color-primary-700);
	}
	.tabs__tab:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.tabs__panel {
		padding-top: var(--space-4);
	}
</style>
