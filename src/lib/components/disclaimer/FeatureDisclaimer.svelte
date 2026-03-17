<script lang="ts">
	import Info from 'phosphor-svelte/lib/Info';

	interface Props {
		message: string;
		compact?: boolean;
	}

	let { message, compact = false }: Props = $props();
</script>

<aside class="feature-disclaimer" class:feature-disclaimer--compact={compact} role="note" aria-label="Disclaimer">
	<Info size={compact ? 16 : 18} />
	<p>{message}</p>
</aside>

<style>
	.feature-disclaimer {
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-info-light);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		color: var(--color-info-dark);
		line-height: var(--leading-relaxed);
	}
	.feature-disclaimer--compact {
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-xs);
	}
	.feature-disclaimer :global(svg) {
		flex-shrink: 0;
		margin-top: 2px;
	}
</style>
