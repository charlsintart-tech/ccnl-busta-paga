import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Stipendi from './pages/Stipendi';
import IndennitaVolo from './pages/IndennitaVolo';
import IndennitaRimborsi from './pages/IndennitaRimborsi';
import Straordinari from './pages/Straordinari';
import Contributi from './pages/Contributi';
import Assicurazioni from './pages/Assicurazioni';
import Documento from './pages/Documento';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stipendi" element={<Stipendi />} />
          <Route path="/indennita-volo" element={<IndennitaVolo />} />
          <Route path="/indennita-rimborsi" element={<IndennitaRimborsi />} />
          <Route path="/straordinari" element={<Straordinari />} />
          <Route path="/contributi" element={<Contributi />} />
          <Route path="/assicurazioni" element={<Assicurazioni />} />
          <Route path="/documento" element={<Documento />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
