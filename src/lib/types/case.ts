export type CaseType = 'workers_comp' | 'family' | 'landlord_tenant' | 'small_claims' | 'disability';
export type CaseStatus = 'active' | 'closed' | 'on_hold' | 'appealing';
export type Jurisdiction = 'CT' | 'NY' | 'MA' | 'NJ' | 'PA';

export interface Case {
  id: string;
  userId: string;
  caseType: CaseType;
  jurisdiction: Jurisdiction;
  status: CaseStatus;
  title: string;
  caseData: WorkersCompData | Record<string, unknown>;
  dateOfIncident?: string;
  opposingParty?: string;
  opposingCounsel?: string;
  assignedBody?: string;
  docketNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkersCompData {
  injuryType: string;
  injuryDescription: string;
  bodyParts: string[];
  employerName: string;
  employerAddress?: string;
  insurerName?: string;
  tpaName?: string;
  treatingPhysicians: Physician[];
  dateOfNotice?: string;
  form30cFiled?: boolean;
  form30cDate?: string;
  weeklyWage?: number;
  employmentStartDate?: string;
}

export interface Physician {
  name: string;
  specialty: string;
  phone?: string;
  address?: string;
}

export interface CreateCaseRequest {
  caseType: CaseType;
  jurisdiction: Jurisdiction;
  title: string;
  caseData: Record<string, unknown>;
  dateOfIncident?: string;
  opposingParty?: string;
  assignedBody?: string;
}
