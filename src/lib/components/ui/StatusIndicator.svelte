<script lang="ts">
	interface Props {
		status: 'online' | 'offline' | 'busy' | 'away' | 'success' | 'error' | 'warning' | 'info' | 'neutral';
		label?: string;
		size?: 'sm' | 'md' | 'lg';
		pulse?: boolean;
	}

	let { status, label, size = 'md', pulse = false }: Props = $props();
</script>

<span class="status" class:status--with-label={label}>
	<span
		class="status__dot status__dot--{status} status__dot--{size}"
		class:status__dot--pulse={pulse}
		aria-hidden={label ? 'true' : undefined}
		role={label ? undefined : 'status'}
		aria-label={label ? undefined : status}
	></span>
	{#if label}
		<span class="status__label">{label}</span>
	{/if}
</span>

<style>
	.status {
		display: inline-flex;
		align-items: center;
	}
	.status--with-label {
		gap: var(--space-2);
	}
	.status__dot {
		border-radius: var(--radius-full);
		flex-shrink: 0;
	}
	.status__dot--sm { width: 8px; height: 8px; }
	.status__dot--md { width: 10px; height: 10px; }
	.status__dot--lg { width: 14px; height: 14px; }

	.status__dot--online,
	.status__dot--success { background-color: var(--color-success); }
	.status__dot--offline,
	.status__dot--neutral { background-color: var(--color-text-tertiary); }
	.status__dot--busy,
	.status__dot--error { background-color: var(--color-error); }
	.status__dot--away,
	.status__dot--warning { background-color: var(--color-warning); }
	.status__dot--info { background-color: var(--color-info); }

	.status__dot--pulse {
		animation: pulse 2s ease-in-out infinite;
	}

	.status__label {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}
</style>
