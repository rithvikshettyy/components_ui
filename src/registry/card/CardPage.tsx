import { Card, GlowCard, TiltCard, PricingCard, ProfileCard } from './Card';
import '../../components/ComponentWorkspace.css';

export function CardPage() {
  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Cards</h1>
        <p className="component-description">
          Versatile content containers ranging from standard panels to interactive glow effects, 3D depth tilt cards, SaaS pricing options, and user profiles.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Basic Card</h2>
        <p className="showcase-desc">Simple container structure with header titles, subtitles, a separator, and action footer layout.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <Card
              title="Project Alpha"
              subtitle="Updated 2 hours ago"
              footer={
                <>
                  <button className="rs-btn rs-btn--ghost" style={{ padding: 'var(--space-2) var(--space-3)', fontSize: 'var(--text-xs)' }}>Cancel</button>
                  <button className="rs-btn rs-btn--primary" style={{ padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-xs)', borderRadius: 'var(--radius-sm)' }}>Deploy</button>
                </>
              }
            >
              <p>A new web framework engineered for performance, modularity, and pristine type safety. Includes out-of-the-box hot reload and automatic asset bundling.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Glow Hover Card</h2>
        <p className="showcase-desc">Premium card featuring a radial gradient border highlight that dynamically tracks the user's mouse coordinates.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <GlowCard title="Interactive Analytics">
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                Track user behavior, engagement funnels, and retention curves in real-time. Experience lightning-fast query response times and responsive custom reports.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">3D Tilt Card</h2>
        <p className="showcase-desc">Immersive card that tilts in 3D space on mouse hover, using perspective transforms and a moving light reflection effect.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <TiltCard title="3D Spatial Engine">
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
                Move your cursor across this container to see the parallax projection. Perfect for highlight cards, visual banners, and dashboard hero callouts.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Pricing Cards</h2>
        <p className="showcase-desc">SaaS pricing tier configurations featuring custom checkbox lists, special popular tags, and distinct button designs.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <PricingCard
              tier="Developer"
              price="0"
              billing="month"
              features={['1 user seat', 'Up to 3 active projects', 'Community discord support', 'Basic edge functions']}
            />
            <PricingCard
              tier="Pro Team"
              price="39"
              billing="month"
              features={['Unlimited projects', 'Up to 10 user seats', '24/7 priority mail support', 'Advanced edge analytics', 'Custom domain mapping']}
              popular
            />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Profile Card</h2>
        <p className="showcase-desc">Social layout structure containing cover gradients, centered avatar overlays, biological text, and numerical statistics.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <ProfileCard
              avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%236366f1'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='80' height='80' fill='url(%23g)'/><circle cx='40' cy='32' r='14' fill='%23ffffff'/><path d='M20,62 C20,48 30,44 40,44 C50,44 60,48 60,62' fill='%23ffffff'/></svg>"
              name="Rithvik Shetty"
              role="Lead UI Designer & Frontend Engineer"
              bio="Building high-performance design systems and fluid user experiences. Passionate about SVG animation, custom interaction layers, and cool CSS grids."
              stats={[
                { label: 'Projects', value: '28' },
                { label: 'Followers', value: '4.8k' },
                { label: 'Stars', value: '1.2k' },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
