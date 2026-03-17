<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label?: string;
		error?: string;
		helpText?: string;
	}

	let { label, error, helpText, id, value = $bindable(''), ...rest }: Props = $props();

	const inputId = id ?? crypto.randomUUID();
	const errorId = `${inputId}-error`;
	const helpId = `${inputId}-help`;
</script>

<div class="input-group" class:input-group--error={error}>
	{#if label}
		<label class="input-group__label" for={inputId}>{label}</label>
	{/if}
	<input
		class="input-group__input"
		id={inputId}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={error ? errorId : helpText ? helpId : undefined}
		{...rest}
	/>
	{#if error}
		<p class="input-group__error" id={errorId} role="alert">{error}</p>
	{:else if helpText}
		<p class="input-group__help" id={helpId}>{helpText}</p>
	{/if}
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.input-group__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}

	.input-group__input {
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-bg-surface);
		color: var(--color-text-primary);
		font-size: var(--text-base);
		transition: border-color var(--duration-fast) var(--easing-default),
			box-shadow var(--duration-fast) var(--easing-default);
		min-height: 40px;
	}

	.input-group__input::placeholder {
		color: var(--color-text-tertiary);
	}

	.input-group__input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: var(--focus-ring);
	}

	.input-group--error .input-group__input {
		border-color: var(--color-error);
	}

	.input-group--error .input-group__input:focus {
		box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
	}

	.input-group__error {
		font-size: var(--text-sm);
		color: var(--color-error);
	}

	.input-group__help {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
