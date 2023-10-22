
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Creationtar = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1>Bienvenue sur Creation de Tarif {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Creationtar;