import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ authState, setAuthState }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    setAuthState(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/"> Go Home </Link>
      <Link to="/createpost"> Create A Post </Link>
      {!authState ? (
        <>
          <Link to="/registration" className="register-link">
            Register
          </Link>
          <Link to="/login" className="login-link">
            Log In
          </Link>
        </>
      ) : (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
