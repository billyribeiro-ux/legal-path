<script lang="ts">
	import type { JournalEntryType } from '$lib/types/journal';

	interface Props {
		type: JournalEntryType;
	}

	let { type }: Props = $props();

	const labels: Record<JournalEntryType, string> = {
		manual: 'Manual entry',
		system: 'System entry',
		ai_suggested: 'AI suggested entry'
	};
</script>

<span class="activity-icon activity-icon--{type}" role="img" aria-label={labels[type]}>
	{#if type === 'manual'}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
			<path d="M11.5 2.5l2 2L5 13H3v-2z"/>
		</svg>
	{:else if type === 'system'}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
			<circle cx="8" cy="8" r="3"/>
			<path d="M8 1.5v1.3M8 13.2v1.3M1.5 8h1.3M13.2 8h1.3M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9" stroke-linecap="round"/>
		</svg>
	{:else}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
			<rect x="3" y="4" width="10" height="8" rx="1.5"/>
			<circle cx="6" cy="7.5" r="1" fill="currentColor" stroke="none"/>
			<circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none"/>
			<path d="M1.5 8V5.5a2 2 0 012-2h0M14.5 8V5.5a2 2 0 00-2-2h0" stroke-linecap="round"/>
		</svg>
	{/if}
</span>

<style>
	.activity-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: var(--radius-full);
		flex-shrink: 0;
	}
	.activity-icon--manual {
		background-color: var(--color-primary-100);
		color: var(--color-primary-700);
	}
	.activity-icon--system {
		background-color: var(--color-bg-sunken);
		color: var(--color-text-tertiary);
	}
	.activity-icon--ai_suggested {
		background-color: var(--color-info-light);
		color: var(--color-info-dark);
	}
</style>
