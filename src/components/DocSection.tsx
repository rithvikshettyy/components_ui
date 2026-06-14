import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { Accessibility } from 'lucide-react';

interface InstallTab {
  label: string;
  code: string;
  language?: string;
}

interface DocSectionProps {
  installTabs: InstallTab[];
  tailwindConfig?: string;
  accessibilityNotes: string[];
}

export function DocSection({ installTabs, tailwindConfig, accessibilityNotes }: DocSectionProps) {
  const [activeInstallTab, setActiveInstallTab] = useState(0);

  return (
    <div>
      {/* Installation Section */}
      <div className="doc-section">
        <h2 className="doc-section-title">Installation</h2>
        <div className="doc-tabs" role="tablist">
          {installTabs.map((tab, i) => (
            <button
              key={tab.label}
              className={`doc-tab ${activeInstallTab === i ? 'doc-tab--active' : ''}`}
              onClick={() => setActiveInstallTab(i)}
              role="tab"
              aria-selected={activeInstallTab === i}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <CodeBlock
          code={installTabs[activeInstallTab].code}
          language={installTabs[activeInstallTab].language || 'bash'}
          showLineNumbers={false}
        />
      </div>

      {/* Tailwind Config */}
      {tailwindConfig && (
        <div className="doc-section config-snippet">
          <h3 className="config-snippet-title">Tailwind Configuration</h3>
          <CodeBlock code={tailwindConfig} language="javascript" showLineNumbers={false} />
        </div>
      )}

      {/* Accessibility Notes */}
      {accessibilityNotes.length > 0 && (
        <div className="a11y-callout">
          <div className="a11y-callout-title">
            <Accessibility size={16} />
            Accessibility
          </div>
          <ul>
            {accessibilityNotes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
