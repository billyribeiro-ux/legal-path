<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import Textarea from '$components/ui/Textarea.svelte';

	interface Props {
		onsubmit: (content: string) => void;
	}

	let { onsubmit }: Props = $props();

	let content = $state('');
	let canSubmit = $derived(content.trim().length > 0);

	function handleSubmit() {
		if (!canSubmit) return;
		onsubmit(content.trim());
		content = '';
	}
</script>

<form class="journal-editor" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} aria-label="New journal entry">
	<Textarea
		label="New Entry"
		bind:value={content}
		placeholder="What happened today with your case?"
		rows={4}
	/>
	<div class="journal-editor__actions">
		<Button type="submit" variant="primary" disabled={!canSubmit}>
			Add Entry
		</Button>
	</div>
</form>

<style>
	.journal-editor {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-4);
		background-color: var(--color-bg-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}
	.journal-editor__actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
