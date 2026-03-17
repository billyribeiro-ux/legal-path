<script lang="ts">
	import type { EvidenceCategory } from '$lib/types/evidence';
	import FileUpload from '$components/ui/FileUpload.svelte';
	import Select from '$components/ui/Select.svelte';
	import Input from '$components/ui/Input.svelte';
	import Button from '$components/ui/Button.svelte';

	interface Props {
		caseId: string;
		onupload: (data: { caseId: string; category: EvidenceCategory; title: string; files: File[] }) => void;
	}

	let { caseId, onupload }: Props = $props();

	let title = $state('');
	let category = $state<EvidenceCategory>('other');
	let files = $state<File[]>([]);

	const categories: { value: EvidenceCategory; label: string }[] = [
		{ value: 'medical_record', label: 'Medical Record' },
		{ value: 'correspondence', label: 'Correspondence' },
		{ value: 'ime_report', label: 'IME Report' },
		{ value: 'employer_doc', label: 'Employer Document' },
		{ value: 'photo', label: 'Photo' },
		{ value: 'witness_statement', label: 'Witness Statement' },
		{ value: 'financial', label: 'Financial' },
		{ value: 'other', label: 'Other' }
	];

	let canSubmit = $derived(title.trim() !== '' && files.length > 0);

	function handleFiles(uploaded: File[]) {
		files = uploaded;
	}

	function handleSubmit() {
		if (!canSubmit) return;
		onupload({ caseId, category, title: title.trim(), files });
		title = '';
		category = 'other';
		files = [];
	}
</script>

<form class="evidence-uploader" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} aria-label="Upload evidence">
	<Input label="Title" bind:value={title} placeholder="Evidence title" required />

	<Select label="Category" bind:value={category} options={categories} />

	<FileUpload
		label="Upload evidence file"
		accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
		onfiles={handleFiles}
	/>

	{#if files.length > 0}
		<p class="evidence-uploader__file-info">
			{files.length} file{files.length > 1 ? 's' : ''} selected
		</p>
	{/if}

	<Button type="submit" variant="primary" disabled={!canSubmit}>
		Upload Evidence
	</Button>
</form>

<style>
	.evidence-uploader {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.evidence-uploader__file-info {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
</style>
