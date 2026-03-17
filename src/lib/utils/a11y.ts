/**
 * Trap focus within a container element (for modals, drawers).
 * Returns a cleanup function.
 */
export function trapFocus(node: HTMLElement): () => void {
	const focusableSelector =
		'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

	function handleKeydown(e: KeyboardEvent) {
		if (e.key !== 'Tab') return;
		const elements = Array.from(node.querySelectorAll<HTMLElement>(focusableSelector));
		if (elements.length === 0) return;
		const first = elements[0];
		const last = elements[elements.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	node.addEventListener('keydown', handleKeydown);
	const first = node.querySelector<HTMLElement>(focusableSelector);
	first?.focus();

	return () => node.removeEventListener('keydown', handleKeydown);
}

/**
 * Announce a message to screen readers via a live region.
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
	const el = document.createElement('div');
	el.setAttribute('aria-live', priority);
	el.setAttribute('role', priority === 'assertive' ? 'alert' : 'status');
	el.className = 'sr-only';
	document.body.appendChild(el);
	requestAnimationFrame(() => {
		el.textContent = message;
		setTimeout(() => el.remove(), 3000);
	});
}
