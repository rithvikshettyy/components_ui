import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import './Drawer.css';

export type DrawerPosition = 'left' | 'right' | 'bottom';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: DrawerPosition;
  title?: string;
  children: ReactNode;
}

export function Drawer({ open, onClose, position = 'right', title, children }: DrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="rs-drawer-overlay-wrapper">
      {/* Backdrop */}
      <div 
        ref={overlayRef}
        className="rs-drawer-backdrop" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      
      {/* Panel */}
      <div 
        className={`rs-drawer rs-drawer--${position}`}
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Drawer Content'}
      >
        <div className="rs-drawer-header">
          <h3 className="rs-drawer-title">{title}</h3>
          <button className="rs-drawer-close-btn" onClick={onClose} aria-label="Close drawer">
            <X size={18} />
          </button>
        </div>
        <div className="rs-drawer-body">
          {children}
        </div>
      </div>
    </div>
  );
}
