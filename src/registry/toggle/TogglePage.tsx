import { useState } from 'react';
import { BasicToggle, IOSToggle, DayNightToggle, LiquidToggle, LabeledToggle } from './Toggle';
import '../../components/ComponentWorkspace.css';

export function TogglePage() {
  const [basic, setBasic] = useState(false);
  const [ios, setIos] = useState(true);
  const [daynight, setDaynight] = useState(false);
  const [liquid, setLiquid] = useState(false);
  const [labeled, setLabeled] = useState(true);
  const [sm, setSm] = useState(false);
  const [lg, setLg] = useState(true);

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Toggle</h1>
        <p className="component-description">
          Creative toggle switches ranging from basic to fully animated — including iOS-style, day/night transitions, liquid fill, and labeled on/off states.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Basic Toggle</h2>
        <p className="showcase-desc">Clean toggle switch in three sizes with label support.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-8)', flexWrap: 'wrap' }}>
            <BasicToggle checked={sm} onChange={setSm} label="Small" size="sm" />
            <BasicToggle checked={basic} onChange={setBasic} label="Medium" size="md" />
            <BasicToggle checked={lg} onChange={setLg} label="Large" size="lg" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">iOS Style</h2>
        <p className="showcase-desc">Rounded toggle mimicking native iOS switch behavior with green active state.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <IOSToggle checked={ios} onChange={setIos} label="Notifications" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Day / Night Toggle</h2>
        <p className="showcase-desc">Animated toggle that transitions between a sunny day and starry night sky.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <DayNightToggle checked={daynight} onChange={setDaynight} />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Liquid Fill</h2>
        <p className="showcase-desc">A fill animation sweeps behind the thumb as the toggle activates.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <LiquidToggle checked={liquid} onChange={setLiquid} label="Feature Flag" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Labeled ON / OFF</h2>
        <p className="showcase-desc">Toggle with built-in ON/OFF text labels that crossfade during transition.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <LabeledToggle checked={labeled} onChange={setLabeled} />
          </div>
        </div>
      </section>
    </div>
  );
}
