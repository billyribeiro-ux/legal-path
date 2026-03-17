import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error, event, status, message }) => {
	console.error('Client error:', error);
	return {
		message: message ?? 'An unexpected error occurred'
	};
};
