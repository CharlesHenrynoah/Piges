import { useParams } from 'react-router-dom';
import React from 'react';
import Navbar from '../../molecules/nav/nav';

const Consmodpi = () => {
  const { prenom } = useParams();
  return (
    <div>
      <h1 style={{ marginLeft: '12%' }}>Bienvenue sur Consultation et Modification de piges {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Consmodpi;