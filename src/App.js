import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import NewsPage from './pages/NewsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Get the basename from the package.json homepage field or default to '/'
  const basename = process.env.PUBLIC_URL || '/';
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
