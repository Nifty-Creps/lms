import React from 'react';
import { Users, BookOpen, Calendar, Star, TrendingUp } from 'lucide-react';
import type { DashboardStats } from '../types';

interface Props {
  stats: DashboardStats;
}

export default function DashboardStats({ stats }: Props) {
  const statItems = [
    {
      icon: Calendar,
      label: 'Total Sessions',
      value: stats.totalSessions,
      color: 'blue',
      trend: '+12%',
    },
    {
      icon: BookOpen,
      label: 'Upcoming Sessions',
      value: stats.upcomingSessions,
      color: 'green',
      trend: '+5%',
    },
    {
      icon: Users,
      label: 'Completed Sessions',
      value: stats.completedSessions,
      color: 'purple',
      trend: '+18%',
    },
    {
      icon: Star,
      label: 'Average Rating',
      value: stats.averageRating.toFixed(1),
      color: 'yellow',
      trend: '+2%',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="glass-card overflow-hidden rounded-xl bg-white p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                <Icon className={`h-6 w-6 text-${item.color}-600`} />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                {item.trend}
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                {item.label === 'Average Rating' && (
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(stats.averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">{item.label}</p>
            </div>

            <div className="mt-4">
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${item.color}-500 rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${Math.random() * 40 + 60}%`,
                    animation: 'progressAnimation 2s ease-out'
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}