import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, X, Search } from 'lucide-react';
import './Dropbox.css';

export interface Option {
  value: string;
  label: string;
}

/* ── Basic Custom Select ───────────────────────────────── */
interface DropboxProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function Dropbox({ options, value, onChange, placeholder = 'Select option…', label }: DropboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="rs-dropbox-wrapper" ref={containerRef}>
      {label && <label className="rs-dropbox-label">{label}</label>}
      <button
        type="button"
        className={`rs-dropbox-trigger ${isOpen ? 'rs-dropbox-trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? 'rs-dropbox-val' : 'rs-dropbox-placeholder'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} className={`rs-dropbox-arrow ${isOpen ? 'rs-dropbox-arrow--open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="rs-dropbox-menu" role="listbox">
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`rs-dropbox-item ${opt.value === value ? 'rs-dropbox-item--selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              <span>{opt.label}</span>
              {opt.value === value && <Check size={14} className="rs-dropbox-check" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Searchable Select ─────────────────────────────────── */
export function SearchableDropbox({ options, value, onChange, placeholder = 'Select option…', label }: DropboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);
  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="rs-dropbox-wrapper" ref={containerRef}>
      {label && <label className="rs-dropbox-label">{label}</label>}
      <button
        type="button"
        className={`rs-dropbox-trigger ${isOpen ? 'rs-dropbox-trigger--open' : ''}`}
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch('');
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? 'rs-dropbox-val' : 'rs-dropbox-placeholder'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} className={`rs-dropbox-arrow ${isOpen ? 'rs-dropbox-arrow--open' : ''}`} />
      </button>

      {isOpen && (
        <div className="rs-dropbox-menu">
          <div className="rs-dropbox-search-container">
            <Search size={14} className="rs-dropbox-search-icon" />
            <input
              type="text"
              className="rs-dropbox-search-input"
              placeholder="Search options…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <ul role="listbox" style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '200px', overflowY: 'auto' }}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(opt => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={opt.value === value}
                  className={`rs-dropbox-item ${opt.value === value ? 'rs-dropbox-item--selected' : ''}`}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                >
                  <span>{opt.label}</span>
                  {opt.value === value && <Check size={14} className="rs-dropbox-check" />}
                </li>
              ))
            ) : (
              <li className="rs-dropbox-no-results">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Multi Select ──────────────────────────────────────── */
interface MultiDropboxProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: string;
}

export function MultiDropbox({ options, value, onChange, placeholder = 'Select options…', label }: MultiDropboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleOption = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter(v => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  const removeValue = (e: React.MouseEvent, val: string) => {
    e.stopPropagation();
    onChange(value.filter(v => v !== val));
  };

  return (
    <div className="rs-dropbox-wrapper" ref={containerRef}>
      {label && <label className="rs-dropbox-label">{label}</label>}
      <div
        className={`rs-dropbox-trigger rs-dropbox-trigger--multi ${isOpen ? 'rs-dropbox-trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="rs-dropbox-multi-values">
          {value.length > 0 ? (
            options
              .filter(opt => value.includes(opt.value))
              .map(opt => (
                <span key={opt.value} className="rs-dropbox-chip">
                  {opt.label}
                  <button
                    type="button"
                    className="rs-dropbox-chip-remove"
                    onClick={e => removeValue(e, opt.value)}
                    aria-label={`Remove ${opt.label}`}
                  >
                    <X size={10} />
                  </button>
                </span>
              ))
          ) : (
            <span className="rs-dropbox-placeholder">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={16} className={`rs-dropbox-arrow ${isOpen ? 'rs-dropbox-arrow--open' : ''}`} />
      </div>

      {isOpen && (
        <ul className="rs-dropbox-menu" role="listbox">
          {options.map(opt => {
            const isSelected = value.includes(opt.value);
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`rs-dropbox-item ${isSelected ? 'rs-dropbox-item--selected' : ''}`}
                onClick={() => toggleOption(opt.value)}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={14} className="rs-dropbox-check" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
