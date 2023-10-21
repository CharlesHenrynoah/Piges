// Piges/piges/src/classes/utilisateurs.js
export class Utilisateur {
  constructor(id, prenom, nom, mail, mots_de_passe, photo, tarif_spot_ids, annonceur_ids, piges_ids) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.mail = mail;
    this.mots_de_passe = mots_de_passe;
    this.photo = photo;
    this.tarif_spot_ids = tarif_spot_ids;
    this.annonceur_ids = annonceur_ids;
    this.piges_ids = piges_ids;
  }
}