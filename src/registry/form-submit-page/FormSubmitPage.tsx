import { useState } from 'react';
import { Input } from '../input/Input';
import { IOSToggle } from '../toggle/Toggle';
import { Checkbox, RadioGroup } from '../checkbox/Checkbox';
import { DatePicker } from '../date-picker/DatePicker';
import { FileUpload } from '../file-upload/FileUpload';
import { ShimmerButton } from '../animated-buttons/AnimatedButtons';
import { useToast } from '../toast/Toast';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import './FormSubmitPage.css';

export function FormSubmitPage() {
  const { success, error } = useToast();
  
  // Form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('developer');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [marketing, setMarketing] = useState(false);
  const [agree, setAgree] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = [
    { value: 'designer', label: 'Product Designer' },
    { value: 'developer', label: 'Frontend Engineer' },
    { value: 'manager', label: 'Product Manager' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required.';
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!agree) newErrors.agree = 'You must accept the terms of service.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      error('Validation Failed', 'Please correct the errors before submitting.');
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate submission API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      success('Form Submitted', 'Your workspace application has been received!');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="rs-form-success-container">
        <div className="rs-form-success-card">
          <CheckCircle2 size={48} className="rs-form-success-icon" />
          <h2 className="rs-form-success-title">Application Submitted</h2>
          <p className="rs-form-success-desc">
            Thank you, <strong>{name}</strong>! Your application has been logged. We will review your profile and reach out to <strong>{email}</strong> shortly.
            {uploadedFile && (
              <span style={{ display: 'block', marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-text)' }}>
                Uploaded: {uploadedFile.name}
              </span>
            )}
          </p>
          <button
            className="rs-btn rs-btn--primary"
            onClick={() => {
              setIsSubmitted(false);
              setName('');
              setEmail('');
              setAgree(false);
              setMarketing(false);
              setUploadedFile(null);
            }}
          >
            Apply Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Pages</div>
        <h1 className="component-title">Creative Submission Form</h1>
        <p className="component-description">
          An integrated form submitting data and handling real-time validation feedback. Combines date pickers, dropdown selects, toggles, file uploads, and animated buttons.
        </p>
      </div>

      <div className="rs-form-layout">
        <form onSubmit={handleSubmit} className="rs-form-card">
          <h3 className="rs-form-card-title">Join the Beta</h3>
          <p className="rs-form-card-subtitle">Complete your team details to initialize your staging sandbox.</p>

          <div className="rs-form-group-row">
            <Input
              label="Full Name"
              placeholder="Rithvik Shetty"
              value={name}
              onChange={e => setName(e.target.value)}
              error={errors.name}
            />
            
            <Input
              label="Work Email"
              placeholder="you@company.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
            />
          </div>

          <div className="rs-form-section-divider" />

          <div className="rs-form-group-row" style={{ alignItems: 'flex-start' }}>
            <div>
              <label className="rs-form-input-label" style={{ marginBottom: 'var(--space-2)' }}>Your Primary Role</label>
              <RadioGroup
                name="form-role"
                options={roles}
                value={role}
                onChange={setRole}
              />
            </div>

            <DatePicker
              label="Available Start Date"
              value={startDate}
              onChange={setStartDate}
            />
          </div>

          <div className="rs-form-section-divider" />

          <div className="rs-form-group">
            <FileUpload
              label="Upload Resume / Portfolio (Optional)"
              maxSizeMB={3}
              onUploadComplete={setUploadedFile}
            />
          </div>

          <div className="rs-form-section-divider" />

          <div className="rs-form-group rs-form-toggle-row">
            <div className="rs-form-toggle-meta">
              <span className="rs-form-toggle-title">Receive Beta Updates</span>
              <p className="rs-form-toggle-desc">Receive minor release notices and developer newsletters once a month.</p>
            </div>
            <IOSToggle checked={marketing} onChange={setMarketing} />
          </div>

          <div className="rs-form-group">
            <Checkbox
              checked={agree}
              onChange={setAgree}
              label="I agree to the Terms of Service and Privacy Policy details"
            />
            {errors.agree && <span className="rs-form-error-msg">{errors.agree}</span>}
          </div>

          <div className="rs-form-footer">
            <button
              type="button"
              className="rs-btn rs-btn--ghost"
              onClick={() => {
                setName('');
                setEmail('');
                setAgree(false);
                setMarketing(false);
                setUploadedFile(null);
              }}
            >
              Reset
            </button>
            <ShimmerButton type="submit" disabled={loading}>
              {loading ? 'Submitting…' : 'Submit Application'}
            </ShimmerButton>
          </div>
        </form>

        {/* Sidebar Info Section */}
        <div className="rs-form-info-panel">
          <h4 className="rs-form-info-title">Why Join Our Beta?</h4>
          <ul className="rs-form-info-list">
            <li>
              <ChevronRight size={16} />
              <span>Full access to pre-release API surfaces.</span>
            </li>
            <li>
              <ChevronRight size={16} />
              <span>Complimentary 50GB staging container credits.</span>
            </li>
            <li>
              <ChevronRight size={16} />
              <span>Direct Slack communications channel with build architects.</span>
            </li>
          </ul>

          <div className="rs-form-info-quote">
            <p>"RS UI components streamlined our platform revamp, reducing form design workflows by 70%."</p>
            <span>— Tech Lead, Vercel Core Team</span>
          </div>
        </div>
      </div>
    </div>
  );
}
