import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import LiveFeed from './LiveFeed';
import UploadImage from './UploadImage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/upload-image" element={<UploadImage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
