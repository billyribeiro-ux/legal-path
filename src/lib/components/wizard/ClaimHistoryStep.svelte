<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import RadioGroup from '$components/ui/RadioGroup.svelte';
	import Textarea from '$components/ui/Textarea.svelte';
	import WizardStep from './WizardStep.svelte';

	interface Props {
		data?: {
			form30cFiled: string;
			form30cDate: string;
			priorClaims: string;
			priorClaimsDescription: string;
		};
	}

	let { data = $bindable({ form30cFiled: '', form30cDate: '', priorClaims: '', priorClaimsDescription: '' }) }: Props = $props();
</script>

<WizardStep title="Claim History" description="Prior claims and filings related to your case.">
	<RadioGroup
		label="Have you filed a Form 30C (Notice of Claim)?"
		name="form30c"
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' },
			{ value: 'unsure', label: "I'm not sure" }
		]}
		bind:value={data.form30cFiled}
	/>
	{#if data.form30cFiled === 'yes'}
		<Input label="Date Filed" type="date" bind:value={data.form30cDate} />
	{/if}
	<RadioGroup
		label="Have you had any prior workers' compensation claims?"
		name="priorClaims"
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
		bind:value={data.priorClaims}
	/>
	{#if data.priorClaims === 'yes'}
		<Textarea label="Describe prior claims" bind:value={data.priorClaimsDescription} placeholder="Brief description of prior claims..." rows={2} />
	{/if}
</WizardStep>
