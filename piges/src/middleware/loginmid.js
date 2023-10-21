// Piges/piges/src/middleware/loginmid.js
import supabase from '../database/supabase';
import { Utilisateur } from '../classes/utilisateurs';

export const loginUser = async (email, password) => {
  // Requête à Supabase pour vérifier si l'utilisateur existe
  const { data, error } = await supabase
    .from('utilisateurs')
    .select('*')
    .eq('mail', email)
    .eq('mots_de_passe', password);

  if (error) {
    console.log('Erreur lors de la connexion à Supabase: ' + error.message);
    return null;
  } else if (data.length === 0) {
    console.log('Aucun utilisateur trouvé avec cet email et ce mot de passe');
    return null;
  } else {
    // Si l'utilisateur existe, créer une nouvelle instance de Utilisateur
    const user = data[0];
    return new Utilisateur(user.id, user.prenom, user.nom, user.mail, user.mots_de_passe, user.photo, user.tarif_spot_ids, user.annonceur_ids, user.piges_ids);
  }
};