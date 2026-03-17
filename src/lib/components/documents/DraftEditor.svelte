<script lang="ts">
	interface Props {
		content: string;
		readonly?: boolean;
	}

	let { content = $bindable(), readonly = false }: Props = $props();
</script>

<div class="draft-editor" class:draft-editor--readonly={readonly}>
	<label class="draft-editor__label" for="draft-content">Document Content</label>
	<textarea
		id="draft-content"
		class="draft-editor__textarea"
		bind:value={content}
		{readonly}
		aria-label="Document content editor"
		spellcheck="true"
	></textarea>
</div>

<style>
	.draft-editor {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		height: 100%;
	}
	.draft-editor__label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
	}
	.draft-editor__textarea {
		flex: 1;
		min-height: 400px;
		padding: var(--space-4);
		font-family: var(--font-mono, 'Courier New', monospace);
		font-size: var(--text-sm);
		line-height: 1.7;
		color: var(--color-text-primary);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		resize: vertical;
		transition: border-color var(--duration-fast);
	}
	.draft-editor__textarea:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: var(--focus-ring);
	}
	.draft-editor--readonly .draft-editor__textarea {
		background-color: var(--color-bg-sunken);
		cursor: default;
	}
</style>
