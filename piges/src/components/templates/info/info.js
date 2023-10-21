// Piges/piges/src/components/templates/info/info.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { prenom } = useParams();
  return (
    <div>
      <h1>Infos</h1>
      <p>Hello {`${prenom}`}</p>
    </div>
  );
};

export default Info;