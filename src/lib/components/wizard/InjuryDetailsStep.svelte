<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Textarea from '$components/ui/Textarea.svelte';
	import Select from '$components/ui/Select.svelte';
	import WizardStep from './WizardStep.svelte';
	import { CT_WC_CASE_TYPES, CT_WC_BODY_PARTS } from '$lib/constants/ct-workers-comp';

	interface Props {
		data?: {
			injuryType: string;
			injuryDescription: string;
			bodyParts: string[];
			dateOfIncident: string;
		};
		onchange?: (data: Record<string, unknown>) => void;
	}

	let { data = $bindable({ injuryType: '', injuryDescription: '', bodyParts: [], dateOfIncident: '' }), onchange }: Props = $props();

	const typeOptions = Object.entries(CT_WC_CASE_TYPES).map(([value, label]) => ({ value, label }));
</script>

<WizardStep title="Injury Details" description="Describe your workplace injury or illness.">
	<Select
		label="Type of Injury"
		options={typeOptions}
		bind:value={data.injuryType}
		placeholder="Select injury type..."
	/>
	<Input
		label="Date of Injury"
		type="date"
		bind:value={data.dateOfIncident}
	/>
	<Select
		label="Affected Body Part(s)"
		options={CT_WC_BODY_PARTS.map((bp) => ({ value: bp, label: bp }))}
		bind:value={data.bodyParts[0]}
		placeholder="Select primary body part..."
	/>
	<Textarea
		label="Description of Injury"
		placeholder="Describe how the injury occurred, including what you were doing at the time..."
		bind:value={data.injuryDescription}
		rows={4}
	/>
</WizardStep>
