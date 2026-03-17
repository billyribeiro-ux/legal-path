<script lang="ts">
	import Button from '$components/ui/Button.svelte';
	import Scales from 'phosphor-svelte/lib/Scales';
	import MapTrifold from 'phosphor-svelte/lib/MapTrifold';
	import FileText from 'phosphor-svelte/lib/FileText';
	import Shield from 'phosphor-svelte/lib/Shield';
</script>

<div class="landing">
	<header class="landing__header">
		<nav class="landing__nav">
			<a href="/" class="landing__logo">
				<Scales size={28} weight="bold" />
				<span>LegalPath</span>
			</a>
			<div class="landing__nav-links">
				<a href="/login">Log In</a>
				<Button variant="primary" size="sm" onclick={() => window.location.href = '/register'}>
					Get Started
				</Button>
			</div>
		</nav>
	</header>

	<main class="landing__hero">
		<h1>Navigate Your Legal Case<br />with Confidence</h1>
		<p class="landing__subtitle">
			AI-powered procedural guidance for self-represented litigants.
			Know your rights, track deadlines, and prepare documents — without $300/hr attorney fees.
		</p>
		<div class="landing__cta">
			<Button variant="primary" size="lg" onclick={() => window.location.href = '/register'}>
				Start Your Free Case
			</Button>
			<Button variant="secondary" size="lg" onclick={() => window.location.href = '/login'}>
				Log In
			</Button>
		</div>
	</main>

	<section class="landing__features">
		<div class="landing__feature">
			<MapTrifold size={32} weight="duotone" />
			<h3>Procedural Roadmap</h3>
			<p>Step-by-step guidance through your legal process with deadline tracking and milestone alerts.</p>
		</div>
		<div class="landing__feature">
			<FileText size={32} weight="duotone" />
			<h3>AI Document Drafter</h3>
			<p>Generate court-ready documents using AI-powered templates tailored to your jurisdiction.</p>
		</div>
		<div class="landing__feature">
			<Shield size={32} weight="duotone" />
			<h3>Evidence Organizer</h3>
			<p>Upload, categorize, and manage your case evidence with AI-assisted tagging and summaries.</p>
		</div>
	</section>

	<footer class="landing__footer">
		<p>LegalPath provides legal information, not legal advice. <a href="/help">Learn more</a></p>
	</footer>
</div>

<style>
	.landing {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.landing__header {
		border-bottom: 1px solid var(--color-border);
	}
	.landing__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-4) var(--space-6);
	}
	.landing__logo {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-heading);
		font-size: var(--text-xl);
		font-weight: var(--weight-bold);
		color: var(--color-primary-800);
		text-decoration: none;
	}
	.landing__nav-links {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}
	.landing__nav-links a {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--color-text-secondary);
	}
	.landing__hero {
		text-align: center;
		padding: var(--space-20) var(--space-6);
		max-width: 800px;
		margin: 0 auto;
	}
	.landing__hero h1 {
		font-size: clamp(var(--text-2xl), 5vw, var(--text-4xl));
		color: var(--color-primary-900);
		line-height: var(--leading-tight);
	}
	.landing__subtitle {
		margin-top: var(--space-4);
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	.landing__cta {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
		margin-top: var(--space-8);
		flex-wrap: wrap;
	}
	.landing__features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-6);
		max-width: 1000px;
		margin: 0 auto;
		padding: var(--space-12) var(--space-6);
	}
	.landing__feature {
		text-align: center;
		padding: var(--space-6);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		color: var(--color-primary-600);
	}
	.landing__feature h3 {
		margin-top: var(--space-3);
		font-size: var(--text-lg);
		color: var(--color-text-primary);
	}
	.landing__feature p {
		margin-top: var(--space-2);
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
	}
	.landing__footer {
		margin-top: auto;
		padding: var(--space-6);
		text-align: center;
		border-top: 1px solid var(--color-border);
		font-size: var(--text-sm);
		color: var(--color-text-tertiary);
	}
</style>
