import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Design from './pages/Design';
import History from './pages/History';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-gray-400 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/QR-Code_Designer" element={<Home />} />
            <Route path="/QR-Code_Designer/design" element={<Design />} />
            <Route path="/QR-Code_Designer/history" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}