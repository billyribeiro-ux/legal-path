<script lang="ts">
	import { caseState } from '$lib/state/case.svelte';
	import Select from '$components/ui/Select.svelte';

	interface Props {
		value?: string;
		onchange?: (caseId: string) => void;
	}

	let { value = $bindable(''), onchange }: Props = $props();
	const options = $derived(
		caseState.cases.map((c) => ({ value: c.id, label: c.title }))
	);
</script>

<Select
	label="Select Case"
	{options}
	bind:value
	placeholder="Choose a case..."
	onchange={() => onchange?.(value)}
/>
