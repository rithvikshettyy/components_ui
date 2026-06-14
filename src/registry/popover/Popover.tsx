import { useState, useRef, useEffect, type ReactNode } from 'react';
import './Popover.css';

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  position?: PopoverPosition;
}

export function Popover({ trigger, children, position = 'bottom' }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="rs-popover-wrapper" ref={containerRef}>
      <div className="rs-popover-trigger-container" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div className={`rs-popover rs-popover--${position}`} role="dialog">
          <div className="rs-popover-arrow" />
          <div className="rs-popover-content">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
