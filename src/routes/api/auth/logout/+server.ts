import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	// TODO: Implement logout (clear session/tokens)
	return json({ message: 'Logout endpoint - not yet implemented' }, { status: 501 });
};
