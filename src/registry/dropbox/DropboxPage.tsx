import { useState } from 'react';
import { Dropbox, SearchableDropbox, MultiDropbox } from './Dropbox';
import '../../components/ComponentWorkspace.css';

export function DropboxPage() {
  const [theme, setTheme] = useState('dark');
  const [framework, setFramework] = useState('');
  const [tags, setTags] = useState<string[]>(['react', 'typescript']);

  const themes = [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'system', label: 'System Preferences' },
  ];

  const frameworks = [
    { value: 'react', label: 'React.js (Library)' },
    { value: 'vue', label: 'Vue.js (Framework)' },
    { value: 'svelte', label: 'Svelte (Compiler)' },
    { value: 'angular', label: 'Angular (Platform)' },
    { value: 'solid', label: 'SolidJS (Library)' },
    { value: 'next', label: 'Next.js (Meta-framework)' },
    { value: 'remix', label: 'Remix (Web framework)' },
    { value: 'nuxt', label: 'Nuxt.js (Meta-framework)' },
  ];

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Dropdown / Select (Dropbox)</h1>
        <p className="component-description">
          Elegant selectable overlays replacing standard browser select controls, supporting search filters and multi-select pill outputs.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Standard Custom Select</h2>
        <p className="showcase-desc">Clean dropdown replacement with active selection checkmarks and click outside listener dismissals.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ minHeight: '260px', alignItems: 'flex-start' }}>
            <Dropbox
              label="App Theme"
              options={themes}
              value={theme}
              onChange={setTheme}
            />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Searchable Select</h2>
        <p className="showcase-desc">Dropbox container equipped with a search text filter box for navigating large lists of options.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ minHeight: '360px', alignItems: 'flex-start' }}>
            <SearchableDropbox
              label="Select Core Technology"
              placeholder="Search library…"
              options={frameworks}
              value={framework}
              onChange={setFramework}
            />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Multi-Select Dropdown</h2>
        <p className="showcase-desc">Checkable lists outputting dynamic inline tags (chips) that can be cleared individually.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ minHeight: '360px', alignItems: 'flex-start' }}>
            <MultiDropbox
              label="Configure Stack Tags"
              placeholder="Choose tags…"
              options={frameworks}
              value={tags}
              onChange={setTags}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
