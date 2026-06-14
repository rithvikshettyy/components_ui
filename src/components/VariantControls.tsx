export interface VariantOption {
  label: string;
  value: string;
}

export interface VariantConfig {
  name: string;
  type: 'select' | 'toggle';
  options?: VariantOption[];
  defaultValue: string | boolean;
}

interface VariantControlsProps {
  config: VariantConfig[];
  values: Record<string, string | boolean>;
  onChange: (name: string, value: string | boolean) => void;
}

export function VariantControls({ config, values, onChange }: VariantControlsProps) {
  return (
    <div className="variant-controls">
      {config.map(variant => (
        <div key={variant.name} className="variant-control">
          <label className="variant-control-label">{variant.name}</label>
          {variant.type === 'select' && variant.options ? (
            <div className="variant-segmented" role="radiogroup" aria-label={variant.name}>
              {variant.options.map(opt => (
                <button
                  key={opt.value}
                  className={`variant-segmented-btn ${
                    values[variant.name] === opt.value ? 'variant-segmented-btn--active' : ''
                  }`}
                  onClick={() => onChange(variant.name, opt.value)}
                  role="radio"
                  aria-checked={values[variant.name] === opt.value}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ) : (
            <button
              className={`variant-toggle ${values[variant.name] ? 'variant-toggle--on' : ''}`}
              onClick={() => onChange(variant.name, !values[variant.name])}
              role="switch"
              aria-checked={!!values[variant.name]}
              aria-label={`Toggle ${variant.name}`}
            >
              <span className="variant-toggle-thumb" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
