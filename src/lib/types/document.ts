export type DocType = 'uploaded' | 'generated' | 'template';
export type DocCategory = 'medical_record' | 'filing' | 'correspondence' | 'evidence' | 'form' | 'motion' | 'brief' | 'discovery' | 'authorization' | 'other';

export interface Document {
  id: string;
  caseId: string;
  docType: DocType;
  category: DocCategory;
  title: string;
  description?: string;
  filePath: string;
  fileSize?: number;
  mimeType?: string;
  aiSummary?: string;
  aiTags?: string[];
  version: number;
  parentId?: string;
  createdAt: string;
}

export interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  category: DocCategory;
  jurisdiction: string;
  caseType: string;
  fields: TemplateField[];
}

export interface TemplateField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'select' | 'number';
  required: boolean;
  placeholder?: string;
  options?: string[];
  helpText?: string;
}

export interface DraftRequest {
  templateId: string;
  caseId: string;
  fields: Record<string, string>;
}

export interface DraftResponse {
  documentId: string;
  content: string;
  sections: DraftSection[];
  disclaimer: string;
}

export interface DraftSection {
  title: string;
  content: string;
  citations?: string[];
}
