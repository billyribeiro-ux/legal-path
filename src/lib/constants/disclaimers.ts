export const DISCLAIMERS = {
	global: {
		id: 'global',
		title: 'Important Legal Notice',
		content:
			'LegalPath provides legal information and procedural guidance. It does not provide legal advice and is not a substitute for an attorney. By using LegalPath, you acknowledge that you understand the difference between legal information and legal advice, and that you are responsible for all decisions regarding your legal matter.'
	},
	documentGeneration: {
		id: 'doc-gen',
		title: 'AI-Generated Document Notice',
		content:
			'This document was created using AI-assisted templates based on applicable jurisdiction procedures. It constitutes legal information, not legal advice. You are responsible for reviewing all content before filing. We strongly recommend having an attorney review any document before submission to a court or administrative body.'
	},
	statuteLookup: {
		id: 'statute',
		title: 'Statute Information Notice',
		content:
			'This is a simplified explanation of the referenced statute. Always verify with the official statute text, which is linked above. Laws change frequently and this summary may not reflect the most recent amendments.'
	},
	aiResponse: {
		id: 'ai-response',
		title: 'AI-Assisted Information',
		content:
			'This response was generated using AI and constitutes legal information, not legal advice. Verify all citations and factual claims independently. Review all content carefully before relying on it for any legal matter.'
	},
	caseSetup: {
		id: 'case-setup',
		title: 'Case Setup Notice',
		content:
			'The procedural roadmap and deadlines generated are based on general jurisdictional rules and may not account for all circumstances specific to your case. Deadlines may vary based on court orders, local rules, or other factors. Always verify critical deadlines with the relevant court or administrative body.'
	}
} as const;

export type DisclaimerId = keyof typeof DISCLAIMERS;
