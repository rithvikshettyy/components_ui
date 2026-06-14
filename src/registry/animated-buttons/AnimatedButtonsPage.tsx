import { useState } from 'react';
import {
  ShimmerButton, MagneticButton, RippleButton, GradientBorderButton,
  NeonPulseButton, ArrowSlideButton, LoadingButton, SparkleButton, ElectricButton,
} from './AnimatedButtons';
import '../../components/ComponentWorkspace.css';

export function AnimatedButtonsPage() {
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleLoadingClick = () => {
    setLoadingState('loading');
    setTimeout(() => {
      setLoadingState('success');
      setTimeout(() => setLoadingState('idle'), 1500);
    }, 2000);
  };

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Animated Buttons</h1>
        <p className="component-description">
          A showcase of creative button designs with unique animations and interactions — from subtle shimmers to magnetic hover effects and loading state transitions.
        </p>
      </div>

      {/* Shimmer */}
      <section className="showcase-section">
        <h2 className="showcase-title">Shimmer Button</h2>
        <p className="showcase-desc">A continuous light shimmer sweeps across the button surface, creating a premium feel.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', flexWrap: 'wrap' }}>
              <ShimmerButton size="sm">Small</ShimmerButton>
              <ShimmerButton size="md">Shimmer Effect</ShimmerButton>
              <ShimmerButton size="lg">Large Button</ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Magnetic */}
      <section className="showcase-section">
        <h2 className="showcase-title">Magnetic Button</h2>
        <p className="showcase-desc">The button follows your cursor with a subtle magnetic pull effect. Move your mouse over it.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <MagneticButton>Hover me — I follow</MagneticButton>
          </div>
        </div>
      </section>

      {/* Ripple */}
      <section className="showcase-section">
        <h2 className="showcase-title">Ripple Button</h2>
        <p className="showcase-desc">Material Design-inspired ripple effect originating from your click point.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <RippleButton variant="primary">Click for Ripple</RippleButton>
              <RippleButton variant="secondary">Secondary Ripple</RippleButton>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Border */}
      <section className="showcase-section">
        <h2 className="showcase-title">Gradient Border</h2>
        <p className="showcase-desc">A rotating conic gradient creates a colorful animated border effect.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <GradientBorderButton>Gradient Border</GradientBorderButton>
          </div>
        </div>
      </section>

      {/* Neon Pulse */}
      <section className="showcase-section">
        <h2 className="showcase-title">Neon Pulse</h2>
        <p className="showcase-desc">Glow effect on hover with multiple neon color options.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <NeonPulseButton color="cyan">Neon Cyan</NeonPulseButton>
              <NeonPulseButton color="pink">Neon Pink</NeonPulseButton>
              <NeonPulseButton color="green">Neon Green</NeonPulseButton>
            </div>
          </div>
        </div>
      </section>

      {/* Arrow Slide */}
      <section className="showcase-section">
        <h2 className="showcase-title">Arrow Slide</h2>
        <p className="showcase-desc">Arrow icon slides on hover, signaling forward navigation or action.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <ArrowSlideButton>Get Started</ArrowSlideButton>
          </div>
        </div>
      </section>

      {/* Loading State */}
      <section className="showcase-section">
        <h2 className="showcase-title">Loading State Transition</h2>
        <p className="showcase-desc">Smooth transition from label → spinner → success checkmark.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <LoadingButton
              loading={loadingState === 'loading'}
              success={loadingState === 'success'}
              onClick={handleLoadingClick}
            >
              Submit Form
            </LoadingButton>
          </div>
        </div>
      </section>

      {/* Sparkle + Electric */}
      <section className="showcase-section">
        <h2 className="showcase-title">Special Effect Buttons</h2>
        <p className="showcase-desc">Gradient fills with animated icon effects for premium CTAs.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <SparkleButton>Generate AI</SparkleButton>
              <ElectricButton>Power Up</ElectricButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
