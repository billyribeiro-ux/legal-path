export const APP_NAME = 'LegalPath';
export const APP_VERSION = '0.1.0';
export const APP_DESCRIPTION = 'AI-powered legal self-help navigator';

export const API_BASE_URL =
	import.meta.env.PUBLIC_API_BASE_URL ?? 'http://localhost:3000';

export const SUBSCRIPTION_TIERS = {
	free: {
		name: 'Free',
		price: 0,
		maxCases: 1,
		aiQueriesPerMonth: 3,
		documentsPerMonth: 0,
		storageGB: 0
	},
	essential: {
		name: 'Essential',
		price: 14.99,
		maxCases: 2,
		aiQueriesPerMonth: -1,
		documentsPerMonth: 5,
		storageGB: 1
	},
	pro: {
		name: 'Pro',
		price: 29.99,
		maxCases: -1,
		aiQueriesPerMonth: -1,
		documentsPerMonth: -1,
		storageGB: 10
	}
} as const;

export const FILE_UPLOAD = {
	maxSizeMB: 25,
	maxSizeBytes: 25 * 1024 * 1024,
	acceptedTypes: [
		'application/pdf',
		'image/jpeg',
		'image/png',
		'image/webp',
		'application/msword',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	],
	acceptedExtensions: '.pdf,.jpg,.jpeg,.png,.webp,.doc,.docx'
} as const;
