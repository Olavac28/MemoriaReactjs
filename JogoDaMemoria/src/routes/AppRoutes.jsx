import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from '../pages/Menu';
import Memoria from '../pages/Memoria';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Menu />} />

        <Route path='/memoria' element={<Memoria />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;