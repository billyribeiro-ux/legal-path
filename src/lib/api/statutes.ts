import { api } from './client';
import type { StatuteSearchResult, StatuteQuery, Statute } from '$lib/types/statute';

export function searchStatutes(query: StatuteQuery): Promise<StatuteSearchResult[]> {
	const params = new URLSearchParams();
	params.set('q', query.query);
	if (query.jurisdiction) params.set('jurisdiction', query.jurisdiction);
	if (query.caseType) params.set('caseType', query.caseType);
	if (query.sourceType) params.set('sourceType', query.sourceType);
	if (query.limit) params.set('limit', String(query.limit));
	return api.get(`/api/statutes?${params.toString()}`);
}

export function getStatute(id: string): Promise<Statute> {
	return api.get(`/api/statutes/${id}`);
}
