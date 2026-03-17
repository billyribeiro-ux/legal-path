import { goto } from '$app/navigation';
import { auth } from '$lib/state/auth.svelte';
import { API_BASE_URL } from '$lib/constants/config';

export interface ApiResponse<T> {
	data: T;
	message?: string;
}

export interface ApiError {
	code: string;
	message: string;
	details?: Record<string, string[]>;
}

export class ApiRequestError extends Error {
	constructor(
		public status: number,
		public error: ApiError
	) {
		super(error.message);
		this.name = 'ApiRequestError';
	}
}

async function request<T>(
	endpoint: string,
	options: RequestInit = {}
): Promise<T> {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...(options.headers as Record<string, string>)
	};

	const token = auth.getToken();
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers
	});

	if (res.status === 401) {
		auth.clearAuth();
		goto('/login');
		throw new ApiRequestError(401, {
			code: 'UNAUTHORIZED',
			message: 'Session expired. Please log in again.'
		});
	}

	if (!res.ok) {
		const error: ApiError = await res.json().catch(() => ({
			code: 'UNKNOWN',
			message: `Request failed with status ${res.status}`
		}));
		throw new ApiRequestError(res.status, error);
	}

	if (res.status === 204) return undefined as T;
	return res.json();
}

export const api = {
	get<T>(endpoint: string): Promise<T> {
		return request<T>(endpoint, { method: 'GET' });
	},
	post<T>(endpoint: string, body?: unknown): Promise<T> {
		return request<T>(endpoint, {
			method: 'POST',
			body: body ? JSON.stringify(body) : undefined
		});
	},
	put<T>(endpoint: string, body?: unknown): Promise<T> {
		return request<T>(endpoint, {
			method: 'PUT',
			body: body ? JSON.stringify(body) : undefined
		});
	},
	patch<T>(endpoint: string, body?: unknown): Promise<T> {
		return request<T>(endpoint, {
			method: 'PATCH',
			body: body ? JSON.stringify(body) : undefined
		});
	},
	delete<T>(endpoint: string): Promise<T> {
		return request<T>(endpoint, { method: 'DELETE' });
	}
};
