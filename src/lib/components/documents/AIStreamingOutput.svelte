<script lang="ts">
	import Spinner from '$components/ui/Spinner.svelte';
	import FeatureDisclaimer from '$components/disclaimer/FeatureDisclaimer.svelte';
	import { DISCLAIMERS } from '$lib/constants/disclaimers';

	interface Props {
		content?: string;
		isStreaming?: boolean;
		label?: string;
	}

	let { content = '', isStreaming = false, label = 'AI is generating...' }: Props = $props();
</script>

<div class="ai-output">
	{#if isStreaming}
		<div class="ai-output__status">
			<Spinner size="sm" />
			<span class="ai-output__label">{label}</span>
		</div>
	{/if}

	<div class="ai-output__content" class:ai-output__content--streaming={isStreaming}>
		{#if content}
			<div class="ai-output__text">{content}</div>
		{:else if !isStreaming}
			<p class="ai-output__empty">No content generated yet.</p>
		{/if}
		{#if isStreaming}
			<span class="ai-output__cursor"></span>
		{/if}
	</div>

	{#if content && !isStreaming}
		<FeatureDisclaimer message={DISCLAIMERS.aiResponse.content} />
	{/if}
</div>

<style>
	.ai-output {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
	.ai-output__status {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.ai-output__label {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		font-style: italic;
	}
	.ai-output__content {
		background-color: var(--color-bg-sunken);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		min-height: 100px;
	}
	.ai-output__content--streaming {
		border: 1px solid var(--color-primary-200);
	}
	.ai-output__text {
		white-space: pre-wrap;
		color: var(--color-text-primary);
	}
	.ai-output__empty {
		color: var(--color-text-tertiary);
		text-align: center;
	}
	.ai-output__cursor {
		display: inline-block;
		width: 2px;
		height: 1em;
		background-color: var(--color-primary-600);
		margin-left: 2px;
		animation: blink 1s step-end infinite;
		vertical-align: text-bottom;
	}
	@keyframes blink {
		50% { opacity: 0; }
	}
</style>
