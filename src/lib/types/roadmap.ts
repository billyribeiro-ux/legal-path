export type StepStatus = 'pending' | 'active' | 'completed' | 'skipped' | 'overdue';
export type EventType = 'deadline' | 'filing' | 'hearing' | 'milestone';
export type Urgency = 'low' | 'normal' | 'high' | 'critical';

export interface RoadmapStep {
  id: string;
  caseId: string;
  eventType: EventType;
  title: string;
  description?: string;
  dueDate?: string;
  completedAt?: string;
  isSystemGenerated: boolean;
  sourceStatute?: string;
  urgency: Urgency;
  notificationSent: boolean;
  status: StepStatus;
  createdAt: string;
  updatedAt: string;
}

export interface DeadlineRule {
  daysAfter: string;
  count: number;
  businessDaysOnly?: boolean;
}

export interface ProceduralTemplate {
  id: string;
  jurisdiction: string;
  caseType: string;
  stepOrder: number;
  stepTitle: string;
  stepDescription: string;
  deadlineRule?: DeadlineRule;
  requiredDocuments?: string[];
  applicableStatutes?: string[];
  nextSteps?: Record<string, string>;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  stepId?: string;
}
