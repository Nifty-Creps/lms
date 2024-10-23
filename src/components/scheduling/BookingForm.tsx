import React, { useState } from 'react';
import { BookOpen, MessageSquare, Clock } from 'lucide-react';
import type { Session, TimeSlot, Subject } from '../../types';

interface Props {
  selectedDate: Date;
  selectedSlot: TimeSlot;
  subjects: Subject[];
  onBook: (session: Partial<Session>) => void;
  onCancel: () => void;
}

export default function BookingForm({ selectedDate, selectedSlot, subjects, onBook, onCancel }: Props) {
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      title: `${subject} Tutoring Session`,
      startTime: selectedSlot.startTime,
      endTime: selectedSlot.endTime,
      subject,
      status: 'scheduled',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 text-blue-700 font-medium mb-1">
          <Clock className="h-4 w-4" />
          Selected Time
        </div>
        <p className="text-blue-900">
          {selectedDate.toLocaleDateString(undefined, { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          <br />
          {new Date(selectedSlot.startTime).toLocaleTimeString([], { 
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      <div className="space-y-4">
        <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="subject" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <BookOpen className="h-4 w-4" />
            Select Subject
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="premium-input w-full px-4 py-2.5 rounded-lg bg-white focus:outline-none"
          >
            <option value="">Choose a subject...</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="notes" className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <MessageSquare className="h-4 w-4" />
            Session Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="premium-input w-full px-4 py-2.5 rounded-lg bg-white focus:outline-none"
            placeholder="What would you like to focus on in this session?"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="premium-button px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}