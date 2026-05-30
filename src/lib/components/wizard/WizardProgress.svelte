<script lang="ts">
	interface Step {
		id: string;
		title: string;
	}

	interface Props {
		steps: Step[];
		currentStep: number;
	}

	let { steps, currentStep }: Props = $props();
</script>

<div class="wizard-progress" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemax={steps.length}>
	<div class="wizard-progress__steps">
		{#each steps as step, i (step.id)}
			<div
				class="wizard-progress__step"
				class:wizard-progress__step--completed={i < currentStep}
				class:wizard-progress__step--active={i === currentStep}
			>
				<div class="wizard-progress__dot">
					{#if i < currentStep}
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2">
							<polyline points="2 6 5 9 10 3" />
						</svg>
					{:else}
						{i + 1}
					{/if}
				</div>
				<span class="wizard-progress__label">{step.title}</span>
			</div>
			{#if i < steps.length - 1}
				<div class="wizard-progress__line" class:wizard-progress__line--completed={i < currentStep}></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.wizard-progress__steps {
		display: flex;
		align-items: center;
	}
	.wizard-progress__step {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-shrink: 0;
	}
	.wizard-progress__dot {
		width: 28px;
		height: 28px;
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-xs);
		font-weight: var(--weight-bold);
		background-color: var(--color-bg-sunken);
		color: var(--color-text-tertiary);
		border: 2px solid var(--color-border);
		transition: all var(--duration-fast);
	}
	.wizard-progress__step--active .wizard-progress__dot {
		background-color: var(--color-primary-700);
		border-color: var(--color-primary-700);
		color: white;
	}
	.wizard-progress__step--completed .wizard-progress__dot {
		background-color: var(--color-success);
		border-color: var(--color-success);
		color: white;
	}
	.wizard-progress__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-tertiary);
		display: none;
	}
	.wizard-progress__step--active .wizard-progress__label {
		color: var(--color-text-primary);
	}
	@media (min-width: 768px) {
		.wizard-progress__label {
			display: block;
		}
	}
	.wizard-progress__line {
		flex: 1;
		height: 2px;
		background-color: var(--color-border);
		margin: 0 var(--space-2);
		min-width: var(--space-4);
	}
	.wizard-progress__line--completed {
		background-color: var(--color-success);
	}
</style>
