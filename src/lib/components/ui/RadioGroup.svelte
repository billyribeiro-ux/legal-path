<script lang="ts">
	interface Props {
		label: string;
		name: string;
		options: Array<{ value: string; label: string; disabled?: boolean }>;
		value?: string;
		onchange?: (value: string) => void;
	}

	let { label, name, options, value = $bindable(''), onchange }: Props = $props();
</script>

<fieldset class="radio-group" role="radiogroup" aria-label={label}>
	<legend class="radio-group__legend">{label}</legend>
	{#each options as opt}
		<label class="radio-group__option" class:radio-group__option--disabled={opt.disabled}>
			<input
				type="radio"
				class="radio-group__input"
				{name}
				value={opt.value}
				checked={value === opt.value}
				disabled={opt.disabled}
				onchange={() => { value = opt.value; onchange?.(opt.value); }}
			/>
			<span class="radio-group__circle" aria-hidden="true"></span>
			<span>{opt.label}</span>
		</label>
	{/each}
</fieldset>

<style>
	.radio-group {
		border: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.radio-group__legend {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
		margin-bottom: var(--space-1);
	}
	.radio-group__option {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--color-text-primary);
	}
	.radio-group__option--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.radio-group__input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
	.radio-group__circle {
		width: 18px;
		height: 18px;
		border: 2px solid var(--color-border-strong);
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		transition: all var(--duration-fast);
	}
	.radio-group__input:checked + .radio-group__circle {
		border-color: var(--color-primary-700);
	}
	.radio-group__input:checked + .radio-group__circle::after {
		content: '';
		width: 10px;
		height: 10px;
		background-color: var(--color-primary-700);
		border-radius: var(--radius-full);
	}
	.radio-group__input:focus-visible + .radio-group__circle {
		box-shadow: var(--focus-ring);
	}
</style>
