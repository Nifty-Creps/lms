import React from 'react';
import { MessageSquare, Search, Phone, Video } from 'lucide-react';

const conversations = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Great progress in today\'s session!',
    time: '2:30 PM',
    unread: 2,
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Let\'s schedule the next physics lab',
    time: '11:45 AM',
    unread: 0,
  },
];

export default function Messages() {
  return (
    <div className="h-full flex">
      <div className="w-80 border-r border-gray-200 bg-white">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{conversation.name}</h3>
                  <span className="text-sm text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <span className="h-5 w-5 flex items-center justify-center bg-blue-600 text-white text-xs font-medium rounded-full">
                  {conversation.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={conversations[0].avatar}
              alt={conversations[0].name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-medium text-gray-900">{conversations[0].name}</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Phone className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Video className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <img
                src={conversations[0].avatar}
                alt={conversations[0].name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="max-w-md bg-gray-100 rounded-2xl rounded-bl-none px-4 py-2">
                <p className="text-gray-900">Hi John! How are you preparing for the upcoming test?</p>
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="max-w-md bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2">
                <p>Hello Dr. Johnson! I've been reviewing the practice problems you shared.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}