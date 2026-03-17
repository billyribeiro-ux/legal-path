<script lang="ts">
	import Toast from './Toast.svelte';
	import { toasts } from '$lib/state/toast.svelte';
</script>

{#if toasts.items.length > 0}
	<div class="toast-container" aria-live="polite">
		{#each toasts.items as toast (toast.id)}
			<Toast {toast} ondismiss={toasts.dismiss} />
		{/each}
	</div>
{/if}

<style>
	.toast-container {
		position: fixed;
		top: var(--space-4);
		right: var(--space-4);
		z-index: var(--z-toast);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
</style>
