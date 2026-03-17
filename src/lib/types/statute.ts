export type SourceType = 'statute' | 'regulation' | 'procedure' | 'form_instruction';

export interface Statute {
  id: string;
  jurisdiction: string;
  caseType: string;
  sourceType: SourceType;
  citation: string;
  title: string;
  content: string;
  plainEnglish?: string;
  effectiveDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StatuteSearchResult {
  statute: Statute;
  relevanceScore: number;
  matchedSections?: string[];
}

export interface StatuteQuery {
  query: string;
  jurisdiction?: string;
  caseType?: string;
  sourceType?: SourceType;
  limit?: number;
}
