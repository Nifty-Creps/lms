export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'tutor' | 'student' | 'support';
  avatar?: string;
}

export interface Session {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  tutorId: string;
  studentIds: string[];
  subject: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface DashboardStats {
  totalSessions: number;
  upcomingSessions: number;
  completedSessions: number;
  averageRating: number;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface TutorAvailability {
  tutorId: string;
  weeklySchedule: {
    [key: string]: TimeSlot[];
  };
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  tutorIds: string[];
}