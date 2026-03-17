<script lang="ts">
	interface Props {
		label?: string;
		accept?: string;
		multiple?: boolean;
		maxSizeMB?: number;
		error?: string;
		onfiles: (files: File[]) => void;
	}

	let { label = 'Upload a file', accept, multiple = false, maxSizeMB = 10, error, onfiles }: Props = $props();
	let dragging = $state(false);
	let inputRef: HTMLInputElement;

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		dragging = false;
		if (e.dataTransfer?.files) {
			processFiles(Array.from(e.dataTransfer.files));
		}
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		dragging = true;
	}

	function handleDragLeave() {
		dragging = false;
	}

	function handleInput() {
		if (inputRef.files) {
			processFiles(Array.from(inputRef.files));
		}
	}

	function processFiles(files: File[]) {
		const maxBytes = maxSizeMB * 1024 * 1024;
		const valid = files.filter((f) => f.size <= maxBytes);
		if (valid.length > 0) onfiles(valid);
	}
</script>

<div class="file-upload" class:file-upload--error={error}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="file-upload__dropzone"
		class:file-upload__dropzone--active={dragging}
		ondrop={handleDrop}
		ondragover={handleDragOver}
		ondragleave={handleDragLeave}
		onclick={() => inputRef.click()}
		onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.click(); }}
		role="button"
		tabindex="0"
		aria-label={label}
	>
		<svg class="file-upload__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
			<path d="M16 20V8m0 0l-5 5m5-5l5 5" />
			<path d="M6 22v2a2 2 0 002 2h16a2 2 0 002-2v-2" />
		</svg>
		<p class="file-upload__text">{label}</p>
		<p class="file-upload__hint">Drag and drop or click to browse (max {maxSizeMB}MB)</p>
	</div>
	<input
		bind:this={inputRef}
		type="file"
		class="file-upload__input"
		{accept}
		{multiple}
		onchange={handleInput}
		tabindex="-1"
	/>
	{#if error}
		<p class="file-upload__error" role="alert">{error}</p>
	{/if}
</div>

<style>
	.file-upload__dropzone {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-6);
		border: 2px dashed var(--color-border);
		border-radius: var(--radius-lg);
		cursor: pointer;
		transition: all var(--duration-fast);
		text-align: center;
	}
	.file-upload__dropzone:hover,
	.file-upload__dropzone--active {
		border-color: var(--color-primary-500);
		background-color: var(--color-primary-100);
	}
	.file-upload--error .file-upload__dropzone {
		border-color: var(--color-error);
	}
	.file-upload__icon {
		color: var(--color-text-tertiary);
	}
	.file-upload__text {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-primary);
	}
	.file-upload__hint {
		font-size: var(--text-xs);
		color: var(--color-text-tertiary);
	}
	.file-upload__input {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
	.file-upload__error {
		font-size: var(--text-sm);
		color: var(--color-error);
		margin-top: var(--space-1);
	}
</style>
