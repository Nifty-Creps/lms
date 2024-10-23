import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function Calendar({ selectedDate, onDateChange }: Props) {
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

  const previousMonth = () => {
    onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  return (
    <div className="select-none">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">
          {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 mb-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: weeks * 7 }, (_, i) => {
          const dayNumber = i - firstDayOfMonth + 1;
          const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
          const isToday = isCurrentMonth && 
            dayNumber === new Date().getDate() && 
            selectedDate.getMonth() === new Date().getMonth() &&
            selectedDate.getFullYear() === new Date().getFullYear();
          const isSelected = isCurrentMonth &&
            dayNumber === selectedDate.getDate();

          return (
            <button
              key={i}
              onClick={() => isCurrentMonth && onDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), dayNumber))}
              disabled={!isCurrentMonth}
              className={`
                h-10 rounded-lg text-sm font-medium transition-all
                ${isCurrentMonth 
                  ? 'hover:bg-blue-50 hover:text-blue-600' 
                  : 'text-gray-300 cursor-not-allowed'
                }
                ${isToday 
                  ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white' 
                  : ''
                }
                ${isSelected && !isToday
                  ? 'bg-blue-50 text-blue-600 border-2 border-blue-500'
                  : ''
                }
              `}
            >
              {isCurrentMonth ? dayNumber : ''}
            </button>
          );
        })}
      </div>
    </div>
  );
}