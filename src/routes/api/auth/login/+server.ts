import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	// TODO: Implement authentication
	return json({ message: 'Login endpoint - not yet implemented', email: body.email }, { status: 501 });
};
