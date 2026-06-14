import { useState, type InputHTMLAttributes, forwardRef } from 'react';
import { Search, Eye, EyeOff, X } from 'lucide-react';
import './Input.css';

/* ── Basic Input ───────────────────────────────────────── */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s/g, '-')}`;
    return (
      <div className={`rs-input-wrapper ${error ? 'rs-input-wrapper--error' : ''} ${className}`}>
        {label && <label htmlFor={inputId} className="rs-input-label">{label}</label>}
        <input ref={ref} id={inputId} className="rs-input" aria-invalid={!!error} {...props} />
        {hint && !error && <span className="rs-input-hint">{hint}</span>}
        {error && <span className="rs-input-error" role="alert">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

/* ── Floating Label Input ──────────────────────────────── */
export interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);
    const inputId = id || `float-${label.toLowerCase().replace(/\s/g, '-')}`;
    return (
      <div className={`rs-float-wrapper ${error ? 'rs-float-wrapper--error' : ''} ${className}`}>
        <input
          ref={ref}
          id={inputId}
          className={`rs-float-input ${focused || hasValue ? 'rs-float-input--active' : ''}`}
          onFocus={e => { setFocused(true); props.onFocus?.(e); }}
          onBlur={e => { setFocused(false); setHasValue(!!e.target.value); props.onBlur?.(e); }}
          onChange={e => { setHasValue(!!e.target.value); props.onChange?.(e); }}
          placeholder=" "
          aria-invalid={!!error}
          {...props}
        />
        <label htmlFor={inputId} className="rs-float-label">{label}</label>
        {error && <span className="rs-input-error" role="alert">{error}</span>}
      </div>
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

/* ── Underline Input ───────────────────────────────────── */
export const UnderlineInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id || `under-${label?.toLowerCase().replace(/\s/g, '-')}`;
    return (
      <div className={`rs-underline-wrapper ${error ? 'rs-underline-wrapper--error' : ''} ${className}`}>
        {label && <label htmlFor={inputId} className="rs-input-label">{label}</label>}
        <div className="rs-underline-container">
          <input ref={ref} id={inputId} className="rs-underline-input" aria-invalid={!!error} {...props} />
          <span className="rs-underline-bar" aria-hidden="true" />
        </div>
        {error && <span className="rs-input-error" role="alert">{error}</span>}
      </div>
    );
  }
);
UnderlineInput.displayName = 'UnderlineInput';

/* ── Search Input ──────────────────────────────────────── */
export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, value, className = '', ...props }, ref) => (
    <div className={`rs-search-wrapper ${className}`}>
      <Search size={16} className="rs-search-icon" aria-hidden="true" />
      <input ref={ref} className="rs-search-input" type="search" value={value} {...props} />
      {value && (
        <button className="rs-search-clear" onClick={onClear} aria-label="Clear search" type="button">
          <X size={14} />
        </button>
      )}
    </div>
  )
);
SearchInput.displayName = 'SearchInput';

/* ── Password Input ────────────────────────────────────── */
export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const inputId = id || 'password-input';
    return (
      <div className={`rs-input-wrapper ${error ? 'rs-input-wrapper--error' : ''} ${className}`}>
        {label && <label htmlFor={inputId} className="rs-input-label">{label}</label>}
        <div className="rs-password-container">
          <input
            ref={ref}
            id={inputId}
            className="rs-input rs-input--password"
            type={visible ? 'text' : 'password'}
            aria-invalid={!!error}
            {...props}
          />
          <button
            className="rs-password-toggle"
            onClick={() => setVisible(v => !v)}
            type="button"
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {error && <span className="rs-input-error" role="alert">{error}</span>}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

/* ── Textarea ──────────────────────────────────────────── */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxChars?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, maxChars, id, className = '', value, onChange, ...props }, ref) => {
    const [charCount, setCharCount] = useState((value as string)?.length || 0);
    const inputId = id || `textarea-${label?.toLowerCase().replace(/\s/g, '-')}`;
    return (
      <div className={`rs-input-wrapper ${error ? 'rs-input-wrapper--error' : ''} ${className}`}>
        {label && <label htmlFor={inputId} className="rs-input-label">{label}</label>}
        <textarea
          ref={ref}
          id={inputId}
          className="rs-textarea"
          aria-invalid={!!error}
          maxLength={maxChars}
          value={value}
          onChange={e => { setCharCount(e.target.value.length); onChange?.(e); }}
          {...props}
        />
        {maxChars && (
          <span className="rs-input-hint" style={{ textAlign: 'right' }}>
            {charCount}/{maxChars}
          </span>
        )}
        {error && <span className="rs-input-error" role="alert">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
