// Piges/piges/src/components/atoms/boutonplus.js
import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const BoutonPlus = (props) => { // Ajoutez props comme argument
  return (
    <Fab color="primary" aria-label="add" style={{ marginLeft: '92%', marginTop: '-5%', backgroundColor: 'green' }} {...props}> 
      {/* Propagez les props sur le composant Fab */}
      <AddIcon />
    </Fab>
  );
};

export default BoutonPlus;