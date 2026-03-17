<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		open?: boolean;
		children: Snippet;
	}

	let { title, open = $bindable(false), children }: Props = $props();
</script>

<details class="accordion" bind:open>
	<summary class="accordion__header">
		<span class="accordion__title">{title}</span>
		<svg
			class="accordion__chevron"
			class:accordion__chevron--open={open}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<path d="M6 8l4 4 4-4" />
		</svg>
	</summary>
	<div class="accordion__body">
		{@render children()}
	</div>
</details>

<style>
	.accordion {
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		overflow: hidden;
	}
	.accordion__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-3) var(--space-4);
		cursor: pointer;
		font-weight: var(--weight-medium);
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		list-style: none;
	}
	.accordion__header::-webkit-details-marker {
		display: none;
	}
	.accordion__header:hover {
		background-color: var(--color-bg-sunken);
	}
	.accordion__chevron {
		transition: transform var(--duration-fast);
		color: var(--color-text-tertiary);
		flex-shrink: 0;
	}
	.accordion__chevron--open {
		transform: rotate(180deg);
	}
	.accordion__body {
		padding: 0 var(--space-4) var(--space-4);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
</style>
