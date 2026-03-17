<script lang="ts">
	interface Props {
		label: string;
		checked?: boolean;
		disabled?: boolean;
		onchange?: (checked: boolean) => void;
	}

	let { label, checked = $bindable(false), disabled = false, onchange }: Props = $props();
	const id = crypto.randomUUID();
</script>

<label class="toggle" class:toggle--disabled={disabled} for={id}>
	<span class="toggle__label">{label}</span>
	<input
		type="checkbox"
		class="toggle__input"
		{id}
		bind:checked
		{disabled}
		role="switch"
		aria-checked={checked}
		onchange={() => onchange?.(checked)}
	/>
	<span class="toggle__track" aria-hidden="true">
		<span class="toggle__thumb"></span>
	</span>
</label>

<style>
	.toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--color-text-primary);
	}
	.toggle--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.toggle__input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
	.toggle__track {
		width: 44px;
		height: 24px;
		border-radius: var(--radius-full);
		background-color: var(--color-border-strong);
		flex-shrink: 0;
		position: relative;
		transition: background-color var(--duration-fast);
	}
	.toggle__input:checked + .toggle__track {
		background-color: var(--color-primary-700);
	}
	.toggle__thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 20px;
		height: 20px;
		border-radius: var(--radius-full);
		background-color: white;
		transition: transform var(--duration-fast);
		box-shadow: var(--shadow-sm);
	}
	.toggle__input:checked + .toggle__track .toggle__thumb {
		transform: translateX(20px);
	}
	.toggle__input:focus-visible + .toggle__track {
		box-shadow: var(--focus-ring);
	}
</style>
