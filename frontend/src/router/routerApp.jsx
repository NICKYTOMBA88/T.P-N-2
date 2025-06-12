import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home/Home';
import { Login } from '../views/login/login';
import { Register } from '../views/Register/Register';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>No se encontro la pagina</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
