export function formatDate(
	date: string | Date,
	style: 'short' | 'long' | 'relative' = 'short'
): string {
	const d = typeof date === 'string' ? new Date(date) : date;

	if (style === 'relative') {
		const now = new Date();
		const diff = d.getTime() - now.getTime();
		const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
		if (days === 0) return 'Today';
		if (days === 1) return 'Tomorrow';
		if (days === -1) return 'Yesterday';
		if (days > 0 && days <= 7) return `In ${days} days`;
		if (days < 0 && days >= -7) return `${Math.abs(days)} days ago`;
	}

	if (style === 'long') {
		return d.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	return d.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

export function toISODate(date: Date): string {
	return date.toISOString().split('T')[0];
}

export function daysUntil(date: string | Date): number {
	const d = typeof date === 'string' ? new Date(date) : date;
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function getUrgency(
	daysRemaining: number
): 'overdue' | 'critical' | 'high' | 'normal' | 'low' {
	if (daysRemaining < 0) return 'overdue';
	if (daysRemaining <= 3) return 'critical';
	if (daysRemaining <= 7) return 'high';
	if (daysRemaining <= 14) return 'normal';
	return 'low';
}

export function formatFileSize(bytes: number): string {
	if (bytes === 0) return '0 B';
	const units = ['B', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength).trimEnd() + '...';
}
