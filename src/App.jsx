import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Sponsorship from './pages/Sponsorship';
import Support from './pages/Support';
import SupportSWESponsorship from './pages/SupportSWESponsorship';
import SupportSWEDonate from './pages/SupportSWEDonate';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support-swe/sponsorship" element={<SupportSWESponsorship />} />
          <Route path="/support-swe/donate" element={<SupportSWEDonate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
