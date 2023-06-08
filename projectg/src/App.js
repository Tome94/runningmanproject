//import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage'
import Instructions from './pages/how-to-play';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './pages/Body';
import Team from './pages/local';
import Game from './pages/game';

function App() {
  return (
    <Router>
      <header>
        <h1>Project running man </h1>
      </header>
      <Body />
      <main>
        <Routes>
          <Route path="/game" element={<Game/>} />
        <Route path="/local" element={<Team/>} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="/:type?" element={<Homepage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
