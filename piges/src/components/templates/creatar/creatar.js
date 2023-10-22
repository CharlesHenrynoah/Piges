// Piges/piges/src/components/templates/creatar/creatar.js
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import CrearTar from '../../molecules/creatar/creatar'; // Importez le composant CrearTar
import { useParams } from 'react-router-dom';

const Creationtar = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1 style={{ marginLeft: '12%' }}>Bienvenue sur Creation de Tarif {prenom}</h1> {/* Ajoutez du style à votre titre */}
      <Navbar />
      <CrearTar /> {/* Ajoutez le composant CrearTar à votre JSX */}
    </div>
  );
};

export default Creationtar;