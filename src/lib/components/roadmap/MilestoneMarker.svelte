<script lang="ts">
	import Flag from 'phosphor-svelte/lib/Flag';

	interface Props {
		title: string;
		completed?: boolean;
	}

	let { title, completed = false }: Props = $props();
</script>

<div class="milestone" class:milestone--completed={completed}>
	<Flag size={16} weight={completed ? 'fill' : 'regular'} />
	<span class="milestone__title">{title}</span>
</div>

<style>
	.milestone {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-1-5) var(--space-3);
		border-radius: var(--radius-full);
		border: 1px dashed var(--color-border);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		background-color: var(--color-bg-surface);
		transition: all var(--duration-fast) var(--easing-default);
	}

	.milestone:hover {
		border-color: var(--color-primary-300);
		background-color: var(--color-bg-sunken);
	}

	.milestone--completed {
		border-style: solid;
		border-color: var(--color-success);
		color: var(--color-success-dark, #166534);
		background-color: var(--color-success-light, #f0fdf4);
	}

	.milestone__title {
		font-weight: var(--weight-medium);
		line-height: 1;
	}
</style>
