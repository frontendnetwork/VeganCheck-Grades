import { React, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Legal from './components/Legal';
import Developers from './components/Developers';

function App() {
  useEffect(() => {
    document.title = 'VeganCheck Grades';
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#F6E6D5");
    document.querySelector("meta[name=description]").setAttribute("content", "VeganCheck Grades gets you actual useful product ratings for vegan products.");
}, []);
  return (
    <>
    <Helmet>
        <title>VeganCheck Grades</title>
        <meta name="description" content="VeganCheck Grades are actual useful product ratings for vegan products." />
        <meta name="theme-color" content="#F6E6D5" />
      </Helmet>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="legal" element={<Legal />} />
        <Route path="developers" element={<Developers />} />
      </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
