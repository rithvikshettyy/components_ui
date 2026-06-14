import { useState, useMemo, type ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';
import { VariantControls, type VariantConfig } from './VariantControls';
import { ChevronDown } from 'lucide-react';
import './ComponentWorkspace.css';

interface ComponentWorkspaceProps {
  name: string;
  description: string;
  category: string;
  variants: VariantConfig[];
  code: string;
  renderPreview: (variantValues: Record<string, string | boolean>, playgroundValues: Record<string, string>) => ReactNode;
  playgroundFields?: { name: string; label: string; defaultValue: string }[];
  children?: ReactNode; /* DocSection goes here */
}

export function ComponentWorkspace({
  name,
  description,
  category,
  variants,
  code,
  renderPreview,
  playgroundFields = [],
  children,
}: ComponentWorkspaceProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [playgroundOpen, setPlaygroundOpen] = useState(false);

  // Build initial variant values from config defaults
  const initialVariantValues = useMemo(() => {
    const vals: Record<string, string | boolean> = {};
    variants.forEach(v => {
      vals[v.name] = v.defaultValue;
    });
    return vals;
  }, [variants]);

  const [variantValues, setVariantValues] = useState(initialVariantValues);

  // Playground text fields
  const initialPlaygroundValues = useMemo(() => {
    const vals: Record<string, string> = {};
    playgroundFields.forEach(f => {
      vals[f.name] = f.defaultValue;
    });
    return vals;
  }, [playgroundFields]);

  const [playgroundValues, setPlaygroundValues] = useState(initialPlaygroundValues);

  const handleVariantChange = (name: string, value: string | boolean) => {
    setVariantValues(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaygroundChange = (name: string, value: string) => {
    setPlaygroundValues(prev => ({ ...prev, [name]: value }));
  };

  const tabs = [
    { id: 'preview' as const, label: 'Preview' },
    { id: 'code' as const, label: 'Code' },
  ];

  return (
    <div>
      {/* Component Header */}
      <div className="component-header">
        <div className="component-category">{category}</div>
        <h1 className="component-title">{name}</h1>
        <p className="component-description">{description}</p>
      </div>

      {/* Workspace */}
      <div className="workspace">
        {/* Tab Bar */}
        <div className="workspace-tabs" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`workspace-tab ${activeTab === tab.id ? 'workspace-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel Content */}
        <div className="workspace-panel">
          {activeTab === 'preview' ? (
            <>
              <div className="preview-canvas">
                <div className="preview-canvas-inner">
                  {renderPreview(variantValues, playgroundValues)}
                </div>
              </div>
              {variants.length > 0 && (
                <VariantControls
                  config={variants}
                  values={variantValues}
                  onChange={handleVariantChange}
                />
              )}
              {playgroundFields.length > 0 && (
                <div className="playground-panel">
                  <button
                    className="playground-header"
                    onClick={() => setPlaygroundOpen(p => !p)}
                    aria-expanded={playgroundOpen}
                  >
                    <span className="playground-header-label">Playground</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: `transform var(--duration-fast) var(--ease-out-quart)`,
                        transform: playgroundOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: 'var(--color-text-tertiary)',
                      }}
                    />
                  </button>
                  <div className={`playground-body ${playgroundOpen ? 'playground-body--open' : ''}`}>
                    <div className="playground-body-inner">
                      <div className="playground-content">
                        {playgroundFields.map(field => (
                          <div key={field.name} className="playground-field">
                            <label htmlFor={`playground-${field.name}`}>{field.label}</label>
                            <input
                              id={`playground-${field.name}`}
                              type="text"
                              value={playgroundValues[field.name] || ''}
                              onChange={e => handlePlaygroundChange(field.name, e.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <CodeBlock code={code} language="tsx" />
          )}
        </div>
      </div>

      {/* Documentation (passed as children) */}
      {children}
    </div>
  );
}
