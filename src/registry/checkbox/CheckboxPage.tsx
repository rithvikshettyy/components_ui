import { useState } from 'react';
import { Checkbox, BounceCheckbox, RadioGroup, CardCheckbox } from './Checkbox';
import '../../components/ComponentWorkspace.css';

export function CheckboxPage() {
  const [basic, setBasic] = useState(false);
  const [basic2, setBasic2] = useState(true);
  const [basicIndet, setBasicIndet] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [radio, setRadio] = useState('one');
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(true);

  const radioOptions = [
    { value: 'one', label: 'Option One (Standard)' },
    { value: 'two', label: 'Option Two (Advanced)' },
    { value: 'three', label: 'Option Three (Enterprise)' },
  ];

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Checkbox & Radio</h1>
        <p className="component-description">
          Interactive selection components with custom icons, layout structures, selection bounce physics, and group wrappers.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Basic Checkbox</h2>
        <p className="showcase-desc">Standard checkbox design with an indeterminate/mixed state, hover scales, and active state compression.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-6)', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Checkbox checked={basic} onChange={setBasic} label="Accept Terms & Conditions" />
            <Checkbox checked={basic2} onChange={setBasic2} label="Stay Logged In" />
            <Checkbox checked={basicIndet} onChange={setBasicIndet} label="Mixed/Indeterminate" indeterminate={!basicIndet} />
            <Checkbox checked={false} onChange={() => {}} label="Disabled Checkbox" disabled />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Animated Bounce Checkbox</h2>
        <p className="showcase-desc">Smooth scale-bounce checkmark drawn via dynamic SVG path offset animation.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <BounceCheckbox checked={bounce} onChange={setBounce} label="Enable Smart Alerts" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Radio Group</h2>
        <p className="showcase-desc">Radio buttons with circular scale indicators wrapped in vertical or horizontal stack layouts.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-8)', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)', fontWeight: 600 }}>Vertical Group</h4>
              <RadioGroup name="vertical-radio" options={radioOptions} value={radio} onChange={setRadio} />
            </div>
            <div>
              <h4 style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)', fontWeight: 600 }}>Horizontal Group</h4>
              <RadioGroup name="horizontal-radio" options={radioOptions} value={radio} onChange={setRadio} direction="horizontal" />
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Card Checkbox</h2>
        <p className="showcase-desc">Selection layouts styled inside styled containers for high-impact option dashboards.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <CardCheckbox
              checked={card1}
              onChange={setCard1}
              title="Personal Plan"
              description="Free tier for individual designers & developers."
            />
            <CardCheckbox
              checked={card2}
              onChange={setCard2}
              title="Team Plan"
              description="$24/mo for teams of up to 10 active members."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
