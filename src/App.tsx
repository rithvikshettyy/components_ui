import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FormSubmitPage } from './registry/form-submit-page/FormSubmitPage';
import { ToastProvider } from './registry/toast/Toast';
import { CategoryGridPage } from './components/CategoryGridPage';
import { VariantDetailPage } from './components/VariantDetailPage';

import './components/Layout.css';

function IntroductionPage() {
  return (
    <div>
      <div className="component-header">
        <div className="component-category">Getting Started</div>
        <h1 className="component-title">Introduction</h1>
        <p className="component-description">
          RS UI is a collection of beautifully designed, accessible components that you can copy and paste into your apps. Built with clean React, TypeScript, and vanilla CSS — no runtime dependencies, no lock-in.
        </p>
      </div>

      <div style={{ marginTop: 'var(--space-8)' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          fontWeight: 700,
          marginBottom: 'var(--space-4)',
        }}>
          Philosophy
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          maxWidth: '65ch',
        }}>
          {[
            {
              title: 'Copy & Paste',
              text: 'These are not npm packages. Pick the components you need, copy the source code, and own it entirely. Customize freely.',
            },
            {
              title: 'Accessible by Default',
              text: 'Every component uses semantic HTML, proper ARIA attributes, and supports keyboard navigation. Screen-reader tested.',
            },
            {
              title: 'Framework Flexible',
              text: 'Works with Next.js, Vite, Remix, or any React setup. Each component includes framework-specific installation guides.',
            },
            {
              title: 'Dark Mode Ready',
              text: 'Every component is designed for both light and dark themes using CSS custom properties. No theme provider required.',
            },
          ].map(item => (
            <div key={item.title}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                marginBottom: 'var(--space-2)',
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-normal)',
                fontSize: 'var(--text-base)',
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ToastProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Header onMobileMenuToggle={() => setMobileMenuOpen(prev => !prev)} />

          <div className="app-body">
            <Sidebar
              collapsed={sidebarCollapsed}
              mobileOpen={mobileMenuOpen}
              onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
              onMobileClose={() => setMobileMenuOpen(false)}
            />

            <main className={`main-content ${sidebarCollapsed ? 'main-content--sidebar-collapsed' : ''}`}>
              <div className="main-content-inner">
                <Routes>
                  <Route path="/" element={<Navigate to="/components/introduction" replace />} />
                  <Route path="/components/introduction" element={<IntroductionPage />} />
                  <Route path="/components/installation" element={<IntroductionPage />} />
                  <Route path="/components/form-submit" element={<FormSubmitPage />} />
                  {/* Dynamic Category Grid */}
                  <Route path="/components/:categorySlug" element={<CategoryGridPage />} />
                  {/* Dynamic Variant Detail (UIverse style) */}
                  <Route path="/components/:categorySlug/:variantId" element={<VariantDetailPage />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
}
