// Piges/piges/src/components/templates/info/info.js
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1 style={{ marginLeft: '12%' }}>Bienvenue sur Informations {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Info;