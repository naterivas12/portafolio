import { BrowserRouter as Router } from 'react-router-dom';
import {About, Contact, Hero, Navbar, Works } from "./components";
import './App.scss';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='app'>
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Portfolio />
      <Contact />
    </Router>
    </div>
  );
}

export default App;
