import type { VariantConfig } from '../../components/VariantControls';

export const buttonConfig = {
  name: 'Button',
  slug: 'button',
  category: 'Components',
  description:
    'A versatile button component with multiple variants, sizes, and states. Supports loading indicators, disabled states, and keyboard navigation out of the box.',

  variants: [
    {
      name: 'variant',
      type: 'select' as const,
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Destructive', value: 'destructive' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'size',
      type: 'select' as const,
      options: [
        { label: 'Sm', value: 'sm' },
        { label: 'Md', value: 'md' },
        { label: 'Lg', value: 'lg' },
      ],
      defaultValue: 'md',
    },
    {
      name: 'loading',
      type: 'toggle' as const,
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'toggle' as const,
      defaultValue: false,
    },
  ] satisfies VariantConfig[],

  playgroundFields: [
    { name: 'label', label: 'Button Label', defaultValue: 'Click me' },
  ],

  code: `import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', loading = false, disabled, children, className = '', ...props }, ref) => {
    const classes = [
      'rs-btn',
      \`rs-btn--\${variant}\`,
      \`rs-btn--\${size}\`,
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
        {loading && <Loader2 className="rs-btn-spinner" aria-hidden="true" />}
        <span className={loading ? 'rs-btn-text--loading' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };`,

  installTabs: [
    {
      label: 'Next.js',
      code: `# Install dependencies
npm install lucide-react

# Copy the component to your project
cp components/ui/Button.tsx ./components/ui/
cp components/ui/Button.css ./components/ui/

# Import in your page
import { Button } from '@/components/ui/Button';`,
    },
    {
      label: 'Vite (React)',
      code: `# Install dependencies
npm install lucide-react

# Copy component files
cp Button.tsx ./src/components/ui/
cp Button.css ./src/components/ui/

# Import in your app
import { Button } from './components/ui/Button';`,
    },
    {
      label: 'Tailwind CSS',
      code: `<!-- Using pure Tailwind utility classes -->
<button class="inline-flex items-center justify-center gap-2
  h-10 px-5 text-sm font-medium rounded-md
  bg-zinc-900 text-zinc-50 border border-zinc-900
  hover:opacity-90 active:scale-[0.97]
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all duration-200
  focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-amber-500
  dark:bg-zinc-100 dark:text-zinc-900">
  Click me
</button>`,
      language: 'html',
    },
  ],

  tailwindConfig: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-fast': 'spin 0.6s linear infinite',
      },
    },
  },
};`,

  accessibilityNotes: [
    'Uses native <button> element for full keyboard support (Enter and Space to activate).',
    'aria-busy="true" is set during loading state to inform assistive technology.',
    'Loading spinner is hidden from screen readers with aria-hidden="true".',
    'Focus indicator uses a visible 2px outline ring for keyboard navigation.',
    'Disabled state prevents interaction and is communicated via the native disabled attribute.',
    'Color contrast meets WCAG AA standards across all variants in both light and dark themes.',
  ],
};
