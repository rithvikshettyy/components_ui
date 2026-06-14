import React from 'react';
// Import Button variants
import {
  ShimmerButton,
  MagneticButton,
  RippleButton,
  GradientBorderButton,
  NeonPulseButton,
  ArrowSlideButton,
  LoadingButton,
  SparkleButton,
  ElectricButton,
  CyberpunkButton
} from './animated-buttons/AnimatedButtons';

// Import Input variants
import {
  Input,
  FloatingInput,
  UnderlineInput,
  SearchInput,
  PasswordInput,
  Textarea
} from './input/Input';

// Import Toggle variants
import {
  BasicToggle,
  IOSToggle,
  DayNightToggle,
  LiquidToggle,
  LabeledToggle
} from './toggle/Toggle';

// Import Checkbox variants
import {
  Checkbox,
  BounceCheckbox,
  RadioGroup,
  CardCheckbox
} from './checkbox/Checkbox';

// Import Card variants
import {
  Card,
  GlowCard,
  TiltCard,
  PricingCard,
  ProfileCard,
  GlassCard
} from './card/Card';

// Import Tooltip variants
import { Tooltip } from './tooltip/Tooltip';

// Import Popover variants
import { Popover } from './popover/Popover';

// Import Drawer variants
import { Drawer } from './drawer/Drawer';

// Import Dropbox variants
import {
  Dropbox,
  SearchableDropbox,
  MultiDropbox
} from './dropbox/Dropbox';

// Import CommandPalette variants
import { CommandPalette } from './command-palette/CommandPalette';

// Import DatePicker variants
import { DatePicker } from './date-picker/DatePicker';

// Import FileUpload variants
import { FileUpload } from './file-upload/FileUpload';

// Import new flat categories: Loaders and Forms
import { SpiralLoader, PulseDots, AtomLoader } from './loaders/Loaders';
import { SleekLoginForm, BetaSignUpFormPreview } from './forms/Forms';

export interface ComponentVariant {
  id: string;
  name: string;
  category: string;
  creator: string;
  views: string;
  likes: number;
  render: () => React.ReactNode;
  htmlCode: string;
  cssCode: string;
}

// Helper wrapper for local stateful showcases
function StatefulToggleWrapper({ render }: { render: (checked: boolean, setChecked: (c: boolean) => void) => React.ReactNode }) {
  const [checked, setChecked] = React.useState(false);
  return <>{render(checked, setChecked)}</>;
}

function StatefulInputWrapper({ render }: { render: (val: string, setVal: (v: string) => void) => React.ReactNode }) {
  const [val, setVal] = React.useState('');
  return <>{render(val, setVal)}</>;
}

function StatefulSelectWrapper({ render }: { render: (val: string, setVal: (v: string) => void) => React.ReactNode }) {
  const [val, setVal] = React.useState('dark');
  return <>{render(val, setVal)}</>;
}

function StatefulMultiSelectWrapper({ render }: { render: (val: string[], setVal: (v: string[]) => void) => React.ReactNode }) {
  const [val, setVal] = React.useState(['react', 'typescript']);
  return <>{render(val, setVal)}</>;
}

