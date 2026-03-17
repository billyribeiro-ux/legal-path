<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		value?: string;
		placeholder?: string;
		onsearch?: (query: string) => void;
	}

	let { value = $bindable(''), placeholder = 'Search...', onsearch, ...rest }: Props = $props();

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		value = target.value;
		onsearch?.(value);
	}

	function clear() {
		value = '';
		onsearch?.('');
	}
</script>

<div class="search-input">
	<svg class="search-input__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
		<circle cx="8" cy="8" r="5.5" />
		<path d="M12.5 12.5L16 16" />
	</svg>
	<input
		class="search-input__field"
		type="search"
		{placeholder}
		{value}
		oninput={handleInput}
		aria-label={placeholder}
		{...rest}
	/>
	{#if value}
		<button class="search-input__clear" onclick={clear} aria-label="Clear search">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4 4l8 8M12 4L4 12" />
			</svg>
		</button>
	{/if}
</div>

<style>
	.search-input {
		position: relative;
		display: flex;
		align-items: center;
	}
	.search-input__icon {
		position: absolute;
		left: var(--space-3);
		color: var(--color-text-tertiary);
		pointer-events: none;
	}
	.search-input__field {
		width: 100%;
		padding: var(--space-2) var(--space-3);
		padding-left: var(--space-9);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		background-color: var(--color-bg-surface);
		color: var(--color-text-primary);
		font-size: var(--text-sm);
		min-height: 40px;
		transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
	}
	.search-input__field::placeholder {
		color: var(--color-text-tertiary);
	}
	.search-input__field:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: var(--focus-ring);
	}
	.search-input__field::-webkit-search-cancel-button {
		display: none;
	}
	.search-input__clear {
		position: absolute;
		right: var(--space-2);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-1);
		color: var(--color-text-tertiary);
		border-radius: var(--radius-sm);
	}
	.search-input__clear:hover {
		color: var(--color-text-primary);
		background-color: var(--color-bg-sunken);
	}
</style>
