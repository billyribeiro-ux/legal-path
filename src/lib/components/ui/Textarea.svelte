<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends HTMLTextareaAttributes {
		label?: string;
		error?: string;
		helpText?: string;
	}

	let { label, error, helpText, id, value = $bindable(''), ...rest }: Props = $props();
	const inputId = id ?? crypto.randomUUID();
	const errorId = `${inputId}-error`;
</script>

<div class="textarea-group" class:textarea-group--error={error}>
	{#if label}
		<label class="textarea-group__label" for={inputId}>{label}</label>
	{/if}
	<textarea
		class="textarea-group__input"
		id={inputId}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={error ? errorId : undefined}
		{...rest}
	></textarea>
	{#if error}
		<p class="textarea-group__error" id={errorId} role="alert">{error}</p>
	{:else if helpText}
		<p class="textarea-group__help">{helpText}</p>
	{/if}
</div>

<style>
	.textarea-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.textarea-group__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.textarea-group__input {
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-bg-surface);
		color: var(--color-text-primary);
		font-size: var(--text-base);
		min-height: 100px;
		resize: vertical;
		transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
	}
	.textarea-group__input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: var(--focus-ring);
	}
	.textarea-group--error .textarea-group__input {
		border-color: var(--color-error);
	}
	.textarea-group__error {
		font-size: var(--text-sm);
		color: var(--color-error);
	}
	.textarea-group__help {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
