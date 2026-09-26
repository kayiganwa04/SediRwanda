import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Education from './pages/Education';
import Health from './pages/Health';
import Sports from './pages/Sports';
import Cooperative from './pages/Cooperative';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Fundraise from './pages/Fundraise';
import Campaigns from './pages/Campaigns';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Team />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health-and-sanitation" element={<Health />} />
        <Route path="/social-economic-integration" element={<Cooperative />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fundraising" element={<Fundraise />} />
        <Route path="/compaign" element={<Campaigns />} />
        <Route path="/campaigns" element={<Navigate to="/compaign" replace />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
