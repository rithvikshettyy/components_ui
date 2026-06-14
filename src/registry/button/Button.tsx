import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', loading = false, disabled, children, className = '', ...props }, ref) => {
    const classes = [
      'rs-btn',
      `rs-btn--${variant}`,
      `rs-btn--${size}`,
      loading ? 'rs-btn--loading' : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <Loader2 className="rs-btn-spinner" aria-hidden="true" />
        )}
        <span className={loading ? 'rs-btn-text--loading' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
