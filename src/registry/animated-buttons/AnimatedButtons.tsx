import { type ButtonHTMLAttributes, type ReactNode, forwardRef, useRef, useState } from 'react';
import { Loader2, ArrowRight, Sparkles, Zap } from 'lucide-react';
import './AnimatedButtons.css';

/* ── Shimmer Button ────────────────────────────────────── */
export interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ size = 'md', children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-shimmer-btn rs-shimmer-btn--${size} ${className}`} {...props}>
      <span className="rs-shimmer-btn__content">{children}</span>
      <span className="rs-shimmer-btn__shimmer" aria-hidden="true" />
    </button>
  )
);
ShimmerButton.displayName = 'ShimmerButton';

/* ── Magnetic Button ───────────────────────────────────── */
export interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
      const btn = btnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
      setOffset({ x, y });
    };

    const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

    return (
      <button
        ref={ref || btnRef}
        className={`rs-magnetic-btn ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
MagneticButton.displayName = 'MagneticButton';

/* ── Ripple Button ─────────────────────────────────────── */
export interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples(prev => [...prev, { x, y, id }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
      props.onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={`rs-ripple-btn rs-ripple-btn--${variant} ${className}`}
        {...props}
        onClick={handleClick}
      >
        <span className="rs-ripple-btn__content">{children}</span>
        {ripples.map(r => (
          <span
            key={r.id}
            className="rs-ripple-btn__ripple"
            style={{ left: r.x, top: r.y }}
            aria-hidden="true"
          />
        ))}
      </button>
    );
  }
);
RippleButton.displayName = 'RippleButton';

/* ── Gradient Border Button ────────────────────────────── */
export const GradientBorderButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }>(
  ({ children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-gradient-border-btn ${className}`} {...props}>
      <span className="rs-gradient-border-btn__inner">{children}</span>
    </button>
  )
);
GradientBorderButton.displayName = 'GradientBorderButton';

/* ── Neon Pulse Button ─────────────────────────────────── */
export const NeonPulseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; color?: 'cyan' | 'pink' | 'green' }>(
  ({ children, color = 'cyan', className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-neon-btn rs-neon-btn--${color} ${className}`} {...props}>
      {children}
    </button>
  )
);
NeonPulseButton.displayName = 'NeonPulseButton';

/* ── Arrow Slide Button ────────────────────────────────── */
export const ArrowSlideButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }>(
  ({ children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-arrow-btn ${className}`} {...props}>
      <span className="rs-arrow-btn__text">{children}</span>
      <span className="rs-arrow-btn__icon" aria-hidden="true">
        <ArrowRight size={16} />
      </span>
    </button>
  )
);
ArrowSlideButton.displayName = 'ArrowSlideButton';

/* ── Loading State Button ──────────────────────────────── */
export interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  success?: boolean;
  children: ReactNode;
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading = false, success = false, children, className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`rs-loading-btn ${loading ? 'rs-loading-btn--loading' : ''} ${success ? 'rs-loading-btn--success' : ''} ${className}`}
      disabled={loading}
      {...props}
    >
      <span className="rs-loading-btn__content" style={{ opacity: loading || success ? 0 : 1 }}>
        {children}
      </span>
      {loading && (
        <span className="rs-loading-btn__spinner">
          <Loader2 size={18} className="rs-loading-btn__spin-icon" />
        </span>
      )}
      {success && (
        <span className="rs-loading-btn__check">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" className="rs-loading-btn__check-path" />
          </svg>
        </span>
      )}
    </button>
  )
);
LoadingButton.displayName = 'LoadingButton';

/* ── Sparkle Button ────────────────────────────────────── */
export const SparkleButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }>(
  ({ children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-sparkle-btn ${className}`} {...props}>
      <Sparkles size={14} className="rs-sparkle-btn__icon" aria-hidden="true" />
      <span>{children}</span>
    </button>
  )
);
SparkleButton.displayName = 'SparkleButton';

/* ── Electric Button ───────────────────────────────────── */
export const ElectricButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }>(
  ({ children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-electric-btn ${className}`} {...props}>
      <Zap size={14} className="rs-electric-btn__icon" aria-hidden="true" />
      <span>{children}</span>
    </button>
  )
);
ElectricButton.displayName = 'ElectricButton';

/* ── Cyberpunk Glitch Button ───────────────────────────── */
export const CyberpunkButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { children: string }>(
  ({ children, className = '', ...props }, ref) => (
    <button ref={ref} className={`rs-cyber-btn ${className}`} data-glitch={children} {...props}>
      {children}
    </button>
  )
);
CyberpunkButton.displayName = 'CyberpunkButton';
