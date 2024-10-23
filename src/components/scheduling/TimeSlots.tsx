import React from 'react';
import { Clock } from 'lucide-react';
import type { TimeSlot } from '../../types';

interface Props {
  timeSlots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export default function TimeSlots({ timeSlots, selectedSlot, onSelectSlot }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 stagger-animation">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => slot.available && onSelectSlot(slot)}
            disabled={!slot.available}
            className={`
              flex items-center p-4 rounded-xl border transition-all
              transform hover:scale-[1.02] active:scale-[0.98]
              ${slot.available 
                ? selectedSlot === slot
                  ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
                : 'border-gray-100 bg-gray-50/50 opacity-60 cursor-not-allowed'
              }
            `}
            style={{
              animationDelay: `${index * 0.1}s`,
              boxShadow: slot.available 
                ? selectedSlot === slot
                  ? '0 0 0 1px rgba(59, 130, 246, 0.5), 0 4px 12px rgba(59, 130, 246, 0.1)'
                  : '0 2px 4px rgba(0, 0, 0, 0.05)'
                : 'none'
            }}
          >
            <Clock className={`h-5 w-5 mr-3 transition-colors ${
              slot.available 
                ? selectedSlot === slot
                  ? 'text-blue-500'
                  : 'text-gray-400'
                : 'text-gray-300'
            }`} />
            <div className="text-left">
              <span className={`block font-medium transition-colors ${
                slot.available 
                  ? selectedSlot === slot
                    ? 'text-blue-700'
                    : 'text-gray-900'
                  : 'text-gray-400'
              }`}>
                {new Date(slot.startTime).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </span>
              <span className="text-sm text-gray-500">
                {slot.available ? '60 min session' : 'Unavailable'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}