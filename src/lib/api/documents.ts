import { api } from './client';
import type { Document, DocumentTemplate, DraftRequest, DraftResponse } from '$lib/types/document';

export function getDocuments(caseId: string): Promise<Document[]> {
	return api.get(`/api/cases/${caseId}/documents`);
}

export function getDocument(caseId: string, docId: string): Promise<Document> {
	return api.get(`/api/cases/${caseId}/documents/${docId}`);
}

export function getTemplates(caseId: string): Promise<DocumentTemplate[]> {
	return api.get(`/api/cases/${caseId}/documents/templates`);
}

export function generateDraft(data: DraftRequest): Promise<DraftResponse> {
	return api.post(`/api/cases/${data.caseId}/documents/generate`, data);
}

export function deleteDocument(caseId: string, docId: string): Promise<void> {
	return api.delete(`/api/cases/${caseId}/documents/${docId}`);
}
