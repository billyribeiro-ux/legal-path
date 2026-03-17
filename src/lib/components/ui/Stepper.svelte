<script lang="ts">
	interface Step {
		id: string;
		label: string;
	}

	interface Props {
		steps: Step[];
		currentStep: number;
	}

	let { steps, currentStep }: Props = $props();
</script>

<nav class="stepper" aria-label="Progress">
	<ol class="stepper__list">
		{#each steps as step, i}
			<li
				class="stepper__item"
				class:stepper__item--completed={i < currentStep}
				class:stepper__item--active={i === currentStep}
				aria-current={i === currentStep ? 'step' : undefined}
			>
				<span class="stepper__indicator">
					{#if i < currentStep}
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2">
							<polyline points="2 7 5.5 10.5 12 4" />
						</svg>
					{:else}
						{i + 1}
					{/if}
				</span>
				<span class="stepper__label">{step.label}</span>
				{#if i < steps.length - 1}
					<span class="stepper__connector" class:stepper__connector--completed={i < currentStep}></span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.stepper__list {
		display: flex;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.stepper__item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-shrink: 0;
	}
	.stepper__indicator {
		width: 28px;
		height: 28px;
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-xs);
		font-weight: var(--weight-semibold);
		border: 2px solid var(--color-border-strong);
		color: var(--color-text-tertiary);
		background-color: var(--color-bg-surface);
		flex-shrink: 0;
	}
	.stepper__item--active .stepper__indicator {
		border-color: var(--color-primary-700);
		background-color: var(--color-primary-700);
		color: var(--color-text-inverse);
	}
	.stepper__item--completed .stepper__indicator {
		border-color: var(--color-success);
		background-color: var(--color-success);
		color: white;
	}
	.stepper__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-tertiary);
		white-space: nowrap;
	}
	.stepper__item--active .stepper__label {
		color: var(--color-text-primary);
	}
	.stepper__item--completed .stepper__label {
		color: var(--color-text-secondary);
	}
	.stepper__connector {
		width: 32px;
		height: 2px;
		background-color: var(--color-border);
		margin: 0 var(--space-2);
		flex-shrink: 0;
	}
	.stepper__connector--completed {
		background-color: var(--color-success);
	}
</style>
