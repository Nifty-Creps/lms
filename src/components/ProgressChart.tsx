import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function ProgressChart() {
  const subjects = [
    { 
      name: 'Mathematics', 
      progress: 85, 
      color: 'blue',
      trend: '+5%',
      isImproving: true,
      lastWeek: 80
    },
    { 
      name: 'Physics', 
      progress: 72, 
      color: 'purple',
      trend: '+3%',
      isImproving: true,
      lastWeek: 69
    },
    { 
      name: 'Chemistry', 
      progress: 64, 
      color: 'green',
      trend: '-2%',
      isImproving: false,
      lastWeek: 66
    },
    { 
      name: 'English', 
      progress: 90, 
      color: 'yellow',
      trend: '+7%',
      isImproving: true,
      lastWeek: 83
    },
  ];

  return (
    <div className="space-y-6">
      {subjects.map((subject, index) => (
        <div 
          key={subject.name} 
          className="space-y-2 animate-slideIn"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">{subject.name}</span>
              <div className={`
                flex items-center gap-1 text-sm
                ${subject.isImproving ? 'text-green-600' : 'text-red-500'}
              `}>
                {subject.isImproving ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {subject.trend}
              </div>
            </div>
            <span className="text-gray-600 font-medium">{subject.progress}%</span>
          </div>

          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-${subject.color}-500 transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${subject.progress}%`,
                  animation: 'progressAnimation 1.5s ease-out'
                }}
              />
            </div>
            
            {/* Previous week marker */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-gray-400"
              style={{ left: `${subject.lastWeek}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>Previous: {subject.lastWeek}%</span>
            <span>Target: 100%</span>
          </div>
        </div>
      ))}
    </div>
  );
}