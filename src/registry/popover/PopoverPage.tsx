import { Popover } from './Popover';
import '../../components/ComponentWorkspace.css';

export function PopoverPage() {
  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Popover</h1>
        <p className="component-description">
          Click-triggered interactive containers showing rich menus, controls, or profiles positioned relative to parent triggers.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Interactive Popovers</h2>
        <p className="showcase-desc">Click triggers to view popovers containing text boxes, lists, or custom forms that retain mouse focus.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {/* Popover Form */}
            <Popover trigger={<button className="rs-btn rs-btn--primary">Dimensions Config</button>}>
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '220px' }}>
                <h4 style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--color-text)', fontWeight: 600 }}>Set Grid Properties</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <label style={{ fontSize: 'var(--text-xxs)', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Width</label>
                  <input type="text" defaultValue="100%" style={{ background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '4px var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <label style={{ fontSize: 'var(--text-xxs)', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Height</label>
                  <input type="text" defaultValue="auto" style={{ background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '4px var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <label style={{ fontSize: 'var(--text-xxs)', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Max Columns</label>
                  <input type="number" defaultValue="12" style={{ background: 'var(--color-surface-hover)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '4px var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text)' }} />
                </div>
              </div>
            </Popover>

            {/* Popover User Profile Info */}
            <Popover position="top" trigger={<button className="rs-btn rs-btn--secondary">User Card</button>}>
              <div style={{ display: 'flex', gap: 'var(--space-3)', width: '240px', textAlign: 'left' }}>
                <img
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><rect width='40' height='40' fill='%236366f1'/><circle cx='20' cy='16' r='7' fill='%23ffffff'/><path d='M10,31 C10,24 15,22 20,22 C25,22 30,24 30,31' fill='%23ffffff'/></svg>"
                  alt="avatar"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text)' }}>Rithvik Shetty</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>@rithvikshetty</span>
                  <p style={{ margin: 0, fontSize: 'var(--text-xxs)', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                    Principal Frontend Developer and designer. Creator of RS UI.
                  </p>
                </div>
              </div>
            </Popover>

          </div>
        </div>
      </section>
    </div>
  );
}
