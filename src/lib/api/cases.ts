import { api } from './client';
import type { Case, CreateCaseRequest } from '$lib/types/case';

export function getCases(): Promise<Case[]> {
	return api.get('/api/cases');
}

export function getCase(id: string): Promise<Case> {
	return api.get(`/api/cases/${id}`);
}

export function createCase(data: CreateCaseRequest): Promise<Case> {
	return api.post('/api/cases', data);
}

export function updateCase(id: string, data: Partial<Case>): Promise<Case> {
	return api.patch(`/api/cases/${id}`, data);
}

export function deleteCase(id: string): Promise<void> {
	return api.delete(`/api/cases/${id}`);
}
