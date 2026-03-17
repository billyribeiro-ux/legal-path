export type EvidenceCategory = 'medical_record' | 'correspondence' | 'ime_report' | 'employer_doc' | 'photo' | 'witness_statement' | 'financial' | 'other';

export interface Evidence {
  id: string;
  caseId: string;
  category: EvidenceCategory;
  title: string;
  description?: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  aiSummary?: string;
  aiTags?: string[];
  dateOfDocument?: string;
  uploadedAt: string;
}

export interface EvidenceUploadRequest {
  caseId: string;
  category: EvidenceCategory;
  title: string;
  description?: string;
  dateOfDocument?: string;
}
