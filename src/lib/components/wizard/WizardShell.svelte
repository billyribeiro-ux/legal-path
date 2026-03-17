<script lang="ts">
	import type { Snippet } from 'svelte';
	import WizardProgress from './WizardProgress.svelte';
	import WizardNav from './WizardNav.svelte';

	interface WizardStepDef {
		id: string;
		title: string;
	}

	interface Props {
		steps: WizardStepDef[];
		currentStep?: number;
		title: string;
		children: Snippet;
		onback?: () => void;
		onnext?: () => void;
		onsubmit?: () => void;
		canProceed?: boolean;
		loading?: boolean;
	}

	let {
		steps,
		currentStep = $bindable(0),
		title,
		children,
		onback,
		onnext,
		onsubmit,
		canProceed = true,
		loading = false
	}: Props = $props();

	const isFirst = $derived(currentStep === 0);
	const isLast = $derived(currentStep === steps.length - 1);
</script>

<div class="wizard">
	<div class="wizard__header">
		<h2 class="wizard__title">{title}</h2>
		<WizardProgress {steps} {currentStep} />
	</div>
	<div class="wizard__body">
		{@render children()}
	</div>
	<WizardNav
		{isFirst}
		{isLast}
		{canProceed}
		{loading}
		onback={() => { if (!isFirst) { currentStep--; onback?.(); } }}
		onnext={() => { if (!isLast) { currentStep++; onnext?.(); } }}
		onsubmit={() => onsubmit?.()}
	/>
</div>

<style>
	.wizard {
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		overflow: hidden;
	}
	.wizard__header {
		padding: var(--space-6);
		border-bottom: 1px solid var(--color-border);
	}
	.wizard__title {
		font-size: var(--text-xl);
		font-family: var(--font-heading);
		margin-bottom: var(--space-4);
	}
	.wizard__body {
		padding: var(--space-6);
		min-height: 300px;
	}
</style>
