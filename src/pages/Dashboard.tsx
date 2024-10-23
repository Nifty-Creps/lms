import React from 'react';
import DashboardStats from '../components/DashboardStats';
import UpcomingSessions from '../components/UpcomingSessions';
import RecentActivities from '../components/RecentActivities';
import ProgressChart from '../components/ProgressChart';
import { BarChart2, TrendingUp } from 'lucide-react';

const mockStats = {
  totalSessions: 156,
  upcomingSessions: 8,
  completedSessions: 148,
  averageRating: 4.8,
};

const mockSessions = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    startTime: '2024-03-15T10:00:00',
    endTime: '2024-03-15T11:00:00',
    tutorId: 't1',
    studentIds: ['s1', 's2'],
    subject: 'Mathematics',
    status: 'scheduled',
  },
  {
    id: '2',
    title: 'English Literature',
    startTime: '2024-03-15T14:00:00',
    endTime: '2024-03-15T15:00:00',
    tutorId: 't2',
    studentIds: ['s3'],
    subject: 'English',
    status: 'scheduled',
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <BarChart2 className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, John Doe</p>
        </div>
      </div>

      <DashboardStats stats={mockStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Learning Progress</h2>
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <ProgressChart />
        </div>

        <div className="space-y-8">
          <UpcomingSessions sessions={mockSessions} />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}