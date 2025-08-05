import React from 'react';
import './index.css';
import Mousetrail from './components/Mousetrail';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';





/**
 * The main app component, which composes all the different pages and
 * components. It renders a header, a navbar, a main content area, and a
 * footer.
 */
function App() {
  return (
    <>
      <Mousetrail />
      <Navbar />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
