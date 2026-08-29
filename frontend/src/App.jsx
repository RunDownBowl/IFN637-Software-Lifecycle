import { useState } from 'react';
import Navbar from './components/Navbar';
import RoleSelection from './components/RoleSelection';
import StudentPortal from './components/StudentPortal';
import LecturerPortal from './components/LecturerPortal';

function App() {
  const [role, setRole] = useState(null);

  if (role === null) {
    return <RoleSelection onSelectRole={setRole} />;
  }

  const handleResetRole = () => {
    setRole(null);
  };

  return (
    <div className="app-shell">
      <Navbar role={role} onChangeRole={handleResetRole} />
      <div className="content-area">
        {role === 'student' ? <StudentPortal /> : <LecturerPortal />}
      </div>

      <footer className="portal-footer" aria-label="Current portal footer">
        <span className="portal-footer__item">
          {role === 'student' ? 'Student Portal' : 'Learning & Teaching'}
        </span>
      </footer>
    </div>
  );
}

export default App;
