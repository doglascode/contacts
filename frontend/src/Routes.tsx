import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import EditContact from './pages/EditContact';
import CreateContact from './pages/CreateContact';

export default function ContactsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novo-contato" element={<CreateContact />} />
      <Route path="/editar/:id" element={<EditContact />} />
    </Routes>
  );
}
