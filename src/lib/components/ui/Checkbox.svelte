<script lang="ts">
	interface Props {
		label: string;
		checked?: boolean;
		disabled?: boolean;
		id?: string;
		onchange?: (checked: boolean) => void;
	}

	let { label, checked = $bindable(false), disabled = false, id, onchange }: Props = $props();
	const fallbackId = crypto.randomUUID();
	const inputId = $derived(id ?? fallbackId);
</script>

<label class="checkbox" class:checkbox--disabled={disabled} for={inputId}>
	<input
		type="checkbox"
		class="checkbox__input"
		id={inputId}
		bind:checked
		{disabled}
		onchange={() => onchange?.(checked)}
	/>
	<span class="checkbox__box" aria-hidden="true">
		{#if checked}
			<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="2 6 5 9 10 3" />
			</svg>
		{/if}
	</span>
	<span class="checkbox__label">{label}</span>
</label>

<style>
	.checkbox {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--color-text-primary);
	}
	.checkbox--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.checkbox__input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
	.checkbox__box {
		width: 18px;
		height: 18px;
		border: 2px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all var(--duration-fast);
	}
	.checkbox__input:checked + .checkbox__box {
		background-color: var(--color-primary-700);
		border-color: var(--color-primary-700);
		color: white;
	}
	.checkbox__input:focus-visible + .checkbox__box {
		box-shadow: var(--focus-ring);
	}
	.checkbox__box svg {
		width: 12px;
		height: 12px;
	}
</style>
