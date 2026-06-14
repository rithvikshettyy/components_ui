import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FormSubmitPage } from './registry/form-submit-page/FormSubmitPage';
import { ToastProvider } from './registry/toast/Toast';
import { CategoryGridPage } from './components/CategoryGridPage';
import { VariantDetailPage } from './components/VariantDetailPage';
import { CommandPalette, type CommandItem } from './registry/command-palette/CommandPalette';
import { componentRegistry } from './registry/registryData';
import { Compass, Cpu } from 'lucide-react';

import './registry/button/Button.css';
import './components/Layout.css';

function AppContent() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Listen for global keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Map component registry and category pages to Command Palette search items
  const searchItems: CommandItem[] = [
    ...componentRegistry.map(variant => ({
      id: variant.id,
      title: variant.name,
      category: `Components - ${variant.category.charAt(0).toUpperCase() + variant.category.slice(1)}`,
      icon: <Cpu size={16} />,
      action: () => navigate(`/components/${variant.category}/${variant.id}`)
    })),
    {
      id: 'nav-all',
      title: 'View All Components',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/')
    },
    {
      id: 'nav-buttons',
      title: 'Go to Buttons Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/buttons')
    },
    {
      id: 'nav-checkboxes',
      title: 'Go to Checkboxes Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/checkboxes')
    },
    {
      id: 'nav-toggles',
      title: 'Go to Toggle switches Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/toggles')
    },
    {
      id: 'nav-cards',
      title: 'Go to Cards Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/cards')
    },
    {
      id: 'nav-loaders',
      title: 'Go to Loaders Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/loaders')
    },
    {
      id: 'nav-inputs',
      title: 'Go to Inputs Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/inputs')
    },
    {
      id: 'nav-radio-buttons',
      title: 'Go to Radio buttons Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/radio-buttons')
    },
    {
      id: 'nav-forms',
      title: 'Go to Forms Category',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => navigate('/components/forms')
    }
  ];

  return (
    <div className="app-shell">
      <Header 
        onMobileMenuToggle={() => setMobileMenuOpen(prev => !prev)} 
        onSearchClick={() => setSearchOpen(true)}
      />

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
              <Route path="/" element={<CategoryGridPage />} />
              <Route path="/components/all" element={<Navigate to="/" replace />} />
              <Route path="/components/form-submit" element={<FormSubmitPage />} />
              {/* Dynamic Category Grid */}
              <Route path="/components/:categorySlug" element={<CategoryGridPage />} />
              {/* Dynamic Variant Detail (UIverse style) */}
              <Route path="/components/:categorySlug/:variantId" element={<VariantDetailPage />} />
            </Routes>
          </div>
        </main>
      </div>

      <CommandPalette 
        open={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        items={searchItems} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ToastProvider>
  );
}
