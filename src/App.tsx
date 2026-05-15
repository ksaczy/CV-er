import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Builder from './pages/Builder';
import FullPreview from './pages/FullPreview';
import Navbar from './components/layout/Navbar';   // ← nowy import

function App() {
    return (
<div className="app">
  <Navbar />

  <div className="app-body">
    <Routes>
      <Route path="/" element={<Builder />} />
      <Route path="/preview" element={<FullPreview />} />
    </Routes>
  </div>
</div>
    );
}

export default App;
