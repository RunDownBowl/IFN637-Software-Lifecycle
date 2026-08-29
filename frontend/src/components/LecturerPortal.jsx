import { useState } from 'react';
import { assessmentOptions, submissions } from '../mockData';

function LecturerPortal() {
  const [selectedAssessment, setSelectedAssessment] = useState(assessmentOptions[0]);

  const isEmptyState = selectedAssessment === 'Assessment 2 - Final Project (Not Started)';
  const activeSubmissions = isEmptyState ? [] : submissions;
  const pendingCount = 48 - activeSubmissions.length;

  return (
    <main className="lecturer-shell">
      <header className="lecturer-header">
        <div className="lecturer-header__title-block">
          <span className="eyebrow">Assessment Portal • IFN636</span>
          <h1>IFN636 Class Submission Register</h1>
        </div>

        <div className="lecturer-header__actions">
          <select
            className="assessment-select"
            value={selectedAssessment}
            onChange={(event) => setSelectedAssessment(event.target.value)}
          >
            {assessmentOptions.map((assessment) => (
              <option key={assessment} value={assessment}>
                {assessment}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="lecturer-status-row">
        <div className="status-card">
          <span className="status-card__label">Enrolled</span>
          <strong>48</strong>
        </div>
        <div className="status-card status-card--success">
          <span className="status-card__label">Submissions Received</span>
          <strong>{activeSubmissions.length}</strong>
        </div>
        <div className="status-card status-card--warning">
          <span className="status-card__label">Pending</span>
          <strong>{pendingCount}</strong>
        </div>
      </div>

      {!isEmptyState ? (
        <section className="table-panel">
          <div className="table-panel__head">
            <h2>Student Submissions</h2>
          </div>

          <table className="submission-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Submitted File</th>
                <th>File Size</th>
                <th>Submission Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeSubmissions.map((submission) => (
                <tr key={submission.studentId}>
                  <td>{submission.studentId}</td>
                  <td>{submission.studentName}</td>
                  <td>{submission.fileName}</td>
                  <td>{submission.fileSize}</td>
                  <td>{submission.submissionDate}</td>
                  <td>
                    <span className="table-status">Submitted</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-foot">
            <span>Page 1 of 8 • 36 total records</span>
          </div>
        </section>
      ) : (
        <section className="empty-panel">
          <div className="empty-panel__icon" aria-hidden="true">
            <span className="empty-panel__icon-inner">＋</span>
          </div>
          <h2>No Submissions Received Yet</h2>
          <p>No student files have been submitted for this assessment container. Submissions will appear here once received.</p>

        </section>
      )}

    </main>
  );
}

export default LecturerPortal;
