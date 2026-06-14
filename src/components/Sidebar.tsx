import { NavLink } from 'react-router-dom';
import { 
  BookOpen, 
  CirclePlay, 
  CheckCircle, 
  ArrowLeftRight, 
  FileText, 
  Loader, 
  Type, 
  CircleDot, 
  ClipboardList,
  PanelLeftClose, 
  PanelLeft,
  X
} from 'lucide-react';

interface SidebarItem {
  label: string;
  slug: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  { label: 'All', slug: 'all', icon: BookOpen },
  { label: 'Buttons', slug: 'buttons', icon: CirclePlay },
  { label: 'Checkboxes', slug: 'checkboxes', icon: CheckCircle },
  { label: 'Toggle switches', slug: 'toggles', icon: ArrowLeftRight },
  { label: 'Cards', slug: 'cards', icon: FileText },
  { label: 'Loaders', slug: 'loaders', icon: Loader },
  { label: 'Inputs', slug: 'inputs', icon: Type },
  { label: 'Radio buttons', slug: 'radio-buttons', icon: CircleDot },
  { label: 'Forms', slug: 'forms', icon: ClipboardList },
];

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onMobileClose: () => void;
}

export function Sidebar({ collapsed, mobileOpen, onToggleCollapse, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${mobileOpen ? 'sidebar-overlay--visible' : ''}`}
        onClick={onMobileClose}
        aria-hidden="true"
      />

      <aside
        className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${mobileOpen ? 'sidebar--mobile-open' : ''}`}
        role="navigation"
        aria-label="Component navigation"
      >
        {/* Mobile close button */}
        <div className="sidebar-mobile-close">
          <button onClick={onMobileClose} aria-label="Close sidebar">
            <X size={18} />
          </button>
        </div>

        {/* Desktop collapse toggle */}
        <div className="sidebar-toggle">
          <button
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <PanelLeft /> : <PanelLeftClose />}
          </button>
        </div>

        {/* Flat list of components */}
        <div className="sidebar-menu">
          {sidebarItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.slug}
                to={item.slug === 'all' ? '/' : `/components/${item.slug}`}
                end={item.slug === 'all'}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
                }
                onClick={onMobileClose}
              >
                <Icon className="sidebar-item-icon" size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </aside>
    </>
  );
}
