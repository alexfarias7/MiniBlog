//* REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//* FIREBASE
import { onAuthStateChanged } from 'firebase/auth';
//* HOOKS
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthetication';
//* COMPONENTS
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import About from '../../components/pages/About/inde';
import Home from '../../components/pages/Home';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';
import Search from '../../components/pages/Search';
//* STYLED COMPONENTS
import * as Styled from './styles';
//* CONTEXT
import { AuthProvider } from '../../context/AuthContext';
import CreatePost from '../../components/pages/Createpost';
import Dashboard from '../../components/pages/Dashboard';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) return <p>carregando...</p>;
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Styled.Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </Styled.Container>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
