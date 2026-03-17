<script lang="ts">
	import type { Snippet } from 'svelte';
	import AppShell from '$components/layout/AppShell.svelte';
	import DisclaimerModal from '$components/disclaimer/DisclaimerModal.svelte';
	import { DISCLAIMERS } from '$lib/constants/disclaimers';

	let { children }: { children: Snippet } = $props();
</script>

<DisclaimerModal
	disclaimerId={DISCLAIMERS.global.id}
	title={DISCLAIMERS.global.title}
	content={DISCLAIMERS.global.content}
	onaccept={() => {}}
/>

<AppShell>
	{@render children()}
</AppShell>
