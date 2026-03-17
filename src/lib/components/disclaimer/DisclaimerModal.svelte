<script lang="ts">
	import Modal from '$components/ui/Modal.svelte';
	import Button from '$components/ui/Button.svelte';
	import Checkbox from '$components/ui/Checkbox.svelte';
	import { disclaimers } from '$lib/state/disclaimer.svelte';

	interface Props {
		disclaimerId: string;
		title: string;
		content: string;
		onaccept: () => void;
	}

	let { disclaimerId, title, content, onaccept }: Props = $props();

	let acknowledged = $state(false);
	const open = $derived(!disclaimers.hasAccepted(disclaimerId));

	function handleAccept() {
		disclaimers.accept(disclaimerId);
		onaccept();
	}
</script>

<Modal {open} {title} onclose={() => {}} size="md">
	<div class="disclaimer-modal">
		<div class="disclaimer-modal__content">
			<p>{content}</p>
		</div>
		<Checkbox
			label="I understand and acknowledge this notice"
			bind:checked={acknowledged}
		/>
	</div>
	{#snippet actions()}
		<Button variant="primary" disabled={!acknowledged} onclick={handleAccept}>
			I Understand & Accept
		</Button>
	{/snippet}
</Modal>

<style>
	.disclaimer-modal {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.disclaimer-modal__content {
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--color-text-secondary);
	}
</style>
