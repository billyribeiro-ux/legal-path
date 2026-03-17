import { api } from './client';
import type { JournalEntry, CreateJournalEntryRequest } from '$lib/types/journal';

export function getJournalEntries(caseId: string): Promise<JournalEntry[]> {
	return api.get(`/api/cases/${caseId}/journal`);
}

export function createJournalEntry(data: CreateJournalEntryRequest): Promise<JournalEntry> {
	return api.post(`/api/cases/${data.caseId}/journal`, data);
}

export function deleteJournalEntry(caseId: string, entryId: string): Promise<void> {
	return api.delete(`/api/cases/${caseId}/journal/${entryId}`);
}
