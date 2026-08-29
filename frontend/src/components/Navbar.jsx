function Navbar({ role, onChangeRole }) {
  const isStudent = role === 'student';

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="brand__icon" aria-hidden="true">
          ◫
        </span>
        <span>{isStudent ? 'QUT Student Portal' : 'QUT Learning & Teaching'}</span>
      </div>

      <div className="navbar__meta">
        <div className="navbar__breadcrumb">
          <span>{isStudent ? 'Student Portal' : 'Learning & Teaching'}</span>
          <span className="breadcrumb__divider">›</span>
          <span>IFN636</span>
          <span className="breadcrumb__divider">›</span>
          <span>Assessment 1</span>
        </div>

        <button className="navbar__toggle" type="button" onClick={onChangeRole}>
          Change Role
        </button>
      </div>
    </header>
  );
}

export default Navbar;
