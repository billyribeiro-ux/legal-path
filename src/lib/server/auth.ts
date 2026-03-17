import type { RequestEvent } from '@sveltejs/kit';

export function getTokenFromRequest(event: RequestEvent): string | null {
	const authHeader = event.request.headers.get('Authorization');
	if (authHeader?.startsWith('Bearer ')) {
		return authHeader.slice(7);
	}
	return event.cookies.get('lp-token') ?? null;
}

export function setAuthCookie(event: RequestEvent, token: string): void {
	event.cookies.set('lp-token', token, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 7 // 7 days
	});
}

export function clearAuthCookie(event: RequestEvent): void {
	event.cookies.delete('lp-token', { path: '/' });
}
