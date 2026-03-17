import { API_BASE_URL } from '$lib/constants/config';

export async function serverFetch<T>(
	endpoint: string,
	token?: string | null,
	options: RequestInit = {}
): Promise<T> {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...(options.headers as Record<string, string>)
	};

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers
	});

	if (!res.ok) {
		throw new Error(`Server fetch failed: ${res.status}`);
	}

	if (res.status === 204) return undefined as T;
	return res.json();
}
