// Piges/piges/src/App.js
import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./components/templates/testbdd";
import Login from "./components/templates/login/login";
import Info from "./components/templates/info/info";
import TestUI from './components/templates/testui';
import Activite from './components/templates/activite/activite';
import Creationtar from './components/templates/creatar/creatar';
import Consmodtar from './components/templates/consmodtar/consmodtar';
import Consmodan from './components/templates/consmodan/consmodan';
import Creationan from './components/templates/creatan/creatan';
import Creationpi from './components/templates/creatpi/creatpi';
import Consmodpi from './components/templates/consmodpi/consmodpi';
import { Utilisateur } from '../../piges/src/classes/utilisateurs'; // Import the Utilisateur class

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || new Utilisateur());

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/testui" element={<TestUI />} />
            <Route path="/info/:prenom" element={<Info />} />
            <Route path="/act/:prenom" element={<Activite />} />
            <Route path="/creatar/:prenom" element={<Creationtar />} />
            <Route path="/consmodtar/:prenom" element={<Consmodtar />} />
            <Route path="/creatan/:prenom" element={<Creationan />} />
            <Route path="/consmodtan/:prenom" element={<Consmodan />} />
            <Route path="/creatpi/:prenom" element={<Creationpi />} />
            <Route path="/consmodpi/:prenom" element={<Consmodpi />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;