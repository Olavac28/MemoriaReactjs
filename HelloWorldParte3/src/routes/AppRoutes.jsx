import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} /> {/*página inicial*/}

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/contato" element={<Contato />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;