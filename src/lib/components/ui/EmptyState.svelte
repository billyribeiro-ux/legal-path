<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		description?: string;
		icon?: Snippet;
		action?: Snippet;
	}

	let { title, description, icon, action }: Props = $props();
</script>

<div class="empty-state" role="status">
	{#if icon}
		<div class="empty-state__icon">{@render icon()}</div>
	{:else}
		<div class="empty-state__icon">
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
				<rect x="8" y="8" width="32" height="32" rx="4" />
				<path d="M16 20h16M16 28h8" />
			</svg>
		</div>
	{/if}
	<h3 class="empty-state__title">{title}</h3>
	{#if description}
		<p class="empty-state__description">{description}</p>
	{/if}
	{#if action}
		<div class="empty-state__action">{@render action()}</div>
	{/if}
</div>

<style>
	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: var(--space-8) var(--space-4);
		gap: var(--space-3);
	}
	.empty-state__icon {
		color: var(--color-text-tertiary);
		margin-bottom: var(--space-2);
	}
	.empty-state__title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--color-text-primary);
		font-family: var(--font-heading);
	}
	.empty-state__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		max-width: 360px;
	}
	.empty-state__action {
		margin-top: var(--space-2);
	}
</style>
