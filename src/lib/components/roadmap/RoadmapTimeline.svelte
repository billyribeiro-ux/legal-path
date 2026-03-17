<script lang="ts">
	import type { RoadmapStep } from '$lib/types/roadmap';
	import RoadmapStepComponent from './RoadmapStep.svelte';

	interface Props {
		steps: RoadmapStep[];
		onstepclick?: (stepId: string) => void;
	}

	let { steps, onstepclick }: Props = $props();
</script>

<div class="timeline" role="list" aria-label="Case procedural roadmap">
	{#each steps as step, i (step.id)}
		<RoadmapStepComponent
			{step}
			isFirst={i === 0}
			isLast={i === steps.length - 1}
			onclick={() => onstepclick?.(step.id)}
		/>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		position: relative;
	}
</style>
