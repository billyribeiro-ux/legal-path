<script lang="ts">
	import type { EvidenceCategory } from '$lib/types/evidence';
	import Input from '$components/ui/Input.svelte';
	import Textarea from '$components/ui/Textarea.svelte';
	import Select from '$components/ui/Select.svelte';
	import Button from '$components/ui/Button.svelte';
	import UploadSimple from 'phosphor-svelte/lib/UploadSimple';

	interface Props {
		caseId: string;
		loading?: boolean;
		onupload?: (data: { file: File; category: EvidenceCategory; title: string; description: string; dateOfDocument: string }) => void;
	}

	let { caseId, loading = false, onupload }: Props = $props();

	let title = $state('');
	let description = $state('');
	let category = $state<EvidenceCategory>('other');
	let dateOfDocument = $state('');
	let fileInput: HTMLInputElement | undefined = $state();
	let selectedFile: File | null = $state(null);

	const categories = [
		{ value: 'medical_record', label: 'Medical Record' },
		{ value: 'correspondence', label: 'Correspondence' },
		{ value: 'ime_report', label: 'IME Report' },
		{ value: 'employer_doc', label: 'Employer Document' },
		{ value: 'photo', label: 'Photo' },
		{ value: 'witness_statement', label: 'Witness Statement' },
		{ value: 'financial', label: 'Financial' },
		{ value: 'other', label: 'Other' }
	];

	function handleFileChange(e: Event) {
		const input = e.target as HTMLInputElement;
		selectedFile = input.files?.[0] ?? null;
		if (selectedFile && !title) {
			title = selectedFile.name.replace(/\.[^.]+$/, '');
		}
	}

	function handleSubmit() {
		if (!selectedFile || !title) return;
		onupload?.({ file: selectedFile, category, title, description, dateOfDocument });
	}
</script>

<form class="evidence-uploader" onsubmit|preventDefault={handleSubmit}>
	<div class="evidence-uploader__dropzone" onclick={() => fileInput?.click()} role="button" tabindex="0">
		<UploadSimple size={32} />
		<p class="evidence-uploader__dropzone-text">
			{#if selectedFile}
				{selectedFile.name}
			{:else}
				Click to select a file
			{/if}
		</p>
		<input
			bind:this={fileInput}
			type="file"
			onchange={handleFileChange}
			class="evidence-uploader__input"
			accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.tiff,.txt"
		/>
	</div>

	<Input label="Title" bind:value={title} placeholder="Document title..." />
	<Select label="Category" options={categories} bind:value={category} />
	<Input label="Document Date" type="date" bind:value={dateOfDocument} helpText="Date on the document, if applicable." />
	<Textarea label="Description (optional)" bind:value={description} placeholder="Brief description..." rows={2} />

	<Button variant="primary" type="submit" {loading} disabled={!selectedFile || !title} fullWidth>
		{#snippet icon()}<UploadSimple size={16} />{/snippet}
		Upload Evidence
	</Button>
</form>

<style>
	.evidence-uploader {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.evidence-uploader__dropzone {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-8) var(--space-4);
		border: 2px dashed var(--color-border);
		border-radius: var(--radius-lg);
		color: var(--color-text-tertiary);
		cursor: pointer;
		transition: all var(--duration-fast);
	}
	.evidence-uploader__dropzone:hover {
		border-color: var(--color-primary-300);
		color: var(--color-primary-600);
	}
	.evidence-uploader__dropzone-text {
		font-size: var(--text-sm);
	}
	.evidence-uploader__input {
		display: none;
	}
</style>
