export const CT_WC_CASE_TYPES = {
	injury: 'Physical Injury',
	occupational_disease: 'Occupational Disease',
	repetitive_trauma: 'Repetitive Trauma',
	mental_emotional: 'Mental/Emotional Injury'
} as const;

export const CT_WC_BODY_PARTS = [
	'Head',
	'Neck',
	'Shoulder (Left)',
	'Shoulder (Right)',
	'Upper Arm (Left)',
	'Upper Arm (Right)',
	'Elbow (Left)',
	'Elbow (Right)',
	'Forearm (Left)',
	'Forearm (Right)',
	'Wrist (Left)',
	'Wrist (Right)',
	'Hand (Left)',
	'Hand (Right)',
	'Upper Back',
	'Lower Back',
	'Hip (Left)',
	'Hip (Right)',
	'Knee (Left)',
	'Knee (Right)',
	'Ankle (Left)',
	'Ankle (Right)',
	'Foot (Left)',
	'Foot (Right)',
	'Chest',
	'Abdomen',
	'Eyes',
	'Ears',
	'Lungs',
	'Internal Organs',
	'Multiple Body Parts'
] as const;

export const CT_WC_FORMS = {
	form30c: {
		id: 'form-30c',
		name: 'Form 30C — Notice of Claim',
		description: 'Written notice of claim for compensation sent to employer',
		statute: 'C.G.S. § 31-294c'
	},
	form43: {
		id: 'form-43',
		name: 'Form 43 — Notice of Claim for Dependency Benefits',
		description: 'Notice of claim for dependency benefits',
		statute: 'C.G.S. § 31-306'
	},
	motionToCompel: {
		id: 'motion-to-compel',
		name: 'Motion to Compel',
		description: 'Motion to compel medical treatment or other relief',
		statute: 'C.G.S. § 31-294d'
	},
	motionForExam: {
		id: 'motion-for-exam',
		name: 'Motion for Examination',
		description: 'Motion for medical examination or IME dispute',
		statute: 'C.G.S. § 31-294f'
	},
	formalHearingBrief: {
		id: 'formal-hearing-brief',
		name: 'Formal Hearing Brief',
		description: 'Brief submitted for formal hearing before Commissioner',
		statute: 'Conn. Agencies Regs. § 31-301-1 et seq.'
	},
	discoveryRequest: {
		id: 'discovery-request',
		name: 'Discovery Request',
		description: 'Interrogatories and document production requests',
		statute: 'Conn. Agencies Regs. § 31-301-1'
	},
	hipaaAuthorization: {
		id: 'hipaa-auth',
		name: 'HIPAA Authorization',
		description: 'Authorization for release of medical records',
		statute: '45 CFR § 164.508'
	}
} as const;

export interface ProceduralStep {
	id: string;
	order: number;
	title: string;
	description: string;
	deadlineDays?: number;
	deadlineFrom?: string;
	requiredDocuments: string[];
	applicableStatutes: string[];
	nextSteps: string[];
}

