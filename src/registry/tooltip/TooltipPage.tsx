import { Tooltip } from './Tooltip';
import '../../components/ComponentWorkspace.css';

export function TooltipPage() {
  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Tooltip</h1>
        <p className="component-description">
          Brief, contextual help text that overlays above, below, or to the sides of elements when focused or hovered.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Directional Tooltips</h2>
        <p className="showcase-desc">Hover to view help bubbles positioned at different locations relative to the trigger element.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tooltip content="Tooltip displayed on top position" position="top">
              <button className="rs-btn rs-btn--secondary">Tooltip Top</button>
            </Tooltip>
            <Tooltip content="Tooltip displayed on bottom position" position="bottom">
              <button className="rs-btn rs-btn--secondary">Tooltip Bottom</button>
            </Tooltip>
            <Tooltip content="Tooltip displayed on left position" position="left">
              <button className="rs-btn rs-btn--secondary">Tooltip Left</button>
            </Tooltip>
            <Tooltip content="Tooltip displayed on right position" position="right">
              <button className="rs-btn rs-btn--secondary">Tooltip Right</button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Rich Content & Speed Controls</h2>
        <p className="showcase-desc">Tooltips containing formatted HTML structures, bold titles, secondary labels, and custom animation delays.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tooltip
              position="top"
              content={
                <div style={{ textAlign: 'left', minWidth: '150px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '2px' }}>Merge Branch?</span>
                  <span style={{ color: 'var(--color-text-secondary)', display: 'block', fontSize: 'var(--text-xxs)' }}>
                    This action will combine branch <strong>main</strong> into staging.
                  </span>
                </div>
              }
            >
              <button className="rs-btn rs-btn--primary">Rich Formatting</button>
            </Tooltip>

            <Tooltip content="Flashes instantly on hover" delay={0} position="bottom">
              <button className="rs-btn rs-btn--secondary">Instant (0ms delay)</button>
            </Tooltip>

            <Tooltip content="Shows after 1 second delay" delay={1000} position="bottom">
              <button className="rs-btn rs-btn--secondary">Slow (1000ms delay)</button>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
}
