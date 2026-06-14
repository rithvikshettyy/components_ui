import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Search } from 'lucide-react';
import './CommandPalette.css';

export interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon?: ReactNode;
  action: () => void;
  shortcut?: string[];
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter items based on search input
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Auto focus input on open
  useEffect(() => {
    if (open) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, filteredItems, selectedIndex, onClose]);

  // Outside click listener
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [open, onClose]);

  if (!open) return null;

  // Group filtered items by category
  const groups: Record<string, typeof filteredItems> = {};
  filteredItems.forEach(item => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
  });

  // Flat list coordinate to find correct selectedIndex across groups
  let itemCounter = 0;

  return (
    <div className="rs-cmd-overlay">
      <div className="rs-cmd-backdrop" />
      <div className="rs-cmd-dialog" ref={containerRef} role="combobox" aria-expanded={open}>
        <div className="rs-cmd-header">
          <Search size={18} className="rs-cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="rs-cmd-input"
            placeholder="Type a command or search…"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <kbd className="rs-cmd-esc-kbd">ESC</kbd>
        </div>

        <div className="rs-cmd-body">
          {filteredItems.length > 0 ? (
            Object.keys(groups).map(category => (
              <div key={category} className="rs-cmd-group">
                <h4 className="rs-cmd-group-title">{category}</h4>
                <ul className="rs-cmd-group-list">
                  {groups[category].map(item => {
                    const currentIndex = itemCounter;
                    itemCounter++;
                    const isSelected = currentIndex === selectedIndex;
                    return (
                      <li
                        key={item.id}
                        className={`rs-cmd-item ${isSelected ? 'rs-cmd-item--selected' : ''}`}
                        onClick={() => {
                          item.action();
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                      >
                        <div className="rs-cmd-item-left">
                          {item.icon && <span className="rs-cmd-item-icon">{item.icon}</span>}
                          <span className="rs-cmd-item-title">{item.title}</span>
                        </div>
                        {item.shortcut && (
                          <div className="rs-cmd-item-shortcut">
                            {item.shortcut.map((key, i) => (
                              <kbd key={i}>{key}</kbd>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          ) : (
            <div className="rs-cmd-no-results">No results found.</div>
          )}
        </div>

        <div className="rs-cmd-footer">
          <div className="rs-cmd-help">
            <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
