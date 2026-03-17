<script lang="ts">
	import type { SourceType } from '$lib/types/statute';
	import Button from '$components/ui/Button.svelte';
	import Input from '$components/ui/Input.svelte';
	import Select from '$components/ui/Select.svelte';

	interface Props {
		onsearch: (query: { query: string; jurisdiction?: string; sourceType?: SourceType }) => void;
	}

	let { onsearch }: Props = $props();

	let query = $state('');
	let jurisdiction = $state('');
	let sourceType = $state('');

	const sourceTypes = [
		{ value: '', label: 'All types' },
		{ value: 'statute', label: 'Statute' },
		{ value: 'regulation', label: 'Regulation' },
		{ value: 'procedure', label: 'Procedure' },
		{ value: 'form_instruction', label: 'Form Instruction' }
	];

	function handleSubmit() {
		if (query.trim() === '') return;
		onsearch({
			query: query.trim(),
			jurisdiction: jurisdiction || undefined,
			sourceType: (sourceType as SourceType) || undefined
		});
	}
</script>

<form class="statute-search" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} role="search" aria-label="Search statutes">
	<div class="statute-search__main">
		<Input
			label="Search statutes and regulations"
			bind:value={query}
			placeholder="e.g., workers compensation benefits"
			required
		/>
	</div>
	<div class="statute-search__filters">
		<Input label="Jurisdiction" bind:value={jurisdiction} placeholder="e.g., CT" />
		<Select label="Source Type" bind:value={sourceType} options={sourceTypes} />
	</div>
	<div class="statute-search__actions">
		<Button type="submit" variant="primary" disabled={query.trim() === ''}>
			{#snippet icon()}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
					<circle cx="7" cy="7" r="4.5"/>
					<path d="M10.5 10.5L14 14"/>
				</svg>
			{/snippet}
			Search
		</Button>
	</div>
</form>

<style>
	.statute-search {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}
	.statute-search__filters {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3);
	}
	@media (max-width: 480px) {
		.statute-search__filters {
			grid-template-columns: 1fr;
		}
	}
	.statute-search__actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
