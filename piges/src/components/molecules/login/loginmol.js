// Piges/piges/src/components/molecules/login/loginmol.js
import React, { useState, useContext } from 'react'; // Ajoutez useContext
import { loginUser } from '../../../middleware/loginmid';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App'; // Importez UserContext

const LoginMolecule = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Obtenez setUser du contexte

  const handleLogin = async (e) => {
    e.preventDefault();

    // Appeler la fonction loginUser de votre middleware avec l'email et le mot de passe
    const user = await loginUser(email, password);

    // Si l'utilisateur est reconnu, rediriger vers la page Info
    // Si l'utilisateur est reconnu, rediriger vers la page Info avec le prénom de l'utilisateur dans l'URL
    if (user) {
      setUser(user); // Mettez à jour l'utilisateur dans le contexte
      navigate(`/info/${user.prenom}`);
    }
    console.log(user)
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginMolecule;