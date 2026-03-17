import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	// TODO: Implement token refresh
	return json({ message: 'Refresh endpoint - not yet implemented' }, { status: 501 });
};
