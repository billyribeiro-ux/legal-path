<script lang="ts">
	interface Props {
		width?: string;
		height?: string;
		variant?: 'text' | 'circle' | 'rect';
		lines?: number;
	}

	let { width = '100%', height = '1em', variant = 'text', lines = 1 }: Props = $props();
</script>

{#if lines > 1}
	<div class="skeleton-group" style="gap: var(--space-2);">
		{#each Array(lines) as _, i}
			<div
				class="skeleton skeleton--{variant}"
				style="width: {i === lines - 1 ? '75%' : width}; height: {height};"
				aria-hidden="true"
			></div>
		{/each}
	</div>
{:else}
	<div
		class="skeleton skeleton--{variant}"
		style="width: {width}; height: {height};"
		aria-hidden="true"
	></div>
{/if}

<style>
	.skeleton-group {
		display: flex;
		flex-direction: column;
	}
	.skeleton {
		background: linear-gradient(
			90deg,
			var(--color-bg-sunken) 25%,
			var(--color-border) 50%,
			var(--color-bg-sunken) 75%
		);
		background-size: 200% 100%;
		animation: shimmer 1.5s ease-in-out infinite;
	}
	.skeleton--text {
		border-radius: var(--radius-sm);
	}
	.skeleton--circle {
		border-radius: var(--radius-full);
	}
	.skeleton--rect {
		border-radius: var(--radius-md);
	}
	@keyframes shimmer {
		0% { background-position: 200% 0; }
		100% { background-position: -200% 0; }
	}
</style>
