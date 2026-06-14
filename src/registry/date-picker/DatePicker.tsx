import { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import './DatePicker.css';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  label?: string;
}

export function DatePicker({ value, onChange, label }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return 'Select date…';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return { firstDay, totalDays };
  };

  const { firstDay, totalDays } = getDaysInMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDay = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange(selected);
    setIsOpen(false);
  };

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const blanksArray = Array.from({ length: firstDay }, (_, i) => i);

  const monthYearLabel = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    return (
      value.getDate() === day &&
      value.getMonth() === currentMonth.getMonth() &&
      value.getFullYear() === currentMonth.getFullYear()
    );
  };

  return (
    <div className="rs-date-wrapper" ref={containerRef}>
      {label && <label className="rs-date-label">{label}</label>}
      <button
        type="button"
        className={`rs-date-trigger ${isOpen ? 'rs-date-trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <CalendarIcon size={14} className="rs-date-trigger-icon" />
        <span className={value ? 'rs-date-trigger-val' : 'rs-date-trigger-placeholder'}>
          {formatDate(value)}
        </span>
      </button>

      {isOpen && (
        <div className="rs-date-picker-panel" role="dialog" aria-label="Calendar date selector">
          {/* Header */}
          <div className="rs-date-picker-header">
            <button type="button" className="rs-date-picker-nav-btn" onClick={prevMonth} aria-label="Previous month">
              <ChevronLeft size={16} />
            </button>
            <span className="rs-date-picker-month-year">{monthYearLabel}</span>
            <button type="button" className="rs-date-picker-nav-btn" onClick={nextMonth} aria-label="Next month">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="rs-date-picker-weekdays">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <span key={d} className="rs-date-picker-weekday">{d}</span>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="rs-date-picker-grid">
            {blanksArray.map(b => (
              <span key={`blank-${b}`} className="rs-date-picker-blank" />
            ))}
            {daysArray.map(day => (
              <button
                key={day}
                type="button"
                className={`rs-date-picker-day 
                  ${isToday(day) ? 'rs-date-picker-day--today' : ''} 
                  ${isSelected(day) ? 'rs-date-picker-day--selected' : ''}`}
                onClick={() => selectDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
