
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Creationpi = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1>Bienvenue sur Création de piges {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Creationpi;