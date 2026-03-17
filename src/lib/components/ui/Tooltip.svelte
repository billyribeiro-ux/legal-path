<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		text: string;
		position?: 'top' | 'bottom' | 'left' | 'right';
		children: Snippet;
	}

	let { text, position = 'top', children }: Props = $props();
	let visible = $state(false);
</script>

<span
	class="tooltip-wrapper"
	onmouseenter={() => (visible = true)}
	onmouseleave={() => (visible = false)}
	onfocusin={() => (visible = true)}
	onfocusout={() => (visible = false)}
>
	{@render children()}
	{#if visible}
		<span class="tooltip tooltip--{position}" role="tooltip">{text}</span>
	{/if}
</span>

<style>
	.tooltip-wrapper {
		position: relative;
		display: inline-flex;
	}
	.tooltip {
		position: absolute;
		padding: var(--space-1) var(--space-2);
		background-color: var(--color-neutral-900);
		color: white;
		font-size: var(--text-xs);
		border-radius: var(--radius-sm);
		white-space: nowrap;
		pointer-events: none;
		z-index: var(--z-tooltip);
		animation: fadeIn var(--duration-fast) var(--easing-out);
	}
	.tooltip--top {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: var(--space-1);
	}
	.tooltip--bottom {
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: var(--space-1);
	}
	.tooltip--left {
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-right: var(--space-1);
	}
	.tooltip--right {
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: var(--space-1);
	}
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
</style>
