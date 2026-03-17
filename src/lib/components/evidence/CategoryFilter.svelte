<script lang="ts">
	import type { EvidenceCategory } from '$lib/types/evidence';

	interface Props {
		value?: EvidenceCategory | 'all';
	}

	let { value = $bindable('all') }: Props = $props();

	const categories: { value: EvidenceCategory | 'all'; label: string }[] = [
		{ value: 'all', label: 'All' },
		{ value: 'medical_record', label: 'Medical Records' },
		{ value: 'correspondence', label: 'Correspondence' },
		{ value: 'ime_report', label: 'IME Reports' },
		{ value: 'employer_doc', label: 'Employer Docs' },
		{ value: 'photo', label: 'Photos' },
		{ value: 'witness_statement', label: 'Witnesses' },
		{ value: 'financial', label: 'Financial' },
		{ value: 'other', label: 'Other' }
	];
</script>

<div class="category-filter" role="tablist" aria-label="Filter by category">
	{#each categories as cat}
		<button
			class="category-filter__btn"
			class:category-filter__btn--active={value === cat.value}
			onclick={() => (value = cat.value)}
			role="tab"
			aria-selected={value === cat.value}
			type="button"
		>
			{cat.label}
		</button>
	{/each}
</div>

<style>
	.category-filter {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-1);
	}
	.category-filter__btn {
		padding: var(--space-1) var(--space-3);
		border-radius: var(--radius-full);
		font-size: var(--text-xs);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		transition: all var(--duration-fast);
		white-space: nowrap;
	}
	.category-filter__btn:hover {
		background-color: var(--color-bg-sunken);
	}
	.category-filter__btn--active {
		background-color: var(--color-primary-700);
		color: white;
		border-color: var(--color-primary-700);
	}
</style>
