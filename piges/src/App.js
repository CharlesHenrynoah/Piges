// Piges/piges/src/App.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import Test from "./components/templates/testbdd";
import Login from "./components/templates/login/login";
import Info from "./components/templates/info/info";
import TestUI from './components/templates/testui';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info/:prenom" element={<Info />} /> {/* Nouvelle route pour le composant Info */}
          <Route path="/testui" element={<TestUI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;