import { api } from './client';
import { auth } from '$lib/state/auth.svelte';
import { API_BASE_URL } from '$lib/constants/config';
import type { Evidence, EvidenceUploadRequest } from '$lib/types/evidence';

export function getEvidence(caseId: string): Promise<Evidence[]> {
	return api.get(`/api/cases/${caseId}/evidence`);
}

export function getEvidenceItem(caseId: string, evidenceId: string): Promise<Evidence> {
	return api.get(`/api/cases/${caseId}/evidence/${evidenceId}`);
}

export async function uploadEvidence(
	caseId: string,
	file: File,
	metadata: EvidenceUploadRequest
): Promise<Evidence> {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('metadata', JSON.stringify(metadata));

	const token = auth.getToken();
	const res = await fetch(`${API_BASE_URL}/api/cases/${caseId}/evidence`, {
		method: 'POST',
		headers: token ? { Authorization: `Bearer ${token}` } : {},
		body: formData
	});

	if (!res.ok) throw new Error('Upload failed');
	return res.json();
}

export function deleteEvidence(caseId: string, evidenceId: string): Promise<void> {
	return api.delete(`/api/cases/${caseId}/evidence/${evidenceId}`);
}
