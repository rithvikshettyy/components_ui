import { Search, Sun, Moon, Menu } from 'lucide-react';
import logoImg from '../7815618b0663fa82f73fb96f7383edae.jpg';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export function Header({ onMobileMenuToggle }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <button
          className="header-icon-btn mobile-menu-btn"
          onClick={onMobileMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <Menu />
        </button>
        <a href="/" className="header-brand">
          <img src={logoImg} alt="RS UI Logo" className="header-brand-logo" />
          <span>RS UI</span>
        </a>
      </div>

      <div className="header-center">
        <button className="header-search" aria-label="Search components">
          <Search className="header-search-icon" />
          <span className="header-search-text">Search components…</span>
          <kbd className="header-search-kbd">⌘K</kbd>
        </button>
      </div>

      <div className="header-right">
        <a
          href="https://github.com/rithvikshetty"
          target="_blank"
          rel="noopener noreferrer"
          className="header-icon-btn"
          aria-label="View on GitHub"
        >
          <GithubIcon />
        </a>
        <button
          className="header-icon-btn theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <Sun
            className={`theme-toggle-icon ${
              theme === 'light' ? 'theme-toggle-icon--visible' : 'theme-toggle-icon--hidden'
            }`}
          />
          <Moon
            className={`theme-toggle-icon ${
              theme === 'dark' ? 'theme-toggle-icon--visible' : 'theme-toggle-icon--hidden'
            }`}
          />
        </button>
      </div>
    </header>
  );
}
