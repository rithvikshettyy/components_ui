import { useState, useRef, type ReactNode } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
  delay?: number;
}

export function Tooltip({ content, position = 'top', children, delay = 200 }: TooltipProps) {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActive(false);
  };

  return (
    <div
      className="rs-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {active && (
        <div className={`rs-tooltip rs-tooltip--${position}`} role="tooltip">
          <div className="rs-tooltip-arrow" />
          <div className="rs-tooltip-content">{content}</div>
        </div>
      )}
    </div>
  );
}
