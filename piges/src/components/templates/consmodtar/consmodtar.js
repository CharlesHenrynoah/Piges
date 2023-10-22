
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Consmodtar = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1>Bienvenue sur Consultation et Modification de Tarif {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Consmodtar;