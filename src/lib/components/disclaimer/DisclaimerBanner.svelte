<script lang="ts">
	import Warning from 'phosphor-svelte/lib/Warning';

	interface Props {
		title?: string;
		message: string;
		dismissible?: boolean;
		ondismiss?: () => void;
	}

	let { title = 'Legal Notice', message, dismissible = false, ondismiss }: Props = $props();
	let visible = $state(true);

	function dismiss() {
		visible = false;
		ondismiss?.();
	}
</script>

{#if visible}
	<div class="disclaimer-banner" role="alert">
		<Warning size={20} class="disclaimer-banner__icon" />
		<div class="disclaimer-banner__content">
			<p class="disclaimer-banner__title">{title}</p>
			<p class="disclaimer-banner__message">{message}</p>
		</div>
		{#if dismissible}
			<button class="disclaimer-banner__close" onclick={dismiss} aria-label="Dismiss notice">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M4 4l8 8M12 4L4 12" />
				</svg>
			</button>
		{/if}
	</div>
{/if}

<style>
	.disclaimer-banner {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-warning-light);
		border: 1px solid var(--color-warning);
		border-radius: var(--radius-md);
		margin-bottom: var(--space-4);
	}
	.disclaimer-banner :global(.disclaimer-banner__icon) {
		color: var(--color-warning-dark);
		flex-shrink: 0;
		margin-top: 2px;
	}
	.disclaimer-banner__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--color-warning-dark);
	}
	.disclaimer-banner__message {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-top: var(--space-0-5);
		line-height: var(--leading-relaxed);
	}
	.disclaimer-banner__close {
		flex-shrink: 0;
		color: var(--color-warning-dark);
		padding: var(--space-1);
		border-radius: var(--radius-sm);
	}
	.disclaimer-banner__close:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
