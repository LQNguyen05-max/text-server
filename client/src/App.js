import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar authState={authState} setAuthState={setAuthState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route
            path="/login"
            element={<Login setAuthState={setAuthState} />}
          />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
