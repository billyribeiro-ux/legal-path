export type NotificationType = 'deadline_reminder' | 'case_update' | 'document_ready' | 'system';
export type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  priority: NotificationPriority;
  caseId?: string;
  eventId?: string;
  read: boolean;
  createdAt: string;
}

export interface PushSubscription {
  platform: 'web' | 'ios' | 'android';
  token: string;
  deviceId: string;
}

export interface NotificationPreferences {
  deadlineReminders: boolean;
  caseUpdates: boolean;
  documentReady: boolean;
  reminderDaysBefore: number[];
  quietHoursStart?: string;
  quietHoursEnd?: string;
}
