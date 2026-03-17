<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		label?: string;
	}

	let { size = 'md', label = 'Loading' }: Props = $props();
</script>

<div class="spinner spinner--{size}" role="status" aria-label={label}>
	<svg class="spinner__svg" viewBox="0 0 24 24" fill="none">
		<circle class="spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
		<path class="spinner__arc" d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
	</svg>
	<span class="sr-only">{label}</span>
</div>

<style>
	.spinner {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary-600);
	}
	.spinner--sm { width: 16px; height: 16px; }
	.spinner--md { width: 24px; height: 24px; }
	.spinner--lg { width: 40px; height: 40px; }
	.spinner__svg {
		width: 100%;
		height: 100%;
		animation: spin 0.75s linear infinite;
	}
	.spinner__track {
		opacity: 0.2;
	}
	.spinner__arc {
		opacity: 1;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
</style>
