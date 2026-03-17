<script lang="ts">
	import type { JournalEntryType } from '$lib/types/journal';
	import NotePencil from 'phosphor-svelte/lib/NotePencil';
	import Robot from 'phosphor-svelte/lib/Robot';
	import Gear from 'phosphor-svelte/lib/Gear';

	interface Props {
		entryType: JournalEntryType;
		size?: number;
	}

	let { entryType, size = 18 }: Props = $props();
</script>

<span class="activity-icon activity-icon--{entryType}">
	{#if entryType === 'manual'}
		<NotePencil {size} weight="duotone" />
	{:else if entryType === 'ai_suggested'}
		<Robot {size} weight="duotone" />
	{:else}
		<Gear {size} weight="duotone" />
	{/if}
</span>

<style>
	.activity-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.activity-icon--manual {
		color: var(--color-primary-600);
	}
	.activity-icon--ai_suggested {
		color: var(--color-info-dark, #1e40af);
	}
	.activity-icon--system {
		color: var(--color-text-tertiary);
	}
</style>
