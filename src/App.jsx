import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <>     
      <Header />
      <Navbar />
      <main className="pt-24"></main>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