export const CT_WC_PROCEDURAL_STEPS: ProceduralStep[] = [
	{
		id: 'step-1-injury',
		order: 1,
		title: 'Injury Occurs / Report to Employer',
		description:
			'Report your workplace injury or illness to your employer as soon as possible. Under Connecticut law, you must provide written notice within one year of the injury or within three years for repetitive trauma or occupational disease.',
		deadlineDays: 365,
		deadlineFrom: 'date_of_incident',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-294c'],
		nextSteps: ['step-2-form30c']
	},
	{
		id: 'step-2-form30c',
		order: 2,
		title: 'File Form 30C (Notice of Claim)',
		description:
			'File a written Notice of Claim for Compensation (Form 30C) with your employer. Send by certified mail, return receipt requested. Keep a copy for your records. This must be filed within one year of injury (or three years for occupational disease/repetitive trauma).',
		deadlineDays: 365,
		deadlineFrom: 'date_of_incident',
		requiredDocuments: ['form-30c'],
		applicableStatutes: ['C.G.S. § 31-294c'],
		nextSteps: ['step-3-employer-response']
	},
	{
		id: 'step-3-employer-response',
		order: 3,
		title: 'Await Employer/Insurer Response',
		description:
			'The employer/insurer has 28 days from receipt of Form 30C to either accept or contest the claim. If they fail to respond within 28 days, they are presumed to have accepted the claim.',
		deadlineDays: 28,
		deadlineFrom: 'step-2-form30c',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-294c(b)'],
		nextSteps: ['step-4a-claim-accepted', 'step-4b-claim-contested']
	},
	{
		id: 'step-4a-claim-accepted',
		order: 4,
		title: 'Claim Accepted — Benefits Begin',
		description:
			'If the claim is accepted or the employer fails to disclaim within 28 days, benefits should begin. This includes payment of medical expenses and temporary total or partial disability benefits.',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-294d', 'C.G.S. § 31-307'],
		nextSteps: ['step-6-medical-treatment']
	},
	{
		id: 'step-4b-claim-contested',
		order: 4,
		title: 'Claim Contested — Request Informal Hearing',
		description:
			"If the employer/insurer contests the claim, you may request an Informal Hearing before a Workers' Compensation Commissioner. This is a voluntary, non-binding mediation.",
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-294d', 'C.G.S. § 31-297'],
		nextSteps: ['step-5-informal-hearing']
	},
	{
		id: 'step-5-informal-hearing',
		order: 5,
		title: 'Informal Hearing',
		description:
			"Attend the Informal Hearing at the Workers' Compensation Commission district office. The Commissioner will attempt to mediate a resolution. If unsuccessful, the case proceeds to a Formal Hearing.",
		requiredDocuments: [],
		applicableStatutes: ['Conn. Agencies Regs. § 31-278-2'],
		nextSteps: ['step-7-formal-hearing']
	},
	{
		id: 'step-6-medical-treatment',
		order: 6,
		title: 'Obtain Medical Treatment',
		description:
			'You have the right to choose your treating physician. The employer/insurer must authorize and pay for reasonable and necessary medical treatment related to your work injury. If treatment is denied, you may file a Motion to Compel.',
		requiredDocuments: ['hipaa-auth'],
		applicableStatutes: ['C.G.S. § 31-294d'],
		nextSteps: ['step-8-mmi']
	},
	{
		id: 'step-7-formal-hearing',
		order: 7,
		title: 'Formal Hearing',
		description:
			"If the dispute is not resolved at the Informal Hearing, either party may request a Formal Hearing. This is a trial-like proceeding before a Workers' Compensation Commissioner. You should prepare a brief, organize evidence, and be ready to present testimony.",
		requiredDocuments: ['formal-hearing-brief'],
		applicableStatutes: ['C.G.S. § 31-297', 'Conn. Agencies Regs. § 31-301-1 et seq.'],
		nextSteps: ['step-9-finding-award']
	},
	{
		id: 'step-8-mmi',
		order: 8,
		title: 'Maximum Medical Improvement (MMI)',
		description:
			'Your treating physician will determine when you have reached Maximum Medical Improvement — the point at which your condition is unlikely to improve further with treatment. At MMI, your physician assigns a permanency rating.',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-308(b)'],
		nextSteps: ['step-10-permanency']
	},
	{
		id: 'step-9-finding-award',
		order: 9,
		title: 'Finding & Award (or Dismissal)',
		description:
			'After the Formal Hearing, the Commissioner issues a Finding & Award (or Finding & Dismissal). This is a written decision determining compensability, benefits, and other issues. Either party may appeal within 20 days.',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-301'],
		nextSteps: ['step-11-crb-appeal']
	},
	{
		id: 'step-10-permanency',
		order: 10,
		title: 'Permanency Rating & Benefits',
		description:
			'Based on the permanency rating, you may be entitled to permanent partial disability benefits calculated according to the schedule in C.G.S. § 31-308(b). Benefits are calculated based on your compensation rate and the percentage of impairment.',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-308(b)', 'C.G.S. § 31-308(a)'],
		nextSteps: []
	},
	{
		id: 'step-11-crb-appeal',
		order: 11,
		title: 'Compensation Review Board (CRB) Appeal',
		description:
			"Either party may appeal the Commissioner's Finding & Award to the Compensation Review Board within 20 days. The CRB reviews the record for errors of law and whether findings are supported by evidence.",
		deadlineDays: 20,
		deadlineFrom: 'step-9-finding-award',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-301(a)'],
		nextSteps: ['step-12-appellate-court']
	},
	{
		id: 'step-12-appellate-court',
		order: 12,
		title: 'Appellate Court',
		description:
			"Either party may appeal the CRB's decision to the Connecticut Appellate Court within 20 days. Further appeal to the Supreme Court requires certification.",
		deadlineDays: 20,
		deadlineFrom: 'step-11-crb-appeal',
		requiredDocuments: [],
		applicableStatutes: ['C.G.S. § 31-301b'],
		nextSteps: []
	}
];

export const CT_WC_KEY_STATUTES = [
	{
		citation: 'C.G.S. § 31-275',
		title: 'Definitions',
		description: "Key definitions for Workers' Compensation Act"
	},
	{
		citation: 'C.G.S. § 31-284',
		title: "Employer's Liability",
		description: 'Exclusive remedy provision — employer liability under WC Act'
	},
	{
		citation: 'C.G.S. § 31-294c',
		title: 'Notice of Claim',
		description: 'Requirements for filing notice of claim (Form 30C), time limits'
	},
	{
		citation: 'C.G.S. § 31-294d',
		title: 'Medical Care',
		description: 'Right to medical care, employer obligation to furnish treatment'
	},
	{
		citation: 'C.G.S. § 31-294f',
		title: 'Medical Examination',
		description: "Employer's right to require medical examination"
	},
	{
		citation: 'C.G.S. § 31-297',
		title: 'Contested Claims',
		description: 'Procedure for contesting claims, informal hearings'
	},
	{
		citation: 'C.G.S. § 31-301',
		title: 'Appeals',
		description: 'Appeal procedures to CRB and Appellate Court'
	},
	{
		citation: 'C.G.S. § 31-306',
		title: 'Dependency Benefits',
		description: 'Benefits for dependents in fatal injury cases'
	},
	{
		citation: 'C.G.S. § 31-307',
		title: 'Temporary Total Disability',
		description: 'Temporary total disability benefits calculation'
	},
	{
		citation: 'C.G.S. § 31-308',
		title: 'Permanent Partial Disability',
		description: 'Permanent partial disability schedule and benefits'
	},
	{
		citation: 'C.G.S. § 31-308a',
		title: 'Discretionary Benefits',
		description: 'Additional benefits for specific loss or disability'
	}
];

export const CT_WC_COMMISSION_DISTRICTS = [
	{ name: 'First District', location: 'Hartford' },
	{ name: 'Second District', location: 'Norwich' },
	{ name: 'Third District', location: 'New Haven' },
	{ name: 'Fourth District', location: 'Bridgeport' },
	{ name: 'Fifth District', location: 'Waterbury' },
	{ name: 'Sixth District', location: 'New Britain' },
	{ name: 'Seventh District', location: 'Stamford/Norwalk' },
	{ name: 'Eighth District', location: 'Manchester' }
];
