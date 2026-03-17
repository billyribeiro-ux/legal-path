<script lang="ts">
	import WizardStep from './WizardStep.svelte';
	import Card from '$components/ui/Card.svelte';
	import { DISCLAIMERS } from '$lib/constants/disclaimers';
	import FeatureDisclaimer from '$components/disclaimer/FeatureDisclaimer.svelte';

	interface Props {
		caseData: Record<string, unknown>;
	}

	let { caseData }: Props = $props();

	const sections = [
		{ title: 'Injury Details', fields: ['injuryType', 'dateOfIncident', 'injuryDescription'] },
		{ title: 'Employer', fields: ['employerName', 'employerAddress'] },
		{ title: 'Medical', fields: ['treatingPhysician', 'physicianSpecialty'] },
		{ title: 'Claim History', fields: ['form30cFiled', 'form30cDate'] }
	];
</script>

<WizardStep title="Review Your Information" description="Please review all information before submitting.">
	<FeatureDisclaimer message={DISCLAIMERS.caseSetup.content} />

	{#each sections as section}
		<Card variant="outlined" padding="sm">
			{#snippet header()}
				<h4 style="font-size: var(--text-sm); font-weight: var(--weight-semibold);">{section.title}</h4>
			{/snippet}
			<dl class="review-list">
				{#each section.fields as field}
					{#if caseData[field]}
						<div class="review-list__item">
							<dt>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</dt>
							<dd>{caseData[field]}</dd>
						</div>
					{/if}
				{/each}
			</dl>
		</Card>
	{/each}
</WizardStep>

<style>
	.review-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.review-list__item {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
	}
	.review-list__item dt {
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		text-transform: capitalize;
	}
	.review-list__item dd {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
		text-align: right;
	}
</style>
