<script lang="ts">
	import type { Milestone } from '$lib/types/roadmap';
	import { formatDate } from '$lib/utils/format';
	import Flag from 'phosphor-svelte/lib/Flag';
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';

	interface Props {
		milestone: Milestone;
		onclick?: () => void;
	}

	let { milestone, onclick }: Props = $props();
</script>

<button
	class="milestone"
	class:milestone--completed={milestone.completed}
	onclick={onclick}
	type="button"
>
	<div class="milestone__icon">
		{#if milestone.completed}
			<CheckCircle size={18} weight="fill" />
		{:else}
			<Flag size={18} weight="fill" />
		{/if}
	</div>
	<div class="milestone__content">
		<span class="milestone__title">{milestone.title}</span>
		<span class="milestone__date">{formatDate(milestone.date)}</span>
	</div>
</button>

<style>
	.milestone {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-md);
		border: 1px dashed var(--color-border);
		width: 100%;
		text-align: left;
		transition: all var(--duration-fast);
	}
	.milestone:hover {
		border-color: var(--color-primary-300);
		background-color: var(--color-bg-sunken);
	}
	.milestone--completed {
		border-style: solid;
		border-color: var(--color-success);
		background-color: var(--color-bg-surface);
	}
	.milestone__icon {
		flex-shrink: 0;
		color: var(--color-primary-600);
	}
	.milestone--completed .milestone__icon {
		color: var(--color-success);
	}
	.milestone__content {
		display: flex;
		flex-direction: column;
	}
	.milestone__title {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.milestone__date {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
</style>
