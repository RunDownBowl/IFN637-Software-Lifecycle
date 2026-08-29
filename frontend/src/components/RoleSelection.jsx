function RoleSelection({ onSelectRole }) {
  const handleSelect = (role) => {
    onSelectRole(role);
  };

  return (
    <div className="role-selection-page">
      <div className="role-selection-banner" role="note">
        <span className="role-selection-banner__icon" aria-hidden="true">
          ✓
        </span>
        <span>Demonstration Prototype: Validates PDF files locally in browser and simulates submission. No database or account persistence.</span>
      </div>

      <header className="role-selection-headerbar">
        <div className="role-selection-brand">
          <span className="role-selection-brand__icon" aria-hidden="true">
            ◫
          </span>
          <span>QUT Submission Portal</span>
        </div>

        <button type="button" className="role-selection-about">
          About Prototype
        </button>
      </header>

      <main className="role-selection-main">
        <div className="role-selection-stage">
          <div className="role-selection-badge">● 2026 ACADEMIC YEAR</div>

          <h1 className="role-selection-title">Select Your Role to Continue</h1>
          <p className="role-selection-subtitle">
            Access student submission tools or lecturer grading registers
          </p>

          <div className="role-card-grid">
            <article className="role-card role-card--student">
              <div className="role-card__icon role-card__icon--student" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <path d="M14 26.5 32 17l18 9.5-18 9.5L14 26.5Zm18 12.1v10.9M21 31.5v9.6c0 2.1 5.1 4 11 4s11-1.9 11-4v-9.6" />
                </svg>
              </div>

              <h2>Student Portal</h2>
              <p>
                Inspect assignment briefs, validate local PDF reports (max 10 MB), and simulate homework
                submissions.
              </p>

              <div className="role-card__badges">
                <span>PDF Validation</span>
                <span>10 MB Limit</span>
                <span>Local Only</span>
              </div>

              <button type="button" className="role-card__action role-card__action--student" onClick={() => handleSelect('student')}>
                Enter as Student <span aria-hidden="true">→</span>
              </button>
            </article>

            <div className="role-card-divider" aria-hidden="true" />

            <article className="role-card role-card--lecturer">
              <div className="role-card__icon role-card__icon--lecturer" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <rect x="12" y="14" width="40" height="30" rx="4" />
                  <path d="M18 46h28" />
                  <path d="M24 46v6h16v-6" />
                  <path d="M18 20h28" />
                  <path d="M20 26h24" />
                </svg>
              </div>

              <h2>Lecturer Portal</h2>
              <p>
                Review enrolled student submission lists, inspect timestamps, and view empty submission states.
              </p>

              <div className="role-card__badges">
                <span>Read-Only View</span>
                <span>Submission Logs</span>
                <span>Simulated</span>
              </div>

              <button type="button" className="role-card__action role-card__action--lecturer" onClick={() => handleSelect('lecturer')}>
                Enter as Lecturer <span aria-hidden="true">→</span>
              </button>
            </article>
          </div>

          <div className="role-selection-meta" aria-label="Prototype notes">
            <div className="role-selection-meta__item role-selection-meta__item--green">
              <span className="meta-dot" aria-hidden="true" />
              No sign-in required
            </div>
            <div className="role-selection-meta__item role-selection-meta__item--blue">
              <span className="meta-dot" aria-hidden="true" />
              All data stays in browser
            </div>
            <div className="role-selection-meta__item role-selection-meta__item--amber">
              <span className="meta-dot" aria-hidden="true" />
              Prototype use only
            </div>
          </div>
        </div>
      </main>

      <footer className="role-selection-footer">
        <span>© 2026 QUT Submission Portal — Demonstration Prototype</span>
        <nav className="role-selection-footer__links" aria-label="Footer links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
}

export default RoleSelection;
