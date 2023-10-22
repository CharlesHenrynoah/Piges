
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Consmodan = () => {
  const { prenom } = useParams();
  return (
    <div>
      <h1>Bienvenue sur Consultation et Modification d'Annonceur {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Consmodan;