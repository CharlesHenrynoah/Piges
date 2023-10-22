
import React from 'react';
import Navbar from '../../molecules/nav/nav';
import { useParams } from 'react-router-dom';



const Activite = () => {
  const { prenom } = useParams();

  return (
    <div>
      <h1 style={{ marginLeft: '12%' }}>Bienvenue sur Activite {prenom}</h1>
      <Navbar />
    </div>
  );
};

export default Activite;