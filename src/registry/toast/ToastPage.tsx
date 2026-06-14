import { useToast } from './Toast';
import '../../components/ComponentWorkspace.css';

export function ToastPage() {
  const { success, error, warning, info, toast } = useToast();

  const triggerActionToast = () => {
    toast({
      type: 'info',
      title: 'Repository Forked',
      description: 'The repository was successfully duplicated to your personal account.',
      action: {
        label: 'View Repo',
        onClick: () => {
          alert('Navigating to GitHub repository…');
        },
      },
    });
  };

  const triggerLongToast = () => {
    toast({
      type: 'success',
      title: 'Data Synced',
      description: 'All pending records have been uploaded. Tap undo within 10 seconds to revert this operation.',
      duration: 10000,
      action: {
        label: 'Undo',
        onClick: () => {
          success('Sync Undone', 'Reverting upload of local changes.');
        },
      },
    });
  };

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">Toast Notification</h1>
        <p className="component-description">
          Temporary dismissible notices triggered by app events, displaying status alerts, stacked queue animations, and embedded action triggers.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Notification Status Types</h2>
        <p className="showcase-desc">Success, Error, Warning, and Informative toast designs using status colors and matching icons.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button className="rs-btn rs-btn--secondary" onClick={() => success('Success Action', 'Your profile updates were saved successfully.')}>
              Trigger Success
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={() => error('Database Error', 'Unable to reach PostgreSQL cluster on port 5432.')}>
              Trigger Error
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={() => warning('High Resource Usage', 'Memory consumption has exceeded 90% threshold.')}>
              Trigger Warning
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={() => info('New Feature Available', 'Check out the new responsive command search.')}>
              Trigger Info
            </button>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="showcase-title">Advanced Interactions</h2>
        <p className="showcase-desc">Toasts containing secondary action triggers, custom durations, and multi-step dialog cascades.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner" style={{ gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button className="rs-btn rs-btn--primary" onClick={triggerActionToast}>
              Trigger Action Toast
            </button>
            <button className="rs-btn rs-btn--secondary" onClick={triggerLongToast}>
              Trigger 10s Toast (with Undo)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
