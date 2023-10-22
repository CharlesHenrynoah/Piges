
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Creationan = () => {
  const { prenom } = useParams()

  return (
    <div>
      <h1>Bienvenue sur Creation d'Annonceur {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Creationan;