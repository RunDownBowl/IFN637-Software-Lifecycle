import { useMemo, useState } from 'react';
import { assessments, enrolledCount, submissions } from '../mockData';

const filterLabels = ['all', 'submitted', 'pending'];

function LecturerPortal() {
  const [selectedAssessmentId, setSelectedAssessmentId] = useState(assessments[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const currentAssessment =
    assessments.find((assessment) => assessment.id === selectedAssessmentId) ?? assessments[0];

  const activeSubmissions = useMemo(
    () =>
      submissions.filter(
        (submission) =>
          submission.assessmentId === selectedAssessmentId &&
          submission.status.toLowerCase() === 'submitted',
      ),
    [selectedAssessmentId],
  );

  const filteredRows = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return activeSubmissions.filter((submission) => {
      const matchesSearch =
        !query ||
        submission.studentId.toLowerCase().includes(query) ||
        submission.studentName.toLowerCase().includes(query);

      const matchesFilter =
        selectedFilter === 'all' ||
        (selectedFilter === 'submitted' && submission.status === 'Submitted') ||
        (selectedFilter === 'pending' && submission.status === 'Pending');

      return matchesSearch && matchesFilter;
    });
  }, [activeSubmissions, searchTerm, selectedFilter]);

  const isEmptyState = !currentAssessment.windowOpen;
  const metricSubmissionTotal = isEmptyState ? 0 : 36;
  const pendingCount = isEmptyState ? enrolledCount : 12;
  const totalRecords = isEmptyState ? 0 : 36;

  const downloadCsv = () => {
    if (!filteredRows.length) {
      return;
    }

    const header = ['Student ID', 'Student Name', 'Submitted File', 'File Size', 'Submission Date', 'Status'];
    const csvRows = filteredRows.map((submission) => [
      submission.studentId,
      submission.studentName,
      submission.fileName,
      submission.fileSize,
      submission.submissionDate,
      submission.status,
    ]);

    const csvContent = [header, ...csvRows]
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(','),
      )
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${currentAssessment.id.toLowerCase()}-submissions.csv`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="lecturer-shell">
      <header className="lecturer-header">
        <div className="lecturer-header__title-block">
          <span className="eyebrow">Assessment Review Portal &gt; IFN636</span>
          <h1>IFN636 Class Submission Register</h1>
        </div>

        <div className="lecturer-header__actions">
          <select
            className="assessment-select"
            value={selectedAssessmentId}
            onChange={(event) => {
              setSelectedAssessmentId(event.target.value);
              setSearchTerm('');
              setSelectedFilter('all');
            }}
          >
            {assessments.map((assessment) => (
              <option key={assessment.id} value={assessment.id}>
                {assessment.label}
              </option>
            ))}
          </select>

          {!isEmptyState && (
            <div className="search-input-wrap lecturer-search">
              <span className="search-input-wrap__icon" aria-hidden="true">
                ⌕
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search student..."
                aria-label="Search student submissions"
              />
            </div>
          )}

          <button type="button" className="export-button" onClick={downloadCsv}>
            <span className="export-button__icon" aria-hidden="true">
              ↓
            </span>
            Export CSV
          </button>
        </div>
      </header>

      <div className="lecturer-status-bar">
        <div className="status-summary">
          {isEmptyState ? (
            'Assessment window has not yet opened.'
          ) : (
            `Showing ${filteredRows.length} of ${totalRecords} submissions · Last updated today at 14:32`
          )}
        </div>

        <div className={`window-status ${isEmptyState ? 'window-status--closed' : 'window-status--open'}`}>
          <span className="window-status__dot" aria-hidden="true" />
          {isEmptyState ? 'Submission window closed' : 'Submission window open'}
        </div>
      </div>

      <div className="lecturer-status-row">
        <div className="status-card">
          <span className="status-card__label">
            <span className="status-card__icon" aria-hidden="true">
              👥
            </span>
            Enrolled
          </span>
          <strong>{enrolledCount}</strong>
        </div>
        <div className="status-card status-card--success">
          <span className="status-card__label">
            <span className="status-card__icon" aria-hidden="true">
              📄
            </span>
            Submissions Received
          </span>
          <strong>{metricSubmissionTotal}</strong>
        </div>
        <div className="status-card status-card--warning">
          <span className="status-card__label">
            <span className="status-card__icon" aria-hidden="true">
              ⏱
            </span>
            Pending
          </span>
          <strong>{pendingCount}</strong>
        </div>
      </div>

      {!isEmptyState ? (
        <section className="table-panel">
          <div className="table-panel__head">
            <h2>Student Submissions</h2>
          </div>

          <div className="table-shell">
            <div className="filter-tabs" role="tablist" aria-label="Submission filters">
              {filterLabels.map((filterKey) => {
                const label =
                  filterKey === 'all' ? 'All' : filterKey === 'submitted' ? 'Submitted' : 'Pending';

                return (
                  <button
                    key={filterKey}
                    type="button"
                    className={`filter-tab ${selectedFilter === filterKey ? 'is-active' : ''}`}
                    onClick={() => setSelectedFilter(filterKey)}
                    aria-pressed={selectedFilter === filterKey}
                  >
                    {label}
                  </button>
                );
              })}
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
                {filteredRows.length ? (
                  filteredRows.map((submission) => (
                    <tr key={submission.id}>
                      <td>
                        <button type="button" className="student-id-link">
                          {submission.studentId}
                        </button>
                      </td>
                      <td>{submission.studentName}</td>
                      <td>
                        <span className="submission-file">
                          <span className="submission-file__icon" aria-hidden="true">
                            📄
                          </span>
                          {submission.fileName}
                        </span>
                      </td>
                      <td>{submission.fileSize}</td>
                      <td>{submission.submissionDate}</td>
                      <td>
                        <span className="table-status">Submitted</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="submission-table__empty">
                      No matching submissions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="table-foot">
              <span>
                Page 1 of 8 · {totalRecords} total records
              </span>
              <div className="pagination" aria-label="Pagination">
                <button type="button" className="pagination__button" aria-label="Previous page">
                  Prev
                </button>
                <button type="button" className="pagination__button is-current" aria-current="page">
                  1
                </button>
                <button type="button" className="pagination__button">
                  2
                </button>
                <button type="button" className="pagination__button">
                  3
                </button>
                <button type="button" className="pagination__button" aria-label="Next page">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="empty-panel">
          <div className="empty-panel__card">
            <div className="empty-panel__icon" aria-hidden="true">
              <div className="empty-panel__icon-inner">
                <span className="inbox-icon">
                  ▣
                </span>
              </div>
            </div>

            <h2>No Submissions Received Yet</h2>
            <p>
              No student files have been submitted for this assessment container. Submissions will
              appear here once received.
            </p>

            <div className="empty-panel__actions">
              <button type="button" className="panel-button panel-button--outline">
                Configure Assessment
              </button>
              <button type="button" className="panel-button panel-button--dark">
                Notify Students
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default LecturerPortal;
