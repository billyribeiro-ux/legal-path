<script lang="ts">
	interface Props {
		src?: string;
		alt?: string;
		name?: string;
		size?: 'sm' | 'md' | 'lg';
	}

	let { src, alt = '', name, size = 'md' }: Props = $props();

	const initials = $derived(
		name
			? name
					.split(' ')
					.map((n) => n[0])
					.join('')
					.toUpperCase()
					.slice(0, 2)
			: '?'
	);

	let imgError = $state(false);
</script>

<div class="avatar avatar--{size}" role="img" aria-label={alt || name || 'User avatar'}>
	{#if src && !imgError}
		<img class="avatar__img" {src} {alt} onerror={() => (imgError = true)} />
	{:else}
		<span class="avatar__initials">{initials}</span>
	{/if}
</div>

<style>
	.avatar {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-full);
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
		font-weight: var(--weight-semibold);
		overflow: hidden;
		flex-shrink: 0;
	}
	.avatar--sm { width: 32px; height: 32px; font-size: var(--text-xs); }
	.avatar--md { width: 40px; height: 40px; font-size: var(--text-sm); }
	.avatar--lg { width: 56px; height: 56px; font-size: var(--text-lg); }
	.avatar__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.avatar__initials {
		line-height: 1;
	}
</style>
