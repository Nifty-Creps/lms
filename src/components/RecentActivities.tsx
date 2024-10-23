import React from 'react';
import { Clock, BookOpen, Video, MessageSquare } from 'lucide-react';

const activities = [
  {
    id: '1',
    type: 'session',
    title: 'Completed Mathematics Session',
    time: '2 hours ago',
    icon: Clock,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: '2',
    type: 'resource',
    title: 'Downloaded Physics Notes',
    time: '4 hours ago',
    icon: BookOpen,
    color: 'text-purple-600 bg-purple-100',
  },
  {
    id: '3',
    type: 'video',
    title: 'Watched Chemistry Tutorial',
    time: 'Yesterday',
    icon: Video,
    color: 'text-green-600 bg-green-100',
  },
  {
    id: '4',
    type: 'message',
    title: 'Messaged Dr. Johnson',
    time: 'Yesterday',
    icon: MessageSquare,
    color: 'text-yellow-600 bg-yellow-100',
  },
];

export default function RecentActivities() {
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}