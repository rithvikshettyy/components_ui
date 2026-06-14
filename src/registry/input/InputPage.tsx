import { useState } from 'react';
import { Input, FloatingInput, UnderlineInput, SearchInput, PasswordInput, Textarea } from './Input';
import '../../components/ComponentWorkspace.css';

export function InputPage() {
  const [search, setSearch] = useState('');
  const [textVal, setTextVal] = useState('');

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Input / Text Box</h1>
        <p className="component-description">
          Text input fields in multiple styles — from basic bordered inputs to animated floating labels, underline focus effects, and specialized search and password fields.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Basic Input</h2>
        <p className="showcase-desc">Standard bordered input with label, placeholder, hint text, and error state.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
            <Input label="Email" placeholder="you@example.com" hint="We'll never share your email." />
            <Input label="Username" placeholder="johndoe" error="Username is already taken." defaultValue="admin" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Floating Label</h2>
        <p className="showcase-desc">Label animates up into the border when the input is focused or has a value.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
            <FloatingInput label="Full Name" />
            <FloatingInput label="Email Address" type="email" />
            <FloatingInput label="Phone Number" error="Invalid phone number" defaultValue="123" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Animated Underline</h2>
        <p className="showcase-desc">Minimal underline style with an animated bar that expands from center on focus.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
            <UnderlineInput label="First Name" placeholder="Enter your first name" />
            <UnderlineInput label="Error State" error="This field is required" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Search Input</h2>
        <p className="showcase-desc">Rounded search field with icon, clearable button, and smooth focus ring.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <SearchInput
              placeholder="Search anything…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClear={() => setSearch('')}
            />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Password Input</h2>
        <p className="showcase-desc">Password field with show/hide toggle button for visibility control.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <PasswordInput label="Password" placeholder="Enter your password" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Textarea</h2>
        <p className="showcase-desc">Multi-line text area with optional character count and max length.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            <Textarea
              label="Bio"
              placeholder="Tell us about yourself…"
              maxChars={200}
              value={textVal}
              onChange={e => setTextVal(e.target.value)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
