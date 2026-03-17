<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		maxWidth?: 'sm' | 'md' | 'lg' | 'full';
	}

	let { children, maxWidth = 'md' }: Props = $props();
</script>

<div class="content-area content-area--{maxWidth}">
	{@render children()}
</div>

<style>
	.content-area {
		width: 100%;
		margin: 0 auto;
	}
	.content-area--sm { max-width: 640px; }
	.content-area--md { max-width: 960px; }
	.content-area--lg { max-width: 1200px; }
	.content-area--full { max-width: none; }
</style>
