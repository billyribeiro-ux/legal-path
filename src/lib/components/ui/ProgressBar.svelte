<script lang="ts">
	interface Props {
		value: number;
		max?: number;
		label?: string;
		showPercent?: boolean;
		variant?: 'primary' | 'success' | 'warning' | 'danger';
	}

	let { value, max = 100, label, showPercent = false, variant = 'primary' }: Props = $props();
	const percent = $derived(Math.min(Math.round((value / max) * 100), 100));
</script>

<div class="progress">
	{#if label || showPercent}
		<div class="progress__header">
			{#if label}<span class="progress__label">{label}</span>{/if}
			{#if showPercent}<span class="progress__percent">{percent}%</span>{/if}
		</div>
	{/if}
	<div class="progress__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label ?? 'Progress'}>
		<div class="progress__fill progress__fill--{variant}" style="width: {percent}%"></div>
	</div>
</div>

<style>
	.progress {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.progress__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.progress__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.progress__percent {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
	.progress__track {
		height: 8px;
		background-color: var(--color-bg-sunken);
		border-radius: var(--radius-full);
		overflow: hidden;
	}
	.progress__fill {
		height: 100%;
		border-radius: var(--radius-full);
		transition: width var(--duration-slow) var(--easing-out);
	}
	.progress__fill--primary { background-color: var(--color-primary-600); }
	.progress__fill--success { background-color: var(--color-success); }
	.progress__fill--warning { background-color: var(--color-warning); }
	.progress__fill--danger { background-color: var(--color-error); }
</style>
