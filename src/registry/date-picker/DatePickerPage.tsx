import { useState } from 'react';
import { DatePicker } from './DatePicker';
import '../../components/ComponentWorkspace.css';

export function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [emptyDate, setEmptyDate] = useState<Date | null>(null);

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Date Picker</h1>
        <p className="component-description">
          A popover date-selection calendar widget allowing navigation of months and picking unique day coordinates.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Interactive Date Pickers</h2>
        <p className="showcase-desc">Click triggers to open the day grid calendars. Handles initial default values and empty placeholder states.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ minHeight: '360px', gap: 'var(--space-6)', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>
            
            <DatePicker
              label="Select Release Date (Pre-filled)"
              value={selectedDate}
              onChange={setSelectedDate}
            />

            <DatePicker
              label="Schedule Deployment (Empty)"
              value={emptyDate}
              onChange={setEmptyDate}
            />

          </div>
        </div>
      </section>
    </div>
  );
}
