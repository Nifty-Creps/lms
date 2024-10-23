import React, { useState } from 'react';
import Calendar from '../components/scheduling/Calendar';
import TimeSlots from '../components/scheduling/TimeSlots';
import BookingForm from '../components/scheduling/BookingForm';
import type { TimeSlot, Subject, Session } from '../types';
import { GraduationCap, Sparkles } from 'lucide-react';

const mockTimeSlots: TimeSlot[] = Array.from({ length: 8 }, (_, i) => ({
  startTime: new Date(new Date().setHours(9 + i, 0, 0)).toISOString(),
  endTime: new Date(new Date().setHours(10 + i, 0, 0)).toISOString(),
  available: Math.random() > 0.3,
}));

const mockSubjects: Subject[] = [
  { id: '1', name: 'Mathematics', description: 'All levels of mathematics', tutorIds: ['t1', 't2'] },
  { id: '2', name: 'Physics', description: 'High school and college physics', tutorIds: ['t1'] },
  { id: '3', name: 'Chemistry', description: 'General and organic chemistry', tutorIds: ['t2'] },
];

export default function SessionScheduling() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const handleBookSession = (session: Partial<Session>) => {
    console.log('Booking session:', session);
    setSelectedSlot(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Schedule Your Session
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          Choose your preferred date and time for your tutoring session
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 relative">
              1. Select a Date
            </h2>
            <Calendar
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 relative">
              2. Choose a Time
            </h2>
            <TimeSlots
              timeSlots={mockTimeSlots}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
            />
          </div>
        </div>
        
        {selectedSlot && (
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 relative">
                3. Complete Booking
              </h2>
              <BookingForm
                selectedDate={selectedDate}
                selectedSlot={selectedSlot}
                subjects={mockSubjects}
                onBook={handleBookSession}
                onCancel={() => setSelectedSlot(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}