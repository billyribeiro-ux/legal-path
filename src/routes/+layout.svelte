<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import ToastContainer from '$components/ui/ToastContainer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<ToastContainer />
{@render children()}
