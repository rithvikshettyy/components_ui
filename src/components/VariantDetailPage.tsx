import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sun, Moon, Copy, Check, Heart, Eye, Download, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { componentRegistry } from '../registry/registryData';
import { CodeBlock } from './CodeBlock';
import '../registry/button/Button.css';
import './ComponentWorkspace.css';
import './VariantDetailPage.css';

export function VariantDetailPage() {
  const { categorySlug, variantId } = useParams<{ categorySlug: string; variantId: string }>();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [canvasTheme, setCanvasTheme] = useState<'light' | 'dark'>('light');
  const [bgColor, setBgColor] = useState('#e8e8e8');
  const [liked, setLiked] = useState(false);

  // Retrieve matching variant
  const variant = componentRegistry.find(v => v.id === variantId);

  if (!variant) {
    return (
      <div className="detail-error-state">
        <h2>Component Variant Not Found</h2>
        <p>The variant identifier "{variantId}" does not exist in our design system registry.</p>
        <button className="rs-btn rs-btn--primary" onClick={() => navigate(`/components/${categorySlug || 'buttons'}`)}>
          Go back to gallery
        </button>
      </div>
    );
  }

  const handleCopyCode = async () => {
    const codeToCopy = activeTab === 'html' ? variant.htmlCode : variant.cssCode;
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: noop */
    }
  };

  const handleToggleTheme = () => {
    if (canvasTheme === 'light') {
      setCanvasTheme('dark');
      setBgColor('#18181b'); // Default dark color (slate-900)
    } else {
      setCanvasTheme('light');
      setBgColor('#e8e8e8'); // Default light color
    }
  };

  const colorPresets = [
    { name: 'light-gray', hex: '#e8e8e8', theme: 'light' as const },
    { name: 'white', hex: '#ffffff', theme: 'light' as const },
    { name: 'light-blue', hex: '#f0f9ff', theme: 'light' as const },
    { name: 'dark-gray', hex: '#18181b', theme: 'dark' as const },
    { name: 'black', hex: '#09090b', theme: 'dark' as const },
    { name: 'dark-navy', hex: '#0f172a', theme: 'dark' as const },
  ];

  const handleSelectPreset = (hex: string, themeVal: 'light' | 'dark') => {
    setBgColor(hex);
    setCanvasTheme(themeVal);
  };

  return (
    <motion.div 
      className="detail-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Back Header */}
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate(`/components/${categorySlug || 'buttons'}`)}>
          <ArrowLeft size={16} />
          <span>Go back</span>
        </button>

        <div className="detail-creator-meta">
          <span className="detail-variant-name">{variant.name}</span>
          <span className="detail-creator-tag">by <strong>{variant.creator}</strong></span>
        </div>

        <div className="detail-actions-right">
          <div className="detail-header-stats">
            <span className="detail-stat">
              <Eye size={14} />
              <span>{variant.views} views</span>
            </span>
          </div>
          <button 
            className={`detail-like-btn ${liked ? 'detail-like-btn--active' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
            <span>{variant.likes + (liked ? 1 : 0)}</span>
          </button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="detail-workspace-layout">
        {/* Canvas Pane (Left) */}
        <div className="detail-canvas-pane">
          {/* Controls Bar */}
          <div className="canvas-controls-bar">
            {/* Color Input */}
            <div className="canvas-color-selector">
              <input
                type="color"
                value={bgColor}
                onChange={e => setBgColor(e.target.value)}
                className="color-picker-input"
              />
              <input
                type="text"
                value={bgColor}
                onChange={e => setBgColor(e.target.value)}
                className="color-hex-text"
              />
            </div>

            {/* Presets */}
            <div className="color-presets">
              {colorPresets.map(preset => (
                <button
                  key={preset.name}
                  className={`color-preset-dot ${bgColor === preset.hex ? 'color-preset-dot--active' : ''}`}
                  style={{ backgroundColor: preset.hex }}
                  onClick={() => handleSelectPreset(preset.hex, preset.theme)}
                  title={preset.hex}
                />
              ))}
            </div>

            {/* Canvas Theme Toggle */}
            <button className="canvas-theme-toggle" onClick={handleToggleTheme} title="Toggle canvas background theme">
              {canvasTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Large Canvas Area */}
          <div 
            className="detail-canvas" 
            style={{ backgroundColor: bgColor }}
          >
            {/* Dot Matrix overlay */}
            <div className="detail-canvas-dot-grid" style={{ opacity: canvasTheme === 'light' ? 0.3 : 0.1 }} />
            
            {/* Live Component */}
            <div className="detail-component-display">
              {variant.render()}
            </div>
          </div>
        </div>

        {/* Code Pane (Right) */}
        <div className="detail-code-pane">
          {/* Tabs header */}
          <div className="code-tabs-header">
            <div className="code-tabs-buttons">
              <button
                className={`code-tab-button ${activeTab === 'html' ? 'code-tab-button--active' : ''}`}
                onClick={() => setActiveTab('html')}
              >
                <Code size={14} />
                <span>HTML / React</span>
              </button>
              <button
                className={`code-tab-button ${activeTab === 'css' ? 'code-tab-button--active' : ''}`}
                onClick={() => setActiveTab('css')}
              >
                <Code size={14} />
                <span>CSS</span>
              </button>
            </div>

            {/* Floating Copy Button */}
            <button className="code-pane-copy-btn" onClick={handleCopyCode}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Code blocks */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="code-block-wrapper"
          >
            <CodeBlock 
              code={activeTab === 'html' ? variant.htmlCode : variant.cssCode} 
              language={activeTab === 'html' ? 'tsx' : 'css'}
              showLineNumbers
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Option Bar */}
      <div className="detail-bottom-bar">
        <button className="rs-btn rs-btn--ghost flex-align" onClick={() => success('Saved', 'Added component to your dashboard favorites.')}>
          <Heart size={14} />
          <span>Save to favorites</span>
        </button>
        <button className="rs-btn rs-btn--ghost flex-align" onClick={() => success('Exported', 'Copied SVG frame coordinate details to clipboard.')}>
          <Download size={14} />
          <span>Copy to Figma</span>
        </button>
        <div className="export-react-dropdown">
          <button className="rs-btn rs-btn--primary flex-align" onClick={() => success('React Source', 'Copied JSX functional wrapper to clipboard.')}>
            <Download size={14} />
            <span>Export React</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Success feedback mock
const success = (title: string, desc: string) => {
  /* No-op placeholder, handles parent notifications through standard alerts */
  alert(`${title}: ${desc}`);
};
