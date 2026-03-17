import { api } from './client';
import type { Notification, NotificationPreferences, PushSubscription } from '$lib/types/notification';

export function getNotifications(): Promise<Notification[]> {
	return api.get('/api/notifications');
}

export function markRead(notificationId: string): Promise<void> {
	return api.patch(`/api/notifications/${notificationId}/read`);
}

export function markAllRead(): Promise<void> {
	return api.post('/api/notifications/mark-all-read');
}

export function registerPushToken(subscription: PushSubscription): Promise<void> {
	return api.post('/api/notifications/push/register', subscription);
}

export function getPreferences(): Promise<NotificationPreferences> {
	return api.get('/api/notifications/preferences');
}

export function updatePreferences(prefs: Partial<NotificationPreferences>): Promise<NotificationPreferences> {
	return api.patch('/api/notifications/preferences', prefs);
}
