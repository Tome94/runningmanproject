//import logo from './logo.svg';
import './App.css';
import Navigation from './pages/Navigation'
import Instructions from './pages/how-to-play';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './pages/local';
import Game from './pages/game';
import Draw from './pages/canvas/index';
import About from './pages/about/about';

function App() {
  return (
    <Router>
      <header>
        <h1>Project running man </h1>
      </header>
      <Navigation/>
      <main>
        <Routes>
          <Route path="/draw" element={<Draw/>} />
          <Route path="/game" element={<Game/>} />
        <Route path="/local" element={<Team/>} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="/:type?" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
