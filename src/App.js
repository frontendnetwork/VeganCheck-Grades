import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Legal from './components/Legal';

function App() {
  useEffect(() => {
    document.title = 'VeganCheck Grades';
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#F6E6D5");
    document.querySelector("meta[name=description]").setAttribute("content", "VeganCheck Grades gets you actual useful product ratings for vegan products.");
}, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="legal" element={<Legal />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
