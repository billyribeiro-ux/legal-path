<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		description?: string;
		children: Snippet;
	}

	let { title, description, children }: Props = $props();
</script>

<div class="wizard-step">
	<h3 class="wizard-step__title">{title}</h3>
	{#if description}
		<p class="wizard-step__description">{description}</p>
	{/if}
	<div class="wizard-step__content">
		{@render children()}
	</div>
</div>

<style>
	.wizard-step__title {
		font-size: var(--text-lg);
		font-family: var(--font-heading);
		margin-bottom: var(--space-1);
	}
	.wizard-step__description {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-4);
	}
	.wizard-step__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
</style>
