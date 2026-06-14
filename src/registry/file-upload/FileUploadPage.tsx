import { FileUpload } from './FileUpload';
import { useToast } from '../toast/Toast';
import '../../components/ComponentWorkspace.css';

export function FileUploadPage() {
  const { success } = useToast();

  const handleUploadComplete = (file: File) => {
    success('Upload Complete', `The file "${file.name}" was uploaded successfully.`);
  };

  return (
    <div>
      <div className="component-header">
        <div className="component-category">Components</div>
        <h1 className="component-title">File Upload</h1>
        <p className="component-description">
          A drag-and-drop file upload zone supporting drag states, specific size validation limits, and simulated upload loaders.
        </p>
      </div>

      <section className="showcase-section">
        <h2 className="showcase-title">Interactive File Upload</h2>
        <p className="showcase-desc">Drag a local document onto the box or click to choose from your explorer. Limits file size to 2MB in this example.</p>
        <div className="showcase-canvas">
          <div className="showcase-canvas-inner">
            
            <FileUpload
              label="Invoice Document Upload"
              maxSizeMB={2}
              onUploadComplete={handleUploadComplete}
            />

          </div>
        </div>
      </section>
    </div>
  );
}
