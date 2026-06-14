import { useState, useEffect } from 'react';
import { CommandPalette, type CommandItem } from './CommandPalette';
import { useToast } from '../toast/Toast';
import { Home, User, Plus, Search, Settings, FileText } from 'lucide-react';
import '../../components/ComponentWorkspace.css';

export function CommandPalettePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { success, info } = useToast();

  // Handle global Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Go to Introduction Page',
      category: 'Navigation',
      icon: <Home size={14} />,
      action: () => info('Navigation', 'Redirecting to Introduction page…'),
      shortcut: ['G', 'I'],
    },
    {
      id: 'components',
      title: 'Search Component Gallery',
      category: 'Navigation',
      icon: <Search size={14} />,
      action: () => info('Search', 'Focusing component search filters…'),
    },
    {
      id: 'new-project',
      title: 'Create New Project Instance',
      category: 'Commands',
      icon: <Plus size={14} />,
      action: () => success('Project Created', 'Initialized empty React application template.'),
      shortcut: ['⌘', 'N'],
    },
    {
      id: 'settings',
      title: 'Open Workspace Settings',
      category: 'Commands',
      icon: <Settings size={14} />,
      action: () => info('Settings', 'Opened configuration panel drawer.'),
      shortcut: ['⌘', ','],
    },
    {
      id: 'docs',
      title: 'View Installation Manuals',
      category: 'Documentation',
      icon: <FileText size={14} />,
      action: () => info('Docs', 'Opening installation guides…'),
    },
    {
      id: 'profile',
      title: 'View Creator Profile Card',
      category: 'Social',
      icon: <User size={14} />,
      action: () => info('Profile', 'Opening social details card…'),
    },
  ];

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Command Palette</h1>
        <p className="component-description">
          A global fuzzy-search overlay for launching shortcuts, searching routes, and executing system functions.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Global Trigger Showcase</h2>
        <p className="showcase-desc">
          Click the button below or press <kbd style={{ padding: '2px 6px', background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>⌘K</kbd> (or <kbd style={{ padding: '2px 6px', background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>Ctrl+K</kbd>) to trigger the interactive overlay.
        </p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <button className="rs-btn rs-btn--primary" onClick={() => setIsOpen(true)}>
              Open Command Palette
            </button>
          </div>
        </div>
      </section>

      <CommandPalette
        open={isOpen}
        onClose={() => setIsOpen(false)}
        items={commands}
      />
    </div>
  );
}