function StatefulDrawerWrapper({ render }: { render: (isOpen: boolean, setIsOpen: (o: boolean) => void) => React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>{render(isOpen, setIsOpen)}</>;
}

function StatefulDateWrapper({ render }: { render: (val: Date | null, setVal: (d: Date | null) => void) => React.ReactNode }) {
  const [date, setDate] = React.useState<Date | null>(new Date());
  return <>{render(date, setDate)}</>;
}

export const componentRegistry: ComponentVariant[] = [
  /* ────────────────────────────────────────────────────────
     BUTTONS
     ──────────────────────────────────────────────────────── */
  {
    id: 'shimmer-button',
    name: 'Shimmer Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '24k',
    likes: 412,
    render: () => <ShimmerButton>Shimmer Button</ShimmerButton>,
    htmlCode: `<button className="rs-shimmer-btn">
  <span className="rs-shimmer-btn__text">Shimmer Button</span>
  <span className="rs-shimmer-btn__effect" />
</button>`,
    cssCode: `.rs-shimmer-btn {
  position: relative;
  background: linear-gradient(110deg, var(--color-accent) 45%, oklch(90% 0.08 70) 55%, var(--color-accent) 65%);
  background-size: 200% 100%;
  color: oklch(98% 0 0);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-display);
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  animation: rs-shimmer-slide 2.5s linear infinite;
  transition: transform var(--duration-fast);
}
.rs-shimmer-btn:active {
  transform: scale(0.96);
}
@keyframes rs-shimmer-slide {
  to { background-position: -200% 0; }
}`
  },
  {
    id: 'magnetic-button',
    name: 'Magnetic Float Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '27k',
    likes: 372,
    render: () => <MagneticButton>Hover me</MagneticButton>,
    htmlCode: `/* Requires mouse-move listeners to translate positions */
<button className="rs-magnetic-btn">Hover me</button>`,
    cssCode: `.rs-magnetic-btn {
  background: var(--color-surface);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-display);
  color: var(--color-text);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}`
  },
  {
    id: 'ripple-button',
    name: 'Water Ripple Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '26k',
    likes: 477,
    render: () => <RippleButton>Click to Ripple</RippleButton>,
    htmlCode: `<button className="rs-ripple-btn">Click to Ripple</button>`,
    cssCode: `.rs-ripple-btn {
  position: relative;
  overflow: hidden;
  background: var(--color-text);
  color: var(--color-background);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  cursor: pointer;
}`
  },
  {
    id: 'neon-pulse-button',
    name: 'Neon Pulse Glow Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '46k',
    likes: 461,
    render: () => <NeonPulseButton>Neon Pulse</NeonPulseButton>,
    htmlCode: `<button className="rs-neon-btn">Neon Pulse</button>`,
    cssCode: `.rs-neon-btn {
  background: var(--color-bg);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-6);
  box-shadow: 0 0 10px var(--color-accent-subtle);
}`
  },
  {
    id: 'gradient-border-button',
    name: 'Gradient Border Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '26k',
    likes: 457,
    render: () => <GradientBorderButton>Gradient Glow</GradientBorderButton>,
    htmlCode: `<button className="rs-grad-border-btn">
  <span className="rs-grad-border-btn__content">Gradient Glow</span>
</button>`,
    cssCode: `.rs-grad-border-btn {
  background: linear-gradient(90deg, #6366f1, #a855f7);
  padding: 1px;
  border-radius: var(--radius-md);
}`
  },
  {
    id: 'arrow-slide-button',
    name: 'Slide Arrow Hover Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '15k',
    likes: 198,
    render: () => <ArrowSlideButton>Continue</ArrowSlideButton>,
    htmlCode: `<button className="rs-arrow-btn">Continue</button>`,
    cssCode: `.rs-arrow-btn {
  position: relative;
  padding: var(--space-3) var(--space-6);
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
}`
  },
  {
    id: 'loading-button',
    name: 'Loading Spinner Button',
    category: 'loaders',
    creator: 'rithvikshetty',
    views: '12k',
    likes: 154,
    render: () => <LoadingButton loading>Processing</LoadingButton>,
    htmlCode: `<button className="rs-loading-btn" disabled>
  <span className="spinner-loader" />
  Loading
</button>`,
    cssCode: `.spinner-loader {
  border: 2px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spinner-rot 0.8s linear infinite;
}`
  },
  {
    id: 'sparkle-button',
    name: 'Sparkle Particle Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '32k',
    likes: 540,
    render: () => <SparkleButton>Start Trial</SparkleButton>,
    htmlCode: `<button className="rs-sparkle-btn">Start Trial</button>`,
    cssCode: `.rs-sparkle-btn {
  background: var(--color-surface);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
}`
  },
  {
    id: 'electric-button',
    name: 'Electric Border Glow Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '40k',
    likes: 710,
    render: () => <ElectricButton>Unlock Pro</ElectricButton>,
    htmlCode: `<button className="rs-electric-btn">Unlock Pro</button>`,
    cssCode: `.rs-electric-btn {
  background: linear-gradient(135deg, var(--color-accent) 0%, oklch(50% 0.15 280) 100%);
  color: white;
}`
  },
  {
    id: 'cyberpunk-button',
    name: 'Cyberpunk Glitch Button',
    category: 'buttons',
    creator: 'rithvikshetty',
    views: '88k',
    likes: 1240,
    render: () => <CyberpunkButton>Cyber Button</CyberpunkButton>,
    htmlCode: `<button className="rs-cyber-btn" data-glitch="Cyber Button">Cyber Button</button>`,
    cssCode: `.rs-cyber-btn {
  --primary: oklch(65% 0.22 330);
  --secondary: oklch(75% 0.18 190);
  --yellow: oklch(85% 0.18 90);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--secondary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  outline: none;
  box-shadow: 4px 4px 0px var(--primary);
  transition: transform 0.1s var(--ease-out-quart), box-shadow 0.1s var(--ease-out-quart);
}
.rs-cyber-btn::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--yellow);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.2s var(--ease-out-quart);
}
.rs-cyber-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--primary);
  border-color: var(--primary);
  color: oklch(10% 0 0);
}
.rs-cyber-btn:hover::after {
  opacity: 1;
}
.rs-cyber-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px var(--primary);
}
.rs-cyber-btn:hover::before {
  content: attr(data-glitch);
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
  color: oklch(10% 0 0);
  z-index: 2;
  text-shadow: -2px 0 var(--secondary), 2px 0 var(--primary);
  animation: rs-cyber-glitch 1s linear infinite;
}
@keyframes rs-cyber-glitch {
  0% { clip-path: inset(40% 0 61% 0); }
  20% { clip-path: inset(92% 0 1% 0); }
  40% { clip-path: inset(15% 0 80% 0); }
  65% { clip-path: inset(80% 0 5% 0); }
  80% { clip-path: inset(3% 0 92% 0); }
  100% { clip-path: inset(40% 0 61% 0); }
}`
  },

  /* ────────────────────────────────────────────────────────
     INPUTS
     ──────────────────────────────────────────────────────── */
  {
    id: 'basic-input',
    name: 'Standard Bordered Input',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '9k',
    likes: 120,
    render: () => <Input label="Email address" placeholder="you@company.com" hint="We will never share your email address." />,
    htmlCode: `<div className="rs-input-group">
  <label>Email address</label>
  <input type="email" placeholder="you@company.com" />
  <span>Hint label details</span>
</div>`,
    cssCode: `.rs-input-group input {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-2.5) var(--space-4);
}`
  },
  {
    id: 'floating-input',
    name: 'Floating Label Text Box',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '12k',
    likes: 289,
    render: () => <FloatingInput label="Workspace Name" />,
    htmlCode: `<div className="rs-input-floating">
  <input type="text" placeholder=" " required />
  <label>Workspace Name</label>
</div>`,
    cssCode: `.rs-input-floating input {
  padding: var(--space-4) var(--space-3) var(--space-2);
  border: 1px solid var(--color-border-strong);
  background: transparent;
}`
  },
  {
    id: 'underline-input',
    name: 'Underline Highlight Input',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '18k',
    likes: 310,
    render: () => <UnderlineInput label="First Name" placeholder="John" />,
    htmlCode: `<div className="rs-input-underline">
  <input type="text" placeholder="John" />
  <span className="rs-input-underline-bar" />
</div>`,
    cssCode: `.rs-input-underline-bar {
  position: absolute;
  bottom: 0; left: 50%;
  width: 0; height: 2px;
  background: var(--color-accent);
}`
  },
  {
    id: 'search-input',
    name: 'Search Bar Clear Input',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '21k',
    likes: 412,
    render: () => (
      <StatefulInputWrapper
        render={(val, setVal) => (
          <SearchInput
            placeholder="Search anything…"
            value={val}
            onChange={e => setVal(e.target.value)}
            onClear={() => setVal('')}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-search-input-container">
  <input type="text" placeholder="Search..." />
</div>`,
    cssCode: `.rs-search-input-container {
  border-radius: var(--radius-full);
  background: var(--color-surface);
}`
  },
  {
    id: 'password-input',
    name: 'Toggle Eye Password Input',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '15k',
    likes: 298,
    render: () => <PasswordInput label="Enter Password" placeholder="••••••••" />,
    htmlCode: `<div className="rs-password-input-group">
  <input type="password" />
  <button type="button">EyeIcon</button>
</div>`,
    cssCode: `.rs-password-input-group {
  display: flex;
  position: relative;
}`
  },
  {
    id: 'textarea-input',
    name: 'Character Counter Textarea',
    category: 'inputs',
    creator: 'rithvikshetty',
    views: '11k',
    likes: 199,
    render: () => (
      <StatefulInputWrapper
        render={(val, setVal) => (
          <Textarea
            label="User Bio"
            placeholder="Tell us about yourself…"
            maxChars={100}
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-textarea-group">
  <textarea maxLength={100} />
  <span>Count / Limit</span>
</div>`,
    cssCode: `.rs-textarea-group textarea {
  width: 100%; min-height: 80px;
}`
  },

  /* ────────────────────────────────────────────────────────
     TOGGLES
     ──────────────────────────────────────────────────────── */
  {
    id: 'basic-toggle',
    name: 'Standard Rounded Switch',
    category: 'toggles',
    creator: 'rithvikshetty',
    views: '14k',
    likes: 180,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <BasicToggle checked={checked} onChange={setChecked} label="Allow API notifications" />
        )}
      />
    ),
    htmlCode: `<button className="rs-toggle">
  <span className="rs-toggle__thumb" />
</button>`,
    cssCode: `.rs-toggle {
  width: 40px; height: 20px;
  background: var(--color-border);
}`
  },
  {
    id: 'ios-toggle',
    name: 'iOS Style Switch',
    category: 'toggles',
    creator: 'rithvikshetty',
    views: '30k',
    likes: 620,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <IOSToggle checked={checked} onChange={setChecked} />
        )}
      />
    ),
    htmlCode: `<button className="rs-ios-toggle">
  <span className="rs-ios-toggle__thumb" />
</button>`,
    cssCode: `.rs-ios-toggle {
  width: 44px; height: 24px;
  background: var(--color-border-strong);
}`
  },
  {
    id: 'day-night-toggle',
    name: 'Day / Night Twinkle Switch',
    category: 'toggles',
    creator: 'rithvikshetty',
    views: '45k',
    likes: 830,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <DayNightToggle checked={checked} onChange={setChecked} />
        )}
      />
    ),
    htmlCode: `<button className="rs-daynight-toggle">
  <span className="rs-daynight-star" />
</button>`,
    cssCode: `.rs-daynight-toggle {
  width: 58px; height: 28px;
  background: linear-gradient(to bottom, #93c5fd, #60a5fa);
}`
  },
  {
    id: 'liquid-toggle',
    name: 'Liquid Wave Switch',
    category: 'toggles',
    creator: 'rithvikshetty',
    views: '25k',
    likes: 490,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <LiquidToggle checked={checked} onChange={setChecked} label="Liquid fill" />
        )}
      />
    ),
    htmlCode: `<button className="rs-liquid-toggle">
  <span className="rs-liquid-toggle__fill" />
</button>`,
    cssCode: `.rs-liquid-toggle__fill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 0;
}`
  },
  {
    id: 'labeled-toggle',
    name: 'ON/OFF Labeled Switch',
    category: 'toggles',
    creator: 'rithvikshetty',
    views: '19k',
    likes: 310,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <LabeledToggle checked={checked} onChange={setChecked} />
        )}
      />
    ),
    htmlCode: `<button className="rs-labeled-toggle">
  <span>ON</span><span>OFF</span>
</button>`,
    cssCode: `.rs-labeled-toggle {
  position: relative;
}`
  },

  /* ────────────────────────────────────────────────────────
     CHECKBOXES
     ──────────────────────────────────────────────────────── */
  {
    id: 'basic-checkbox',
    name: 'Standard Border Checkbox',
    category: 'checkboxes',
    creator: 'rithvikshetty',
    views: '10k',
    likes: 124,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <Checkbox checked={checked} onChange={setChecked} label="Accept terms and conditions" />
        )}
      />
    ),
    htmlCode: `<button className="rs-checkbox">Checkmark</button>`,
    cssCode: `.rs-checkbox {
  width: 20px; height: 20px;
  border: 2px solid var(--color-border-strong);
}`
  },
  {
    id: 'bounce-checkbox',
    name: 'Bounce Path Checkbox',
    category: 'checkboxes',
    creator: 'rithvikshetty',
    views: '15k',
    likes: 290,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <BounceCheckbox checked={checked} onChange={setChecked} label="Toggle check" />
        )}
      />
    ),
    htmlCode: `<button className="rs-bounce-checkbox">
  <path d="M4 12l5 5L20 7" strokeWidth="3" />
</button>`,
    cssCode: `.rs-bounce-checkbox--checked {
  background: var(--color-accent);
  animation: bounce 0.3s ease-out;
}`
  },
  {
    id: 'radio-group',
    name: 'Dynamic Radio Group',
    category: 'radio-buttons',
    creator: 'rithvikshetty',
    views: '14k',
    likes: 232,
    render: () => (
      <StatefulInputWrapper
        render={(val, setVal) => (
          <RadioGroup
            name="radio-demo"
            options={[
              { value: 'lite', label: 'Lite tier' },
              { value: 'pro', label: 'Pro tier' },
            ]}
            value={val || 'lite'}
            onChange={setVal}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-radio-group">
  <button type="button">RadioDot</button>
</div>`,
    cssCode: `.rs-radio__dot {
  transform: scale(0);
}`
  },
  {
    id: 'card-checkbox',
    name: 'Selectable Grid Card Checkbox',
    category: 'checkboxes',
    creator: 'rithvikshetty',
    views: '22k',
    likes: 380,
    render: () => (
      <StatefulToggleWrapper
        render={(checked, setChecked) => (
          <CardCheckbox
            checked={checked}
            onChange={setChecked}
            title="Premium tier"
            description="Access to all edge sandbox features."
          />
        )}
      />
    ),
    htmlCode: `<button className="rs-card-checkbox">
  <h3>Premium tier</h3>
</button>`,
    cssCode: `.rs-card-checkbox--checked {
  border-color: var(--color-accent);
}`
  },

  /* ────────────────────────────────────────────────────────
     CARDS
     ──────────────────────────────────────────────────────── */
  {
    id: 'basic-card',
    name: 'Standard Outline Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '12k',
    likes: 180,
    render: () => (
      <Card title="Workspace Staging" subtitle="Inactive container">
        <p>This layout encapsulates deployment details.</p>
      </Card>
    ),
    htmlCode: `<div className="rs-card">
  <h3>Workspace Staging</h3>
</div>`,
    cssCode: `.rs-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}`
  },
  {
    id: 'glow-card',
    name: 'Radial Glow Border Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '29k',
    likes: 580,
    render: () => (
      <GlowCard title="Interactive Sandbox">
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
          Hover details to see mouse tracking highlight vectors.
        </p>
      </GlowCard>
    ),
    htmlCode: `<div className="rs-glow-card">
  <div className="rs-glow-card-border" />
</div>`,
    cssCode: `.rs-glow-card-border {
  background: radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), var(--color-accent) 0%, transparent 60%);
}`
  },
  {
    id: 'tilt-card',
    name: '3D Spatial Tilt Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '34k',
    likes: 670,
    render: () => (
      <TiltCard title="Perspective 3D">
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
          Hover and slide pointer to rotate spatial coordinates.
        </p>
      </TiltCard>
    ),
    htmlCode: `<div className="rs-tilt-card">
  <div className="rs-tilt-card-content"><h3>Perspective 3D</h3></div>
</div>`,
    cssCode: `.rs-tilt-card { transform-style: preserve-3d; }`
  },
  {
    id: 'pricing-card',
    name: 'Popular SaaS Pricing Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '23k',
    likes: 420,
    render: () => (
      <PricingCard
        tier="Enterprise"
        price="299"
        billing="month"
        features={['Custom VPC setups', 'Dedicated node clusters', '24/7 Slack hotlines']}
        popular
      />
    ),
    htmlCode: `<div className="rs-pricing-card rs-pricing-card--popular">
  <span>Most Popular</span>
</div>`,
    cssCode: `.rs-pricing-card--popular { border-color: var(--color-accent); }`
  },
  {
    id: 'profile-card',
    name: 'Avatar Social Profile Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '18k',
    likes: 360,
    render: () => (
      <ProfileCard
        avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><circle cx='40' cy='40' r='40' fill='%236366f1'/></svg>"
        name="Rithvik Shetty"
        role="Lead Architect"
        bio="Designing modular components for rithvikshetty.in."
        stats={[{ label: 'Likes', value: '4.8k' }, { label: 'Repos', value: '18' }, { label: 'Stars', value: '1.2K' }]}
      />
    ),
    htmlCode: `<div className="rs-profile-card">
  <img className="rs-profile-card-avatar" />
</div>`,
    cssCode: `.rs-profile-card-avatar {
  border: 4px solid var(--color-background);
}`
  },
  {
    id: 'glass-card',
    name: 'Glassmorphic Aura Card',
    category: 'cards',
    creator: 'rithvikshetty',
    views: '45k',
    likes: 890,
    render: () => (
      <GlassCard title="Atmospheric Glass">
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
          Backdrop saturating gradients with a rotating conic-gradient border.
        </p>
      </GlassCard>
    ),
    htmlCode: `<div className="rs-glass-card">
  <div className="rs-glass-card-border" />
  <div className="rs-glass-card-content">
    <h3>Atmospheric Glass</h3>
  </div>
</div>`,
    cssCode: `.rs-glass-card {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
}
.rs-glass-card-border {
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, #3b82f6, #ec4899, #06b6d4, #eab308, #3b82f6);
  animation: rs-glass-spin 4s linear infinite;
}
.rs-glass-card-content {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(16px) saturate(180%);
}
@keyframes rs-glass-spin {
  to { transform: rotate(360deg); }
}`
  },

  /* ────────────────────────────────────────────────────────
     OVERLAYS
     ──────────────────────────────────────────────────────── */
  {
    id: 'tooltip-demo',
    name: 'Directional Hover Tooltip',
    category: 'tooltips',
    creator: 'rithvikshetty',
    views: '11k',
    likes: 210,
    render: () => (
      <Tooltip content="Helper popover details" position="top">
        <button className="rs-btn rs-btn--secondary">Hover me</button>
      </Tooltip>
    ),
    htmlCode: `<div className="rs-tooltip-wrapper">
  <button>Hover me</button>
  <div className="rs-tooltip rs-tooltip--top">Helper popover details</div>
</div>`,
    cssCode: `.rs-tooltip { position: absolute; }`
  },
  {
    id: 'popover-demo',
    name: 'Form Settings Popover',
    category: 'popovers',
    creator: 'rithvikshetty',
    views: '14k',
    likes: 270,
    render: () => (
      <Popover trigger={<button className="rs-btn rs-btn--secondary">Grid Config</button>}>
        <div style={{ textAlign: 'left', minWidth: '160px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '12px' }}>Columns</h4>
          <input type="number" defaultValue="12" style={{ width: '100%', padding: '4px' }} />
        </div>
      </Popover>
    ),
    htmlCode: `<div className="rs-popover">
  <div className="rs-popover-content">Popover content</div>
</div>`,
    cssCode: `.rs-popover { position: absolute; }`
  },
  {
    id: 'drawer-demo',
    name: 'Bottom Sheet Sheet Panel',
    category: 'drawers',
    creator: 'rithvikshetty',
    views: '22k',
    likes: 430,
    render: () => (
      <StatefulDrawerWrapper
        render={(isOpen, setIsOpen) => (
          <>
            <button className="rs-btn rs-btn--secondary" onClick={() => setIsOpen(true)}>Open Sheet</button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="bottom" title="Action Menu">
              <p style={{ margin: 0 }}>Verify bottom sheet details and operations.</p>
            </Drawer>
          </>
        )}
      />
    ),
    htmlCode: `<div className="rs-drawer rs-drawer--bottom">
  <div className="rs-drawer-header"><h3>Title</h3></div>
</div>`,
    cssCode: `.rs-drawer--bottom { bottom: 0; left: 0; right: 0; }`
  },

  /* ────────────────────────────────────────────────────────
     DROPBOX & COMPLEX
     ──────────────────────────────────────────────────────── */
  {
    id: 'dropbox-demo',
    name: 'Standard Dropbox Select',
    category: 'dropbox',
    creator: 'rithvikshetty',
    views: '18k',
    likes: 245,
    render: () => (
      <StatefulSelectWrapper
        render={(val, setVal) => (
          <Dropbox
            options={[
              { value: 'light', label: 'Light Theme' },
              { value: 'dark', label: 'Dark Theme' },
            ]}
            value={val}
            onChange={setVal}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-dropbox-trigger">
  <span>Select value</span>
</div>`,
    cssCode: `.rs-dropbox-menu { position: absolute; }`
  },
  {
    id: 'searchable-dropbox',
    name: 'Search Filter Dropbox',
    category: 'dropbox',
    creator: 'rithvikshetty',
    views: '22k',
    likes: 310,
    render: () => (
      <StatefulSelectWrapper
        render={(val, setVal) => (
          <SearchableDropbox
            options={[
              { value: 'react', label: 'React.js' },
              { value: 'vue', label: 'Vue.js' },
            ]}
            value={val}
            onChange={setVal}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-dropbox-search-container">
  <input type="text" placeholder="Search..." />
</div>`,
    cssCode: `.rs-dropbox-search-input { width: 100%; }`
  },
  {
    id: 'multi-dropbox',
    name: 'Multi-Select Chip Dropbox',
    category: 'dropbox',
    creator: 'rithvikshetty',
    views: '28k',
    likes: 490,
    render: () => (
      <StatefulMultiSelectWrapper
        render={(val, setVal) => (
          <MultiDropbox
            options={[
              { value: 'react', label: 'React' },
              { value: 'typescript', label: 'TypeScript' },
              { value: 'css', label: 'CSS' },
            ]}
            value={val}
            onChange={setVal}
          />
        )}
      />
    ),
    htmlCode: `<div className="rs-dropbox-trigger rs-dropbox-trigger--multi">
  <div className="rs-dropbox-multi-values">
    <span className="rs-dropbox-chip">React</span>
  </div>
</div>`,
    cssCode: `.rs-dropbox-chip { display: inline-flex; }`
  },
  {
    id: 'command-palette-demo',
    name: '⌘K Fuzzy Search Palette',
    category: 'command-palette',
    creator: 'rithvikshetty',
    views: '35k',
    likes: 620,
    render: () => (
      <StatefulDrawerWrapper
        render={(isOpen, setIsOpen) => (
          <>
            <button className="rs-btn rs-btn--secondary" onClick={() => setIsOpen(true)}>Open Palette</button>
            <CommandPalette
              open={isOpen}
              onClose={() => setIsOpen(false)}
              items={[
                { id: '1', title: 'Open Settings', category: 'Commands', action: () => alert('Settings opened') },
                { id: '2', title: 'Dashboard', category: 'Navigation', action: () => alert('Dashboard route') },
              ]}
            />
          </>
        )}
      />
    ),
    htmlCode: `<CommandPalette open={open} onClose={close} items={items} />`,
    cssCode: `.rs-cmd-overlay { position: fixed; inset: 0; }`
  },
  {
    id: 'date-picker-demo',
    name: 'Interactive Calendar Picker',
    category: 'date-picker',
    creator: 'rithvikshetty',
    views: '19k',
    likes: 380,
    render: () => (
      <StatefulDateWrapper
        render={(val, setVal) => (
          <DatePicker value={val} onChange={setVal} />
        )}
      />
    ),
    htmlCode: `<DatePicker value={selectedDate} onChange={setSelectedDate} />`,
    cssCode: `.rs-date-picker-panel { position: absolute; }`
  },
  {
    id: 'file-upload-demo',
    name: 'Drag & Drop Zone Upload',
    category: 'file-upload',
    creator: 'rithvikshetty',
    views: '25k',
    likes: 512,
    render: () => <FileUpload maxSizeMB={2} />,
    htmlCode: `<div className="rs-upload-zone">
  <input type="file" />
</div>`,
    cssCode: `.rs-upload-zone { border: 2px dashed var(--color-border); }`
  },
  {
    id: 'spiral-loader',
    name: 'Concentric Spiral Ring Loader',
    category: 'loaders',
    creator: 'rithvikshetty',
    views: '16k',
    likes: 245,
    render: () => <SpiralLoader />,
    htmlCode: `<div className="rs-spiral-loader">
  <div className="rs-spiral-outer" />
  <div className="rs-spiral-inner" />
</div>`,
    cssCode: `.rs-spiral-loader {
  position: relative;
  width: 48px; height: 48px;
}
.rs-spiral-outer {
  position: absolute; width: 100%; height: 100%;
  border: 3px solid transparent;
  border-top-color: var(--color-accent);
  border-bottom-color: var(--color-accent);
  border-radius: 50%;
  animation: rs-spin-clockwise 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.rs-spiral-inner {
  position: absolute; width: 70%; height: 70%;
  border: 3px solid transparent;
  border-left-color: var(--color-text-secondary);
  border-right-color: var(--color-text-secondary);
  border-radius: 50%;
  animation: rs-spin-counterclockwise 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
@keyframes rs-spin-clockwise {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes rs-spin-counterclockwise {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}`
  },
  {
    id: 'pulse-dots-loader',
    name: 'Pulsing Bouncing Dots Loader',
    category: 'loaders',
    creator: 'rithvikshetty',
    views: '12k',
    likes: 198,
    render: () => <PulseDots />,
    htmlCode: `<div className="rs-pulse-dots">
  <div className="rs-pulse-dot" />
  <div className="rs-pulse-dot" />
  <div className="rs-pulse-dot" />
</div>`,
    cssCode: `.rs-pulse-dots {
  display: flex; gap: 6px;
}
.rs-pulse-dot {
  width: 10px; height: 10px;
  background-color: var(--color-accent);
  border-radius: 50%;
  animation: rs-dot-bounce 1.4s infinite ease-in-out both;
}`
  },
  {
    id: 'atom-loader',
    name: '3D Orbiting Atom Loader',
    category: 'loaders',
    creator: 'rithvikshetty',
    views: '34k',
    likes: 580,
    render: () => <AtomLoader />,
    htmlCode: `<div className="rs-atom-loader">
  <div className="rs-atom-nucleus" />
  <div className="rs-atom-orbit rs-atom-orbit--1" />
  <div className="rs-atom-orbit rs-atom-orbit--2" />
  <div className="rs-atom-orbit rs-atom-orbit--3" />
</div>`,
    cssCode: `.rs-atom-loader {
  position: relative;
  width: 60px; height: 60px;
  perspective: 800px;
}
.rs-atom-nucleus {
  width: 12px; height: 12px;
  background-color: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 0 15px var(--color-accent);
  animation: rs-nucleus-pulse 1.2s infinite ease-in-out;
}
.rs-atom-orbit {
  position: absolute; width: 100%; height: 100%;
  border: 2px solid var(--color-text-secondary);
  border-radius: 50%;
  opacity: 0.65;
}
.rs-atom-orbit--1 {
  transform: rotateX(70deg) rotateY(30deg);
  animation: rs-orbit-rotate-1 1.5s linear infinite;
  border-top-color: var(--color-accent);
}
.rs-atom-orbit--2 {
  transform: rotateX(70deg) rotateY(-30deg);
  animation: rs-orbit-rotate-2 1.5s linear infinite;
  border-right-color: var(--color-accent);
}
.rs-atom-orbit--3 {
  transform: rotateX(30deg) rotateY(70deg);
  animation: rs-orbit-rotate-3 1.5s linear infinite;
  border-bottom-color: var(--color-accent);
}`
  },
  {
    id: 'sleek-login-form',
    name: 'Welcome Back Login Form',
    category: 'forms',
    creator: 'rithvikshetty',
    views: '22k',
    likes: 412,
    render: () => <SleekLoginForm />,
    htmlCode: `<form className="rs-sleek-form" onSubmit={handleSubmit}>
  <h3>Welcome Back</h3>
  <input type="email" placeholder="Email" required />
  <input type="password" placeholder="Password" required />
  <button type="submit">Continue</button>
</form>`,
    cssCode: `.rs-sleek-form {
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}`
  },
  {
    id: 'form-submit-page',
    name: 'Creative Beta Sign-up Form',
    category: 'forms',
    creator: 'rithvikshetty',
    views: '35k',
    likes: 678,
    render: () => <BetaSignUpFormPreview />,
    htmlCode: `/* Access from the full Page template route */
<form className="rs-sleek-form rs-sleek-form--accent">
  <h3>Join Beta</h3>
  <input type="text" placeholder="Full name" required />
  <input type="email" placeholder="Work email" required />
  <button type="submit">Submit Application</button>
</form>`,
    cssCode: `.rs-sleek-form--accent .rs-sleek-form-submit {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}`
  }
];
