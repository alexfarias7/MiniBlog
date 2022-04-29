//* REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//* COMPONENTS
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import About from '../../components/pages/About/inde';
import Home from '../../components/pages/Home';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';
//* STYLED COMPONENTS
import * as Styled from './styles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Styled.Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Styled.Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
