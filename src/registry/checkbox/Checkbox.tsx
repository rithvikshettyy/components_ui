
import { Check, Minus } from 'lucide-react';
import './Checkbox.css';

/* ── Basic Checkbox ────────────────────────────────────── */
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  indeterminate?: boolean;
  disabled?: boolean;
}

export function Checkbox({ checked, onChange, label, indeterminate, disabled }: CheckboxProps) {
  return (
    <label className={`rs-checkbox-label ${disabled ? 'rs-checkbox-label--disabled' : ''}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        disabled={disabled}
        className={`rs-checkbox ${checked || indeterminate ? 'rs-checkbox--checked' : ''}`}
        onClick={() => onChange(!checked)}
      >
        {checked && <Check size={14} className="rs-checkbox__icon" strokeWidth={3} />}
        {indeterminate && !checked && <Minus size={14} className="rs-checkbox__icon" strokeWidth={3} />}
      </button>
      {label && <span className="rs-checkbox__text">{label}</span>}
    </label>
  );
}

/* ── Animated Bounce Checkbox ──────────────────────────── */
export function BounceCheckbox({ checked, onChange, label, disabled }: CheckboxProps) {
  return (
    <label className={`rs-checkbox-label ${disabled ? 'rs-checkbox-label--disabled' : ''}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        className={`rs-bounce-checkbox ${checked ? 'rs-bounce-checkbox--checked' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <svg className="rs-bounce-checkbox__svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path className="rs-bounce-checkbox__path" d="M4 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {label && <span className="rs-checkbox__text">{label}</span>}
    </label>
  );
}

/* ── Radio Group ───────────────────────────────────────── */
export interface RadioOption { value: string; label: string; }
export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  direction?: 'horizontal' | 'vertical';
}

export function RadioGroup({ options, value, onChange, name, direction = 'vertical' }: RadioGroupProps) {
  return (
    <div className={`rs-radio-group rs-radio-group--${direction}`} role="radiogroup" aria-label={name}>
      {options.map(opt => (
        <label key={opt.value} className="rs-radio-label">
          <button
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            className={`rs-radio ${value === opt.value ? 'rs-radio--checked' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            <span className="rs-radio__dot" />
          </button>
          <span className="rs-radio__text">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

/* ── Card Checkbox (selectable card) ───────────────────── */
export interface CardCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  description: string;
}

export function CardCheckbox({ checked, onChange, title, description }: CardCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      className={`rs-card-checkbox ${checked ? 'rs-card-checkbox--checked' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <div className="rs-card-checkbox__content">
        <span className="rs-card-checkbox__title">{title}</span>
        <span className="rs-card-checkbox__desc">{description}</span>
      </div>
      <span className={`rs-card-checkbox__indicator ${checked ? 'rs-card-checkbox__indicator--checked' : ''}`}>
        {checked && <Check size={12} strokeWidth={3} />}
      </span>
    </button>
  );
}
