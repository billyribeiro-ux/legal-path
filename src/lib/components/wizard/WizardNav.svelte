<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt';

	interface Props {
		isFirst: boolean;
		isLast: boolean;
		canProceed?: boolean;
		loading?: boolean;
		onback: () => void;
		onnext: () => void;
		onsubmit: () => void;
	}

	let { isFirst, isLast, canProceed = true, loading = false, onback, onnext, onsubmit }: Props = $props();
</script>

<div class="wizard-nav">
	{#if !isFirst}
		<Button variant="secondary" onclick={onback}>
			{#snippet icon()}<ArrowLeft size={16} />{/snippet}
			Back
		</Button>
	{:else}
		<div></div>
	{/if}
	{#if isLast}
		<Button variant="primary" disabled={!canProceed} {loading} onclick={onsubmit}>
			{#snippet icon()}<PaperPlaneTilt size={16} />{/snippet}
			Submit
		</Button>
	{:else}
		<Button variant="primary" disabled={!canProceed} onclick={onnext}>
			Next
			{#snippet icon()}<ArrowRight size={16} />{/snippet}
		</Button>
	{/if}
</div>

<style>
	.wizard-nav {
		display: flex;
		justify-content: space-between;
		padding: var(--space-4) var(--space-6);
		border-top: 1px solid var(--color-border);
	}
</style>
