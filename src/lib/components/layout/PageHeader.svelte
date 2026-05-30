<script lang="ts">
	import type { Snippet } from 'svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Props {
		title: string;
		description?: string;
		breadcrumbs?: BreadcrumbItem[];
		actions?: Snippet;
	}

	let { title, description, breadcrumbs, actions }: Props = $props();
</script>

<div class="page-header">
	{#if breadcrumbs && breadcrumbs.length > 0}
		<nav class="page-header__breadcrumbs" aria-label="Breadcrumb">
			<ol>
				{#each breadcrumbs as crumb, i (crumb.label)}
					<li>
						{#if crumb.href && i < breadcrumbs.length - 1}
							<a href={crumb.href}>{crumb.label}</a>
						{:else}
							<span aria-current="page">{crumb.label}</span>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>
	{/if}
	<div class="page-header__row">
		<div class="page-header__text">
			<h1 class="page-header__title">{title}</h1>
			{#if description}
				<p class="page-header__description">{description}</p>
			{/if}
		</div>
		{#if actions}
			<div class="page-header__actions">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>

<style>
	.page-header {
		margin-bottom: var(--space-6);
	}
	.page-header__breadcrumbs ol {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
		margin-bottom: var(--space-2);
	}
	.page-header__breadcrumbs li:not(:last-child)::after {
		content: '/';
		margin-left: var(--space-1);
		color: var(--color-text-disabled);
	}
	.page-header__breadcrumbs a {
		color: var(--color-text-secondary);
		text-decoration: none;
	}
	.page-header__breadcrumbs a:hover {
		color: var(--color-text-primary);
		text-decoration: underline;
	}
	.page-header__row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-4);
		flex-wrap: wrap;
	}
	.page-header__title {
		font-size: var(--text-2xl);
		font-family: var(--font-heading);
	}
	.page-header__description {
		margin-top: var(--space-1);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		max-width: 600px;
	}
	.page-header__actions {
		display: flex;
		gap: var(--space-3);
		flex-shrink: 0;
	}
</style>
