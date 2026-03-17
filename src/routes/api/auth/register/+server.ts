import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	// TODO: Implement registration
	return json({ message: 'Register endpoint - not yet implemented', email: body.email }, { status: 501 });
};
