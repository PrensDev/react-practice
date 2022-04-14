import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'

// Layouts
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';

// Pages
import Home from './pages/Home';
import Resume from './pages/resume/Resume';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </>
    );
  }
}

export default App;
