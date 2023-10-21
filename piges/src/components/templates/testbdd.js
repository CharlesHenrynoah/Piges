import React, { useEffect, useState } from 'react';
import supabase from '../../database/supabase';

const Test = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const { error } = await supabase.from('utilisateurs').select('prenom');

      if (error) {
        setMessage('Erreur lors de la connexion à Supabase: ' + error.message);
      } else {
        setMessage('Connecté à Supabase avec succès');
      }
    };
    
    checkConnection();
  }, []);

  return (
    <div>
      <h1>Votre application</h1>
      <p>{message}</p>
    </div>
  );
};

export default Test;