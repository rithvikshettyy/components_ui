import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import './Card.css';

/* ── Basic Card ────────────────────────────────────────── */
interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Card({ title, subtitle, children, footer }: CardProps) {
  return (
    <div className="rs-card">
      {(title || subtitle) && (
        <div className="rs-card-header">
          {title && <h3 className="rs-card-title">{title}</h3>}
          {subtitle && <p className="rs-card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="rs-card-body">{children}</div>
      {footer && <div className="rs-card-footer">{footer}</div>}
    </div>
  );
}

/* ── Glow Effect Card ───────────────────────────────────── */
export function GlowCard({ title, children }: { title: string; children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className="rs-glow-card"
      onMouseMove={handleMouseMove}
      style={{
        // Passing coords as CSS custom properties
        ['--mouse-x' as any]: `${coords.x}px`,
        ['--mouse-y' as any]: `${coords.y}px`,
      }}
    >
      <div className="rs-glow-card-border" />
      <div className="rs-glow-card-content">
        <h3 className="rs-card-title" style={{ marginBottom: 'var(--space-2)' }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

/* ── 3D Tilt Card ───────────────────────────────────────── */
export function TiltCard({ title, children }: { title: string; children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const ry = (mouseX / (width / 2)) * 15;
    const rx = -(mouseY / (height / 2)) * 15;
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="rs-tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
    >
      <div className="rs-tilt-card-glow" />
      <div className="rs-tilt-card-content">
        <h3 className="rs-card-title" style={{ marginBottom: 'var(--space-2)' }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

/* ── Pricing Card ───────────────────────────────────────── */
interface PricingCardProps {
  tier: string;
  price: string;
  billing: string;
  features: string[];
  popular?: boolean;
  onSelect?: () => void;
}

export function PricingCard({ tier, price, billing, features, popular, onSelect }: PricingCardProps) {
  return (
    <div className={`rs-pricing-card ${popular ? 'rs-pricing-card--popular' : ''}`}>
      {popular && <span className="rs-pricing-card-badge">Most Popular</span>}
      <div className="rs-pricing-card-header">
        <h3 className="rs-pricing-card-tier">{tier}</h3>
        <div className="rs-pricing-card-price-container">
          <span className="rs-pricing-card-currency">$</span>
          <span className="rs-pricing-card-price">{price}</span>
          <span className="rs-pricing-card-billing">/{billing}</span>
        </div>
      </div>
      <div className="rs-pricing-card-body">
        <ul className="rs-pricing-card-features">
          {features.map((f, i) => (
            <li key={i} className="rs-pricing-card-feature">
              <svg className="rs-pricing-card-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rs-pricing-card-footer">
        <button 
          onClick={onSelect}
          className={`rs-pricing-card-button ${popular ? 'rs-pricing-card-button--popular' : ''}`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

/* ── Profile Card ───────────────────────────────────────── */
interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  role: string;
  bio: string;
  stats: { label: string; value: string }[];
}

export function ProfileCard({ avatarUrl, name, role, bio, stats }: ProfileCardProps) {
  return (
    <div className="rs-profile-card">
      <div className="rs-profile-card-cover" />
      <div className="rs-profile-card-header">
        <img src={avatarUrl} alt={name} className="rs-profile-card-avatar" />
        <h3 className="rs-profile-card-name">{name}</h3>
        <p className="rs-profile-card-role">{role}</p>
      </div>
      <p className="rs-profile-card-bio">{bio}</p>
      <div className="rs-profile-card-stats">
        {stats.map((stat, i) => (
          <div key={i} className="rs-profile-stat">
            <span className="rs-profile-stat-value">{stat.value}</span>
            <span className="rs-profile-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Glassmorphic Gradient Border Card ──────────────────── */
export function GlassCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rs-glass-card">
      <div className="rs-glass-card-border" />
      <div className="rs-glass-card-content">
        <h3 className="rs-card-title" style={{ marginBottom: 'var(--space-2)' }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
