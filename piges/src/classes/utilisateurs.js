// Piges/piges/src/classes/utilisateurs.js

export class Utilisateur {
  constructor(id = null, prenom = "Default", nom = "User", mail = "", mots_de_passe = "", photo = "", tarif_spot_ids = [], annonceur_ids = [], piges_ids = []) {
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

  // Méthode pour initialiser un utilisateur à partir du localStorage
  static fromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('user'));
    if (storedData) {
      return new Utilisateur(
        storedData.id,
        storedData.prenom,
        storedData.nom,
        storedData.mail,
        storedData.mots_de_passe,
        storedData.photo,
        storedData.tarif_spot_ids,
        storedData.annonceur_ids,
        storedData.piges_ids
      );
    } else {
      return new Utilisateur();
    }
  }

  // Méthode pour sauvegarder l'utilisateur dans le localStorage
  saveToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this));
  }
}
