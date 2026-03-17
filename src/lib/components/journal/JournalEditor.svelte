<script lang="ts">
	import Textarea from '$components/ui/Textarea.svelte';
	import Button from '$components/ui/Button.svelte';
	import NotePencil from 'phosphor-svelte/lib/NotePencil';

	interface Props {
		caseId: string;
		loading?: boolean;
		onsave?: (content: string) => void;
	}

	let { caseId, loading = false, onsave }: Props = $props();

	let content = $state('');

	function handleSubmit() {
		if (!content.trim()) return;
		onsave?.(content.trim());
		content = '';
	}
</script>

<form class="journal-editor" onsubmit|preventDefault={handleSubmit}>
	<Textarea
		label="New Journal Entry"
		placeholder="Record details about your case — conversations with employer, symptoms, doctor visits, anything relevant..."
		bind:value={content}
		rows={4}
	/>
	<div class="journal-editor__actions">
		<Button variant="primary" type="submit" {loading} disabled={!content.trim()}>
			{#snippet icon()}<NotePencil size={16} />{/snippet}
			Save Entry
		</Button>
	</div>
</form>

<style>
	.journal-editor {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.journal-editor__actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
