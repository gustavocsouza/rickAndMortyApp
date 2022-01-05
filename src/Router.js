import { Route, Routes } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharacterPage />} />
    </Routes>
  );
}
