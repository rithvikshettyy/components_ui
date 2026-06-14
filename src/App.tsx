import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FormSubmitPage } from './registry/form-submit-page/FormSubmitPage';
import { ToastProvider } from './registry/toast/Toast';
import { CategoryGridPage } from './components/CategoryGridPage';
import { VariantDetailPage } from './components/VariantDetailPage';

import './components/Layout.css';

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
                  <Route path="/" element={<Navigate to="/components/all" replace />} />
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
