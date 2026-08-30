import { useState } from 'react';
import { assignment } from '../mockData';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function StudentPortal() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('pending');

  const handleFileValidation = (selectedFile) => {
    if (!selectedFile) {
      setError('No file selected. Please choose a PDF file under 10 MB.');
      setFile(null);
      setSubmissionStatus('pending');
      return false;
    }

    const fileName = selectedFile.name || 'Selected file';
    const fileType = (selectedFile.type || '').toLowerCase();
    const hasPdfExtension = fileName.toLowerCase().endsWith('.pdf');
    const hasPdfMimeType = fileType === 'application/pdf' || fileType === 'application/x-pdf' || fileType === '';
    const isPdf = hasPdfExtension && hasPdfMimeType;
    const isUnderLimit = selectedFile.size <= MAX_FILE_SIZE;

    if (!isPdf || !isUnderLimit) {
      const issues = [];

      if (!hasPdfExtension || !hasPdfMimeType) {
        issues.push('Only PDF files with a .pdf extension and application/pdf MIME type are accepted.');
      }

      if (!isUnderLimit) {
        issues.push('File must be under 10 MB.');
      }

      setError(`Selected file "${fileName}" is invalid. ${issues.join(' ')}`);
      setFile(null);
      setSubmissionStatus('pending');
      return false;
    }

    setError('');
    setFile(selectedFile);
    setSubmissionStatus('pending');
    return true;
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    handleFileValidation(selectedFile);
  };

  const handleSubmit = () => {
    if (!file) {
      return;
    }

    setSubmissionStatus('submitted');
  };

  const statusLabel = submissionStatus === 'submitted' ? 'Submitted' : 'Pending';
  const statusClass = submissionStatus === 'submitted' ? 'status-pill--success' : 'status-pill--neutral';

  const timestamp = submissionStatus === 'submitted' && file
    ? new Date().toLocaleString('en-AU', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Australia/Brisbane',
      })
    : '';

  return (
    <main className="portal-layout">
      <div className="portal-breadcrumb">
        <span>Student Portal</span>
        <span className="breadcrumb__divider">›</span>
        <span>IFN636</span>
        <span className="breadcrumb__divider">›</span>
        <span>Assessment 1</span>
      </div>

      <h1 className="page-title">Assessment Submission</h1>
      <p className="page-subtitle">
        IFN636 • Advanced Requirements Engineering • Semester 2, 2026
      </p>

      <div className="portal-grid">
        <section className="card assignment-card">
          <div className="assignment-card__header">
            <span className="assignment-card__tag">Assessment 1 • IFN636</span>
            <h2>{assignment.title}</h2>
          </div>

          <div className="info-grid">
            <div className="info-grid__item">
              <span className="label">Due Date</span>
              <strong>{assignment.dueDate}</strong>
            </div>
            <div className="info-grid__item">
              <span className="label">Weighting</span>
              <strong>{assignment.weighting}</strong>
            </div>
            <div className="info-grid__item">
              <span className="label">Status</span>
              <span className={`status-pill ${statusClass}`}>
                <span className="status-dot" aria-hidden="true"></span>
                {statusLabel}
              </span>
            </div>
          </div>

          <p className="assignment-description">{assignment.description}</p>
          <span className="link-text">Assessment rubric provided in class materials</span>
        </section>

        <section className="card submit-card">
          <h3>Submit Assignment</h3>
          <p className="tiny-copy">Upload your completed PDF report below.</p>

          {error && (
            <div className="validation-banner" role="alert">
              <span className="validation-banner__icon" aria-hidden="true">✓</span>
              <span>{error}</span>
            </div>
          )}

          {!error && file && submissionStatus !== 'submitted' && (
            <div className="success-banner" role="status">
              <span className="success-banner__icon" aria-hidden="true">✓</span>
              <span>File ready to submit: {file.name}</span>
            </div>
          )}

          <label
            className={`dropzone ${error ? 'dropzone--invalid' : ''}`}
            htmlFor="assignment-upload"
          >
            <input
              id="assignment-upload"
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
            />
            <div className="dropzone__content">
              <span className="dropzone__icon" aria-hidden="true">
                ⤴
              </span>
              <span className="dropzone__message">
                Drag and drop your PDF here
                <br />
                or browse to select a file
              </span>
            </div>
          </label>

          {submissionStatus === 'submitted' ? (
            <div className="locked-message">
              <span className="locked-message__icon">✓</span>
              Submission Received
            </div>
          ) : (
            <button
              type="button"
              className="primary-button"
              disabled={!file}
              onClick={handleSubmit}
            >
              Submit Assignment
            </button>
          )}

          <p className="bottom-note">
            This is a simulated prototype. No files are transmitted or stored. Validation runs locally in your browser only.
          </p>
        </section>
      </div>

    </main>
  );
}

export default StudentPortal;
