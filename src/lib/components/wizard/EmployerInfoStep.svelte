<script lang="ts">
	import Input from '$components/ui/Input.svelte';
	import WizardStep from './WizardStep.svelte';

	interface Props {
		data?: {
			employerName: string;
			employerAddress: string;
			insurerName: string;
			supervisorName: string;
		};
	}

	let { data = $bindable({ employerName: '', employerAddress: '', insurerName: '', supervisorName: '' }) }: Props = $props();
</script>

<WizardStep title="Employer Information" description="Enter details about your employer.">
	<Input label="Employer Name" bind:value={data.employerName} placeholder="Company name..." />
	<Input label="Employer Address" bind:value={data.employerAddress} placeholder="Street, City, State ZIP..." />
	<Input label="Supervisor Name" bind:value={data.supervisorName} placeholder="Direct supervisor..." />
	<Input label="Insurance Company (if known)" bind:value={data.insurerName} placeholder="Workers' comp insurer..." helpText="You can find this on your employer's posted WCC certificate." />
</WizardStep>
