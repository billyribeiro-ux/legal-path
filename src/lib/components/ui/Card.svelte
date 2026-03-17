<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'raised' | 'outlined';
		padding?: 'none' | 'sm' | 'md' | 'lg';
		children: Snippet;
		header?: Snippet;
		footer?: Snippet;
	}

	let { variant = 'default', padding = 'md', children, header, footer }: Props = $props();
</script>

<div class="card card--{variant} card--pad-{padding}">
	{#if header}
		<div class="card__header">{@render header()}</div>
	{/if}
	<div class="card__body">{@render children()}</div>
	{#if footer}
		<div class="card__footer">{@render footer()}</div>
	{/if}
</div>

<style>
	.card {
		background-color: var(--color-bg-surface);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}
	.card--default {
		border: 1px solid var(--color-border);
	}
	.card--raised {
		box-shadow: var(--shadow-md);
	}
	.card--outlined {
		border: 2px solid var(--color-border);
	}
	.card--pad-sm {
		--card-padding: var(--space-3);
	}
	.card--pad-md {
		--card-padding: var(--space-4);
	}
	.card--pad-lg {
		--card-padding: var(--space-6);
	}
	.card--pad-none {
		--card-padding: 0;
	}
	.card__header {
		padding: var(--card-padding);
		border-bottom: 1px solid var(--color-border);
	}
	.card__body {
		padding: var(--card-padding);
	}
	.card__footer {
		padding: var(--card-padding);
		border-top: 1px solid var(--color-border);
	}
</style>
