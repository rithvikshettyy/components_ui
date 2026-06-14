import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Eye, Heart, Search, SlidersHorizontal, Grid3X3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { componentRegistry } from '../registry/registryData';
import './CategoryGridPage.css';

export function CategoryGridPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThemeFilter, setActiveThemeFilter] = useState<'all' | 'css'>('all');
  const [sortBy, setSortBy] = useState<'random' | 'popular'>('random');

  const slug = categorySlug || 'all';

  // Retrieve matching variants
  const matchingVariants = componentRegistry.filter(variant => {
    if (slug === 'all') {
      return true;
    }
    if (slug === 'inputs') {
      return variant.category === 'inputs' || 
             variant.category === 'date-picker' || 
             variant.category === 'dropbox' ||
             variant.category === 'file-upload' ||
             variant.category === 'command-palette';
    }
    if (slug === 'checkboxes') {
      return variant.category === 'checkboxes' && variant.id !== 'radio-group';
    }
    if (slug === 'radio-buttons') {
      return variant.category === 'radio-buttons' || variant.id === 'radio-group';
    }
    if (slug === 'loaders') {
      return variant.category === 'loaders' || variant.id === 'loading-button';
    }
    if (slug === 'forms') {
      return variant.category === 'forms' || variant.id === 'form-submit-page';
    }
    return variant.category === slug;
  });

  // Filter based on search query
  const filteredVariants = matchingVariants.filter(v =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryTitle = (s: string) => {
    switch (s) {
      case 'all':
        return 'All Components';
      case 'buttons':
        return 'Buttons';
      case 'checkboxes':
        return 'Checkboxes';
      case 'toggles':
        return 'Toggle Switches';
      case 'cards':
        return 'Cards & Panels';
      case 'loaders':
        return 'Loaders & Spinners';
      case 'inputs':
        return 'Inputs & Controls';
      case 'radio-buttons':
        return 'Radio Buttons';
      case 'forms':
        return 'Form Templates';
      default:
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
  };

  return (
    <motion.div 
      className="grid-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="grid-page-header">
        <div className="grid-page-category">Elements</div>
        <h1 className="grid-page-title">{getCategoryTitle(slug)}</h1>
        <p className="grid-page-subtitle">
          Open-source, highly aesthetic React components built with vanilla CSS.
        </p>
      </div>

      {/* Filter Action Bar */}
      <div className="filter-action-bar">
        <div className="filter-tabs">
          <button
            className={`filter-tab-btn ${activeThemeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveThemeFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-tab-btn ${activeThemeFilter === 'css' ? 'active' : ''}`}
            onClick={() => setActiveThemeFilter('css')}
          >
            CSS
          </button>
        </div>

        <div className="filter-controls-group">
          {/* Sorting */}
          <div className="sort-select-wrapper">
            <SlidersHorizontal size={14} className="sort-icon" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="sort-select"
            >
              <option value="random">Sort: Randomized</option>
              <option value="popular">Sort: Popularity</option>
            </select>
          </div>

          {/* Search bar */}
          <div className="grid-search-container">
            <Search size={14} className="grid-search-icon" />
            <input
              type="text"
              placeholder="Search tags, users..."
              className="grid-search-input"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Component Grid */}
      {filteredVariants.length > 0 ? (
        <motion.div 
          className="component-tile-grid"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.04
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {filteredVariants.map(variant => (
            <motion.div
              key={variant.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="component-tile"
              onClick={(e) => {
                // If the click is inside the component container, let the interactive element handle it natively
                const target = e.target as HTMLElement;
                if (target.closest('.tile-component-container')) {
                  return;
                }
                // Otherwise, navigate to the detail page
                navigate(`/components/${slug}/${variant.id}`);
              }}
            >
              <div className="tile-canvas-wrapper">
                {/* Dot Matrix background */}
                <div className="tile-dot-grid" />
                
                {/* Dynamic ambient glow */}
                <div className="tile-ambient-glow" />

                <div className="tile-component-container">
                  {variant.render()}
                </div>
              </div>
              <div className="tile-meta">
                <span className="tile-creator">{variant.creator}</span>
                <div className="tile-stats">
                  <span className="tile-stat-item">
                    <Eye size={12} />
                    <span>{variant.views}</span>
                  </span>
                  <span className="tile-stat-item">
                    <Heart size={12} />
                    <span>{variant.likes}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="grid-empty-state">
          <Grid3X3 size={48} className="empty-icon" />
          <h3>No elements found</h3>
          <p>We couldn't find any variants matching your criteria. Try adjusting your search query.</p>
        </div>
      )}
    </motion.div>
  );
}
