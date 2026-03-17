<script lang="ts">
	interface Props {
		categories: string[];
		selected: string[];
		onchange?: (selected: string[]) => void;
	}

	let { categories, selected = $bindable([]), onchange }: Props = $props();

	function toggle(category: string) {
		if (selected.includes(category)) {
			selected = selected.filter((c) => c !== category);
		} else {
			selected = [...selected, category];
		}
		onchange?.(selected);
	}

	function formatLabel(cat: string): string {
		return cat.replace(/_/g, ' ');
	}
</script>

<div class="category-filter" role="group" aria-label="Filter by category">
	{#each categories as category}
		<button
			class="category-filter__btn"
			class:category-filter__btn--active={selected.includes(category)}
			onclick={() => toggle(category)}
			aria-pressed={selected.includes(category)}
		>
			{formatLabel(category)}
		</button>
	{/each}
</div>

<style>
	.category-filter {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	.category-filter__btn {
		padding: var(--space-1) var(--space-3);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-full);
		cursor: pointer;
		transition: all var(--duration-fast);
		text-transform: capitalize;
	}
	.category-filter__btn:hover {
		border-color: var(--color-primary-300);
		color: var(--color-text-primary);
	}
	.category-filter__btn:focus-visible {
		box-shadow: var(--focus-ring);
	}
	.category-filter__btn--active {
		background-color: var(--color-primary-100);
		border-color: var(--color-primary-500);
		color: var(--color-primary-800);
	}
</style>
