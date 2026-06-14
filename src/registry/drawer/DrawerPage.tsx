import { useState } from 'react';
import { Drawer } from './Drawer';
import '../../components/ComponentWorkspace.css';

export function DrawerPage() {
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Drawer / Bottom Sheet</h1>
        <p className="component-description">
          Navigation and detail overlays sliding from the viewport edges, featuring dim backdrops, scroll locking, and direction options.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Overlay Configurations</h2>
        <p className="showcase-desc">Trigger drawers that open from different sides of the window. Great for settings, mobile menus, and preview panels.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button className="rs-btn rs-btn--primary" onClick={() => setRightOpen(true)}>
              Open Right Drawer (Default)
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={() => setLeftOpen(true)}>
              Open Left Drawer
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={() => setBottomOpen(true)}>
              Open Bottom Sheet
            </button>
          </div>
        </div>
      </section>

      {/* Right Drawer */}
      <Drawer open={rightOpen} onClose={() => setRightOpen(false)} position="right" title="Project Details">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <p>This panel displays metadata and status timelines for the active workspace deployment.</p>
          <div style={{ padding: 'var(--space-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-hover)' }}>
            <h4 style={{ color: 'var(--color-text)', margin: '0 0 var(--space-2) 0', fontSize: 'var(--text-sm)' }}>Configuration Summary</h4>
            <ul style={{ paddingLeft: 'var(--space-4)', margin: 0, fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>Region: us-east-1 (N. Virginia)</li>
              <li>Engine version: Node.js 18.x</li>
              <li>RAM allocation: 1024 MB</li>
            </ul>
          </div>
          <button className="rs-btn rs-btn--primary" style={{ marginTop: 'var(--space-2)' }} onClick={() => setRightOpen(false)}>
            Close Details
          </button>
        </div>
      </Drawer>

      {/* Left Drawer */}
      <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} position="left" title="Global Navigation">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {['Overview', 'Deployments', 'Team Permissions', 'Integrations', 'Billing Settings'].map((nav, i) => (
            <button
              key={i}
              className="rs-btn rs-btn--ghost"
              style={{ justifyContent: 'flex-start', padding: 'var(--space-3) var(--space-4)', width: '100%', fontSize: 'var(--text-sm)', textAlign: 'left' }}
              onClick={() => setLeftOpen(false)}
            >
              {nav}
            </button>
          ))}
        </div>
      </Drawer>

      {/* Bottom Sheet */}
      <Drawer open={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom" title="Confirm Rebuild">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <p style={{ margin: 0 }}>You are about to rebuild the staging server environment. This will stop routing requests to current container instances.</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', marginTop: 'var(--space-2)' }}>
            <button className="rs-btn rs-btn--ghost" onClick={() => setBottomOpen(false)}>Cancel</button>
            <button className="rs-btn rs-btn--destructive" onClick={() => setBottomOpen(false)}>Rebuild Now</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
