<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';
	import Select from '$components/ui/Select.svelte';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';

	interface Props {
		onsearch?: (query: string, jurisdiction?: string) => void;
	}

	let { onsearch }: Props = $props();
	let query = $state('');
	let jurisdiction = $state('CT');

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (query.trim()) onsearch?.(query, jurisdiction);
	}
</script>

<form class="statute-search" onsubmit={handleSubmit}>
	<div class="statute-search__row">
		<div class="statute-search__input">
			<Input
				placeholder="Search statutes, regulations, or procedures..."
				bind:value={query}
				type="search"
			/>
		</div>
		<Select
			options={[
				{ value: 'CT', label: 'Connecticut' },
				{ value: 'NY', label: 'New York' },
				{ value: 'MA', label: 'Massachusetts' }
			]}
			bind:value={jurisdiction}
		/>
		<Button variant="primary" type="submit">
			{#snippet icon()}<MagnifyingGlass size={16} />{/snippet}
			Search
		</Button>
	</div>
</form>

<style>
	.statute-search__row {
		display: flex;
		gap: var(--space-3);
		align-items: flex-end;
		flex-wrap: wrap;
	}
	.statute-search__input {
		flex: 1;
		min-width: 200px;
	}
</style>
