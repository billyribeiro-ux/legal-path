import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	// TODO: Implement AI streaming endpoint
	// This will connect to the AI service and stream responses
	return json({ message: 'AI stream endpoint - not yet implemented', prompt: body.prompt }, { status: 501 });
};
