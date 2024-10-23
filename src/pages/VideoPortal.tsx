import React from 'react';
import { Video, Users, MessageSquare } from 'lucide-react';

const mockSession = {
  title: 'Advanced Mathematics - Calculus',
  tutor: 'Dr. Sarah Johnson',
  participants: ['John Doe', 'Alice Smith', 'Bob Wilson'],
};

export default function VideoPortal() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-900 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Video className="h-6 w-6 text-white" />
          <h1 className="text-xl font-semibold text-white">{mockSession.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Share Screen
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            End Call
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-4 p-4 bg-gray-900">
        <div className="col-span-3">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <Video className="h-16 w-16 text-gray-600" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Participants
            </h3>
            <ul className="space-y-2">
              {mockSession.participants.map((participant) => (
                <li key={participant} className="text-gray-300 flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  {participant}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex-1">
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Chat
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col h-48 justify-end">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <span className="text-blue-400 font-medium">Dr. Sarah:</span> Any questions about the derivatives?
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 border-0 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}