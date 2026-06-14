import React, { useState } from 'react';
import './Forms.css';

export function SleekLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signing in as ${email}`);
  };

  return (
    <form className="rs-sleek-form" onSubmit={handleSubmit}>
      <h3 className="rs-sleek-form-title">Welcome Back</h3>
      <p className="rs-sleek-form-subtitle">Enter credentials to access your console.</p>
      
      <div className="rs-sleek-form-group">
        <input 
          type="email" 
          placeholder="Email address" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="rs-sleek-form-group">
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="rs-sleek-form-submit">
        Continue
      </button>
    </form>
  );
}

export function BetaSignUpFormPreview() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${name}`);
  };

  return (
    <form className="rs-sleek-form rs-sleek-form--accent" onSubmit={handleSubmit}>
      <h3 className="rs-sleek-form-title">Join Beta</h3>
      <p className="rs-sleek-form-subtitle">Deploy your staging sandbox instantly.</p>
      
      <div className="rs-sleek-form-group">
        <input 
          type="text" 
          placeholder="Full name" 
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="rs-sleek-form-group">
        <input 
          type="email" 
          placeholder="Work email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="rs-sleek-form-submit">
        Submit Application
      </button>
    </form>
  );
}
