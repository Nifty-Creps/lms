import React from 'react';
import { 
  BarChart2, Users, Calendar, BookOpen, 
  FileText, Settings, LogOut, MessageSquare,
  Video, Sparkles
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  { name: 'Dashboard', icon: BarChart2, id: 'dashboard' },
  { name: 'Sessions', icon: Calendar, id: 'sessions' },
  { name: 'Video Sessions', icon: Video, id: 'video' },
  { name: 'Resources', icon: BookOpen, id: 'resources' },
  { name: 'Messages', icon: MessageSquare, id: 'messages' },
  { name: 'Settings', icon: Settings, id: 'settings' },
];

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="relative">
          <Sparkles className="h-8 w-8 text-blue-400" />
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
        </div>
        <h1 className="text-xl font-bold text-white">TutorPro ERP</h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate(item.id)}
              className={`
                group w-full flex items-center px-2 py-2 text-sm font-medium rounded-lg
                transition-all duration-200 ease-in-out
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon className={`
                mr-3 h-5 w-5 transition-transform duration-200
                ${isActive ? 'transform scale-110' : 'group-hover:scale-110'}
              `} />
              {item.name}
              {isActive && (
                <div className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-gray-700 p-4">
        <button className="flex w-full items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}