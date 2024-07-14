import './App.css';
import React from 'react';
import Forum from './components/Forum';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import AnotherForum from './components/AnotherForum';
import { Routes, Route } from 'react-router-dom';
import Voirendetail from './components/Voirendetail';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Forum />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/another-forum" element={<AnotherForum />} />
        <Route path="/Voirendetail/:id" element={<Voirendetail/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
