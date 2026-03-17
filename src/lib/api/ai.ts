import { auth } from '$lib/state/auth.svelte';
import { API_BASE_URL } from '$lib/constants/config';

export interface StreamCallbacks {
	onToken: (token: string) => void;
	onComplete?: (fullText: string) => void;
	onError?: (error: Error) => void;
}

export async function streamDocumentDraft(
	caseId: string,
	templateId: string,
	fields: Record<string, string>,
	callbacks: StreamCallbacks
): Promise<void> {
	const token = auth.getToken();
	const res = await fetch(`${API_BASE_URL}/api/ai/stream`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : {})
		},
		body: JSON.stringify({ caseId, templateId, fields })
	});

	if (!res.ok || !res.body) {
		const err = new Error(`Stream failed: ${res.status}`);
		callbacks.onError?.(err);
		throw err;
	}

	const reader = res.body.getReader();
	const decoder = new TextDecoder();
	let fullText = '';

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			const chunk = decoder.decode(value, { stream: true });
			fullText += chunk;
			callbacks.onToken(chunk);
		}
		callbacks.onComplete?.(fullText);
	} catch (error) {
		callbacks.onError?.(error as Error);
	}
}
