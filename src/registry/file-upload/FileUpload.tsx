import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import { UploadCloud, File, X, CheckCircle2, AlertCircle } from 'lucide-react';
import './FileUpload.css';

interface FileUploadProps {
  accept?: string;
  maxSizeMB?: number;
  onUploadComplete?: (file: File) => void;
  label?: string;
}

interface UploadStatus {
  file: File;
  progress: number;
  status: 'idle' | 'uploading' | 'success' | 'error';
  errorMsg?: string;
}

export function FileUpload({ accept = '*/*', maxSizeMB = 5, onUploadComplete, label }: FileUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [upload, setUpload] = useState<UploadStatus | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const processFile = (file: File) => {
    // Check size limit
    if (file.size > maxSizeMB * 1024 * 1024) {
      setUpload({
        file,
        progress: 0,
        status: 'error',
        errorMsg: `File size exceeds ${maxSizeMB}MB limit.`,
      });
      return;
    }

    setUpload({
      file,
      progress: 0,
      status: 'uploading',
    });

    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setUpload(prev => {
        if (!prev) return null;
        if (currentProgress >= 100) {
          clearInterval(interval);
          if (onUploadComplete) onUploadComplete(file);
          return {
            ...prev,
            progress: 100,
            status: 'success',
          };
        }
        return {
          ...prev,
          progress: currentProgress,
        };
      });
    }, 200);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const clearUpload = () => {
    setUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerInputClick = () => {
    fileInputRef.current?.click();
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="rs-upload-wrapper">
      {label && <label className="rs-upload-label">{label}</label>}
      
      {!upload ? (
        <div
          className={`rs-upload-zone ${isDragActive ? 'rs-upload-zone--active' : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={triggerInputClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="rs-upload-input"
            accept={accept}
            onChange={handleChange}
          />
          <UploadCloud size={32} className="rs-upload-zone-icon" />
          <div className="rs-upload-zone-text">
            <span className="rs-upload-highlight">Click to upload</span> or drag and drop
          </div>
          <p className="rs-upload-hint">Limit {maxSizeMB}MB per file (Any format)</p>
        </div>
      ) : (
        <div className="rs-upload-progress-card">
          <div className="rs-upload-file-info">
            <File size={24} className="rs-upload-file-icon" />
            <div className="rs-upload-file-meta">
              <span className="rs-upload-file-name">{upload.file.name}</span>
              <span className="rs-upload-file-size">{formatSize(upload.file.size)}</span>
            </div>
            {upload.status !== 'uploading' && (
              <button className="rs-upload-clear-btn" onClick={clearUpload} aria-label="Remove file">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="rs-upload-status-row">
            {upload.status === 'uploading' && (
              <div className="rs-upload-progress-container">
                <div className="rs-upload-progress-bar" style={{ width: `${upload.progress}%` }} />
                <span className="rs-upload-percentage">{upload.progress}%</span>
              </div>
            )}

            {upload.status === 'success' && (
              <div className="rs-upload-msg rs-upload-msg--success">
                <CheckCircle2 size={16} />
                <span>Upload complete</span>
              </div>
            )}

            {upload.status === 'error' && (
              <div className="rs-upload-msg rs-upload-msg--error">
                <AlertCircle size={16} />
                <span>{upload.errorMsg || 'Upload failed'}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
