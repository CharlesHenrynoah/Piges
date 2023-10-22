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

// Piges/piges/src/App.js
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || new Utilisateur());

  useEffect(() => {
    // Récupération de l'utilisateur stocké dans le localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    // Vérification de la validité de l'utilisateur stocké
    if (!storedUser || Object.keys(storedUser).length === 0) {
      // Création d'un utilisateur par défaut
      const defaultUser = new Utilisateur(
        null,  // id
        "Default",  // prenom
        "User",  // nom
        "default@email.com",  // mail
        "password",  // mots_de_passe
        "default_photo_url",  // photo
        [],  // tarif_spot_ids
        [],  // annonceur_ids
        []  // piges_ids
      );
  
      // Mise à jour du localStorage avec l'utilisateur par défaut
      localStorage.setItem('user', JSON.stringify(defaultUser));
  
      // Mise à jour de l'état de l'application avec l'utilisateur par défaut
      setUser(defaultUser);
    } else {
      // Utilisation de l'utilisateur stocké si valide
      setUser(storedUser);
    }
  
    // Affichage du contenu actuel du localStorage pour le débogage
    console.log("Contenu du localStorage :", JSON.stringify(localStorage.getItem('user')));
  }, []);

  // Ajoutez cet effet pour mettre à jour le localStorage chaque fois que l'utilisateur change
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
;
  

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
