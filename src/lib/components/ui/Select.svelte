<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';

	interface Props extends HTMLSelectAttributes {
		label?: string;
		error?: string;
		options: Array<{ value: string; label: string; disabled?: boolean }>;
		placeholder?: string;
	}

	let { label, error, options, placeholder, id, value = $bindable(''), ...rest }: Props = $props();
	const fallbackId = crypto.randomUUID();
	const selectId = $derived(id ?? fallbackId);
</script>

<div class="select-group" class:select-group--error={error}>
	{#if label}
		<label class="select-group__label" for={selectId}>{label}</label>
	{/if}
	<select
		class="select-group__input"
		id={selectId}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		{...rest}
	>
		{#if placeholder}
			<option value="" disabled>{placeholder}</option>
		{/if}
		{#each options as opt (opt.value)}
			<option value={opt.value} disabled={opt.disabled}>{opt.label}</option>
		{/each}
	</select>
	{#if error}
		<p class="select-group__error" role="alert">{error}</p>
	{/if}
</div>

<style>
	.select-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
	.select-group__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.select-group__input {
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-bg-surface);
		color: var(--color-text-primary);
		font-size: var(--text-base);
		min-height: 40px;
		cursor: pointer;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23696d77' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right var(--space-3) center;
		padding-right: var(--space-8);
	}
	.select-group__input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: var(--focus-ring);
	}
	.select-group--error .select-group__input {
		border-color: var(--color-error);
	}
	.select-group__error {
		font-size: var(--text-sm);
		color: var(--color-error);
	}
</style>
