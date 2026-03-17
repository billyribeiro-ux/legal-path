<script lang="ts">
	import type { Snippet } from 'svelte';

	interface MenuItem {
		id: string;
		label: string;
		icon?: string;
		disabled?: boolean;
		danger?: boolean;
	}

	interface Props {
		items: MenuItem[];
		onselect: (id: string) => void;
		trigger: Snippet;
		align?: 'left' | 'right';
	}

	let { items, onselect, trigger, align = 'left' }: Props = $props();
	let open = $state(false);

	function toggle() {
		open = !open;
	}

	function select(id: string) {
		open = false;
		onselect(id);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') open = false;
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (!target.closest('.dropdown')) open = false;
	}
</script>

<svelte:window onclick={handleClickOutside} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="dropdown" onkeydown={handleKeydown}>
	<button class="dropdown__trigger" onclick={toggle} aria-expanded={open} aria-haspopup="menu">
		{@render trigger()}
	</button>
	{#if open}
		<div class="dropdown__menu dropdown__menu--{align}" role="menu">
			{#each items as item}
				<button
					class="dropdown__item"
					class:dropdown__item--danger={item.danger}
					role="menuitem"
					disabled={item.disabled}
					onclick={() => select(item.id)}
				>
					{item.label}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-flex;
	}
	.dropdown__trigger {
		display: inline-flex;
		align-items: center;
	}
	.dropdown__menu {
		position: absolute;
		top: 100%;
		margin-top: var(--space-1);
		min-width: 180px;
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-lg);
		padding: var(--space-1);
		z-index: var(--z-dropdown);
		animation: fadeIn var(--duration-fast) var(--easing-out);
	}
	.dropdown__menu--left { left: 0; }
	.dropdown__menu--right { right: 0; }
	.dropdown__item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		width: 100%;
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		border-radius: var(--radius-sm);
		text-align: left;
	}
	.dropdown__item:hover:not(:disabled) {
		background-color: var(--color-bg-sunken);
	}
	.dropdown__item:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.dropdown__item--danger {
		color: var(--color-error);
	}
	.dropdown__item--danger:hover:not(:disabled) {
		background-color: var(--color-error-light);
	}
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(-4px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
