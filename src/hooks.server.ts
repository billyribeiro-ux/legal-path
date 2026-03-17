import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Future: extract auth token from cookies, validate JWT, attach user to locals
	return resolve(event);
};
