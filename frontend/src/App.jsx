import { useState } from 'react';
import Navbar from './components/Navbar';
import StudentPortal from './components/StudentPortal';
import LecturerPortal from './components/LecturerPortal';

function App() {
  const [role, setRole] = useState('student');

  const handleRoleToggle = () => {
    setRole((currentRole) => (currentRole === 'student' ? 'lecturer' : 'student'));
  };

  return (
    <div className="app-shell">
      <div className="device-frame">
        <Navbar role={role} onToggleRole={handleRoleToggle} />
        <div className="content-area">
          {role === 'student' ? <StudentPortal /> : <LecturerPortal />}
        </div>

        <footer className="portal-footer" aria-label="Current portal footer">
          <span className="portal-footer__item">
            {role === 'student' ? 'Student Portal' : 'Learning & Teaching'}
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
