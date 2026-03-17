<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import Textarea from '$components/ui/Textarea.svelte';
	import WizardStep from './WizardStep.svelte';

	interface Props {
		data?: {
			treatingPhysician: string;
			physicianSpecialty: string;
			treatmentDescription: string;
			emergencyVisit: string;
		};
	}

	let { data = $bindable({ treatingPhysician: '', physicianSpecialty: '', treatmentDescription: '', emergencyVisit: '' }) }: Props = $props();
</script>

<WizardStep title="Medical Treatment" description="Information about medical treatment you have received or are receiving.">
	<Input label="Treating Physician" bind:value={data.treatingPhysician} placeholder="Dr. name..." />
	<Input label="Specialty" bind:value={data.physicianSpecialty} placeholder="e.g. Orthopedic, General..." />
	<Input label="Emergency Room Visit" type="date" bind:value={data.emergencyVisit} helpText="Leave blank if not applicable." />
	<Textarea label="Treatment Description" bind:value={data.treatmentDescription} placeholder="Describe the treatment you have received..." rows={3} />
</WizardStep>
