import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
        <h1>Connectez-vous</h1>
        <form>
            <input required type="text" placeholder="nom d'utilisateur" />
            <input required type="password" placeholder='Mot de passe' />
            <button>Connexion</button>
            <p>This is an error!</p>
            <span>Pas de compte? <Link to="/register">S'inscrire</Link></span>
        </form>
    </div>
  )
}

export default Login