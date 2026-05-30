<script lang="ts">
	interface Crumb {
		label: string;
		href?: string;
	}

	interface Props {
		items: Crumb[];
	}

	let { items }: Props = $props();
</script>

<nav class="breadcrumb" aria-label="Breadcrumb">
	<ol class="breadcrumb__list">
		{#each items as item, i (item.label)}
			<li class="breadcrumb__item">
				{#if item.href && i < items.length - 1}
					<a class="breadcrumb__link" href={item.href}>{item.label}</a>
				{:else}
					<span class="breadcrumb__current" aria-current={i === items.length - 1 ? 'page' : undefined}>
						{item.label}
					</span>
				{/if}
				{#if i < items.length - 1}
					<svg class="breadcrumb__separator" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<path d="M6 4l4 4-4 4" />
					</svg>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.breadcrumb__list {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		list-style: none;
		padding: 0;
		margin: 0;
		flex-wrap: wrap;
	}
	.breadcrumb__item {
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}
	.breadcrumb__link {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		text-decoration: none;
	}
	.breadcrumb__link:hover {
		color: var(--color-primary-700);
		text-decoration: underline;
	}
	.breadcrumb__current {
		font-size: var(--text-sm);
		color: var(--color-text-primary);
		font-weight: var(--weight-medium);
	}
	.breadcrumb__separator {
		color: var(--color-text-tertiary);
		flex-shrink: 0;
	}
</style>
