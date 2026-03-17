<script lang="ts">
	interface Props {
		text: string;
		loading?: boolean;
	}

	let { text, loading = false }: Props = $props();
</script>

<div class="ai-output" role="log" aria-live="polite" aria-label="AI generated content">
	<pre class="ai-output__text">{text}{#if loading}<span class="ai-output__cursor" aria-hidden="true">|</span>{/if}</pre>
	{#if loading}
		<p class="ai-output__status" aria-live="assertive">Generating content...</p>
	{/if}
</div>

<style>
	.ai-output {
		position: relative;
		padding: var(--space-4);
		background-color: var(--color-bg-sunken);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		min-height: 200px;
	}
	.ai-output__text {
		font-family: var(--font-mono, 'Courier New', monospace);
		font-size: var(--text-sm);
		line-height: 1.7;
		color: var(--color-text-primary);
		white-space: pre-wrap;
		word-wrap: break-word;
		margin: 0;
	}
	.ai-output__cursor {
		display: inline;
		animation: blink 0.8s step-end infinite;
		color: var(--color-primary-600);
		font-weight: var(--weight-bold);
	}
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
	.ai-output__status {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
</style>
