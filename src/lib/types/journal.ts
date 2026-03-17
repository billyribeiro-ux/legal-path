export type JournalEntryType = 'manual' | 'system' | 'ai_suggested';

export interface JournalEntry {
  id: string;
  caseId: string;
  entryType: JournalEntryType;
  content: string;
  relatedEventId?: string;
  relatedDocId?: string;
  createdAt: string;
}

export interface CreateJournalEntryRequest {
  caseId: string;
  content: string;
  entryType?: JournalEntryType;
  relatedEventId?: string;
  relatedDocId?: string;
}
