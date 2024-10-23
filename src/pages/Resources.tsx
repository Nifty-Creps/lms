import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    id: '1',
    title: 'Calculus Fundamentals',
    type: 'document',
    subject: 'Mathematics',
    size: '2.4 MB',
    lastUpdated: '2024-03-10',
  },
  {
    id: '2',
    title: 'Physics Lab Experiments',
    type: 'video',
    subject: 'Physics',
    size: '156 MB',
    lastUpdated: '2024-03-12',
  },
  {
    id: '3',
    title: 'Literature Study Guide',
    type: 'document',
    subject: 'English',
    size: '1.8 MB',
    lastUpdated: '2024-03-14',
  },
];

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-purple-100 rounded-lg">
          <BookOpen className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
          <p className="text-gray-600">Access study materials and recorded sessions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                {resource.type === 'document' ? (
                  <FileText className="h-6 w-6 text-indigo-600" />
                ) : (
                  <Video className="h-6 w-6 text-purple-600" />
                )}
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">{resource.title}</h3>
            
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span className="px-2 py-1 bg-gray-100 rounded-md">{resource.subject}</span>
              <span>•</span>
              <span>{resource.size}</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Last updated: {new Date(resource.lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}