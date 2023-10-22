// Piges/piges/src/components/molecules/creatar/creatar.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import BoutonPlus from '../../atoms/boutonplus';
import NomTableauTar from '../../atoms/tabname'; // Importez l'atome NomTableauTar

const CrearTar = () => {
  const { user } = useContext(UserContext);
  const [showTableau, setShowTableau] = useState(false); // Ajoutez un état pour contrôler l'affichage du tableau

  const handleClick = () => {
    setShowTableau(prevShowTableau => !prevShowTableau); // Inverse l'étatctuel de show aundefinedableau
  };

  return (
    <div>
      <BoutonPlus onClick={handleClick} /> {/* Ajoutez un gestionnaire de clic au bouton */}
      {showTableau && <NomTableauTar />} {/* Affichez le tableau seulement si showTableau est vrai */}
    </div>
  );
};

export default CrearTar;