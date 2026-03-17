<script lang="ts">
	import type { CaseStatus } from '$lib/types/case';
	import Badge from '$components/ui/Badge.svelte';

	interface Props {
		status: CaseStatus;
	}

	let { status }: Props = $props();

	const config: Record<CaseStatus, { variant: string; label: string }> = {
		active: { variant: 'success', label: 'Active' },
		closed: { variant: 'default', label: 'Closed' },
		on_hold: { variant: 'warning', label: 'On Hold' },
		appealing: { variant: 'info', label: 'Appealing' }
	};
</script>

<Badge variant={config[status].variant}>{config[status].label}</Badge>
