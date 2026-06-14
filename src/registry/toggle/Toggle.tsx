
import { Sun, Moon } from 'lucide-react';
import './Toggle.css';

/* ── Basic Toggle ──────────────────────────────────────── */
export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function BasicToggle({ checked, onChange, label, size = 'md', disabled }: ToggleProps) {
  return (
    <label className={`rs-toggle-label ${disabled ? 'rs-toggle-label--disabled' : ''}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        className={`rs-toggle rs-toggle--${size} ${checked ? 'rs-toggle--on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="rs-toggle__thumb" />
      </button>
      {label && <span className="rs-toggle-text">{label}</span>}
    </label>
  );
}

/* ── iOS Style Toggle ──────────────────────────────────── */
export function IOSToggle({ checked, onChange, label, disabled }: ToggleProps) {
  return (
    <label className={`rs-toggle-label ${disabled ? 'rs-toggle-label--disabled' : ''}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={`rs-ios-toggle ${checked ? 'rs-ios-toggle--on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="rs-ios-toggle__thumb" />
      </button>
      {label && <span className="rs-toggle-text">{label}</span>}
    </label>
  );
}

/* ── Day/Night Animated Toggle ─────────────────────────── */
export function DayNightToggle({ checked, onChange }: { checked: boolean; onChange: (c: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={checked ? 'Switch to day' : 'Switch to night'}
      className={`rs-daynight-toggle ${checked ? 'rs-daynight-toggle--night' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="rs-daynight-toggle__track">
        <span className="rs-daynight-toggle__stars" aria-hidden="true">
          <span className="rs-daynight-star" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
          <span className="rs-daynight-star" style={{ top: '40%', left: '55%', animationDelay: '0.3s' }} />
          <span className="rs-daynight-star" style={{ top: '15%', left: '70%', animationDelay: '0.6s' }} />
          <span className="rs-daynight-star" style={{ top: '55%', left: '30%', animationDelay: '0.9s' }} />
        </span>
      </span>
      <span className="rs-daynight-toggle__thumb">
        {checked ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}

/* ── Liquid Toggle ─────────────────────────────────────── */
export function LiquidToggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="rs-toggle-label">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`rs-liquid-toggle ${checked ? 'rs-liquid-toggle--on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="rs-liquid-toggle__fill" />
        <span className="rs-liquid-toggle__thumb" />
      </button>
      {label && <span className="rs-toggle-text">{label}</span>}
    </label>
  );
}

/* ── Labeled Toggle (On/Off text) ──────────────────────── */
export function LabeledToggle({ checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`rs-labeled-toggle ${checked ? 'rs-labeled-toggle--on' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="rs-labeled-toggle__text rs-labeled-toggle__on">ON</span>
      <span className="rs-labeled-toggle__text rs-labeled-toggle__off">OFF</span>
      <span className="rs-labeled-toggle__thumb" />
    </button>
  );
}
